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
  twitter: {
    card: "summary",
    title: "Silver Fox Engineering",
    description:
      "Architecture, platforms, packages, engineering decisions and releases across the Silver Fox ecosystem.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://silverfoxcloud.com/#organization",
        name: "Silver Fox",
        url: "https://silverfoxcloud.com",
      },
      {
        "@type": "WebSite",
        "@id": "https://engineering.silverfoxcloud.com/#website",
        url: "https://engineering.silverfoxcloud.com",
        name: "Silver Fox Engineering",
        publisher: { "@id": "https://silverfoxcloud.com/#organization" },
        inLanguage: ["en", "fa"],
      },
    ],
  };

  return (
    <html lang="en" dir="ltr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
