import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Base UI x Hexta UI',
  description:
    'HextaUI component library built on top of Base UI with Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script
        data-debug="base.hextaui.com"
        defer
        src="https://assets.onedollarstats.com/stonks.js"
      />
      </head>
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        <div className="root">{children}</div>
      </body>
    </html>
  );
}
