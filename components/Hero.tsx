import React from 'react';
import { MapPin, Truck } from 'lucide-react';
import { DELIVERY_AREA } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-rose-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-rose-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-serif">
                <span className="block xl:inline">Say it with</span>{' '}
                <span className="block text-rose-600 xl:inline">Flowers</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Premium bouquets and gifts delivered fresh to your doorstep. 
                Creating couple goals and beautiful moments every day.
              </p>
              
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
                 <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <MapPin className="text-rose-500 w-5 h-5" />
                    <span className="font-medium">Madiwala based</span>
                 </div>
                 <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Truck className="text-rose-500 w-5 h-5" />
                    <span className="font-medium">{DELIVERY_AREA}</span>
                 </div>
              </div>

              <div className="mt-8">
                 <a href="#products" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all">
                    Order Now
                 </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://picsum.photos/id/360/800/600"
          alt="Beautiful flowers"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-transparent lg:via-rose-50/20"></div>
      </div>
    </div>
  );
};