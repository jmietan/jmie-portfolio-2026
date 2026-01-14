import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jaymie Tan — Portfolio",
  description: "Web Designer / Developer / QA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-100 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
