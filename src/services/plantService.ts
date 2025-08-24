import { Plant, SearchFilters, ApiResponse } from '../types';
import { plantsData } from '../data/plants';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class PlantService {
  private plants: Plant[] = [...plantsData];

  async getAllPlants(): Promise<ApiResponse<Plant[]>> {
    await delay(800);
    return {
      data: this.plants,
      success: true
    };
  }

  async searchPlants(filters: SearchFilters): Promise<ApiResponse<Plant[]>> {
    await delay(600);
    
    let filteredPlants = [...this.plants];

    // Search by name or category keyword
    if (filters.search.trim()) {
      const searchTerm = filters.search.toLowerCase();
      filteredPlants = filteredPlants.filter(plant => 
        plant.name.toLowerCase().includes(searchTerm) ||
        plant.categories.some(cat => cat.toLowerCase().includes(searchTerm)) ||
        plant.description.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by category
    if (filters.category && filters.category !== 'All') {
      filteredPlants = filteredPlants.filter(plant =>
        plant.categories.includes(filters.category)
      );
    }

    // Sort results
    switch (filters.sortBy) {
      case 'name':
        filteredPlants.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-low':
        filteredPlants.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredPlants.sort((a, b) => b.price - a.price);
        break;
    }

    return {
      data: filteredPlants,
      success: true
    };
  }

  async addPlant(plantData: Omit<Plant, 'id'>): Promise<ApiResponse<Plant>> {
    await delay(1000);
    
    const newPlant: Plant = {
      ...plantData,
      id: Date.now().toString()
    };

    this.plants.push(newPlant);

    return {
      data: newPlant,
      success: true,
      message: 'Plant added successfully!'
    };
  }

  getCategories(): string[] {
    const categoriesSet = new Set<string>();
    this.plants.forEach(plant => {
      plant.categories.forEach(cat => categoriesSet.add(cat));
    });
    return Array.from(categoriesSet).sort();
  }
}

export const plantService = new PlantService();