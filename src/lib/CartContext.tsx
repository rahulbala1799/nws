'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the CartItem type
export type CartItem = {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  customDesign: string;
  notes: string;
  unitPrice: number;
  totalPrice: number;
};

// Define the CartContext type
type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

// Create the CartContext
const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  totalItems: 0,
  totalPrice: 0,
});

// Create a custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// Create the CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setItems(parsedCart);
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
      }
    }
  }, []);

  // Update localStorage and calculate totals when cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
    
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const priceTotal = items.reduce((total, item) => total + item.totalPrice, 0);
    
    setTotalItems(itemCount);
    setTotalPrice(priceTotal);
  }, [items]);

  // Add an item to the cart
  const addItem = (item: CartItem) => {
    // Check if the item already exists in the cart by productId
    const existingItemIndex = items.findIndex((i) => i.productId === item.productId);
    
    if (existingItemIndex !== -1) {
      // If item exists, update it
      const updatedItems = [...items];
      const existingItem = updatedItems[existingItemIndex];
      
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + item.quantity,
        totalPrice: (existingItem.quantity + item.quantity) * existingItem.unitPrice,
      };
      
      updatedItems[existingItemIndex] = updatedItem;
      setItems(updatedItems);
    } else {
      // If item doesn't exist, add it
      setItems([...items, item]);
    }
  };

  // Remove an item from the cart
  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Update an item's quantity
  const updateQuantity = (id: string, quantity: number) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity,
          totalPrice: quantity * item.unitPrice,
        };
      }
      return item;
    });
    
    setItems(updatedItems);
  };

  // Clear the cart
  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}; 