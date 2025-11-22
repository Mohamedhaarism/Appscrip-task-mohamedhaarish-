# ZYAN WORLD - Product Listing Page

A responsive Product Listing Page (PLP) built with Next.js 14, featuring Server Side Rendering (SSR), advanced filtering, and SEO optimization.

## Features

- ✅ Server Side Rendering (SSR) with Next.js App Router
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Product filtering (Age Ranges, Suitable For, Material)
- ✅ SEO optimized (Meta tags, Schema markup, Semantic HTML)
- ✅ Minimal dependencies (No UI libraries)
- ✅ TypeScript for type safety
- ✅ CSS Modules for scoped styling

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **API**: FakeStoreAPI (https://fakestoreapi.com)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[username]/Appscrip-task-mohamedhaarish.git
cd Appscrip-task-mohamedhaarish
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the necessary configuration.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect Next.js and deploy

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Main PLP page (SSR)
│   ├── globals.css          # Global styles
│   └── page.module.css      # Page-specific styles
├── components/
│   ├── Header.tsx           # Header component
│   ├── Footer.tsx           # Footer component
│   ├── FilterSidebar.tsx    # Filter sidebar component
│   ├── ProductCard.tsx      # Product card component
│   ├── ProductGrid.tsx      # Product grid component
│   └── ProductPageClient.tsx # Client-side filter logic
├── lib/
│   └── api.ts              # API utilities
├── types/
│   └── product.ts          # TypeScript interfaces
└── public/                 # Static assets
```

## SEO Features

- Page title and meta description
- H1 and H2 semantic headings
- JSON-LD schema markup
- SEO-friendly image alt texts
- Semantic HTML structure

## Code Quality

- TypeScript for type safety
- Consistent naming conventions
- Minimal DOM size
- CSS Modules for scoped styling
- No unnecessary wrapper divs

## License

ISC

## Author

Mohamed Haarish

