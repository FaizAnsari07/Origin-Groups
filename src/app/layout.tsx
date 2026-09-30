import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Origin Groups | A portfolio of businesses",
  description:
    "Meet the Origin Groups portfolio: businesses working across travel, technology and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}