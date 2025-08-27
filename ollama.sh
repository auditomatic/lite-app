#!/bin/sh
# This script installs Ollama on macOS and configures it for Auditomatic Lite
# Based on the official Ollama install script but adds OLLAMA_ORIGINS configuration

set -eu

red="$( (/usr/bin/tput bold || :; /usr/bin/tput setaf 1 || :) 2>&-)"
green="$( (/usr/bin/tput bold || :; /usr/bin/tput setaf 2 || :) 2>&-)"
plain="$( (/usr/bin/tput sgr0 || :) 2>&-)"

status() { echo ">>> $*" >&2; }
success() { echo "${green}SUCCESS:${plain} $*"; }
error() { echo "${red}ERROR:${plain} $*"; exit 1; }
warning() { echo "${red}WARNING:${plain} $*"; }

# Check if running on macOS
[ "$(uname -s)" = "Darwin" ] || error 'This script is intended to run on macOS only.'

# Check if Ollama is already installed
if command -v ollama >/dev/null 2>&1; then
    status "Ollama is already installed at $(which ollama)"
    EXISTING_VERSION=$(ollama --version 2>/dev/null || echo "unknown")
    status "Current version: $EXISTING_VERSION"
else
    status "Ollama not found. Installing..."
    
    # Download and install Ollama for macOS
    status "Downloading Ollama for macOS..."
    
    # Create temporary directory
    TEMP_DIR=$(mktemp -d)
    trap "rm -rf $TEMP_DIR" EXIT
    
    # Download the Ollama macOS app
    status "Downloading Ollama (this may take a minute)..."
    if ! curl -fL -o "$TEMP_DIR/Ollama.zip" "https://ollama.com/download/Ollama-darwin.zip"; then
        error "Failed to download Ollama. Please check your internet connection and try again."
    fi
    
    status "Extracting Ollama..."
    cd "$TEMP_DIR"
    if ! unzip -q Ollama.zip; then
        error "Failed to extract Ollama.zip"
    fi
    
    status "Installing Ollama to /Applications..."
    # Remove old version if exists
    [ -d "/Applications/Ollama.app" ] && rm -rf "/Applications/Ollama.app"
    
    # Move to Applications
    mv Ollama.app /Applications/
    
    # Create symlink for CLI
    status "Creating command line tool..."
    ln -sf /Applications/Ollama.app/Contents/MacOS/ollama /usr/local/bin/ollama 2>/dev/null || \
        sudo ln -sf /Applications/Ollama.app/Contents/MacOS/ollama /usr/local/bin/ollama
    
    success "Ollama installed successfully!"
fi

# Configure OLLAMA_ORIGINS for Auditomatic
status "Configuring Ollama for Auditomatic Lite..."

# Check if Ollama is running
if pgrep -x "ollama" > /dev/null; then
    status "Ollama is currently running. It will need to be restarted for changes to take effect."
    OLLAMA_RUNNING=true
else
    OLLAMA_RUNNING=false
fi

# Set OLLAMA_ORIGINS environment variable
AUDITOMATIC_ORIGINS="https://*.auditomatic.org,http://localhost:3000,http://localhost:5173,http://localhost:5174"

# For immediate use (until restart)
status "Setting OLLAMA_ORIGINS for current session..."
# Don't use sudo to avoid SIP issues
if ! launchctl setenv OLLAMA_ORIGINS "$AUDITOMATIC_ORIGINS" 2>/dev/null; then
    warning "Could not set environment variable for current session due to System Integrity Protection."
    warning "The configuration will take effect after restarting your Mac or Ollama."
fi

# Create launch agent for persistence
LAUNCH_AGENT_DIR="$HOME/Library/LaunchAgents"
LAUNCH_AGENT_FILE="$LAUNCH_AGENT_DIR/setenv.OLLAMA_ORIGINS.plist"

status "Creating persistent configuration..."
mkdir -p "$LAUNCH_AGENT_DIR"

# Remove old version if exists
if [ -f "$LAUNCH_AGENT_FILE" ]; then
    status "Removing existing configuration..."
    launchctl unload "$LAUNCH_AGENT_FILE" 2>/dev/null || true
    rm -f "$LAUNCH_AGENT_FILE"
fi

# Create the plist with proper formatting
cat > "$LAUNCH_AGENT_FILE" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>setenv.OLLAMA_ORIGINS</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/launchctl</string>
    <string>setenv</string>
    <string>OLLAMA_ORIGINS</string>
    <string>$AUDITOMATIC_ORIGINS</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
</dict>
</plist>
EOF

# Validate the plist
if ! plutil -lint "$LAUNCH_AGENT_FILE" >/dev/null 2>&1; then
    error "Invalid plist file created. Please check the configuration."
fi

# Load the launch agent
status "Loading launch agent..."
if launchctl load "$LAUNCH_AGENT_FILE" 2>&1 | grep -q "already loaded"; then
    warning "Launch agent was already loaded. Unloading and reloading..."
    launchctl unload "$LAUNCH_AGENT_FILE" 2>/dev/null || true
    sleep 1
    launchctl load "$LAUNCH_AGENT_FILE" 2>/dev/null || warning "Could not reload launch agent"
elif ! launchctl load "$LAUNCH_AGENT_FILE" 2>/dev/null; then
    warning "Could not load launch agent. This often happens due to macOS security restrictions."
    warning "Try logging out and back in, or restart your Mac."
fi

# Restart Ollama if it was running
if [ "$OLLAMA_RUNNING" = true ]; then
    status "Restarting Ollama..."
    killall ollama 2>/dev/null || true
    sleep 2
    open -a Ollama
fi

# Test the installation
status "Testing Ollama installation..."
# Use timeout to prevent hanging
if command -v timeout >/dev/null 2>&1; then
    if timeout 5 ollama list >/dev/null 2>&1; then
        success "Ollama is working correctly!"
    else
        warning "Ollama is not responding. Starting Ollama..."
        open -a Ollama 2>/dev/null || warning "Could not start Ollama automatically"
    fi
else
    # macOS might not have timeout command, use alternative
    if perl -e "alarm 5; exec @ARGV" ollama list >/dev/null 2>&1; then
        success "Ollama is working correctly!"
    else
        warning "Ollama is not responding. Starting Ollama..."
        open -a Ollama 2>/dev/null || warning "Could not start Ollama automatically"
    fi
fi

echo ""
success "Installation complete!"
echo ""
status "Ollama has been configured to accept connections from:"
echo "  - https://*.auditomatic.org (all subdomains)"
echo "  - http://localhost:3000 (development)"
echo "  - http://localhost:5173 (Vite dev server)"
echo "  - http://localhost:5174 (Vite dev server alternate)"
echo ""

# Check if we need a restart
if [ "$OLLAMA_RUNNING" = true ]; then
    warning "IMPORTANT: You need to restart Ollama for the changes to take effect."
    echo ""
    echo "Option 1: Quit Ollama from the menu bar and restart it"
    echo "Option 2: Run these commands:"
    echo "  killall Ollama"
    echo "  open -a Ollama"
else
    status "Starting Ollama with the new configuration..."
    open -a Ollama 2>/dev/null || warning "Please start Ollama manually"
fi

echo ""
status "To start using Ollama with Auditomatic Lite:"
echo "  1. Make sure Ollama is running (check menu bar)"
echo "  2. Pull a model: ollama pull llama3.2"
echo "  3. Visit https://lite.auditomatic.org and enable Ollama in settings"
echo ""

# Alternative approach for persistent environment
status "Note: Due to macOS security restrictions, you may need to set OLLAMA_ORIGINS manually."
echo "Add this line to your ~/.zshrc or ~/.bash_profile:"
echo "  export OLLAMA_ORIGINS=\"$AUDITOMATIC_ORIGINS\""
echo ""