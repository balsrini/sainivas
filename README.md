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

4. **Automatic Deployment**: The GitHub Action will automatically build and deploy your site

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

- **GitHub Actions Workflow**: `.github/workflows/deploy.yml`
- **Static Build Configuration**: `vite.config.static.ts`
- **Static Data**: `client/src/data/static-data.ts`
- **Build Script**: `build-static.js`

## Support

For issues or questions:
1. Check the GitHub repository issues
2. Review the deployment logs in GitHub Actions
3. Ensure all image paths use `/images/` prefix for GitHub Pages compatibility

## License

MIT License - feel free to use this project for your own apartment listings!