import React from 'react';
import { Plant } from '../types';
import { PlantGrid } from './PlantGrid';

export const PlantPage: React.FC = () => {
  const [plants, setPlants] = React.useState<Plant[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Fetch plants from API or local data
  React.useEffect(() => {
    const fetchPlants = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/plants'); // replace with your API
        if (!response.ok) throw new Error('Failed to fetch plants');
        const data: Plant[] = await response.json();

        setPlants(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  // Memoize plants array to prevent unnecessary re-renders of PlantGrid
  const visiblePlants = React.useMemo(() => {
    // Example: filter available plants
    return plants.filter((p) => p.available);
  }, [plants]);

  // Retry function for errors
  const handleRetry = () => {
    setError(null);
    setLoading(true);
    // Trigger fetch again
    fetch('/api/plants')
      .then((res) => res.json())
      .then((data: Plant[]) => {
        setPlants(data);
        setLoading(false);
      })
      .catch(() => setError('Failed to load plants'));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Our Plants</h1>
      <PlantGrid
        plants={visiblePlants}  // ✅ stable reference
        loading={loading}
        error={error}
        onRetry={handleRetry}
      />
    </div>
  );
};
