import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Project } from '../types';

type View = 'home' | 'checkout';

interface CartContextType {
  items: Project[];
  addToCart: (product: Project) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartTotal: number;
  view: View;
  setView: (view: View) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Project[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [view, setView] = useState<View>('home');

  const addToCart = (product: Project) => {
    // Avoid duplicates for digital products
    if (!items.find(item => item.id === product.id)) {
      setItems(prev => [...prev, product]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartTotal = items.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      cartTotal,
      view,
      setView
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};