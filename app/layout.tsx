import localFont from 'next/font/local';
import "./globals.css";

interface Metadata {
  title: string,
  description: string
}

export const metadata: Metadata = {
  title: "Ninjutsu Store",
  description: "Created by Next.js",
};

const comicFont = localFont({
  src: 'comic.ttf',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black w-[90%] mx-auto ${comicFont.className}`}>{children}</body>
    </html>
  );
}
