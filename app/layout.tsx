import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Setu.plus | Powering Digital India",
  description: "The Merchant Operating System. We bundle payments, lending, and ONDC seller tools into a powerful B2B2C flywheel.",
  keywords: ["ONDC", "Digital India", "Merchant OS", "Payments", "Lending", "E-commerce"],
  authors: [{ name: "Setu.plus" }],
  openGraph: {
    title: "Setu.plus | Powering Digital India",
    description: "The Merchant Operating System. We bundle payments, lending, and ONDC seller tools into a powerful B2B2C flywheel.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Setu.plus | Powering Digital India",
    description: "The Merchant Operating System. We bundle payments, lending, and ONDC seller tools into a powerful B2B2C flywheel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

