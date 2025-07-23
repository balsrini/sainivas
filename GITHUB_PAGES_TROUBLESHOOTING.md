# GitHub Pages Deployment Troubleshooting

## Common Issues and Solutions

### 1. 404 Page Not Found Error

If you're getting a 404 error when accessing your GitHub Pages site, try these solutions:

#### **Solution A: Check Repository Name Match**
1. Make sure your repository name matches the base path in the configuration
2. If your repo is named `my-apartment-site`, the URL will be `https://username.github.io/my-apartment-site/`
3. The build automatically detects this, but you can verify in the build logs

#### **Solution B: Update Repository Name in Config**
If you want to use a specific name, update `vite.config.github.ts`:
```typescript
// Change this line to match your repo name:
return "/your-repo-name/";
```

#### **Solution C: Use Root Domain (Remove Base Path)**
For a cleaner URL without subdirectory, create `vite.config.root.ts`:
```typescript
// Copy vite.config.github.ts and change:
base: "/", // This makes it work at root level
```

Then update your workflow to use this config.

### 2. Images Not Loading

If images show broken links:

1. **Check file paths**: All images should be in `client/public/images/`
2. **Verify build output**: Images should be copied to `dist/images/`
3. **Check references**: Code should use `/images/filename.jpg` (not `./images/`)

### 3. Fonts Not Loading

For font issues:
1. Font files are in `client/public/fonts/`
2. CSS imports use `/fonts/park-avenue-std.css`
3. Check browser console for font loading errors

### 4. Routing Issues (SPA)

The project includes Single Page App (SPA) support:
- `404.html` handles client-side routing
- `index.html` includes redirect script
- All routes should work after initial load

### 5. Build Failures

If GitHub Actions build fails:

1. **Check workflow logs** in GitHub Actions tab
2. **Verify Node.js version** (should be 20)
3. **Check for dependency issues** in build logs
4. **Ensure all files are committed** and pushed

## Quick Fixes

### Fix 1: Manual Repository Name
Create `.env` file in root:
```
VITE_BASE_PATH=/your-repo-name/
```

### Fix 2: Simple Deployment
Use the alternative workflow (`.github/workflows/deploy-simple.yml`) by:
1. Rename `deploy.yml` to `deploy-old.yml`
2. Rename `deploy-simple.yml` to `deploy.yml`
3. Push changes

### Fix 3: Local Testing
Test the built site locally:
```bash
# Build the site
npx vite build --config vite.config.github.ts

# Serve the built files
npx serve dist

# Or use Python
cd dist && python -m http.server 8000
```

## Deployment Checklist

Before deploying:
- [ ] Repository name matches configuration
- [ ] GitHub Pages is enabled in Settings
- [ ] Source is set to "GitHub Actions"
- [ ] All files are committed and pushed
- [ ] Build completes successfully
- [ ] No 404 errors in build logs

## Repository Settings

1. Go to repository **Settings** → **Pages**
2. Set **Source** to "GitHub Actions"
3. **Custom domain** (optional): Add your domain
4. **Enforce HTTPS**: Should be enabled

## URLs to Check

After deployment, test these URLs:
- `https://username.github.io/repo-name/` (main page)
- `https://username.github.io/repo-name/apartment/1` (apartment page)
- `https://username.github.io/repo-name/images/apt1-img1.jpg` (image)

## Getting Help

If issues persist:
1. Check the GitHub Actions logs for build errors
2. Verify all file paths are correct
3. Test the build locally first
4. Check browser console for JavaScript errors

The site should work perfectly once the repository name and base path are properly configured!