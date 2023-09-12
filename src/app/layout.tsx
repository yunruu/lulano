import "./globals.css";
import type { Metadata, ResolvingMetadata } from "next";
import { Inter, Nunito, Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import { createClient } from "@/prismicio";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient(); // interact with data from prismicio
  const settings = await client.getSingle("settings"); // to query single types

  return {
    title: settings.data.site_title || "Untitled Site",
    description:
      settings.data.meta_description || "This site has no descriptions.",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.variable, nunito.variable, nunitoSans.variable)}
      >
        <Header />
        {children}
        <Footer />
        <div className="fixed bg-gradient-to-tr from-red-100 to-purple-100 z-[-2] inset-0 opacity-20"></div>
      </body>
    </html>
  );
}
