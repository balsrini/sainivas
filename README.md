# SaiNivas - Premium Apartment Listing Platform

A comprehensive apartment listing website featuring 9 premium apartments with individual photo galleries, detailed information, and inquiry functionality. The platform focuses on apartment inquiries rather than booking stays, providing a professional real estate browsing experience.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Photo Galleries**: Each apartment has a dedicated gallery with zoom and swipe capabilities
- **Professional Branding**: Elegant SaiNivas branding with Park Avenue Std Standard font
- **Inquiry System**: Professional contact form for apartment-specific inquiries
- **Local Assets**: All images and fonts are included for fast loading and offline capability

## Deployment Options

### Option 1: Development Server (Replit)
```bash
npm run dev
```

### Option 2: GitHub Pages (Static Deployment)

This project is configured for easy deployment to GitHub Pages:

1. **Fork/Clone this repository** to your GitHub account

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

3. **Push your changes** to the main/master branch:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

4. **Automatic Deployment**: The GitHub Action will automatically build and deploy your site using the latest artifact actions

5. **Access your site**: Your site will be available at:
   ```
   https://yourusername.github.io/sainivas/
   ```

### Manual Static Build

To build the static version locally:

```bash
# Build static version
node build-static.js

# The files will be generated in the ./dist directory
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── public/
│   │   ├── images/        # Local apartment and building images (33 files)
│   │   └── fonts/         # Park Avenue Std Standard font
│   └── src/
│       ├── components/    # React components
│       ├── pages/         # Application pages
│       └── data/          # Static data for GitHub Pages
├── server/                # Express backend (for development)
├── .github/workflows/     # GitHub Actions for deployment
└── dist/                  # Built static files
```

## Technology Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **UI Components**: Shadcn/UI + Radix UI
- **Gallery**: Embla Carousel with zoom functionality
- **Deployment**: GitHub Pages with GitHub Actions
- **Development**: Vite + Express.js

## Customization

### Adding New Apartments

Edit `client/src/data/static-data.ts` to add or modify apartment listings:

```typescript
export const staticFlats = [
  {
    id: 10,
    title: "Your New Apartment",
    description: "Description here...",
    price: "$2,000/month",
    bedrooms: 2,
    bathrooms: 1,
    area: "800 sq ft",
    images: ["/images/apt10-img1.jpg", ...],
    features: ["Feature 1", "Feature 2", ...]
  }
];
```

### Updating Images

1. Add new images to `client/public/images/`
2. Update the image references in `static-data.ts`
3. The images will be automatically included in the build

### Customizing Branding

- **Font**: The Park Avenue Std Standard font is included in `client/public/fonts/`
- **Colors**: Modify `theme.json` for color scheme changes
- **Logo**: Update the SaiNivas text in `client/src/components/nav-header.tsx`

## GitHub Pages Configuration

The project includes:

- **GitHub Actions Workflow**: `.github/workflows/deploy.yml` (using latest artifact actions v4/v3)
- **Alternative Simple Workflow**: `.github/workflows/deploy-simple.yml` (using peaceiris/actions-gh-pages)
- **Static Build Configuration**: `vite.config.static.ts`
- **Static Data**: `client/src/data/static-data.ts`
- **Build Script**: `build-static.js`

### Deployment Options:

1. **Primary**: Uses the standard GitHub Pages deployment with latest artifact actions
2. **Alternative**: Uses peaceiris/actions-gh-pages for simpler deployment (rename to deploy.yml if needed)

## Troubleshooting

If you encounter issues:

### 404 Page Not Found
1. **Check repository name**: The URL should match `https://username.github.io/your-repo-name/`
2. **Verify base path**: The build automatically detects your repo name
3. **Enable GitHub Pages**: Go to Settings → Pages → Source: "GitHub Actions"

### Images Not Loading
- Images are stored in `client/public/images/` and accessible at `/images/`
- Check that all 33 image files are included in your repository

### Build Failures
- Review GitHub Actions logs for specific errors
- Ensure Node.js 20 is being used
- All dependencies should install correctly

**📋 Complete troubleshooting guide**: See `GITHUB_PAGES_TROUBLESHOOTING.md`

## Support

For issues or questions:
1. Check `GITHUB_PAGES_TROUBLESHOOTING.md` for common solutions
2. Review the deployment logs in GitHub Actions
3. Test the build locally: `npx vite build --config vite.config.github.ts`

## License

MIT License - feel free to use this project for your own apartment listings!