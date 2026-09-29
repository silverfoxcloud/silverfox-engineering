import type { Metadata } from "next";
import "./globals.css";
import "./portal-refinement.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://engineering.silverfoxcloud.com"),
  title: {
    default: "Silver Fox Engineering",
    template: "%s | Silver Fox Engineering",
  },
  description:
    "Public engineering portal for Silver Fox architecture, platforms, security, data, operations and technology decisions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Silver Fox Engineering",
    description:
      "Architecture, platform engineering and technology decisions across the Silver Fox ecosystem.",
    url: "https://engineering.silverfoxcloud.com",
    siteName: "Silver Fox Engineering",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
