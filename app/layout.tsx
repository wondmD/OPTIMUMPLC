import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNav from "./components/HeaderNav";

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
        <div className="page-shell">
          <HeaderNav />

          <main className="content-grid pb-16 pt-6">{children}</main>

          <footer className="content-grid pb-10">
            <div className="glass-panel mt-10 grid gap-8 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <span suppressHydrationWarning>
                  <Image src="/logo2.png" alt="Optimum Logistics" width={140} height={52} />
                </span>
                <p className="text-sm text-slate-600">We simplify trade.</p>
              </div>
              <div className="text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Offices</p>
                <p>Addis Ababa</p>
              </div>
              <div className="text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Contact</p>
                <p>contact@optimumlogisticsplc.com</p>
                <p>info@optimumlogisticsplc.com</p>
                <p>+251 11 125 0386</p>
                <p>+251 913 335 596</p>
                <p>+251 711 335 596</p>
                <p>+251903168943</p>
              </div>
              <div className="text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Fast links</p>
                <div className="mt-2 flex flex-col gap-1">
                  <Link href="/services">Customs & duty-free</Link>
                  <Link href="/trainings">Training catalog</Link>
                  <Link href="/faq">FAQ</Link>
                  <Link href="/contact">Request a quote</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteName,
            url: siteUrl,
            logo: `${siteUrl}/logo-main.png`,
            sameAs: [],
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
      </body>
    </html>
  );
}
