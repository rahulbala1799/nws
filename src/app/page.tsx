import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image 
              src="https://picsum.photos/1920/1080?random=1"
              alt="Food packaging" 
              fill
              priority
              style={{ objectFit: 'cover' }}
              className="mix-blend-overlay opacity-40"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Custom Food Packaging Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            High-quality, custom-printed packaging for your food business. Elevate your brand with our eco-friendly and affordable packaging options.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/products" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Browse Products
            </Link>
            <a 
              href="#categories" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of customizable food packaging solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pizza Boxes */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 relative">
                <Image 
                  src="https://placehold.co/600x400/e2e8f0/1e293b?text=Pizza+Boxes"
                  alt="Pizza Boxes" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900">Pizza Boxes</h3>
                <p className="text-gray-700 mb-4">
                  Custom-printed pizza boxes in various sizes for your pizzeria or restaurant.
                </p>
                <Link 
                  href="/products?category=pizza-boxes" 
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  View Pizza Boxes →
                </Link>
              </div>
            </div>

            {/* Burger Boxes */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 relative">
                <Image 
                  src="https://placehold.co/600x400/e2e8f0/1e293b?text=Burger+Boxes"
                  alt="Burger Boxes" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900">Burger Boxes</h3>
                <p className="text-gray-700 mb-4">
                  Durable burger boxes designed to keep your burgers intact and presented beautifully.
                </p>
                <Link 
                  href="/products?category=burger-boxes" 
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  View Burger Boxes →
                </Link>
              </div>
            </div>

            {/* Paper Bags */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 relative">
                <Image 
                  src="https://placehold.co/600x400/e2e8f0/1e293b?text=Paper+Bags"
                  alt="Paper Bags" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900">Paper Bags</h3>
                <p className="text-gray-700 mb-4">
                  Eco-friendly paper bags for takeout orders with customizable printing options.
                </p>
                <Link 
                  href="/products?category=paper-bags" 
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  View Paper Bags →
                </Link>
              </div>
            </div>

            {/* Napkins */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 relative">
                <Image 
                  src="https://placehold.co/600x400/e2e8f0/1e293b?text=Napkins"
                  alt="Napkins" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900">Napkins</h3>
                <p className="text-gray-700 mb-4">
                  High-quality napkins with your logo or design printed on them.
                </p>
                <Link 
                  href="/products?category=napkins" 
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  View Napkins →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Packaging</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer the highest quality custom food packaging with these benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">High Quality Materials</h3>
              <p className="text-gray-700">
                All our packaging is made from premium, food-grade materials that ensure safety and durability.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Custom Designs</h3>
              <p className="text-gray-700">
                Full customization options to showcase your brand with vibrant, high-resolution printing.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Eco-Friendly Options</h3>
              <p className="text-gray-700">
                Sustainable packaging options that reduce environmental impact without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Order Your Custom Packaging?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Browse our products and customize them to fit your brand&apos;s unique needs.
          </p>
          <Link 
            href="/products" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md font-bold text-lg inline-block transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
}
