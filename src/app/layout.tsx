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
  title: "Harsh Akula — AI/ML & Computer Vision Engineer",
  description: "AI Software Engineer specializing in enterprise machine learning systems, computer vision, and production-scale AI platforms. Building systems that drive measurable business impact.",
  keywords: ["AI Engineer", "Machine Learning", "Computer Vision", "Enterprise ML", "Deep Learning", "Python", "CV Engineer"],
  authors: [{ name: "Harsh Akula" }],
  creator: "Harsh Akula",
  openGraph: {
    title: "Harsh Akula — AI/ML & Computer Vision Engineer",
    description: "Building enterprise AI systems that drive measurable business impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
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
