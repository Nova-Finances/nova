import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nova – Private Beta",
    template: "%s – Nova",
  },
  description: "Next‑gen personal finance management. Private beta.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Nova – Private Beta",
    description: "Next‑gen personal finance management. Private beta.",
    url: "/",
    siteName: "Nova",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Nova Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova – Private Beta",
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
      <body className={`${inter.variable} ${unbounded.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
