import React from 'react';
import { Plant } from '../types';
import { PlantGrid } from './PlantGrid';

export const PlantPage: React.FC = () => {
  const [plants, setPlants] = React.useState<Plant[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Stable fetch function
  const fetchPlants = React.useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch('/api/plants');
      if (!res.ok) throw new Error('Failed to fetch plants');

      const data: Plant[] = await res.json();
      setPlants(data); // ✅ keep objects as they are
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch
  React.useEffect(() => { fetchPlants(); }, [fetchPlants]);

  // Memoize visible plants to keep reference stable
  const visiblePlants = React.useMemo(() => plants.filter(p => p.available), [plants]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Our Plants</h1>
      <PlantGrid
        plants={visiblePlants}   // ✅ stable array reference
        loading={loading}
        error={error}
        onRetry={fetchPlants}    // ✅ reuse stable fetch
      />
    </div>
  );
};
