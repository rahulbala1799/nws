import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col bg-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with parallax effect */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image 
              src="https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Elegant food packaging" 
              fill
              priority
              style={{ objectFit: 'cover' }}
              className="scale-110 transition-transform duration-10000 animate-subtle-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
          </div>
        </div>
        
        {/* Hero Content with Animation */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tight">
            <span className="block opacity-0 animate-title-reveal" style={{ animationDelay: '0.3s' }}>Elevate Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 opacity-0 animate-title-reveal" style={{ animationDelay: '0.6s' }}>Food Brand</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 opacity-0 animate-title-reveal" style={{ animationDelay: '0.9s' }}>
            Premium custom packaging that tells your brand's story
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 opacity-0 animate-title-reveal" style={{ animationDelay: '1.2s' }}>
            <Link 
              href="/products" 
              className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
            >
              Explore Collection
            </Link>
            <a 
              href="#showcase" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              View Showcase
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Product Showcase with 3D Cards */}
      <section id="showcase" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
              <span className="relative z-10">Our Premium Collection</span>
              <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform skew-x-12"></span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Handcrafted packaging solutions that elevate your food presentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Pizza Box Showcase */}
            <div className="group">
              <div className="relative h-[400px] perspective-1000 group-hover:z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-700 rounded-3xl transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:scale-110 shadow-2xl">
                  <div className="h-full w-full p-1">
                    <div className="h-full w-full bg-gray-900 rounded-3xl overflow-hidden">
                      <div className="h-full relative">
                        <Image 
                          src="https://images.unsplash.com/photo-1583167605922-2cc7ba58b517?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                          alt="Premium Pizza Box" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/40 flex flex-col justify-end p-8">
                          <h3 className="font-bold text-2xl mb-2 text-white">Premium Pizza Boxes</h3>
                          <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Luxury pizza boxes with heat retention technology and striking designs
                          </p>
                          <Link 
                            href="/products?category=pizza-boxes" 
                            className="inline-block text-amber-400 font-medium"
                          >
                            <span className="relative">
                              View Details
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Burger Box Showcase */}
            <div className="group">
              <div className="relative h-[400px] perspective-1000 group-hover:z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800 rounded-3xl transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:scale-110 shadow-2xl">
                  <div className="h-full w-full p-1">
                    <div className="h-full w-full bg-gray-900 rounded-3xl overflow-hidden">
                      <div className="h-full relative">
                        <Image 
                          src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                          alt="Premium Burger Box" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/40 flex flex-col justify-end p-8">
                          <h3 className="font-bold text-2xl mb-2 text-white">Luxury Burger Boxes</h3>
                          <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Elegantly designed burger containers with premium materials
                          </p>
                          <Link 
                            href="/products?category=burger-boxes" 
                            className="inline-block text-amber-400 font-medium"
                          >
                            <span className="relative">
                              View Details
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paper Bags Showcase */}
            <div className="group">
              <div className="relative h-[400px] perspective-1000 group-hover:z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-700 rounded-3xl transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:scale-110 shadow-2xl">
                  <div className="h-full w-full p-1">
                    <div className="h-full w-full bg-gray-900 rounded-3xl overflow-hidden">
                      <div className="h-full relative">
                        <Image 
                          src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                          alt="Luxury Paper Bags" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/40 flex flex-col justify-end p-8">
                          <h3 className="font-bold text-2xl mb-2 text-white">Designer Paper Bags</h3>
                          <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Eco-friendly paper bags with sophisticated designs and sturdy handles
                          </p>
                          <Link 
                            href="/products?category=paper-bags" 
                            className="inline-block text-amber-400 font-medium"
                          >
                            <span className="relative">
                              View Details
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Napkins Showcase */}
            <div className="group">
              <div className="relative h-[400px] perspective-1000 group-hover:z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800 rounded-3xl transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:scale-110 shadow-2xl">
                  <div className="h-full w-full p-1">
                    <div className="h-full w-full bg-gray-900 rounded-3xl overflow-hidden">
                      <div className="h-full relative">
                        <Image 
                          src="https://images.unsplash.com/photo-1563885860652-cd1ba50e37c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                          alt="Premium Napkins" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/40 flex flex-col justify-end p-8">
                          <h3 className="font-bold text-2xl mb-2 text-white">Signature Napkins</h3>
                          <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Luxurious napkins with embossed designs and premium quality
                          </p>
                          <Link 
                            href="/products?category=napkins" 
                            className="inline-block text-amber-400 font-medium"
                          >
                            <span className="relative">
                              View Details
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section with 3D elements */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Artisan Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meticulously crafted packaging that transforms ordinary takeout into extraordinary experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Feature 1 - Premium Materials */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-10 rounded-lg shadow-xl">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-8 mx-auto transform transition-transform duration-500 group-hover:rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Artisan Materials</h3>
                <p className="text-gray-700 text-center">
                  Our packaging is crafted from premium, sustainable materials that are as beautiful as they are functional, ensuring your food stays fresh and presentation-ready.
                </p>
              </div>
            </div>

            {/* Feature 2 - Custom Designs */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-10 rounded-lg shadow-xl">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-8 mx-auto transform transition-transform duration-500 group-hover:rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2.0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Bespoke Designs</h3>
                <p className="text-gray-700 text-center">
                  Our in-house designers create custom packaging that tells your brand's story through exquisite detail, stunning colors, and thoughtful touches.
                </p>
              </div>
            </div>

            {/* Feature 3 - Sustainable Luxury */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-10 rounded-lg shadow-xl">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-8 mx-auto transform transition-transform duration-500 group-hover:rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Sustainable Luxury</h3>
                <p className="text-gray-700 text-center">
                  We believe luxury and sustainability can coexist. Our eco-friendly packaging solutions don't compromise on quality or aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Immersive Full-width Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Craftsmanship</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every detail matters in creating packaging that delights your customers
            </p>
          </div>
        </div>
        
        <div className="relative h-[600px] w-full overflow-hidden">
          <div className="absolute inset-0 flex gap-8 animate-slow-scroll">
            {/* Gallery Images - First set */}
            <div className="flex-none h-full w-[300px] relative rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1577401089489-511fe69bf554?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Packaging craftsmanship" fill style={{ objectFit: 'cover' }} className="hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-none h-full w-[400px] relative rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1628961186200-0e56a054d51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Packaging craftsmanship" fill style={{ objectFit: 'cover' }} className="hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-none h-full w-[350px] relative rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1609501676725-7186f017a4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Packaging craftsmanship" fill style={{ objectFit: 'cover' }} className="hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-none h-full w-[320px] relative rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1605371358771-5a7581591828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Packaging craftsmanship" fill style={{ objectFit: 'cover' }} className="hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-none h-full w-[380px] relative rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1627027491506-abcee0db7033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Packaging craftsmanship" fill style={{ objectFit: 'cover' }} className="hover:scale-110 transition-transform duration-500" />
            </div>
            
            {/* Duplicated for seamless scrolling */}
            <div className="flex-none h-full w-[300px] relative rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1577401089489-511fe69bf554?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Packaging craftsmanship" fill style={{ objectFit: 'cover' }} className="hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-none h-full w-[400px] relative rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1628961186200-0e56a054d51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Packaging craftsmanship" fill style={{ objectFit: 'cover' }} className="hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-none h-full w-[350px] relative rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1609501676725-7186f017a4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Packaging craftsmanship" fill style={{ objectFit: 'cover' }} className="hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-none h-full w-[320px] relative rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1605371358771-5a7581591828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Packaging craftsmanship" fill style={{ objectFit: 'cover' }} className="hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-none h-full w-[380px] relative rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1627027491506-abcee0db7033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Packaging craftsmanship" fill style={{ objectFit: 'cover' }} className="hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image 
              src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Custom packaging" 
              fill
              style={{ objectFit: 'cover' }}
              className="brightness-50"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Elevate Your Brand Experience Today
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let us help you create packaging that makes your food products unforgettable
            </p>
            <Link 
              href="/products" 
              className="bg-gradient-to-r from-amber-500 to-amber-700 text-white hover:from-amber-600 hover:to-amber-800 px-10 py-5 rounded-full font-bold text-lg inline-block transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
            >
              Explore Our Collection
            </Link>
          </div>
        </div>
      </section>
      
      {/* Custom styles for animations */}
      <style jsx global>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes title-reveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slow-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-1750px)); }
        }
        
        .animate-subtle-zoom {
          animation: subtle-zoom 30s infinite ease-in-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s forwards;
        }
        
        .animate-title-reveal {
          animation: title-reveal 1s forwards;
        }
        
        .animate-slow-scroll {
          animation: slow-scroll 40s linear infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-12:hover {
          transform: rotateY(12deg) scale(1.1);
        }
      `}</style>
    </main>
  );
}
