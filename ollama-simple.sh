#!/bin/sh
# Simple Ollama CORS configuration for Auditomatic Lite
# This version uses ~/.ollama/config.json instead of environment variables

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

# Check if Ollama is installed
if ! command -v ollama >/dev/null 2>&1; then
    error "Ollama is not installed. Please install from https://ollama.com first."
fi

status "Configuring Ollama for Auditomatic Lite..."

# Create config directory
CONFIG_DIR="$HOME/.ollama"
CONFIG_FILE="$CONFIG_DIR/config.json"
mkdir -p "$CONFIG_DIR"

# Create or update config file
if [ -f "$CONFIG_FILE" ]; then
    status "Backing up existing config to $CONFIG_FILE.backup"
    cp "$CONFIG_FILE" "$CONFIG_FILE.backup"
fi

# Create or update the Ollama config
status "Writing Ollama configuration..."

# Check if config exists and has content
if [ -f "$CONFIG_FILE" ] && [ -s "$CONFIG_FILE" ]; then
    # Try to parse existing config
    if command -v jq >/dev/null 2>&1; then
        # If jq is available, merge configs properly
        echo '{
  "origins": [
    "https://*.auditomatic.org",
    "http://localhost:3000",
    "http://localhost:5173", 
    "http://localhost:5174"
  ]
}' | jq -s '.[0] * .[1]' "$CONFIG_FILE" - > "$CONFIG_FILE.tmp" && mv "$CONFIG_FILE.tmp" "$CONFIG_FILE"
    else
        # No jq, just overwrite
        cat > "$CONFIG_FILE" << 'EOF'
{
  "origins": [
    "https://*.auditomatic.org",
    "http://localhost:3000",
    "http://localhost:5173", 
    "http://localhost:5174"
  ]
}
EOF
    fi
else
    # Create new config
    cat > "$CONFIG_FILE" << 'EOF'
{
  "origins": [
    "https://*.auditomatic.org",
    "http://localhost:3000",
    "http://localhost:5173", 
    "http://localhost:5174"
  ]
}
EOF
fi

success "Configuration saved to $CONFIG_FILE"

# Check if Ollama is running
if pgrep -x "ollama" > /dev/null; then
    warning "Ollama is currently running. You need to restart it for changes to take effect."
    echo ""
    echo "To restart Ollama:"
    echo "  1. Quit Ollama from the menu bar"
    echo "  2. Open Ollama again"
    echo ""
    echo "Or run these commands:"
    echo "  killall Ollama"
    echo "  open -a Ollama"
else
    status "Starting Ollama with new configuration..."
    open -a Ollama 2>/dev/null || warning "Please start Ollama manually"
fi

echo ""
success "Configuration complete!"
echo ""
status "Ollama will now accept connections from:"
echo "  - https://*.auditomatic.org (all subdomains)"
echo "  - http://localhost:3000 (development)"
echo "  - http://localhost:5173 (Vite dev server)"
echo "  - http://localhost:5174 (Vite dev server alternate)"
echo ""
status "To start using Ollama with Auditomatic Lite:"
echo "  1. Make sure Ollama is running (check menu bar)"
echo "  2. Pull a model: ollama pull llama3.2"
echo "  3. Visit https://lite.auditomatic.org and enable Ollama in settings"
echo ""