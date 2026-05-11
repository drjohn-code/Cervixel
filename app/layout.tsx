import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* Fraunces — display serif, variable. opsz axis is loaded so we can apply
   `font-variation-settings: "opsz" 144` on display headlines via globals.css.
   SOFT and WONK axes are intentionally skipped in v1 (not exposed reliably
   through next/font/google); revisit if/when fonts are self-hosted. */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Cervixel",
    default: "Cervixel – CRISPR-Based Cervical Cancer Diagnostics",
  },
  description:
    "Cervixel is a biotechnology company developing CRISPR-based rapid diagnostic tests for cervical cancer, aligned with the WHO 2030 elimination goal.",
  metadataBase: new URL(
    process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://cervixel.com"
  ),
  openGraph: {
    siteName: "Cervixel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-ink font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
