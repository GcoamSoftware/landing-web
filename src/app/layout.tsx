import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gcoam.in"),
  title: "GCOAM Software | Software, Automation & AI",
  description:
    "GCOAM Software builds dependable software, intelligent automation, and AI-powered digital products for serious businesses.",
  keywords: [
    "custom software",
    "business automation",
    "AI integration",
    "SaaS development",
    "web development",
  ],
  authors: [{ name: "GCOAM Software" }],
  robots: { index: true, follow: true },
  applicationName: "GCOAM Software",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "GCOAM Software",
    title: "GCOAM Software | Software, Automation & AI",
    description:
      "Dependable software, intelligent automation, and AI-powered digital products built around your business.",
    images: [{ url: "/logo.png", alt: "GCOAM Software logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GCOAM Software | Software, Automation & AI",
    description:
      "Dependable software, intelligent automation, and AI-powered digital products built around your business.",
    images: [{ url: "/logo.png", alt: "GCOAM Software logo" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#07121d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
