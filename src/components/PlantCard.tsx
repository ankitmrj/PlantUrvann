import React from 'react';
import { Plant } from '../types';
import { ShoppingCart, Droplets, Sun } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
}

// Wrap in React.memo to prevent unnecessary re-renders
export const PlantCard: React.FC<PlantCardProps> = React.memo(({ plant }) => {
  const difficultyColors: Record<string, string> = {
    Easy: 'text-green-600 bg-green-50',
    Medium: 'text-yellow-600 bg-yellow-50',
    Hard: 'text-red-600 bg-red-50'
  };

  const colorClass = difficultyColors[plant.difficulty] || 'text-gray-600 bg-gray-50';

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-0"
          onLoad={(e) => (e.currentTarget.style.opacity = '1')} // fade-in effect
        />

        {!plant.available && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium bg-red-600 px-3 py-1 rounded-full text-sm">
              Out of Stock
            </span>
          </div>
        )}

        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
          {plant.difficulty}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-1">{plant.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{plant.description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {plant.categories.slice(0, 2).map((category) => (
            <span key={category} className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">
              {category}
            </span>
          ))}
          {plant.categories.length > 2 && (
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
              +{plant.categories.length - 2}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Sun className="h-3 w-3" />
            <span className="truncate">{plant.light}</span>
          </div>
          <div className="flex items-center gap-1">
            <Droplets className="h-3 w-3" />
            <span className="truncate">{plant.water}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-emerald-600">${plant.price}</span>
            <div className="text-xs text-gray-500">
              {plant.stock > 0 ? `${plant.stock} in stock` : 'Out of stock'}
            </div>
          </div>
          <button
            disabled={!plant.available || plant.stock === 0}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
});

PlantCard.displayName = 'PlantCard';
