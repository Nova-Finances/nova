import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Finances – Private Beta",
    template: "%s – Finances",
  },
  description: "Next‑gen personal finance management. Private beta.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Finances – Private Beta",
    description: "Next‑gen personal finance management. Private beta.",
    url: "/",
    siteName: "Finances",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Finances Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finances – Private Beta",
    description: "Next‑gen personal finance management. Private beta.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
