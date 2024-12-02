'use client';

import { CustomerField } from '@/app/lib/definitions';
import { useState } from 'react';

export default function CustomDropdown({
   customers,
   error
}: {
   customers: CustomerField[];
   error?: string;
}) {
const [selected, setSelected] = useState('');
const [isOpen, setIsOpen] = useState(false);

return (
   <div className="relative mb-6">
      <button
      onClick={() => setIsOpen(!isOpen)}
      className="w-full rounded-md border border-gray-200 bg-white py-2 px-3 text-left text-sm text-gray-500"
      >
      {selected || 'Select a customer'}
      </button>
      {isOpen && (
         <ul className="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
            {customers.map((customer) => (
               <li
               key={customer.id}
               className="cursor-pointer px-3 py-2 hover:bg-pink-200 hover:text-pink-900"
               onClick={() => {
                  setSelected(customer.name);
                  setIsOpen(false);
               }}
               >
               {customer.name}
               </li>
            ))}
         </ul>
      )}
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
   </div>
);
}
