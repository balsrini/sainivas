#!/usr/bin/env node

import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildStatic() {
  try {
    console.log('Building static version for GitHub Pages...');
    
    await build({
      configFile: path.resolve(__dirname, 'vite.config.static.ts'),
      base: '/sainivas/',
      define: {
        'process.env.NODE_ENV': '"production"',
        'process.env.STATIC_BUILD': '"true"'
      }
    });
    
    console.log('Static build completed successfully!');
    console.log('Files are ready in ./dist directory');
    console.log('');
    console.log('To deploy to GitHub Pages:');
    console.log('1. Push your code to GitHub');
    console.log('2. Enable GitHub Pages in repository settings');
    console.log('3. Set source to GitHub Actions');
    console.log('4. The site will be available at: https://yourusername.github.io/sainivas/');
    
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildStatic();