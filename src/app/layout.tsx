import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const revalidate=3600




export const metadata: Metadata = {
  title: "gallery",
  description: "nelki gallery project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="max-w-6xl mx-auto">
        {children}
        </main>
        </body>
    </html>
  );
}
