import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doc. Santos Animal Bite Center | Animal Bite Care",
  description: "Animal bite care, vaccination information, first-aid steps, and preparing for a visit to Doc. Santos Animal Bite Center.",
  robots: { index: false, follow: false },
  openGraph: { title: "Doc. Santos Animal Bite Center", description: "Animal bite information and a clearer path to care.", type: "website", locale: "en_PH" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
