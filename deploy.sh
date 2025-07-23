#!/bin/bash

echo "🚀 Building SaiNivas for GitHub Pages deployment..."

# Clean previous build
rm -rf dist

# Build static version using the static config
echo "📦 Building with static configuration..."
npx vite build --config vite.config.static.ts

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo ""
    echo "📁 Files are ready in ./dist directory"
    echo ""
    echo "🌐 To deploy to GitHub Pages:"
    echo "1. Push your code to GitHub repository"
    echo "2. Enable GitHub Pages in repository settings"
    echo "3. Set source to 'GitHub Actions'"
    echo "4. Your site will be available at: https://yourusername.github.io/sainivas/"
    echo ""
    echo "📋 Files built:"
    ls -la dist/
else
    echo "❌ Build failed!"
    exit 1
fi