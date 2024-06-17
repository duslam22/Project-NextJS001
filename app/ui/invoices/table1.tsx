import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
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

  return (
    <div className="mt-6 flow-root">
      <div className="grid grid-cols-4 gap-4">
        {invoices?.map((invoice) => (
          <div key={invoice.id} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <Image
                src={invoice.image_url}
                className="rounded-full"
                width={28}
                height={28}
                alt={`${invoice.name}'s profile picture`}
              />
              <p className="text-sm font-medium">{invoice.name}</p>
            </div>
            <p className="text-sm text-gray-500">{formatCurrency(invoice.amount)}</p>
            <div className="flex justify-between mt-2">
              <InvoiceStatus status={invoice.status} />
              <div className="flex gap-2">
                <UpdateInvoice id={invoice.id} />
                <DeleteInvoice id={invoice.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
