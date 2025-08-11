import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BOM Financial Services',
  description: 'Partner in klantbeheer voor lijfrentedossiers.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
