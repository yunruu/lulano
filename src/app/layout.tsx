import "./globals.css";
import type { Metadata, ResolvingMetadata } from "next";
import { Inter, Nunito, Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import { createClient } from "@/prismicio";

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
  const client = createClient();
  const page = await client.getSingle("settings"); // to query single types

  return {
    title: page.data.site_title || "Untitled Site",
    description: page.data.meta_description || "This site has no descriptions.",
    openGraph: {
      images: [page.data.og_image.url || ""],
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
        <header>header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
