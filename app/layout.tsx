import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNav from "./components/HeaderNav";
import FloatingContact from "./components/FloatingContact";
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
        <div className="page-shell">
          <HeaderNav />

          <main className="content-grid pb-16 pt-6">{children}</main>
          <FloatingContact />

          <footer className="content-grid pb-10">
            <div className="glass-panel mt-10 grid gap-8 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <span suppressHydrationWarning>
                  <Image src="/logo2.png" alt="Optimum Logistics" width={140} height={52} />
                </span>
                <p className="text-sm text-slate-600 px-3">We simplify trade.</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/optimum_logistics_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-[var(--brand-red)] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/optimum_logistics_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-[var(--brand-red)] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://t.me/optimumlogistics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-[var(--brand-red)] transition-colors"
                    aria-label="Telegram"
                  >
                    <Send size={20} />
                  </a>
                </div>
              </div>
              <div className="text-sm text-slate-700">
                <p className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <MapPin size={18} className="text-[var(--brand-red)]" />
                  Offices
                </p>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <MapPin size={16} className="text-slate-400 mt-1 shrink-0" />
                    <p className="leading-relaxed">
                      <span className="font-medium text-slate-900 block">Addis Ababa</span>
                      Takilahayimanot, Sumale Tera Business Center, 6th Floor, Office 608
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <MapPin size={16} className="text-slate-400 mt-1 shrink-0" />
                    <p className="leading-relaxed">
                      <span className="font-medium text-slate-900 block">East Shewa, Adama</span>
                      Soreti Mall, Ground Office 32 A2
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-sm text-slate-700">
                <p className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Phone size={18} className="text-[var(--brand-red)]" />
                  Contact
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-slate-400" />
                    <a href="mailto:contact@optimumlogisticsplc.com" className="hover:text-[var(--brand-red)] transition-colors">contact@optimumlogisticsplc.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-slate-400" />
                    <a href="mailto:info@optimumlogisticsplc.com" className="hover:text-[var(--brand-red)] transition-colors">info@optimumlogisticsplc.com</a>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-slate-400" />
                      <a href="tel:+251111250386" className="hover:text-[var(--brand-red)] transition-colors">+251 11 125 0386</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-slate-400" />
                      <a href="tel:+251913335596" className="hover:text-[var(--brand-red)] transition-colors">+251 913 335 596</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-slate-400" />
                      <a href="tel:+251711335596" className="hover:text-[var(--brand-red)] transition-colors">+251 711 335 596</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-slate-400" />
                      <a href="tel:+251990733333" className="hover:text-[var(--brand-red)] transition-colors">+251 990 733 333</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-slate-700">
                <p className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <ExternalLink size={18} className="text-[var(--brand-red)]" />
                  Fast links
                </p>
                <div className="flex flex-col gap-2">
                  <Link href="/services" className="hover:text-[var(--brand-red)] transition-colors">Customs & duty-free</Link>
                  <Link href="/trainings" className="hover:text-[var(--brand-red)] transition-colors">Training catalog</Link>
                  <Link href="/faq" className="hover:text-[var(--brand-red)] transition-colors">FAQ</Link>
                  <Link href="/contact" className="hover:text-[var(--brand-red)] transition-colors">Request a quote</Link>
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
      </body>
    </html>
  );
}
