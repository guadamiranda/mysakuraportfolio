import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guadalupe Miranda",
  description: "Mi portfolio hecho con Next. Es una actualización de uno viejo. owo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

      </Head>
      <body className={inter.className}>
        {children}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
        </body>
    </html>
  );
}
