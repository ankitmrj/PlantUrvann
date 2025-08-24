import React, { useState, useCallback } from 'react';
import { Leaf } from 'lucide-react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { PlantGrid } from './components/PlantGrid';
import { AddPlantForm } from './components/AddPlantForm';
import { Stats } from './components/Stats';
import { usePlants } from './hooks/usePlants';
import { SearchFilters } from './types';

function App() {
  const { plants, loading, error, searchPlants, addPlant, refresh } = usePlants();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleSearch = useCallback((filters: SearchFilters) => {
    searchPlants(filters);
  }, [searchPlants]);

  const handleAddPlant = async (plantData: Parameters<typeof addPlant>[0]) => {
    await addPlant(plantData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onShowAddForm={() => setShowAddForm(true)} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to PlantStore
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our collection of beautiful, healthy plants perfect for your home and garden. 
            From easy-care succulents to exotic tropicals, find your perfect green companion.
          </p>
        </div>

        {/* Stats */}
        <Stats plants={plants} />

        {/* Search and Filters */}
        <SearchBar onSearch={handleSearch} loading={loading} />

        {/* Plants Grid */}
        <PlantGrid 
          plants={plants} 
          loading={loading} 
          error={error} 
          onRetry={refresh}
        />

        {/* Add Plant Modal */}
        {showAddForm && (
          <AddPlantForm
            onAdd={handleAddPlant}
            onClose={() => setShowAddForm(false)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">PlantStore</h3>
                  <p className="text-sm text-gray-500">Your green companion</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                We're passionate about bringing nature into your home. Our carefully curated collection 
                features healthy, beautiful plants that are perfect for any space and skill level.
              </p>
              <div className="flex gap-4">
                <div className="text-sm">
                  <strong className="text-gray-900">{plants.length}+</strong>
                  <span className="text-gray-600 ml-1">Plants Available</span>
                </div>
                <div className="text-sm">
                  <strong className="text-gray-900">Fast</strong>
                  <span className="text-gray-600 ml-1">Shipping</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Indoor Plants</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Outdoor Plants</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Succulents</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Herbs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Plant Care Guide</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 PlantStore. Made with ❤️ for plant lovers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;