'use client';

import Link from 'next/link';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div 
        className="relative bg-cover bg-center h-[50vh]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 mb-4">
              Get in touch with Ireland&apos;s leading eco-friendly packaging supplier
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8">Request a Quote</h2>
              <form className="space-y-6" id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-1">
                    Product Interest *
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Please select...</option>
                    <option value="Burger Boxes">Burger Boxes</option>
                    <option value="Meal Containers">Meal Containers</option>
                    <option value="Clamshell Containers">Clamshell Containers</option>
                    <option value="Multiple Products">Multiple Products</option>
                    <option value="Custom Solution">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="estimatedQuantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    id="estimatedQuantity"
                    name="estimatedQuantity"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Please select...</option>
                    <option value="200-500">200-500 units</option>
                    <option value="500-1000">500-1,000 units</option>
                    <option value="1000-5000">1,000-5,000 units</option>
                    <option value="5000+">5,000+ units</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                    placeholder="Please include any specific requirements or questions..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:w-1/3 bg-gray-50 p-8 rounded-lg h-fit">
              <h3 className="text-2xl font-semibold mb-6">Our Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <PhoneIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="mt-1 text-gray-600">+353 (0)1 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <EnvelopeIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="mt-1 text-gray-600">info@ecopackagingireland.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPinIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="mt-1 text-gray-600">
                      123 Sustainability Drive<br />
                      Dublin Business Park<br />
                      Dublin, D01 A234<br />
                      Ireland
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ClockIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="mt-1 text-gray-600">
                      Monday - Friday: 9:00 AM - 5:30 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products" className="text-green-600 hover:text-green-700 font-medium">
                      Browse Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-green-600 hover:text-green-700 font-medium">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="#faq" 
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">What is the minimum order quantity?</h3>
              <p className="text-gray-700">
                Our minimum order quantity starts at 200 units for most products. This allows us to provide custom branding while keeping costs reasonable.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">How long does shipping take?</h3>
              <p className="text-gray-700">
                Standard shipping for our products is 7-10 business days from order confirmation. For urgent orders, please contact us directly to discuss expedited options.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Do you charge for branding setup?</h3>
              <p className="text-gray-700">
                No, we don&apos;t have any plate charges or hidden fees for setting up your custom branding. The price quoted is the final price you&apos;ll pay.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Are your products suitable for hot foods?</h3>
              <p className="text-gray-700">
                Yes, our bagasse containers are excellent for hot foods. They provide great insulation and can withstand temperatures up to 100°C, making them perfect for hot meals, soups, and beverages.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Can I request samples before ordering?</h3>
              <p className="text-gray-700">
                Yes, we offer sample packs for businesses interested in our products. Please contact our sales team to arrange for samples of the specific products you&apos;re interested in.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Do you offer custom sizes or designs?</h3>
              <p className="text-gray-700">
                For orders above 5,000 units, we can discuss custom sizing and designs. Please reach out to our team with your specific requirements for a tailored solution.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Can&apos;t find the answer you&apos;re looking for?
            </p>
            <a
              href="#contact-form"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-block"
            >
              Contact Us Directly
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 