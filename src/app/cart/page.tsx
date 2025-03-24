'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/CartContext';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [checkoutStarted, setCheckoutStarted] = useState(false);

  const handleQuantityChange = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const handleRemoveItem = (id: string) => {
    removeItem(id);
  };

  const handleCheckout = () => {
    // In a real app, we would handle the checkout process here
    setCheckoutStarted(true);
    setTimeout(() => {
      router.push('/checkout');
    }, 1000);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Your Cart</h1>
          <p className="mt-4 text-gray-500">Your cart is currently empty.</p>
          <div className="mt-6">
            <Link href="/products" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Shopping Cart</h1>

        <div className="mt-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul role="list" className="divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="px-4 py-6 sm:px-6">
                  <div className="flex items-center sm:items-start">
                    <div className="flex-shrink-0 h-24 w-24 rounded-md overflow-hidden sm:h-32 sm:w-32">
                      <div className="relative h-full w-full">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="object-center object-cover"
                        />
                      </div>
                    </div>

                    <div className="ml-6 flex-1 flex flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-lg font-medium text-gray-900">
                            <Link href={`/products/${item.productId}`} className="hover:text-blue-600">
                              {item.name}
                            </Link>
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">Unit Price: ${item.unitPrice.toFixed(2)}</p>
                          {item.notes && (
                            <p className="mt-1 text-sm text-gray-500">Notes: {item.notes}</p>
                          )}
                        </div>

                        <div className="ml-6 flex-shrink-0 flex flex-col sm:flex-row sm:items-end">
                          <p className="ml-4 text-base font-medium text-gray-900">${item.totalPrice.toFixed(2)}</p>
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(item.id)}
                            className="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 sm:mt-auto">
                        <label htmlFor={`quantity-${item.id}`} className="sr-only">
                          Quantity, {item.name}
                        </label>
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-1 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Decrease quantity</span>
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <input
                            id={`quantity-${item.id}`}
                            name={`quantity-${item.id}`}
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                            className="mx-2 w-16 text-center sm:text-sm border-gray-300 rounded-md"
                          />
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-1 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Increase quantity</span>
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:ml-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            
            <div className="mt-6">
              <button
                type="button"
                onClick={handleCheckout}
                disabled={checkoutStarted}
                className={`w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${checkoutStarted ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {checkoutStarted ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Checkout'
                )}
              </button>
            </div>
            
            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-blue-600 font-medium hover:text-blue-500"
                >
                  Clear Cart
                </button>
                {' or '}
                <Link href="/products" className="text-blue-600 font-medium hover:text-blue-500">
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 