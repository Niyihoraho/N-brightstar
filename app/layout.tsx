import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "./header.css";
import "./sections.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "N-Bright Star Academy | Rise and Shine — Nyagasambu, Rwanda",
  description:
    "Nyagasambu Bright Star Academy (NBSA) — A leading institution of educational excellence in Rwanda, nurturing young minds from Crèche to Primary. Excellence begins with you!",
  keywords: ["NBSA", "N-Bright Star Academy", "Rwanda school", "Nyagasambu", "education Rwanda"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
