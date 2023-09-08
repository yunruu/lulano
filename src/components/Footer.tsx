import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer>
      <Link href="/">{settings.data.site_title}</Link>
      <p>
        © {new Date().getFullYear()} {settings.data.site_title}
      </p>
    </footer>
  );
}
