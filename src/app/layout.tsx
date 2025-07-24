import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/constants';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const rubik = Rubik({ 
  subsets: ['hebrew'],
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [SITE_CONFIG.ogImage],
    locale: 'he_IL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${inter.variable} ${rubik.variable} font-sans`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}