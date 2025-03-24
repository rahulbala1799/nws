'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div 
        className="relative bg-cover bg-center h-[60vh]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-white/90 mb-4">
              Ireland&apos;s leading provider of eco-friendly bagasse food packaging solutions
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded with a mission to reduce plastic waste in the food service industry, our company has become Ireland&apos;s trusted supplier of sustainable packaging solutions. We recognized the environmental impact of traditional food packaging and set out to provide a better alternative.
              </p>
              <p className="text-gray-700 mb-6">
                Our journey began with the simple idea that food packaging could be both eco-friendly and functional. Today, we proudly serve businesses across Ireland with our premium bagasse products that don&apos;t compromise on quality or performance.
              </p>
              <p className="text-gray-700">
                Based in Ireland, we maintain close relationships with our customers, providing local support and expertise for all your sustainable packaging needs.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Our team" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bagasse Process */}
      <div className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">The Bagasse Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-green-100 h-16 w-16 flex items-center justify-center rounded-full mb-6 text-green-600 font-bold text-2xl">1</div>
              <h3 className="text-xl font-semibold mb-4">Sugarcane Harvesting</h3>
              <p className="text-gray-700">
                Bagasse is a byproduct of sugarcane processing. After the juice is extracted for sugar production, the fibrous residue that remains is collected instead of being discarded.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-green-100 h-16 w-16 flex items-center justify-center rounded-full mb-6 text-green-600 font-bold text-2xl">2</div>
              <h3 className="text-xl font-semibold mb-4">Sustainable Processing</h3>
              <p className="text-gray-700">
                The collected bagasse is cleaned and processed using heat and pressure to create a sturdy, food-safe material perfect for creating durable food containers without harmful chemicals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-green-100 h-16 w-16 flex items-center justify-center rounded-full mb-6 text-green-600 font-bold text-2xl">3</div>
              <h3 className="text-xl font-semibold mb-4">Molding & Customization</h3>
              <p className="text-gray-700">
                The processed bagasse is molded into various food container designs, from burger boxes to multi-compartment meal trays, and customized with your branding for a unique eco-friendly packaging solution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Environmental Stewardship</h3>
                <p className="text-gray-700">
                  We're committed to reducing the environmental impact of food packaging. By using bagasse, a renewable resource, we help divert waste from landfills while providing a sustainable alternative to plastic and styrofoam.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Local Support</h3>
                <p className="text-gray-700">
                  As an Irish company, we take pride in supporting local businesses with personalized service and quick response times. We understand the unique needs of the Irish market and are committed to being a reliable partner.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
                <p className="text-gray-700">
                  We never compromise on quality. Our bagasse packaging is designed to perform as well as or better than traditional alternatives, with excellent heat retention, leak resistance, and durability.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                <p className="text-gray-700">
                  We believe in honesty and transparency in all our business dealings. Our pricing is straightforward with no hidden charges or plate fees, making it easier for businesses to budget for their packaging needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Environmental Impact</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">100%</div>
              <p className="text-xl">Biodegradable & Compostable</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">0</div>
              <p className="text-xl">Petrochemicals Used</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">30%</div>
              <p className="text-xl">Less Energy to Produce</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">4-6</div>
              <p className="text-xl">Months to Decompose</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              By choosing our bagasse packaging, your business is making a tangible difference in reducing plastic waste and supporting the circular economy.
            </p>
            <Link href="/products" className="btn-white inline-block">
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join the growing number of Irish businesses making the switch to sustainable bagasse packaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us Today
            </Link>
            <Link href="/products" className="btn-secondary">
              View Our Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 