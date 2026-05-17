import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "RealTimeCabs",
  description: "Realtime cab booking for users and drivers.",
  icons: {
    icon: "/logo/cablogo1.jpeg",
    shortcut: "/logo/cablogo1.jpeg",
    apple: "/logo/cablogo1.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
