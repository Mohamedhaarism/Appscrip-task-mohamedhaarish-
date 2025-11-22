'use client';

import { useState, useMemo } from 'react';
import { Product, FilterState } from '@/types/product';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import styles from './ProductPageClient.module.css';

interface ProductPageClientProps {
  initialProducts: Product[];
}

export default function ProductPageClient({ initialProducts }: ProductPageClientProps) {
  const [filters, setFilters] = useState<FilterState>({
    ageRanges: [],
    suitableFor: [],
    material: [],
  });

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    if (
      filters.ageRanges.length === 0 &&
      filters.suitableFor.length === 0 &&
      filters.material.length === 0
    ) {
      return initialProducts;
    }

    return initialProducts.filter(product => {
      // Check age ranges
      if (filters.ageRanges.length > 0) {
        const matchesAgeRange = filters.ageRanges.some(range =>
          product.ageRange?.includes(range)
        );
        if (!matchesAgeRange) return false;
      }

      // Check suitable for
      if (filters.suitableFor.length > 0) {
        const matchesSuitableFor = filters.suitableFor.some(suitable =>
          product.suitableFor?.includes(suitable)
        );
        if (!matchesSuitableFor) return false;
      }

      // Check material
      if (filters.material.length > 0) {
        const matchesMaterial = filters.material.some(mat =>
          product.material?.includes(mat)
        );
        if (!matchesMaterial) return false;
      }

      return true;
    });
  }, [initialProducts, filters]);

  return (
    <div className={styles.container}>
      <FilterSidebar filters={filters} onFilterChange={setFilters} />
      <div className={styles.productsSection}>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}

