import { useEffect, useState } from 'react'; // Import useEffect and useState
import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
import Search from '@/app/ui/search';
import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/invoices/table1'; // Assuming this component renders the table rows
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Carousel } from 'react-responsive-carousel'; // Import Carousel from react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Image from 'next/image'; // Import Image component from Next.js

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const [totalPages, setTotalPages] = useState(0); // State to hold totalPages

  useEffect(() => {
    const fetchTotalPages = async () => {
      const pages = await fetchInvoicesPages(query);
      setTotalPages(pages);
    };

    fetchTotalPages();
  }, [query]); // Call useEffect whenever `query` changes

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

      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
        <div>
          <Image
            src="/images/slider-image1.jpg"
            alt="Slider Image 1"
            width={1000}
            height={760}
          />
        </div>
        <div>
          <Image
            src="/images/slider-image2.jpg"
            alt="Slider Image 2"
            width={1000}
            height={760}
          />
        </div>
        <div>
          <Image
            src="/images/slider-image3.jpg"
            alt="Slider Image 3"
            width={1000}
            height={760}
          />
        </div>
      </Carousel>

      <main>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Warung Kita</h1>
          <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search invoices..." />
          </div>
          <div className="mt-8">
            <Suspense fallback={<InvoicesTableSkeleton />}>
              <Table query={query} currentPage={currentPage} />
              {/* Assuming Table component renders rows with customer and amount */}
            </Suspense>
          </div>
          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
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
