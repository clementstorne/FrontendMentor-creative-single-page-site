import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import "./globals.css";

const commissioner = Commissioner({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Creative single page site",
  description:
    "Explore my creation of a single-page website featuring a responsive design and interactive slider. Navigate effortlessly with mouse or keyboard. Dive into hover states for an engaging experience. Ready to explore my project?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={commissioner.className}>{children}</body>
    </html>
  );
}
