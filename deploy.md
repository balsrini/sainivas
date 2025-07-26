# Static Site Deployment Guide

## Files Created
This static version contains:
- `index.html` - Main page with all sections
- `styles.css` - Complete styling without Tailwind dependencies  
- `script.js` - Interactive functionality (gallery, forms, navigation)
- `data.js` - Apartment data (9 apartments with details)
- `404.html` - Simple redirect for GitHub Pages SPA support
- `images/` folder - All 33 apartment images (3.4MB total)
- `fonts/` folder - Park Avenue Std font for SaiNivas branding

## GitHub Pages Deployment

### Option 1: Direct Upload
1. Create a new GitHub repository
2. Upload all files from the `static/` folder to the root of your repository
3. Go to Settings → Pages → Source: "Deploy from a branch" → Branch: "main" → Folder: "/ (root)"

### Option 2: GitHub Actions (Recommended)
Create `.github/workflows/deploy.yml`:

```yml
name: Deploy Static Site

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
          
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4

```

## Features
✅ **No Build Tools**: Pure HTML/CSS/JS - no Vite, React, or Node.js needed
✅ **Responsive Design**: Works on mobile, tablet, and desktop
✅ **Interactive Gallery**: Click any apartment to view full photo gallery
✅ **Contact Forms**: Functional contact form with apartment pre-selection
✅ **SPA Navigation**: Smooth scrolling between sections
✅ **Professional Branding**: SaiNivas font and consistent styling
✅ **Fast Loading**: Optimized images and minimal dependencies

## File Structure
```
static/
├── index.html          # Main page
├── styles.css          # All styling
├── script.js           # Interactive functionality  
├── data.js             # Apartment data
├── 404.html           # GitHub Pages SPA support
├── images/            # 33 apartment photos
│   ├── apt1-img1.jpg
│   ├── apt1-img2.jpg
│   └── ... (all images)
└── fonts/             # Custom fonts
    ├── park-avenue-std.css
    └── ParkAvenueStd.otf
```

## Testing Locally
```bash
# Simple HTTP server
cd static
python -m http.server 8000

# Or with Node.js
npx serve .

# Or any other static file server
```

Your site will be available at: `https://yourusername.github.io/repository-name/`