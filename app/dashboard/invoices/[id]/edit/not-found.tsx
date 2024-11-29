import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
return (
   <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
         href="/dashboard/invoices"
         className="mt-4 rounded-md bg-pink-200 px-4 py-2 text-sm text-cyan-600 transition-colors hover:bg-pink-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-200   "
         >
         Go Back
      </Link>
   </main>
);
}