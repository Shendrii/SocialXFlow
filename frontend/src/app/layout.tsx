import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "./clientLayout";
import "./globals.css";
import { AppStateProvider } from "./AppStateContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SocialXFlow - Automate Your Social Media Marketing",
  description: "Schedule, publish, and analyze your social media content across all platforms with AI-powered automation. Save time and boost engagement.",
  keywords: ["social media", "automation", "marketing", "scheduling", "analytics"],
  authors: [{ name: "SocialXFlow Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "SocialXFlow - Automate Your Social Media Marketing",
    description: "Schedule, publish, and analyze your social media content across all platforms with AI-powered automation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SocialXFlow - Automate Your Social Media Marketing",
    description: "Schedule, publish, and analyze your social media content across all platforms with AI-powered automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppStateProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AppStateProvider>
      </body>
    </html>
  );
}
