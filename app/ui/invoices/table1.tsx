import Image from 'next/image';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  const handleBeliClick = (invoiceId: number) => {
    alert(`Pembelian berhasil untuk invoice dengan ID: ${invoiceId}`);
  };

  return (
    <div className="mt-6 flow-root">
      <div className="grid grid-cols-4 gap-4">
        {invoices?.map((invoice) => (
          <div key={invoice.id} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <img
                src={invoice.image_url} // Gunakan tag img untuk gambar karena Next.js Image membutuhkan konfigurasi yang lebih
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
                onClick={() => handleBeliClick(invoice.id)}
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
