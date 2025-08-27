import './globals.css';
import React from 'react';

export const metadata = { title: 'Marketing Spellbook Ultimate v6' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
