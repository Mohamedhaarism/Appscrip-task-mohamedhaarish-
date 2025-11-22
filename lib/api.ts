import { Product } from '@/types/product';

const AGE_RANGES = [
  '0-24 MONTHS',
  '2-4 YEARS',
  '4-6 YEARS',
  '6-8 YEARS',
  '8-10 YEARS',
  '10-12 YEARS',
  '12-14 YEARS',
  '14-16 YEARS',
  '16+ YEARS',
];

const SUITABLE_FOR = ['BOYS', 'GIRLS', 'UNISEX'];

const MATERIALS = ['COTTON', 'WOOL', 'LINEN', 'SILK', 'SYNTHETIC'];

// Map categories to age ranges
const categoryToAgeRange: Record<string, string[]> = {
  "men's clothing": ['14-16 YEARS', '16+ YEARS'],
  "women's clothing": ['14-16 YEARS', '16+ YEARS'],
  electronics: ['10-12 YEARS', '12-14 YEARS', '14-16 YEARS', '16+ YEARS'],
  jewelry: ['8-10 YEARS', '10-12 YEARS', '12-14 YEARS', '14-16 YEARS', '16+ YEARS'],
};

// Map categories to suitable for
const categoryToSuitableFor: Record<string, string[]> = {
  "men's clothing": ['BOYS', 'UNISEX'],
  "women's clothing": ['GIRLS', 'UNISEX'],
  electronics: ['UNISEX'],
  jewelry: ['GIRLS', 'UNISEX'],
};

// Map categories to materials
const categoryToMaterial: Record<string, string[]> = {
  "men's clothing": ['COTTON', 'SYNTHETIC'],
  "women's clothing": ['COTTON', 'SILK', 'SYNTHETIC'],
  electronics: ['SYNTHETIC'],
  jewelry: ['SYNTHETIC'],
};

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store', // Ensure fresh data for SSR
      next: { revalidate: 0 }, // Force dynamic rendering
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const products: Product[] = await response.json();
    
    // Transform products with extended properties
    return products.map((product, index) => {
      const category = product.category.toLowerCase();
      
      return {
        ...product,
        ageRange: categoryToAgeRange[category] || ['8-10 YEARS', '10-12 YEARS'],
        suitableFor: categoryToSuitableFor[category] || ['UNISEX'],
        material: categoryToMaterial[category] || ['COTTON', 'SYNTHETIC'],
        inStock: index % 3 !== 0, // Make every 3rd product out of stock
      };
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export { AGE_RANGES, SUITABLE_FOR, MATERIALS };

