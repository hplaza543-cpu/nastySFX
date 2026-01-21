import React from 'react';
import { X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from './Button';

const CartDrawer: React.FC = () => {
  const { items, removeFromCart, isCartOpen, setIsCartOpen, cartTotal, setView } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    setView('checkout');
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-gray-950 border-l border-white/10 h-full shadow-2xl flex flex-col slide-in-right">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
             <ShoppingBag className="w-5 h-5 text-indigo-400" />
             <h2 className="text-xl font-bold text-white">Your Cart</h2>
             <span className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded-full">{items.length}</span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
              <ShoppingBag className="w-12 h-12 text-gray-600" />
              <p className="text-gray-400">Your cart is empty.</p>
              <Button variant="outline" onClick={() => setIsCartOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-gray-900/50 p-3 rounded-xl border border-white/5">
                  <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-cover rounded-lg bg-gray-800" />
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div>
                      <h4 className="font-medium text-white text-sm line-clamp-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs mt-1">{item.features[0]}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-indigo-400 font-medium">₱{item.price.toLocaleString()}</span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-gray-900/50 backdrop-blur-md">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400">Total</span>
              <span className="text-2xl font-bold text-white">₱{cartTotal.toLocaleString()}</span>
            </div>
            <Button 
              variant="primary" 
              className="w-full justify-center" 
              onClick={handleCheckout}
            >
              Proceed to Checkout
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-center text-xs text-gray-600 mt-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Secure 256-bit SSL Encrypted Payment
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;