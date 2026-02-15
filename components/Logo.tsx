import React from 'react';
import { Flower } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-rose-100 p-2 rounded-full">
        <Flower className="w-8 h-8 text-rose-600" />
      </div>
      <div>
        <h1 className="text-2xl font-serif font-bold text-gray-900 tracking-wide">
          FLOWER <span className="text-rose-600">VENO</span>
        </h1>
        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Madiwala Delivery</p>
      </div>
    </div>
  );
};