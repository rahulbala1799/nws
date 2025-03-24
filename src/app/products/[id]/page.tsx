'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCart } from '@/lib/CartContext';

// Mock products data (this would come from the database in a real app)
const PRODUCTS = [
  {
    id: '1',
    name: 'Standard Pizza Box',
    description: 'Standard size pizza box with customizable printing on all sides.',
    price: 0.75,
    category: 'pizza-boxes',
    minQuantity: 100,
    images: ['/images/pizza-box.jpg'],
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
    images: ['/images/pizza-box-premium.jpg'],
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
    images: ['/images/burger-box.jpg'],
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
    images: ['/images/burger-box-premium.jpg'],
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
    images: ['/images/paper-bag.jpg'],
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
    images: ['/images/paper-bag-premium.jpg'],
    features: ['Extra strong handles', 'Full-color printing', 'Water-resistant coating'],
    dimensions: '10" x 6" x 12"',
    material: 'Heavy-duty kraft paper'
  },
  {
    id: '7',
    name: 'Standard Napkins',
    description: 'High-quality napkins customized with your logo or design.',
    price: 0.10,
    category: 'premium-napkins',
    minQuantity: 500,
    images: ['/images/napkin.jpg'],
    features: ['Soft texture', 'Custom printing', 'Absorbent material'],
    dimensions: '6" x 6"',
    material: 'Soft tissue paper'
  },
  {
    id: '8',
    name: 'Premium Napkins',
    description: 'Luxury napkins with high-quality printing and premium feel.',
    price: 0.25,
    category: 'premium-napkins',
    minQuantity: 250,
    images: ['/images/napkin-premium.jpg'],
    features: ['Thick material', 'High-resolution printing', 'Embossed options available'],
    dimensions: '8" x 8"',
    material: 'Premium tissue paper'
  }
];

export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === String(id));
  const router = useRouter();
  const { addItem } = useCart();
  
  const [quantity, setQuantity] = useState(product?.minQuantity || 100);
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [notes, setNotes] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Product Not Found</h1>
          <p className="mt-4 text-gray-500">The product you're looking for doesn't exist.</p>
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDesignFile(e.target.files[0]);
    }
  };

  const calculateTotal = () => {
    return (product.price * quantity).toFixed(2);
  };

  const addToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.images[0],
      customDesign: designFile,
      notes: notes,
      unitPrice: product.price,
      totalPrice: product.price * quantity
    });
    
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
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
                  <li>Minimum Order: {product.minQuantity} units</li>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Order customization form */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-lg font-medium text-gray-900">Customize Your Order</h2>
              
              <div className="mt-4 space-y-6">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Quantity (Minimum: {product.minQuantity})
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={product.minQuantity}
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="design" className="block text-sm font-medium text-gray-700">
                    Upload Design File (Optional)
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      type="file"
                      id="design"
                      name="design"
                      accept=".jpg,.jpeg,.png,.pdf,.ai"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Accepted formats: JPG, PNG, PDF, AI
                  </p>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                    Special Instructions (Optional)
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Total and add to cart */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-900">Total</span>
                <span className="text-2xl font-bold text-gray-900">${calculateTotal()}</span>
              </div>
              
              <div className="mt-6 flex flex-col space-y-4">
                {addedToCart ? (
                  <div className="flex flex-col space-y-4">
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                      <span className="block sm:inline">Product added to cart successfully!</span>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setAddedToCart(false)}
                        className="flex-1 bg-white border border-gray-300 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Continue Shopping
                      </button>
                      <button
                        type="button"
                        onClick={goToCart}
                        className="flex-1 bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        View Cart
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={addToCart}
                    className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 