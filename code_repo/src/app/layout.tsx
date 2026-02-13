import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joseph Deffayet — Product Designer & Strategist',
  description:
    'Product Designer spécialisé dans les environnements B2B complexes. Signalisation ferroviaire, toxicologie, infrastructure — je conçois des outils que les experts adoptent vraiment.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
