import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clinical Attachment Journal',
  description: 'Student Diploma Clinical Attachment Reflective Journal Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="font-sans antialiased bg-gray-50">{children}</body>
    </html>
  );
}
