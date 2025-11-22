export const dynamic = "force-dynamic";

import { fetchProducts } from '@/lib/api';
import { Product, FilterState } from '@/types/product';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import ProductPageClient from '@/components/ProductPageClient';
import styles from './page.module.css';

// Server Component - fetches data on server
export default async function HomePage() {
  // Fetch products on the server (SSR)
  const products: Product[] = await fetchProducts();
export default async function ProductsPage() {
  const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
  const products = await res.json();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <div className={styles.introSection}>
            <h1 className={styles.mainHeading}>DISCOVER OUR PRODUCTS</h1>
            <p className={styles.description}>
              Explore our curated collection of quality products designed for all ages. 
              Find the perfect items that match your style and needs.
            </p>
          </div>
          <div>
      {/* Render products */}
    </div>
          
          <div className={styles.layout}>
            <ProductPageClient initialProducts={products} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
}

