import type { Metadata } from "next";
import { Rubik, Alike_Angular } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const alikeAngular = Alike_Angular({
  variable: "--font-alike-angular",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ento Encounters",
  description: "A record of local insects in Singapore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik} ${alikeAngular} antialiased`}>{children}</body>
    </html>
  );
}
