import React from 'react';
import { Plant } from '../types';
import { PlantGrid } from './PlantGrid';

export const PlantPage: React.FC = () => {
  const [plants, setPlants] = React.useState<Plant[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Stable fetch function
  const fetchPlants = React.useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/plants');
      if (!res.ok) throw new Error('Failed to fetch plants');

      const data: Plant[] = await res.json();
      setPlants(data);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch
  React.useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  // Only show available plants
  const visiblePlants = React.useMemo(() => plants.filter(p => p.available), [plants]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Our Plants</h1>

      {/* Show loading */}
      {loading && <div className="text-gray-500">Loading plants...</div>}

      {/* Show error with retry */}
      {error && !loading && (
        <div className="text-red-600 mb-4">
          {error}{' '}
          <button
            onClick={fetchPlants}
            className="underline text-blue-600 hover:text-blue-800"
          >
            Retry
          </button>
        </div>
      )}

      {/* Show plant grid only if not loading */}
      {!loading && !error && (
        <PlantGrid
          plants={visiblePlants}
          loading={loading}
          error={error}
          onRetry={fetchPlants}
        />
      )}
    </div>
  );
};
