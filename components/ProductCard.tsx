import Image from 'next/image';
import { Product } from '@/types/product';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Generate SEO-friendly alt text
  const altText = `${product.title} - ${product.category} product from ZYAN WORLD`;

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {!product.inStock && (
          <div className={styles.outOfStockBadge}>OUT OF STOCK</div>
        )}
        <Image
          src={product.image}
          alt={altText}
          width={300}
          height={300}
          className={styles.productImage}
          loading="lazy"
        />
        <button className={styles.wishlistButton} aria-label="Add to wishlist">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 17.5L8.55 16.15C4.4 12.5 1.67 10.05 1.67 7.08C1.67 4.62 3.62 2.67 6.08 2.67C7.42 2.67 8.67 3.25 9.42 4.17L10 4.92L10.58 4.17C11.33 3.25 12.58 2.67 13.92 2.67C16.38 2.67 18.33 4.62 18.33 7.08C18.33 10.05 15.6 12.5 11.45 16.15L10 17.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.productName}>PRODUCT NAME</h3>
        <p className={styles.productTitle}>{product.title}</p>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      </div>
    </article>
  );
}

