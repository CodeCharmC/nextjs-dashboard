// fonts.ts
import { Inter } from 'next/font/google';
import { Dancing_Script } from 'next/font/google';
import { Lusitana } from 'next/font/google';

// Import the fonts
export const inter = Inter({ subsets: ['latin'] });
export const dancingScript = Dancing_Script({ subsets: ['latin'] });
export const lusitana = Lusitana({
   subsets: ['latin'],
   weight: '400'
});
