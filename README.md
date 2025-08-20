# Auditomatic Lite App

This repository hosts the production deployment of Auditomatic Lite at [lite.auditomatic.org](https://lite.auditomatic.org).

## Repository Structure

- **Web App**: The root directory contains the built web application
- **Releases**: GitHub Releases contain desktop app binaries (Windows, macOS, Linux)
- **Deployment**: Auto-deployed to Netlify on push to main branch

## Releases

Binary releases are automatically mirrored from [auditomatic/auditomatic-lite](https://github.com/auditomatic/auditomatic-lite):

- No rebuilding - binaries are copied from the main repository
- Releases appear here shortly after the main repository releases
- Download desktop apps from the [Releases](https://github.com/auditomatic/lite-app/releases) page

## Development

Main development happens in [auditomatic/auditomatic-lite](https://github.com/auditomatic/auditomatic-lite).

This repository is for:
- Production web deployment
- Binary distribution
- Public release hosting

## Deployment

The web app is automatically deployed to Netlify:
- Domain: lite.auditomatic.org
- Auto-deploys on push to main branch
- Headers configured for security and performance

## Security

- All processing happens locally in the browser
- No server-side data storage
- API keys are never transmitted to our servers
- See [Security Policy](https://github.com/auditomatic/auditomatic-lite/security) for details