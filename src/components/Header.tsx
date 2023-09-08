import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header>
      <Link href="/">{settings.data.site_title}</Link>
      <nav>
        <ul>
          {settings.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicLink field={link}>{label}</PrismicLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
