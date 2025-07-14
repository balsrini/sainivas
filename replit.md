# Premium Apartment Listing Platform

## Overview
A comprehensive apartment listing website featuring 9 premium apartments with individual photo galleries, detailed information, and inquiry functionality. The platform focuses on apartment inquiries rather than booking stays, providing a professional real estate browsing experience.

## Recent Changes
- **July 14, 2025**: Major expansion from single apartment to multi-property listing
  - Added flat schema with images, features, pricing, and specifications
  - Implemented responsive photo gallery with zoom and swipe capabilities for each apartment
  - Created 9 sample apartments with unique images and features
  - Built apartment listing grid with individual galleries
  - Updated hero section to reflect apartment listing theme

## Project Architecture

### Frontend (React + TypeScript)
- **Main Pages**: Home page with navigation between sections
- **Components**:
  - `FlatsListing`: Grid display of 9 apartments with galleries
  - `FlatGallery`: Reusable gallery component with zoom/swipe features
  - `Hero`: Landing section promoting apartment discovery
  - `Contact`: Inquiry form for apartment-specific queries
  - `Amenities`: General building amenities
  - `Location`: Property location information

### Backend (Express + TypeScript)
- **API Endpoints**:
  - `GET /api/flats`: Retrieve all apartments
  - `GET /api/flats/:id`: Get specific apartment details
  - `POST /api/enquiries`: Submit apartment inquiries
- **Storage**: In-memory storage with 9 pre-loaded apartment listings

### Data Model
- **Flats**: id, title, description, price, bedrooms, bathrooms, area, images[], features[]
- **Enquiries**: id, flatId, name, email, phone, message, createdAt

## Technology Stack
- React with TypeScript
- Tailwind CSS + Shadcn UI components
- Embla Carousel for gallery functionality
- TanStack Query for data fetching
- Express.js backend with in-memory storage

## User Preferences
- Focus on apartment inquiries, not booking functionality
- Professional real estate aesthetic
- Responsive design for all devices
- High-quality apartment imagery
- Modern, clean interface design

## Key Features
✓ Responsive photo gallery with zoom and swipe capabilities
✓ 9 unique apartment listings with individual galleries
✓ Professional apartment inquiry system
✓ Modern, mobile-responsive design
✓ Building amenities and location information

## Development Notes
- Uses embla-carousel-react for smooth gallery interactions
- Professional color scheme with clean typography
- All apartment data stored in-memory for fast prototyping
- Focus on user experience and visual appeal