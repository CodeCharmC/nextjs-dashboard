'use client';

import { useEffect } from 'react';

export default function Error({
error,
reset,
}: {
error: Error & { digest?: string };
reset: () => void;
}) {
useEffect(() => {
   // Optionally log the error to an error reporting service
   console.error(error);
}, [error]);

return (
   <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
         className="mt-4 rounded-md bg-pink-200 px-4 py-2 text-sm text-cyan-600 transition-colors hover:bg-pink-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-200"
      onClick={
         // Attempt to recover by trying to re-render the invoices route
         () => reset()
      }
      >
      Try again
      </button>
   </main>
);
}