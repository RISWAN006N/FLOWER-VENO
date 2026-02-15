import React from 'react';
import { ShoppingCart, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_PHONE } from '../constants';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${COMPANY_PHONE}`}
              className="hidden md:flex items-center gap-2 text-gray-600 hover:text-rose-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">{COMPANY_PHONE}</span>
            </a>

            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-rose-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-rose-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};