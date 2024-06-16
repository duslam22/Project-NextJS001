import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation'
 
export default function Page() {
  // Logic to determine if a redirect is needed
  const accessDenied = true
  if (accessDenied) {
    redirect('/login')
  }
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <AcmeLogo />
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/menu" className="hover:underline">
              Menu
            </Link>
          </nav>
        </div>
      </header>

      {/* Slider */}
      <div className="relative">
        <Image
          src="/slider-image-1.jpg"
          width={1920}
          height={600}
          className="w-full object-cover"
          alt="Slider Image 1"
        />
        <Image
          src="/slider-image-2.jpg"
          width={1920}
          height={600}
          className="w-full object-cover"
          alt="Slider Image 2"
        />
        <Image
          src="/slider-image-3.jpg"
          width={1920}
          height={600}
          className="w-full object-cover"
          alt="Slider Image 3"
        />
        {/* Add navigation arrows if needed */}
      </div>

      {/* Daftar Menu */}
      <main className="flex-grow p-4">
        <h2 className="text-2xl font-bold mb-4">Daftar Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Contoh item menu */}
          <div className="border p-4">
            <Image
              src="/menu-item-1.jpg"
              width={300}
              height={200}
              className="w-full object-cover"
              alt="Menu Item 1"
            />
            <h3 className="text-xl font-semibold mt-2">Menu Item 1</h3>
            <p className="mt-1">Description of Menu Item 1</p>
          </div>
          <div className="border p-4">
            <Image
              src="/menu-item-2.jpg"
              width={300}
              height={200}
              className="w-full object-cover"
              alt="Menu Item 2"
            />
            <h3 className="text-xl font-semibold mt-2">Menu Item 2</h3>
            <p className="mt-1">Description of Menu Item 2</p>
          </div>
          <div className="border p-4">
            <Image
              src="/menu-item-3.jpg"
              width={300}
              height={200}
              className="w-full object-cover"
              alt="Menu Item 3"
            />
            <h3 className="text-xl font-semibold mt-2">Menu Item 3</h3>
            <p className="mt-1">Description of Menu Item 3</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Your Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
}  