export interface Plant {
  id: string;
  name: string;
  price: number;
  categories: string[];
  stock: number;
  available: boolean;
  description: string;
  image: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  light: string;
  water: string;
}

export interface SearchFilters {
  search: string;
  category: string;
  sortBy: 'name' | 'price-low' | 'price-high';
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}