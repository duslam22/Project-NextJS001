// pages/index.js
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const featuredProducts = [
  {
    id: 1,
    name: 'Product 1',
    href: '/product/1',
    imageSrc: '/images/product1.jpg',
    imageAlt: 'Product 1 image',
    price: '$50',
  },
  {
    id: 2,
    name: 'Product 2',
    href: '/product/2',
    imageSrc: '/images/product2.jpg',
    imageAlt: 'Product 2 image',
    price: '$30',
  },
  // Add more products as needed
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <AcmeLogo />
          <nav className="flex space-x-4">
            <Link href="/">
              <a className="text-gray-900 hover:text-gray-700">Home</a>
            </Link>
            <Link href="/shop">
              <a className="text-gray-900 hover:text-gray-700">Shop</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-900 hover:text-gray-700">Contact</a>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Acme Marketplace</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden">
                <Link href={product.href}>
                  <a>
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      width={500}
                      height={500}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                      <p className="mt-2 text-gray-600">{product.price}</p>
                      <div className="mt-4">
                        <button className="flex items-center text-blue-600 hover:text-blue-400">
                          View Product
                          <ArrowRightIcon className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white shadow mt-16">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">&copy; 2024 Acme Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import Image from 'next/image';
// export default function Page() {
//   return (
//     // ...
//     <div className="md:py-12 flex items-center justify-center p-6 md:w-3/5 md:px-28">
//       {/* Add Hero Images Here */}
//       <Image
//         src="/hero-desktop.png"
//         width={1000}
//         height={760}
//         className="hidden md:block"
//         alt="Screenshots of the dashboard project showing desktop version"
//       />
//     </div>
//     //...
//   );
// }
