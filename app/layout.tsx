import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AF-MOK PERFORMANCE",
  description:
    "Expert vehicle tuning, performance software, and emission solutions for cars and LCVs.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
