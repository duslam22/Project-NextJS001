import Image from 'next/image';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';

async function handlePurchase(invoiceId: string) {
  // Perform purchase logic here (e.g., API call, state update, etc.)
  console.log(`Purchased invoice with ID: ${invoiceId}`);
  // Example: update UI after successful purchase
  alert('Purchase successful!');
}

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
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
                onClick={() => handlePurchase(invoice.id)} // Call handlePurchase with invoice ID
                className="px-4 py-2 bg-blue-200 rounded-md text-white hover:bg-blue-300"
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
