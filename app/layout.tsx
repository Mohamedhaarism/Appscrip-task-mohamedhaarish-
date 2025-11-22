import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Discover Our Products | ZYAN WORLD',
  description: 'Explore our wide range of quality products for all ages. Find the perfect items from our curated collection at ZYAN WORLD.',
  keywords: 'products, shopping, ZYAN WORLD, quality items, online store',
  openGraph: {
    title: 'Discover Our Products | ZYAN WORLD',
    description: 'Explore our wide range of quality products for all ages.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ZYAN WORLD',
    description: 'Quality products for all ages',
    url: 'https://zyan-world.netlify.app',
  };

  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Product Listing',
    description: 'Browse our collection of quality products',
  };

  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <Script
          id="productlist-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
        />
      </body>
    </html>
  );
}

