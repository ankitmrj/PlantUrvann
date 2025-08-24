import React from 'react';
import { Leaf, Plus, ShoppingCart, User } from 'lucide-react';

interface HeaderProps {
  onShowAddForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShowAddForm }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PlantStore</h1>
              <p className="text-xs text-gray-500">Your green companion</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            {/* Add Plant Button (Admin) */}
            <button
              onClick={onShowAddForm}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add Plant</span>
            </button>

            {/* Cart Button */}
            <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* User Button */}
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};