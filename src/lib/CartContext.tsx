'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Cart item type
export type CartItem = {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  customDesign?: File | null;
  notes?: string;
  unitPrice: number;
  totalPrice: number;
};

// Cart context type
type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

// Create context with default values
const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  totalItems: 0,
  totalPrice: 0,
});

// Hook to use the cart context
export const useCart = () => useContext(CartContext);

// Cart provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        // We need to filter out any items that have customDesign as it can't be serialized
        // In a real app, you would upload the file and store a reference instead
        const validItems = parsedCart.map((item: CartItem) => ({
          ...item,
          customDesign: null, // Reset customDesign since it can't be serialized
        }));
        setItems(validItems);
      } catch (error) {
        console.error('Failed to parse cart from localStorage', error);
      }
    }
  }, []);

  // Update localStorage when cart changes
  useEffect(() => {
    if (items.length > 0) {
      // We need to create a version of the cart that can be serialized to JSON
      const serializableItems = items.map(item => ({
        ...item,
        customDesign: null, // Remove File objects which can't be serialized
      }));
      localStorage.setItem('cart', JSON.stringify(serializableItems));
    } else {
      localStorage.removeItem('cart');
    }

    // Update totals
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const priceSum = items.reduce((total, item) => total + item.totalPrice, 0);
    
    setTotalItems(itemCount);
    setTotalPrice(priceSum);
  }, [items]);

  // Add an item to the cart
  const addItem = (item: Omit<CartItem, 'id'>) => {
    setItems(prevItems => {
      // Generate a unique ID for the new item
      const id = `${item.productId}-${Date.now()}`;
      const newItem = { ...item, id, totalPrice: item.unitPrice * item.quantity };
      return [...prevItems, newItem as CartItem];
    });
  };

  // Remove an item from the cart
  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Update an item's quantity
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity, totalPrice: item.unitPrice * quantity } 
          : item
      )
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setItems([]);
    localStorage.removeItem('cart');
  };

  const contextValue = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
} 