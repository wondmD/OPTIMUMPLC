import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNav from "./components/HeaderNav";
import FloatingContact from "./components/FloatingContact";
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";
import { Instagram, Facebook, Send, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Optimum Logistics";
const siteUrl = "https://www.optimumlogisticsplc.com";
const defaultDescription =
  "Request a quote in 1 business day. Optimum Logistics moves cargo globally into Addis and regional hubs, simplifying customs, duty-free, single-window submissions, freight, consulting, and team training.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Optimum Logistics | Freight, Customs, Duty-Free & Training",
    template: "%s | Optimum Logistics",
  },
  description: defaultDescription,
  keywords: [
    "customs clearing",
    "freight forwarding",
    "port clearance",
    "duty free",
    "single window",
    "bonded warehouse",
    "logistics Ethiopia",
    "global to Addis",
    "Djibouti corridor",
    "Addis Ababa",
    "training",
    "consulting",
  ],
  authors: [{ name: siteName }],
  applicationName: siteName,
  openGraph: {
    type: "website",
    title: "Optimum Logistics | Freight, Customs, Duty-Free & Training",
    description: defaultDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/logo-main.png",
        width: 1200,
        height: 630,
        alt: "Optimum Logistics logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimum Logistics | Freight, Customs, Duty-Free & Training",
    description: defaultDescription,
    images: ["/logo-main.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "96x96" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <ClientLayoutWrapper>
          <div className="page-shell">
            <HeaderNav />
            <main className="content-grid pb-16 pt-6">{children}</main>
            <FloatingContact />
            <footer className="content-grid pb-10">
              <div className="glass-panel mt-10 grid gap-8 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* ...existing code... */}
              </div>
            </footer>
          </div>
        </ClientLayoutWrapper>
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteName,
            url: siteUrl,
            logo: `${siteUrl}/logo-main.png`,
            sameAs: [
              'https://www.instagram.com/optimum_logistics_/',
              'https://www.facebook.com/optimum_logistics_/',
              'https://t.me/optimumlogistics'
            ],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+251111250386',
                contactType: 'customer service',
                areaServed: 'ET',
                availableLanguage: ['en'],
              },
            ],
          })}
        </Script>
        {/* Start of Tawk.to Script */}
        <Script id="tawkto-livechat" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69c29acb46a6c41c341aaa2a/1jkg2pbqa';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
        {/* End of Tawk.to Script */}
      </body>
    </html>
  );
}
