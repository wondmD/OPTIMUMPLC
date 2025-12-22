import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Optimum Logistics | We Simplify Trade",
  description:
    "Optimum Logistics moves cargo from China to Addis and beyond, simplifies customs, and trains teams on trade, finance, and leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="page-shell">
          <HeaderNav />

          <main className="content-grid pb-16 pt-6">{children}</main>

          <footer className="content-grid pb-10">
            <div className="glass-panel mt-10 grid gap-8 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <Image src="/logo2.png" alt="Optimum Logistics" width={140} height={52} />
                <p className="text-sm text-slate-600">Cargo from China to Addis, customs cleared, teams trained.</p>
              </div>
              <div className="text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Offices</p>
                <p>Addis Ababa</p>
                <p>China · Djibouti · UAE</p>
              </div>
              <div className="text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Contact</p>
                <p>hello@optimumlogistics.com</p>
                <p>+251 • +971 • +86</p>
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
      </body>
    </html>
  );
}
