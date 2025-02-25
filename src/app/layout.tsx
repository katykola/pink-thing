import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import ThemeWrapper from "@/components/themeWrapper";

export const metadata: Metadata = {
  title: {
    default: "pink thing",
    template: "%s | pink thing",
  },  
  description: "Jsme webové studio zaměřené na tvorbu moderních webů, podnikových systémů a IT řešení na míru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="cs">
      <Head>
        <link
          rel="preload"
          href="/fonts/BebasNeue-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BebasNeue-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="flex flex-col min-h-screen">
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
