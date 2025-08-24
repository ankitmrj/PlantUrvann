import { useState, useEffect } from 'react';
import { Plant, SearchFilters } from '../types';
import { plantService } from '../services/plantService';

export const usePlants = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPlants = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await plantService.getAllPlants();
      setPlants(response.data);
    } catch (err) {
      setError('Failed to load plants');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPlants();
  }, []);

  const searchPlants = async (filters: SearchFilters) => {
    try {
      setLoading(true);
      setError(null);
      const response = await plantService.searchPlants(filters);
      setPlants(response.data);
    } catch (err) {
      setError('Search failed');
    } finally {
      setLoading(false);
    }
  };

  const addPlant = async (plantData: Omit<Plant, 'id'>) => {
    try {
      const response = await plantService.addPlant(plantData);
      setPlants(prev => [response.data, ...prev]);
      return response;
    } catch (err) {
      throw new Error('Failed to add plant');
    }
  };

  return {
    plants,
    loading,
    error,
    searchPlants,
    addPlant,
    refresh: loadPlants
  };
};