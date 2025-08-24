import React from 'react';
import { Plant } from '../types';
import { Package, Leaf, DollarSign, TrendingUp } from 'lucide-react';

interface StatsProps {
  plants: Plant[];
}

export const Stats: React.FC<StatsProps> = ({ plants }) => {
  const totalPlants = plants.length;
  const availablePlants = plants.filter(p => p.available && p.stock > 0).length;
  const averagePrice = plants.length > 0 
    ? plants.reduce((sum, p) => sum + p.price, 0) / plants.length 
    : 0;
  const totalValue = plants.reduce((sum, p) => sum + (p.price * p.stock), 0);

  const stats = [
    {
      name: 'Total Plants',
      value: totalPlants,
      icon: Leaf,
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      name: 'Available',
      value: availablePlants,
      icon: Package,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      name: 'Average Price',
      value: `$${averagePrice.toFixed(2)}`,
      icon: DollarSign,
      color: 'text-purple-600 bg-purple-50'
    },
    {
      name: 'Total Inventory Value',
      value: `$${totalValue.toLocaleString()}`,
      icon: TrendingUp,
      color: 'text-orange-600 bg-orange-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};