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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-full">
      <body className="m-0 min-h-full bg-[#fffdf3] text-[#0b0b0c] [font-family:Poppins,Arial,Helvetica,sans-serif] [&_a]:text-inherit [&_a]:no-underline">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
