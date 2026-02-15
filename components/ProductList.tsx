import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface ProductListProps {
  onAddToCart: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 font-serif sm:text-4xl">
            Our Fresh Collection
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Handpicked bouquets (Bokka) for your loved ones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow-sm">
                  ₹{product.price}
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 font-serif mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full flex items-center justify-center gap-2 bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white border border-rose-200 hover:border-transparent font-medium py-3 px-4 rounded-xl transition-all duration-200"
                >
                  <Plus className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};