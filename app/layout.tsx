import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://engineering.silverfoxcloud.com"),
  title: {
    default: "Silver Fox Engineering",
    template: "%s | Silver Fox Engineering",
  },
  description:
    "Engineering portal for the Silver Fox ecosystem: platforms, architecture, standards, payments, licensing, administration and travel technology.",
  alternates: {
    canonical: "/",
    languages: { en: "/", "fa-IR": "/fa/" },
  },
  openGraph: {
    title: "Silver Fox Engineering",
    description: "Building a connected digital ecosystem.",
    url: "https://engineering.silverfoxcloud.com",
    siteName: "Silver Fox Engineering",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
