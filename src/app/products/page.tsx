'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Mock products data with high-quality images instead of placeholders
const PRODUCTS = [
  {
    id: '1',
    name: 'Artisan Pizza Box',
    description: 'Elevate your pizza delivery with our premium artisan pizza boxes, featuring custom printing on all sides.',
    price: 0.75,
    category: 'pizza-boxes',
    minQuantity: 100,
    images: ['https://images.unsplash.com/photo-1583167671230-50976487b222?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Food-grade material', 'Custom printing', 'Heat retention technology'],
    dimensions: '12" x 12" x 2"',
    material: 'Premium corrugated cardboard'
  },
  {
    id: '2',
    name: 'Signature Pizza Box',
    description: 'Our signature collection features premium quality boxes with full-color printing and enhanced durability for an unforgettable unboxing experience.',
    price: 1.25,
    category: 'pizza-boxes',
    minQuantity: 50,
    images: ['https://images.unsplash.com/photo-1583167617348-1e3b6acab4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Thick corrugated material', 'Full-color printing', 'Premium finish'],
    dimensions: '14" x 14" x 2"',
    material: 'Heavy-duty corrugated cardboard'
  },
  {
    id: '3',
    name: 'Gourmet Burger Box',
    description: 'These elegant burger boxes are designed to keep your gourmet creations secure while enhancing presentation.',
    price: 0.50,
    category: 'burger-boxes',
    minQuantity: 200,
    images: ['https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Secure closure', 'Custom printing', 'Stackable design'],
    dimensions: '5" x 5" x 3"',
    material: 'Food-grade cardboard'
  },
  {
    id: '4',
    name: 'Luxury Burger Box',
    description: 'Experience our high-end burger boxes with premium finish and customizable interior printing, perfect for upscale establishments.',
    price: 0.95,
    category: 'burger-boxes',
    minQuantity: 100,
    images: ['https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Interior & exterior printing', 'Premium finish', 'Extra sturdy'],
    dimensions: '6" x 6" x 4"',
    material: 'Premium cardboard'
  },
  {
    id: '5',
    name: 'Designer Paper Bag',
    description: 'Eco-friendly paper bags with stunning designs, perfect for takeout and creating a memorable brand experience.',
    price: 0.35,
    category: 'paper-bags',
    minQuantity: 300,
    images: ['https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Reinforced handles', 'Custom printing', 'Eco-friendly material'],
    dimensions: '8" x 5" x 10"',
    material: 'Kraft paper'
  },
  {
    id: '6',
    name: 'Premium Shopping Bag',
    description: 'Heavy-duty paper bags with sophisticated design and superior strength, turning every purchase into a luxury experience.',
    price: 0.65,
    category: 'paper-bags',
    minQuantity: 150,
    images: ['https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Extra strong handles', 'Full-color printing', 'Water-resistant coating'],
    dimensions: '10" x 6" x 12"',
    material: 'Heavy-duty kraft paper'
  },
  {
    id: '7',
    name: 'Custom Napkins',
    description: 'High-quality napkins customized with your logo or design, adding a touch of elegance to your customer experience.',
    price: 0.10,
    category: 'napkins',
    minQuantity: 500,
    images: ['https://images.unsplash.com/photo-1563885860652-cd1ba50e37c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Soft texture', 'Custom printing', 'Absorbent material'],
    dimensions: '6" x 6"',
    material: 'Soft tissue paper'
  },
  {
    id: '8',
    name: 'Signature Napkins',
    description: 'Our signature napkins feature high-quality printing and premium feel, perfect for upscale restaurants and special events.',
    price: 0.25,
    category: 'napkins',
    minQuantity: 250,
    images: ['https://images.unsplash.com/photo-1606914770909-980f3daf4981?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
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

// Categories for filtering
const categories = [
  { id: 'pizza-boxes', name: 'Pizza Boxes' },
  { id: 'burger-boxes', name: 'Burger Boxes' },
  { id: 'paper-bags', name: 'Paper Bags' },
  { id: 'napkins', name: 'Napkins' }
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
      <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1591543620767-582b2e76369e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Premium packaging" 
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            <span className="block">Discover Our</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Luxury Collection</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl">
            Explore our premium food packaging products designed to elevate your brand
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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