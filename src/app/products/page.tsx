'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

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

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [sortOption, setSortOption] = useState('featured');

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

  // Categories for filtering
  const categories = [
    { id: 'pizza-boxes', name: 'Pizza Boxes' },
    { id: 'burger-boxes', name: 'Burger Boxes' },
    { id: 'paper-bags', name: 'Paper Bags' },
    { id: 'premium-napkins', name: 'Premium Napkins' }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-24 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Products</h1>
          <p className="mt-4 text-base text-gray-500">
            Browse our selection of custom food packaging products
          </p>
        </div>

        <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <h2 className="sr-only">Filters</h2>

            <div className="hidden lg:block">
              <div className="border-b border-gray-200 py-6">
                <h3 className="text-sm font-medium text-gray-900">Categories</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <button
                      onClick={() => handleCategoryFilter(null)}
                      className={`text-sm ${!activeCategory ? 'font-medium text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryFilter(category.id)}
                        className={`text-sm ${activeCategory === category.id ? 'font-medium text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative inline-block text-left">
                  <select 
                    value={sortOption}
                    onChange={(e) => handleSort(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                  </select>
                </div>
              </div>

              <div className="lg:hidden">
                <select 
                  value={activeCategory || ''}
                  onChange={(e) => handleCategoryFilter(e.target.value === '' ? null : e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">All Products</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-square rounded-md overflow-hidden group-hover:opacity-75">
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
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href={`/products/${product.id}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Min: {product.minQuantity} units</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}/unit</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 