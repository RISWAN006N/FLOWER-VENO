import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { AIMessageGenerator } from './components/AIMessageGenerator';
import { Product, CartItem } from './types';
import { COMPANY_PHONE, DELIVERY_AREA } from './constants';
import { Phone, MapPin, X, Trash2 } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Close cart when pressing Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header cartCount={cart.reduce((a, b) => a + b.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />

      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AIMessageGenerator />
                
                <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center border border-gray-100">
                     <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">Why Choose Flower Veno?</h2>
                     <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="p-2 bg-rose-100 rounded-lg text-rose-600 mt-1">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Local Madiwala Experts</h3>
                                <p className="text-gray-500 text-sm">We know the streets. We deliver within 4km radius faster than anyone else.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                             <div className="p-2 bg-rose-100 rounded-lg text-rose-600 mt-1">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Direct Contact</h3>
                                <p className="text-gray-500 text-sm">Call us directly at {COMPANY_PHONE} for custom orders.</p>
                            </div>
                        </li>
                     </ul>
                </div>
            </div>
        </div>

        <ProductList onAddToCart={addToCart} />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">FLOWER VENO</h3>
              <p className="text-gray-400 text-sm">
                Bringing smiles to Madiwala, one bouquet at a time. Fresh flowers, fast delivery, and heartfelt moments.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-rose-400">Contact Us</h4>
              <p className="text-gray-300 mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4" /> {COMPANY_PHONE}
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {DELIVERY_AREA}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-rose-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#products" className="hover:text-white">Shop Flowers</a></li>
                <li><a href="#" className="hover:text-white">Track Order</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Flower Veno. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsCartOpen(false)} />
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <div className="w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl">
                <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                    <button
                      type="button"
                      className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setIsCartOpen(false)}
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="mt-8">
                    {cart.length === 0 ? (
                      <div className="text-center py-12">
                        <p className="text-gray-500">Your cart is empty.</p>
                        <button 
                            onClick={() => setIsCartOpen(false)}
                            className="mt-4 text-rose-600 font-medium hover:text-rose-500"
                        >
                            Continue Shopping
                        </button>
                      </div>
                    ) : (
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cart.map((item) => (
                          <li key={item.id} className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-center object-cover"
                              />
                            </div>
                            <div className="ml-4 flex-1 flex flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>{item.name}</h3>
                                  <p className="ml-4">₹{item.price * item.quantity}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                              </div>
                              <div className="flex-1 flex items-end justify-between text-sm">
                                <div className="flex items-center gap-2">
                                   <button 
                                     onClick={() => updateQuantity(item.id, -1)}
                                     className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                   >
                                     -
                                   </button>
                                   <p className="text-gray-500">Qty {item.quantity}</p>
                                   <button 
                                     onClick={() => updateQuantity(item.id, 1)}
                                     className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                   >
                                     +
                                   </button>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => removeFromCart(item.id)}
                                  className="font-medium text-rose-600 hover:text-rose-500 flex items-center gap-1"
                                >
                                  <Trash2 className="w-4 h-4" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {cart.length > 0 && (
                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>₹{cartTotal}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping calculated at checkout.</p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-600 hover:bg-rose-700"
                        onClick={(e) => {
                            e.preventDefault();
                            alert(`Checkout functionality coming soon!\nCall ${COMPANY_PHONE} to order now.`);
                        }}
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          className="text-rose-600 font-medium hover:text-rose-500"
                          onClick={() => setIsCartOpen(false)}
                        >
                          Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;