# Azure Static Web Apps Deployment Guide

This Next.js site is configured for deployment to Azure Static Web Apps.

## Build Configuration

- **Framework**: Next.js 14.2.35
- **Output**: Static export (`output: 'export'` in `next.config.js`)
- **Images**: Unoptimized (for static export compatibility)

## Prerequisites

1. **Static Web Apps CLI installed** (you have it installed):
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

2. **Azure Static Web App created** in Azure Portal

3. **Deployment token** from Azure Portal:
   - Go to Azure Portal → Your Static Web App → "Manage deployment token"
   - Copy the token

## Deployment Steps

### Option 1: Using Static Web Apps CLI (Recommended for Manual Deployment)

1. **Build the site:**
   ```bash
   npm run build
   # or
   npm run export
   ```
   This creates an `out/` directory with static files.

2. **Deploy using Static Web Apps CLI:**
   ```bash
   swa deploy ./out \
     --deployment-token <your-deployment-token> \
     --env production \
     --app-name <your-app-name>
   ```

   **Parameters:**
   - `./out`: Path to the directory containing built static files
   - `--deployment-token`: Your deployment token from Azure Portal
   - `--env`: Environment name (usually "production")
   - `--app-name`: (Optional) Your Azure Static Web App name

   **Example:**
   ```bash
   swa deploy ./out \
     --deployment-token 44880e7dcbcf347d8e6ed868e872c1a7b9e1a38adfa1adeff7d79e84601a04505-a68d6100-4daf-4114-8c82-4a2d5dfd199300f214209 \
     --env production \
     --app-name tcimarketingsite
   ```

   **Note:** The `--app-name` parameter is optional. If not provided, the CLI will try to detect it from your Azure configuration.

### Option 2: Using GitHub Actions (Automatic - Recommended)

If you connect your repository to Azure Static Web Apps, GitHub Actions will automatically:
1. Build the site (`npm run build`)
2. Deploy the `out/` directory to Azure

**Steps:**
1. In Azure Portal, go to your Static Web App
2. Click "Manage deployment token" and copy the token
3. In your GitHub repository, go to Settings → Secrets → Actions
4. Add a new secret named `AZURE_STATIC_WEB_APPS_API_TOKEN` with your token
5. Azure will automatically create a GitHub Actions workflow file (`.github/workflows/azure-static-web-apps-*.yml`)

The workflow will trigger on every push to your main branch.

### Option 3: Using Azure DevOps

Create a pipeline that:
1. Installs Node.js
2. Runs `npm install`
3. Runs `npm run build`
4. Deploys the `out/` directory using Azure Static Web Apps deployment task

## Configuration Files

- `next.config.js` - Next.js configuration with static export
- `staticwebapp.config.json` - Azure Static Web Apps routing configuration
- `package.json` - Dependencies and build scripts

## Important Notes

- The site uses static export, so all pages are pre-rendered at build time
- Images are unoptimized for static export compatibility
- All routes are handled by Next.js routing (no manual route configuration needed in `staticwebapp.config.json`)
- The `out/` directory contains the deployable static files
- Make sure to run `npm run build` or `npm run export` before deploying

## Local Testing

Before deploying, test the static export locally:
```bash
npm run build
npx serve out
```

Then visit `http://localhost:3000` to verify everything works.

## Getting Your Deployment Token

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to your Static Web App
3. Click on "Manage deployment token" in the left menu
4. Copy the token and use it in your deployment command

## Troubleshooting

- **Build fails**: Make sure all dependencies are installed (`npm install`)
- **Deployment fails**: Verify your deployment token is correct
- **404 errors**: Check that `staticwebapp.config.json` has proper routing configuration
- **Images not loading**: Ensure images are in `public/img/` directory
- **Command not found**: Make sure Static Web Apps CLI is installed: `npm install -g @azure/static-web-apps-cli`
