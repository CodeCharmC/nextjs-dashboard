import '@/app/ui/global.css';
/** as in tsconfig.json
  ""paths": {
      "@/*": ["./*"]
    } 
*/
//or
//import './ui/global.css';

import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Florist Dashboard',
    default: 'Florist',
  },
  description: 'This is a dashboard for a florist company to manage their invoices and customers.',
};

export default function RootLayout({ 
    children,
  }: {
    children: React.ReactNode;
}) {
  return (
    <html lang="en"> 
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
} 
