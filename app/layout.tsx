import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-brand",
});

export const metadata: Metadata = {
  title: "Chick Republic | Fry Harder",
  description: "Premium cloud kitchen serving the crispiest, most flavorful fried chicken. Experience the crunch with Chick Republic.",
  keywords: ["fried chicken", "cloud kitchen", "food delivery", "chick republic", "crispy chicken", "fast food"],
  openGraph: {
    title: "Chick Republic | Fry Harder",
    description: "Premium fried chicken cloud kitchen.",
    type: "website",
    url: "https://chickrepublic.com",
    siteName: "Chick Republic",
  },
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
