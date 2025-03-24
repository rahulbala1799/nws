'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCart } from '@/lib/CartContext';

// Mock products data with placeholder images
const PRODUCTS = [
  {
    id: '1',
    name: 'Standard Pizza Box',
    description: 'Standard size pizza box with customizable printing on all sides.',
    price: 0.75,
    category: 'pizza-boxes',
    minQuantity: 100,
    images: ['https://placehold.co/600x600/e2e8f0/1e293b?text=Pizza+Box'],
    features: ['Food-grade material', 'Custom printing', 'Various sizes available'],
    dimensions: '12" x 12" x 2"',
    material: 'Corrugated cardboard'
  },
  {
    id: '2',
    name: 'Premium Pizza Box',
    description: 'Premium quality pizza box with full-color printing and enhanced durability.',
    price: 1.25,
    category: 'pizza-boxes',
    minQuantity: 50,
    images: ['https://placehold.co/600x600/e2e8f0/1e293b?text=Premium+Pizza+Box'],
    features: ['Thick corrugated material', 'Full-color printing', 'Premium finish'],
    dimensions: '14" x 14" x 2"',
    material: 'Heavy-duty corrugated cardboard'
  },
  {
    id: '3',
    name: 'Standard Burger Box',
    description: 'Compact burger box designed to keep burgers secure and presentable.',
    price: 0.50,
    category: 'burger-boxes',
    minQuantity: 200,
    images: ['https://placehold.co/600x600/e2e8f0/1e293b?text=Burger+Box'],
    features: ['Secure closure', 'Custom printing', 'Stackable design'],
    dimensions: '5" x 5" x 3"',
    material: 'Food-grade cardboard'
  },
  {
    id: '4',
    name: 'Premium Burger Box',
    description: 'High-end burger box with premium finish and customizable interior printing.',
    price: 0.95,
    category: 'burger-boxes',
    minQuantity: 100,
    images: ['https://placehold.co/600x600/e2e8f0/1e293b?text=Premium+Burger+Box'],
    features: ['Interior & exterior printing', 'Premium finish', 'Extra sturdy'],
    dimensions: '6" x 6" x 4"',
    material: 'Premium cardboard'
  },
  {
    id: '5',
    name: 'Standard Paper Bag',
    description: 'Eco-friendly paper bag perfect for takeout and small orders.',
    price: 0.35,
    category: 'paper-bags',
    minQuantity: 300,
    images: ['https://placehold.co/600x600/e2e8f0/1e293b?text=Paper+Bag'],
    features: ['Reinforced handles', 'Custom printing', 'Eco-friendly material'],
    dimensions: '8" x 5" x 10"',
    material: 'Kraft paper'
  },
  {
    id: '6',
    name: 'Premium Paper Bag',
    description: 'Heavy-duty paper bag with premium finish and superior strength.',
    price: 0.65,
    category: 'paper-bags',
    minQuantity: 150,
    images: ['https://placehold.co/600x600/e2e8f0/1e293b?text=Premium+Paper+Bag'],
    features: ['Extra strong handles', 'Full-color printing', 'Water-resistant coating'],
    dimensions: '10" x 6" x 12"',
    material: 'Heavy-duty kraft paper'
  },
  {
    id: '7',
    name: 'Standard Napkins',
    description: 'High-quality napkins customized with your logo or design.',
    price: 0.10,
    category: 'napkins',
    minQuantity: 500,
    images: ['https://placehold.co/600x600/e2e8f0/1e293b?text=Napkins'],
    features: ['Soft texture', 'Custom printing', 'Absorbent material'],
    dimensions: '6" x 6"',
    material: 'Soft tissue paper'
  },
  {
    id: '8',
    name: 'Premium Napkins',
    description: 'Luxury napkins with high-quality printing and premium feel.',
    price: 0.25,
    category: 'napkins',
    minQuantity: 250,
    images: ['https://placehold.co/600x600/e2e8f0/1e293b?text=Premium+Napkins'],
    features: ['Thick material', 'High-resolution printing', 'Embossed options available'],
    dimensions: '8" x 8"',
    material: 'Premium tissue paper'
  }
];

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState<number>(0);
  const [notes, setNotes] = useState<string>('');
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const product = PRODUCTS.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Product Not Found</h1>
          <p className="mt-4 text-gray-500">The product you&apos;re looking for doesn&apos;t exist.</p>
          <div className="mt-6">
            <Link href="/products" className="text-blue-600 hover:text-blue-500">
              Back to products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= product.minQuantity) {
      setQuantity(value);
    }
  };

  const calculateTotal = () => {
    return (product.price * quantity).toFixed(2);
  };

  const addToCart = () => {
    if (!product) return;
    
    if (quantity < product.minQuantity) {
      alert(`Minimum order quantity is ${product.minQuantity}`);
      return;
    }

    const totalPrice = quantity * product.price;

    addItem({
      id: Date.now().toString(),
      productId: product.id,
      name: product.name,
      price: totalPrice,
      quantity: quantity,
      image: product.images[0],
      customDesign: '',
      notes: notes,
      unitPrice: product.price,
      totalPrice: totalPrice
    });

    setAddedToCart(true);
  };

  const goToCart = () => {
    router.push('/cart');
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product image */}
          <div className="lg:max-w-lg lg:self-end">
            <div className="aspect-square rounded-lg overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src={product.images[0]} 
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product details */}
          <div className="mt-10 lg:mt-0 lg:col-start-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${product.price.toFixed(2)}/unit</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-900">{product.description}</p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-lg font-medium text-gray-900">Product Details</h2>

              <div className="mt-4 prose prose-sm text-gray-500">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Dimensions: {product.dimensions}</li>
                  <li>Material: {product.material}</li>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Minimum Order Quantity: {product.minQuantity}</h3>
                <div className="mt-4">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min={product.minQuantity}
                    value={quantity || ''}
                    onChange={handleQuantityChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder={`Min: ${product.minQuantity}`}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Special Instructions
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Any special requirements or instructions"
                />
              </div>

              {quantity >= product.minQuantity && (
                <div className="mt-4 bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-gray-900">Total</span>
                    <span className="text-base font-medium text-gray-900">${calculateTotal()}</span>
                  </div>
                </div>
              )}

              {!addedToCart ? (
                <button
                  type="button"
                  onClick={addToCart}
                  className="mt-8 w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add to Cart
                </button>
              ) : (
                <div className="mt-6">
                  <div className="rounded-md bg-green-50 p-4">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">
                          Product added to cart!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setAddedToCart(false)}
                      className="flex-1 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Continue Shopping
                    </button>
                    <button
                      type="button"
                      onClick={goToCart}
                      className="flex-1 bg-blue-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      View Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 