export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  // Extended properties for PLP
  ageRange?: string[];
  suitableFor?: string[];
  material?: string[];
  inStock?: boolean;
}

export interface FilterState {
  ageRanges: string[];
  suitableFor: string[];
  material: string[];
}

