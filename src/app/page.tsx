import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Product categories
  const categories = [
    {
      id: 'pizza-boxes',
      name: 'Pizza Boxes',
      description: 'Custom printed pizza boxes in various sizes.',
      image: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg',
      href: '/products?category=pizza-boxes'
    },
    {
      id: 'burger-boxes',
      name: 'Burger Boxes',
      description: 'Eco-friendly burger packaging to keep your food hot and fresh.',
      image: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg',
      href: '/products?category=burger-boxes'
    },
    {
      id: 'paper-bags',
      name: 'Paper Bags',
      description: 'Sturdy paper bags with custom branding for takeout orders.',
      image: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg',
      href: '/products?category=paper-bags'
    },
    {
      id: 'napkins',
      name: 'Premium Napkins',
      description: 'High-quality napkins customized with your restaurant logo or design.',
      image: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg',
      href: '/products?category=premium-napkins'
    }
  ];

  return (
    <>
      {/* Hero section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg" 
            alt="Food packaging background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Custom Food Packaging Printing
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Elevate your brand with beautifully designed and printed food packaging. From pizza boxes to premium napkins, we&apos;ve got your packaging needs covered.
          </p>
          <div className="mt-10">
            <Link
              href="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 py-3 px-8 rounded-md text-white font-medium transition duration-150"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>

      {/* Category section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">
          Our Product Categories
        </h2>
        <div className="grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.id} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white">
                <div className="h-full w-full overflow-hidden rounded-lg bg-gray-200">
                  <div className="relative h-full w-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:opacity-75 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                <Link href={category.href}>
                  <span className="absolute inset-0" />
                  {category.name}
                </Link>
              </h3>
              <p className="mt-1 text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Premium Quality Printing Services
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer high-quality custom printing services for food packaging with quick turnaround times.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">High-Quality Materials</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We use only food-grade, environmentally friendly materials for all our products.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Customizable Designs</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Upload your own designs or work with our team to create something unique for your brand.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Fast Turnaround</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Quick production and shipping times to meet your business needs.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Bulk Order Discounts</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Significant savings on larger orders to help your business scale.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg" 
                  alt="Pizza Box" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Pizza Boxes</h3>
                <p className="text-gray-600 mb-4">Custom printed pizza boxes in various sizes for your pizzeria.</p>
                <Link href="/products?category=pizza-boxes" className="text-blue-600 hover:underline">View Products &rarr;</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg" 
                  alt="Burger Box" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Burger Boxes</h3>
                <p className="text-gray-600 mb-4">Eco-friendly burger packaging to keep your food hot and fresh.</p>
                <Link href="/products?category=burger-boxes" className="text-blue-600 hover:underline">View Products &rarr;</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg" 
                  alt="Paper Bag" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Paper Bags</h3>
                <p className="text-gray-600 mb-4">Sturdy paper bags with custom branding for takeout orders.</p>
                <Link href="/products?category=paper-bags" className="text-blue-600 hover:underline">View Products &rarr;</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg" 
                  alt="Premium Napkin" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Premium Napkins</h3>
                <p className="text-gray-600 mb-4">High-quality napkins with your logo for a professional touch.</p>
                <Link href="/products?category=napkins" className="text-blue-600 hover:underline">View Products &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
