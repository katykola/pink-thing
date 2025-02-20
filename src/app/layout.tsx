import type { Metadata } from "next";
import "./globals.css";

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
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
