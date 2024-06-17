import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
import Search from '@/app/ui/search';
import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/invoices/table'; // Assuming this component renders the table rows
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header and Navigation Code */}
      {/* Main Content */}
      <main>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Invoices</h1>
          <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search invoices..." />
          </div>
          <div className="mt-8">
            <Suspense fallback={<InvoicesTableSkeleton />}>
              <Table query={query} currentPage={currentPage} />
            </Suspense>
          </div>
          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </main>
      {/* Footer Code */}
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
