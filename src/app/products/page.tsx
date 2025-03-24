'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

// Mock products data with high-quality images instead of placeholders
const PRODUCTS = [
  {
    id: '1',
    name: 'Eco-Friendly Burger Box',
    description: 'Made from sustainable bagasse with custom branding options. No hidden charges, MOQ from 200 Units.',
    price: 0.75,
    category: 'burger-boxes',
    minQuantity: 200,
    images: ['https://images.unsplash.com/photo-1559305616-3f99cd43e353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'],
    features: ['100% Bagasse material', 'Custom branding', 'Sustainable', 'Biodegradable', 'No plate charges'],
    dimensions: '15cm x 15cm x 8cm',
    material: 'Bagasse (sugarcane fiber)'
  },
  {
    id: '2',
    name: 'Premium Meal Box',
    description: 'Multi-compartment meal box made from eco-friendly bagasse. No hidden charges, MOQ from 200 Units.',
    price: 1.25,
    category: 'meal-boxes',
    minQuantity: 200,
    images: ['https://images.unsplash.com/photo-1603105029360-5c92f0bd55c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'],
    features: ['Multi-compartment design', 'Custom printing', 'Eco-friendly material', 'Oil-resistant', 'No hidden charges'],
    dimensions: '23cm x 15cm x 7.5cm',
    material: 'Premium bagasse'
  },
  {
    id: '3',
    name: 'Clamshell Burger Container',
    description: 'Hinged design for optimal burger presentation. No hidden charges, MOQ from 200 Units.',
    price: 0.85,
    category: 'burger-boxes',
    minQuantity: 300,
    images: ['https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'],
    features: ['Secure closure', 'Custom branding', 'Sustainable bagasse', 'Leakproof design', 'Microwavable'],
    dimensions: '15cm x 15cm x 7cm',
    material: '100% Bagasse'
  },
  {
    id: '4',
    name: 'Large Meal Box',
    description: 'Extra capacity for family meals and larger portions. No hidden charges, MOQ from 200 Units.',
    price: 1.45,
    category: 'meal-boxes',
    minQuantity: 200,
    images: ['https://images.unsplash.com/photo-1583967395257-43631d0baacd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'],
    features: ['Extra large capacity', 'Full-color printing', 'Heat retention', 'Stackable design', 'No plate charges'],
    dimensions: '28cm x 18cm x 8cm',
    material: 'Premium bagasse'
  },
  {
    id: '5',
    name: 'Square Meal Container',
    description: 'Modern design with excellent heat retention. No hidden charges, MOQ from 200 Units.',
    price: 1.15,
    category: 'meal-boxes',
    minQuantity: 250,
    images: ['https://images.unsplash.com/photo-1595424515350-1314a8ababa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'],
    features: ['Square design', 'Custom branding', 'Compostable material', 'Secure lid', 'Oil-resistant'],
    dimensions: '18cm x 18cm x 6cm',
    material: 'Sustainable bagasse'
  },
  {
    id: '6',
    name: 'Mini Burger Box',
    description: 'Perfect for sliders and small burgers. No hidden charges, MOQ from 200 Units.',
    price: 0.65,
    category: 'burger-boxes',
    minQuantity: 400,
    images: ['https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'],
    features: ['Compact size', 'Full-color printing', 'Water-resistant coating', 'Eco-friendly', 'No hidden charges'],
    dimensions: '10cm x 10cm x 6cm',
    material: 'Bagasse'
  },
  {
    id: '7',
    name: 'Three-Compartment Meal Box',
    description: 'Ideal for meals with multiple components. No hidden charges, MOQ from 200 Units.',
    price: 1.35,
    category: 'meal-boxes',
    minQuantity: 300,
    images: ['https://images.unsplash.com/photo-1609501676725-66de4992731b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'],
    features: ['Three compartments', 'Custom printing', 'Microwave safe', 'Fully compostable', 'Secure closure'],
    dimensions: '24cm x 20cm x 7cm',
    material: 'Premium bagasse'
  },
  {
    id: '8',
    name: 'Premium Burger Tray',
    description: 'Upscale presentation for gourmet burgers. No hidden charges, MOQ from 200 Units.',
    price: 0.95,
    category: 'burger-boxes',
    minQuantity: 350,
    images: ['https://images.unsplash.com/photo-1610614819513-58e34989e371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'],
    features: ['Open-top design', 'High-resolution branding', 'Stackable', 'Grease-resistant', 'From Irish supplier'],
    dimensions: '16cm x 16cm x 4cm',
    material: 'Sustainable bagasse'
  }
];

// Product type definition
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  minQuantity: number;
  images: string[];
  features: string[];
  dimensions: string;
  material: string;
};

// Categories for filtering
const categories = [
  { id: 'burger-boxes', name: 'Burger Boxes' },
  { id: 'meal-boxes', name: 'Meal Boxes' }
];

function ProductList() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [sortOption, setSortOption] = useState('featured');
  const [hoverProduct, setHoverProduct] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, this would be an API call to fetch products
    setProducts(PRODUCTS);
    
    // Initialize filtered products based on category parameter
    if (categoryParam) {
      setFilteredProducts(PRODUCTS.filter(product => product.category === categoryParam));
    } else {
      setFilteredProducts(PRODUCTS);
    }
  }, [categoryParam]);

  // Handle category filtering
  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(category);
    
    if (category) {
      setFilteredProducts(products.filter(product => product.category === category));
    } else {
      setFilteredProducts(products);
    }
  };

  // Handle sorting
  const handleSort = (sortBy: string) => {
    setSortOption(sortBy);
    const sorted = [...filteredProducts];
    
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // 'featured' - no sorting, use default
        break;
    }
    
    setFilteredProducts(sorted);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner */}
      <div 
        className="relative bg-cover bg-center h-[40vh]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Products</h1>
            <p className="text-xl text-white/90 mb-4">
              Premium bagasse packaging solutions from Ireland&apos;s leading eco-friendly supplier
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">No hidden charges</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">7-10 day shipping</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">MOQ from 200 units</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key benefits bar */}
        <div className="py-6 my-6 bg-amber-50 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-center px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium">Irish-Based Supplier</span>
            </div>
            <div className="flex items-center justify-center px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Ships in 7-10 Days</span>
            </div>
            <div className="flex items-center justify-center px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-sm font-medium">No Hidden Charges</span>
            </div>
            <div className="flex items-center justify-center px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span className="text-sm font-medium">MOQ from 200 Units</span>
            </div>
          </div>
        </div>

        <div className="py-16">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-12">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleCategoryFilter(null)}
                className={`px-5 py-2 rounded-full transition-all duration-300 text-sm ${
                  !activeCategory 
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-200' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryFilter(category.id)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 text-sm ${
                    activeCategory === category.id 
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-200' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="relative inline-block">
              <select 
                value={sortOption}
                onChange={(e) => handleSort(e.target.value)}
                className="bg-gray-50 border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group"
                onMouseEnter={() => setHoverProduct(product.id)}
                onMouseLeave={() => setHoverProduct(null)}
              >
                <div className="relative h-[350px] md:h-[400px] perspective-1000 transition-all duration-700">
                  <div className={`relative w-full h-full rounded-2xl overflow-hidden transform transition-all duration-700 card-3d ${hoverProduct === product.id ? 'scale-105' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-amber-700/20 mix-blend-multiply z-10"></div>
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-gray-200 text-sm">Min order: {product.minQuantity}</p>
                        <p className="text-amber-400 text-lg font-bold">${product.price.toFixed(2)}</p>
                      </div>
                      <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-gray-300 text-sm line-clamp-2 mb-4">{product.description}</p>
                        <Link href={`/products/${product.id}`}>
                          <span className="inline-block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-3 rounded-lg font-medium shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:from-amber-600 hover:to-amber-700">
                            View Details
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-1">No products found</h3>
              <p className="text-gray-500">Try changing your filters or check back later for new products</p>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a custom quote on your sustainable packaging needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Get a Quote
            </Link>
            <a href="tel:+35312345678" className="btn-secondary">
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Wrap the component with Suspense boundary
export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-700">Loading exquisite products...</p>
        </div>
      </div>
    }>
      <ProductList />
    </Suspense>
  );
} 