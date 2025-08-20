# Release Mirror Setup

This repository automatically mirrors releases from `auditomatic/auditomatic-lite`.

## How It Works

1. When a release is created in `auditomatic-lite`, it triggers a workflow here
2. This workflow downloads all release assets from the source release
3. Creates an identical release in this repository with the same binaries
4. No rebuilding needed - just copies the existing artifacts

## Setup Requirements

### Token Configuration

This workflow uses the existing `DEPLOY_TOKEN` that's used for deployments between the repositories.

**Required Setup:**

1. **The `DEPLOY_TOKEN` must be added to BOTH repositories:**
   - ✅ Already in `auditomatic-lite` (used for web deployments)
   - ⚠️ **Must be added to `lite-app` secrets** (for downloading from private auditomatic-lite)

2. **To add DEPLOY_TOKEN to lite-app:**
   - Go to `lite-app` repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `DEPLOY_TOKEN`
   - Value: Same token value that's in auditomatic-lite
   - Click "Add secret"

**Why both repos need it:**
- `auditomatic-lite` uses it to trigger the mirror workflow in `lite-app`
- `lite-app` uses it to download releases from the private `auditomatic-lite` repo

## Manual Trigger

You can manually mirror a release:

1. Go to Actions tab in this repository
2. Select "Mirror Release from auditomatic-lite"
3. Click "Run workflow"
4. Enter the release tag (e.g., `v0.12.3`)
5. Click "Run workflow"

## Automatic Trigger

Releases are automatically mirrored when:
- A new release is published in `auditomatic-lite`
- The release workflow completes successfully
- The PAT token is properly configured

## Troubleshooting

### Release not mirroring automatically?

1. Check the PAT token is set in `auditomatic-lite` secrets
2. Check the Actions tab in both repos for errors
3. Verify the release tag format matches (e.g., `v0.12.3`)

### Manual mirror failing?

1. Ensure the release exists in `auditomatic-lite`
2. Check that all artifacts have finished uploading
3. Verify you have the correct tag name

## Security Notes

- The PAT token should have minimal necessary permissions
- Consider using GitHub App authentication for production
- The workflow has `continue-on-error` to not block main releases
- Artifacts are downloaded using GitHub's authenticated API