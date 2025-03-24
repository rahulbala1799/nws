'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Cart item type
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

// Cart context type
type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
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
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
      }
    }
  }, []);

  // Update localStorage when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart');
    }

    // Calculate total items and price
    let items = 0;
    let price = 0;

    cart.forEach(item => {
      items += item.quantity;
      price += item.totalPrice;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart]);

  // Add an item to the cart
  const addItem = (item: CartItem) => {
    setCart(prevCart => {
      // Check if item already exists in cart
      const existingItemIndex = prevCart.findIndex(i => 
        i.productId === item.productId && 
        i.customDesign === item.customDesign && 
        i.notes === item.notes
      );

      if (existingItemIndex !== -1) {
        // Update existing item
        const updatedCart = [...prevCart];
        const existingItem = updatedCart[existingItemIndex];
        
        const newQuantity = existingItem.quantity + item.quantity;
        const newTotalPrice = existingItem.unitPrice * newQuantity;
        
        updatedCart[existingItemIndex] = {
          ...existingItem,
          quantity: newQuantity,
          totalPrice: newTotalPrice,
        };
        
        return updatedCart;
      } else {
        // Add new item
        return [...prevCart, item];
      }
    });
  };

  // Remove an item from the cart
  const removeItem = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Update an item's quantity
  const updateQuantity = (id: string, quantity: number) => {
    setCart(prevCart => 
      prevCart.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity,
            totalPrice: item.unitPrice * quantity,
          };
        }
        return item;
      })
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{ 
      items: cart, 
      addItem, 
      removeItem, 
      updateQuantity, 
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}; 