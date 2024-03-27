import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "(Un)comfortable Truth",
  description:
    "Sharing Data Gathered via Open Source Contributions for the world to see",
  openGraph: {
    title: "(Un)comfortable Truth",
    description:
      "Sharing Data Gathered via Open Source Contributions for the world to see",
    type: "website",
    url: "https://uc.mmpg.xyz",
    images: ["https://uc.mmpg.xyz/og-image.jpg"],
    siteName: "(Un)comfortable Truth",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="facts, scientific, data, truth, uncomfortable, uncomfortable truth, open source, open source data, open source facts, open source truth"
        />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GWLSX9HR7R"
          strategy="afterInteractive"
        ></Script>

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date() );

            gtag('config', 'G-GWLSX9HR7R');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
