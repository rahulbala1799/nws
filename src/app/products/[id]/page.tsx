'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCart } from '@/lib/CartContext';

// Mock products data with high-quality images
const PRODUCTS = [
  {
    id: '1',
    name: 'Artisan Pizza Box',
    description: 'Elevate your pizza delivery with our premium artisan pizza boxes, featuring custom printing on all sides. Our boxes are crafted from food-grade materials and engineered to maintain temperature and freshness longer than standard packaging.',
    price: 0.75,
    category: 'pizza-boxes',
    minQuantity: 100,
    images: ['https://images.unsplash.com/photo-1583167671230-50976487b222?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Food-grade material', 'Custom printing', 'Heat retention technology', 'Stackable design', 'Moisture-resistant coating'],
    dimensions: '12" x 12" x 2"',
    material: 'Premium corrugated cardboard',
    recommended: ['2', '5']
  },
  {
    id: '2',
    name: 'Signature Pizza Box',
    description: 'Our signature collection features premium quality boxes with full-color printing and enhanced durability for an unforgettable unboxing experience. Perfect for high-end pizzerias looking to create a memorable impression.',
    price: 1.25,
    category: 'pizza-boxes',
    minQuantity: 50,
    images: ['https://images.unsplash.com/photo-1583167617348-1e3b6acab4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Thick corrugated material', 'Full-color printing', 'Premium finish', 'Enhanced ventilation', 'Luxury unboxing experience'],
    dimensions: '14" x 14" x 2"',
    material: 'Heavy-duty corrugated cardboard',
    recommended: ['1', '6']
  },
  {
    id: '3',
    name: 'Gourmet Burger Box',
    description: 'These elegant burger boxes are designed to keep your gourmet creations secure while enhancing presentation. The perfect choice for specialty burger restaurants that want to make a statement.',
    price: 0.50,
    category: 'burger-boxes',
    minQuantity: 200,
    images: ['https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Secure closure', 'Custom printing', 'Stackable design', 'Grease-resistant coating', 'Eco-friendly materials'],
    dimensions: '5" x 5" x 3"',
    material: 'Food-grade cardboard',
    recommended: ['4', '5']
  },
  {
    id: '4',
    name: 'Luxury Burger Box',
    description: 'Experience our high-end burger boxes with premium finish and customizable interior printing, perfect for upscale establishments. These boxes transform takeout into a luxury dining experience.',
    price: 0.95,
    category: 'burger-boxes',
    minQuantity: 100,
    images: ['https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Interior & exterior printing', 'Premium finish', 'Extra sturdy', 'Customizable inserts', 'Temperature retention'],
    dimensions: '6" x 6" x 4"',
    material: 'Premium cardboard',
    recommended: ['3', '6']
  },
  {
    id: '5',
    name: 'Designer Paper Bag',
    description: 'Eco-friendly paper bags with stunning designs, perfect for takeout and creating a memorable brand experience. These bags combine functionality with aesthetic appeal for an elevated customer experience.',
    price: 0.35,
    category: 'paper-bags',
    minQuantity: 300,
    images: ['https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Reinforced handles', 'Custom printing', 'Eco-friendly material', 'Moisture-resistant', 'Multiple size options'],
    dimensions: '8" x 5" x 10"',
    material: 'Kraft paper',
    recommended: ['7', '1']
  },
  {
    id: '6',
    name: 'Premium Shopping Bag',
    description: 'Heavy-duty paper bags with sophisticated design and superior strength, turning every purchase into a luxury experience. Ideal for high-end restaurants and specialty food shops.',
    price: 0.65,
    category: 'paper-bags',
    minQuantity: 150,
    images: ['https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Extra strong handles', 'Full-color printing', 'Water-resistant coating', 'Luxury finish', 'Reinforced bottom'],
    dimensions: '10" x 6" x 12"',
    material: 'Heavy-duty kraft paper',
    recommended: ['2', '8']
  },
  {
    id: '7',
    name: 'Custom Napkins',
    description: 'High-quality napkins customized with your logo or design, adding a touch of elegance to your customer experience. These napkins combine absorbency with a soft, luxurious feel.',
    price: 0.10,
    category: 'napkins',
    minQuantity: 500,
    images: ['https://images.unsplash.com/photo-1563885860652-cd1ba50e37c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Soft texture', 'Custom printing', 'Absorbent material', 'Eco-friendly options', 'Various color options'],
    dimensions: '6" x 6"',
    material: 'Soft tissue paper',
    recommended: ['8', '5']
  },
  {
    id: '8',
    name: 'Signature Napkins',
    description: 'Our signature napkins feature high-quality printing and premium feel, perfect for upscale restaurants and special events. Make a statement with these luxurious, highly absorbent napkins.',
    price: 0.25,
    category: 'napkins',
    minQuantity: 250,
    images: ['https://images.unsplash.com/photo-1606914770909-980f3daf4981?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Thick material', 'High-resolution printing', 'Embossed options available', 'Elegant presentation', 'Superior absorbency'],
    dimensions: '8" x 8"',
    material: 'Premium tissue paper',
    recommended: ['7', '6']
  }
];

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState<number>(0);
  const [notes, setNotes] = useState<string>('');
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'description' | 'details'>('description');
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  const product = PRODUCTS.find(p => p.id === params.id);
  const recommendedProducts = product 
    ? product.recommended.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean)
    : [];

  useEffect(() => {
    // Trigger animation when component mounts
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Product Not Found</h1>
          <p className="mt-4 text-gray-500">The product you&apos;re looking for doesn&apos;t exist.</p>
          <div className="mt-8">
            <Link 
              href="/products" 
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
            >
              Browse Our Collection
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setQuantity(Math.max(value, 0));
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 0));
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
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link href="/products" className="ml-2 text-gray-500 hover:text-gray-700">Products</Link>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-700">{product.name}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          {/* Product image */}
          <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="relative h-[600px] overflow-hidden rounded-3xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-amber-700/10 mix-blend-multiply z-10"></div>
              <Image
                src={product.images[0]} 
                alt={product.name}
                fill
                priority
                style={{ objectFit: "cover" }}
                className="animate-subtle-zoom" 
              />
            </div>

            {/* Product category */}
            <div className="mt-6 flex items-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
              <span className="ml-4 text-sm text-gray-500">SKU: {product.id.padStart(5, '0')}</span>
            </div>
          </div>

          {/* Product details */}
          <div className={`mt-10 lg:mt-0 lg:pl-10 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-baseline mt-2">
              <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
              <span className="ml-2 text-lg text-gray-500">per unit</span>
            </div>

            {/* Tabs for description and details */}
            <div className="mt-8">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`${
                      activeTab === 'description'
                        ? 'border-amber-500 text-amber-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md transition-colors duration-200`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`${
                      activeTab === 'details'
                        ? 'border-amber-500 text-amber-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md transition-colors duration-200`}
                  >
                    Product Details
                  </button>
                </nav>
              </div>

              <div className="mt-6">
                {activeTab === 'description' ? (
                  <div className="prose prose-amber max-w-none">
                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-md font-medium text-gray-900">Dimensions</h3>
                      <p className="mt-2 text-gray-600">{product.dimensions}</p>
                    </div>
                    <div>
                      <h3 className="text-md font-medium text-gray-900">Material</h3>
                      <p className="mt-2 text-gray-600">{product.material}</p>
                    </div>
                    <div>
                      <h3 className="text-md font-medium text-gray-900">Features</h3>
                      <ul className="mt-2 space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <svg className="h-5 w-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order form */}
            <div className="mt-10 space-y-6">
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                <div className="flex flex-col space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                        Quantity
                      </label>
                      <span className="text-xs text-amber-600">Minimum order: {product.minQuantity}</span>
                    </div>
                    <div className="flex rounded-md shadow-sm">
                      <button
                        type="button"
                        onClick={decrementQuantity}
                        className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 hover:bg-gray-100"
                      >
                        <span className="sr-only">Decrease</span>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={quantity || ''}
                        onChange={handleQuantityChange}
                        className="focus:ring-amber-500 focus:border-amber-500 block w-full text-center border-gray-300 sm:text-sm"
                        placeholder={`${product.minQuantity}`}
                      />
                      <button
                        type="button"
                        onClick={incrementQuantity}
                        className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 hover:bg-gray-100"
                      >
                        <span className="sr-only">Increase</span>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                      Special Instructions
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                      placeholder="Any special requirements or instructions"
                    />
                  </div>

                  {quantity >= product.minQuantity && (
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between text-base font-medium">
                        <span className="text-gray-900">Total</span>
                        <span className="text-amber-600">${calculateTotal()}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {!addedToCart ? (
                <button
                  type="button"
                  onClick={addToCart}
                  disabled={quantity < product.minQuantity}
                  className={`w-full bg-gradient-to-r from-amber-500 to-amber-600 border border-transparent rounded-xl py-4 px-8 flex items-center justify-center text-base font-medium text-white hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300 ${
                    quantity < product.minQuantity ? 'opacity-50 cursor-not-allowed' : 'shadow-lg hover:shadow-amber-500/30'
                  }`}
                >
                  {quantity < product.minQuantity ? `Minimum Order: ${product.minQuantity}` : 'Add to Cart'}
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-xl bg-green-50 p-4 border border-green-100">
                    <div className="flex">
                      <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">
                          Added to cart successfully!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setAddedToCart(false)}
                      className="flex-1 bg-white py-3 px-4 border border-gray-300 rounded-xl shadow-sm text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300"
                    >
                      Continue Shopping
                    </button>
                    <button
                      type="button"
                      onClick={goToCart}
                      className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 border border-transparent rounded-xl py-3 px-4 flex items-center justify-center text-base font-medium text-white hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-amber-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300"
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

      {/* Recommended products section */}
      {recommendedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {recommendedProducts.map((relatedProduct) => (
              relatedProduct && (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group">
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-amber-700/20 mix-blend-multiply z-10"></div>
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{relatedProduct.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">Starting at ${relatedProduct.price.toFixed(2)}/unit</p>
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 