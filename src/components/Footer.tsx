import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";
import Logo from "@/components/Logo";
import OuterBound from "./OuterBound";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <OuterBound as="footer">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
        <Link href="/">
          <Logo width="120" height="28" />
        </Link>
        <p className="text-xs">
          © {new Date().getFullYear()} {settings.data.site_title}
        </p>
      </div>
    </OuterBound>
  );
}
