import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'KrishiSetu',
  description: 'KrishiSetu - AI-powered agro-advisory network for small farmers',
};

import AppShell from '@/components/layout/AppShell';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}