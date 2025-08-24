import React from 'react';
import { Plant } from '../types';
import { PlantCard } from './PlantCard';
import { LoadingSkeleton } from './common/LoadingSkeleton';
import { ErrorMessage } from './common/ErrorMessage';

interface PlantGridProps {
  plants: Plant[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

// Wrap PlantGrid in React.memo for performance
export const PlantGrid: React.FC<PlantGridProps> = React.memo(({ plants, loading, error, onRetry }) => {
  if (error) {
    return <ErrorMessage message={error} onRetry={onRetry} />;
  }

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (plants.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4 flex justify-center">
          <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">🌱</span>
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-700 mb-2">No plants found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
});

PlantGrid.displayName = 'PlantGrid';
