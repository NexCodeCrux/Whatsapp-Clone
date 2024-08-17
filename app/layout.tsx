import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Preview from "./components/Preview";

export const metadata: Metadata = {
  title: "Whatsapp-Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <Preview />
        {children}
      </body>
    </html>
  );
}
