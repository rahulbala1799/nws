'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPinIcon, 
  TruckIcon, 
  TagIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="flex flex-col bg-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[85vh] flex items-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1610843572704-9deccf1a8e30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeInUp">
              Sustainable Food Packaging
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fadeInUp animation-delay-200">
              Premium bagasse packaging solutions from Ireland&apos;s leading eco-friendly supplier
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-400">
              <Link href="/products" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeInUp">
              <div className="text-green-600 mb-4">
                <MapPinIcon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Irish Supplier</h3>
              <p className="text-gray-600">Based in Ireland, providing local support and service to our customers</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeInUp animation-delay-200">
              <div className="text-green-600 mb-4">
                <TruckIcon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">7-10 Day Shipping</h3>
              <p className="text-gray-600">Quick turnaround times for all custom packaging orders</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeInUp animation-delay-400">
              <div className="text-green-600 mb-4">
                <TagIcon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Hidden Charges</h3>
              <p className="text-gray-600">Transparent pricing with no surprise fees or additional charges</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeInUp animation-delay-600">
              <div className="text-green-600 mb-4">
                <CubeIcon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">MOQ from 200 Units</h3>
              <p className="text-gray-600">Accessible minimum order quantities for businesses of all sizes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Eco-Friendly Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <div className="rounded-lg overflow-hidden mb-6 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <Image 
                  src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                  alt="Burger Boxes" 
                  width={600} 
                  height={400} 
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Burger Boxes</h3>
              <p className="text-gray-600 mb-4">
                Our sustainable bagasse burger boxes are perfect for takeaways, food trucks, and restaurants looking to reduce their environmental impact while maintaining product quality.
              </p>
              <Link href="/products?category=burger-boxes" className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors">
                Explore Burger Boxes <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </div>
            
            <div className="group">
              <div className="rounded-lg overflow-hidden mb-6 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <Image 
                  src="https://images.unsplash.com/photo-1603105029360-5c92f0bd55c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                  alt="Meal Containers" 
                  width={600} 
                  height={400} 
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Meal Containers</h3>
              <p className="text-gray-600 mb-4">
                From single-compartment to multi-section designs, our meal containers keep food fresh and presentation perfect while being 100% biodegradable and compostable.
              </p>
              <Link href="/products?category=meal-boxes" className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors">
                Explore Meal Containers <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="bg-green-50 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Eco-friendly packaging" 
                width={600} 
                height={400} 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Committed to Sustainability</h2>
              <p className="text-gray-700 mb-6">
                Our bagasse packaging is made from sugarcane fiber, a byproduct of the sugar industry that would otherwise be discarded. By repurposing this material into high-quality food containers, we help reduce waste while providing a renewable alternative to plastic and styrofoam.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>100% biodegradable and compostable</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Microwave and freezer safe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Oil and water resistant without chemical treatments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Made from renewable sugarcane fiber</span>
                </li>
              </ul>
              <Link href="/about" className="btn-primary">
                Learn More About Our Process
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make the Switch to Sustainable Packaging?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the growing number of businesses reducing their environmental impact without compromising on quality or branding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Request a Quote
            </Link>
            <Link href="/products" className="btn-outline-white">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
