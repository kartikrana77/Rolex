import "./globals.css";
import type { Metadata } from "next";

import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Rolex Yacht-Master II | Master the moment",
  description: "Experience the precision and power of the Rolex Yacht-Master II. An Apple-level scrollytelling journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="cursor-none">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
