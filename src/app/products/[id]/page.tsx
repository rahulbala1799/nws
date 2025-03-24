'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCart } from '@/lib/CartContext';
import { ShoppingCartIcon, TruckIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

// Mock products data with high-quality images
const PRODUCTS = [
  {
    id: '1',
    name: 'Eco-Friendly Burger Box',
    description: 'Made from sustainable bagasse material, our eco-friendly burger box is perfect for your branded takeaway experience. Customize with your logo and design for a unique packaging solution that aligns with your brand values.',
    price: 0.75,
    category: 'burger-boxes',
    minQuantity: 200,
    images: ['https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['100% Bagasse material', 'Custom branding', 'Sustainable', 'Biodegradable', 'No plate charges', 'Heat-resistant', 'Oil-resistant'],
    dimensions: '15cm x 15cm x 8cm',
    material: 'Bagasse (sugarcane fiber)',
    recommended: ['3', '6']
  },
  {
    id: '2',
    name: 'Premium Meal Box',
    description: 'Our signature meal boxes made from bagasse with compartments for complete meals and custom printing options. Designed specifically for Irish food businesses looking to enhance their takeaway and delivery experience while maintaining a commitment to sustainability.',
    price: 1.25,
    category: 'meal-boxes',
    minQuantity: 200,
    images: ['https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Multi-compartment design', 'Custom printing', 'Eco-friendly material', 'Oil-resistant', 'No hidden charges', 'Microwave safe', 'Freezer safe'],
    dimensions: '23cm x 15cm x 7.5cm',
    material: 'Premium bagasse',
    recommended: ['4', '7']
  },
  {
    id: '3',
    name: 'Clamshell Burger Container',
    description: 'Secure closure burger boxes made from bagasse with your branding, ideal for takeaway and delivery. The hinged design ensures your food stays secure during transport, while the eco-friendly material offers all the benefits of traditional packaging without the environmental impact.',
    price: 0.85,
    category: 'burger-boxes',
    minQuantity: 300,
    images: ['https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Secure closure', 'Custom branding', 'Sustainable bagasse', 'Leakproof design', 'Microwavable', 'No plate charges', 'Compostable'],
    dimensions: '15cm x 15cm x 7cm',
    material: '100% Bagasse',
    recommended: ['1', '8']
  },
  {
    id: '4',
    name: 'Large Meal Box',
    description: 'Extra large meal containers for catering and family meals with custom printing options. Perfect for Irish restaurants offering family-style takeaway options, these spacious containers keep multiple dishes organized and fresh during delivery.',
    price: 1.45,
    category: 'meal-boxes',
    minQuantity: 200,
    images: ['https://images.unsplash.com/photo-1583167617348-1e3b6acab4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Extra large capacity', 'Full-color printing', 'Heat retention', 'Stackable design', 'No plate charges', 'Grease-resistant', 'Eco-friendly'],
    dimensions: '28cm x 18cm x 8cm',
    material: 'Premium bagasse',
    recommended: ['2', '5']
  },
  {
    id: '5',
    name: 'Square Meal Container',
    description: 'Square bagasse containers perfect for salads and bowl meals with eco-friendly benefits. The contemporary square design maximizes space efficiency while providing an attractive presentation for your culinary creations.',
    price: 0.95,
    category: 'meal-boxes',
    minQuantity: 250,
    images: ['https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Square design', 'Custom branding', 'Compostable material', 'Secure lid', 'Oil-resistant', 'No hidden charges', 'Eco-friendly'],
    dimensions: '18cm x 18cm x 6cm',
    material: 'Sustainable bagasse',
    recommended: ['4', '7']
  },
  {
    id: '6',
    name: 'Mini Burger Box',
    description: 'Compact bagasse boxes ideal for sliders and small burgers with premium branding options. These smaller containers are perfect for appetizers, kids meals, or food trucks specializing in slider-style offerings.',
    price: 0.65,
    category: 'burger-boxes',
    minQuantity: 400,
    images: ['https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Compact size', 'Full-color printing', 'Water-resistant coating', 'Eco-friendly', 'No hidden charges', 'Suitable for small portions', 'Stackable'],
    dimensions: '10cm x 10cm x 6cm',
    material: 'Bagasse',
    recommended: ['1', '8']
  },
  {
    id: '7',
    name: 'Three-Compartment Meal Box',
    description: 'Bagasse meal boxes with three compartments, ideal for balanced meals and menu specials. The divided sections keep food items separated, making these containers perfect for complete meals with sides or multi-course offerings.',
    price: 1.10,
    category: 'meal-boxes',
    minQuantity: 300,
    images: ['https://images.unsplash.com/photo-1583167605922-2cc7ba58b517?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Three compartments', 'Custom printing', 'Microwave safe', 'Fully compostable', 'Secure closure', 'No plate charges', 'Oil-resistant'],
    dimensions: '24cm x 20cm x 7cm',
    material: 'Premium bagasse',
    recommended: ['2', '5']
  },
  {
    id: '8',
    name: 'Premium Burger Tray',
    description: 'Open-top bagasse burger trays ideal for food trucks and quick-service restaurants. The simple yet effective design allows for easy presentation of burgers and sandwiches while maintaining our commitment to eco-friendly materials.',
    price: 0.70,
    category: 'burger-boxes',
    minQuantity: 350,
    images: ['https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    features: ['Open-top design', 'High-resolution branding', 'Stackable', 'Grease-resistant', 'From Irish supplier', 'No hidden charges', 'Biodegradable'],
    dimensions: '16cm x 16cm x 4cm',
    material: 'Sustainable bagasse',
    recommended: ['3', '6']
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
    <main className="bg-white min-h-screen">
      {/* Product Detail */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className={`relative h-[500px] rounded-lg overflow-hidden ${isAnimating ? 'animate-subtle-zoom' : ''}`}>
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

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="text-2xl font-bold text-blue-900">€{product.price.toFixed(2)}</div>
                <div className="text-sm text-gray-500">per unit</div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <TruckIcon className="h-5 w-5 text-blue-900" />
                  <span className="text-gray-700">Shipping: 7-10 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShoppingCartIcon className="h-5 w-5 text-blue-900" />
                  <span className="text-gray-700">Minimum Order: {product.minQuantity} units</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-blue-900" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Request a Quote
                </Link>
                <a href="tel:+35312345678" className="btn-secondary">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {recommendedProducts.length > 0 && (
        <div className="py-20 bg-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendedProducts.map((relatedProduct) => (
                relatedProduct && (
                  <div key={relatedProduct.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{relatedProduct.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedProduct.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-900 font-semibold">€{relatedProduct.price.toFixed(2)}/unit</span>
                        <Link href={`/products/${relatedProduct.id}`} className="btn-primary">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      )}

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
    </main>
  );
} 