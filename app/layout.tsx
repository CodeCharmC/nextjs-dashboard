import '@/app/ui/global.css';
/** as in tsconfig.json
  ""paths": {
      "@/*": ["./*"]
    } 
*/
//or
//import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 
