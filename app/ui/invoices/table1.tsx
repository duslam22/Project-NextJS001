import Image from 'next/image';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import { useState } from 'react';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const [showNotification, setShowNotification] = useState(false);
  const invoices = await fetchFilteredInvoices(query, currentPage);

  const handleBuyClick = () => {
    // Logika untuk melakukan pembelian atau tindakan yang sesuai di sini

    // Set state untuk menampilkan notifikasi
    setShowNotification(true);

    // Atur timeout untuk menyembunyikan notifikasi setelah beberapa detik
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Misalnya, notifikasi akan hilang setelah 3 detik
  };

  return (
    <div className="mt-6 flow-root">
      {/* Notifikasi */}
      {showNotification && (
        <div className="bg-green-200 px-4 py-2 rounded-md text-green-800 my-4">
          Pembelian berhasil!
        </div>
      )}

      <div className="grid grid-cols-4 gap-4">
        {invoices?.map((invoice) => (
          <div key={invoice.id} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <Image
                src={invoice.image_url}
                width={58}
                height={70}
                alt={`${invoice.name}'s profile picture`}
              />
              <p className="text-sm font-medium">{invoice.name}</p>
            </div>
            <p className="text-sm text-gray-500">{formatCurrency(invoice.amount)}</p>
            <div className="flex justify-between mt-2">
              <button
                className="px-4 py-2 bg-blue-200 rounded-md text-white hover:bg-blue-300"
                onClick={handleBuyClick}
              >
                Beli
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
