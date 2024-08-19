import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Preview from "./components/Preview";

export const metadata: Metadata = {
  title: "Whatsapp Web",
  description: "Sample whatsapp web clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-[#0B141A] dark:text-[#E9EDEF]">
        <NavBar />
        <Preview />
        {children}
      </body>
    </html>
  );
}
