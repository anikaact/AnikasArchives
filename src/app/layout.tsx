import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sour_Gummy } from 'next/font/google';
import NavLinks from "./NavLinks";
import Link from "next/link";

const sourGummy = Sour_Gummy({
  subsets: ['latin'],
  weight: ['400', '900'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anika's Archives",
  icons: {
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><path d=%22M50 85 C50 85 20 60 20 40 C20 25 35 15 50 30 C65 15 80 25 80 40 C80 60 50 85 50 85Z%22 fill=%22%23c78388%22/></svg>`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className={`${sourGummy.className} antialiased`}>
        {/* Toolbar */}
        <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-8 py-4 bg-[#f4bfc1] shadow-md">
          {/* Left side: Home */}
          <Link href="/" className="text-3xl font-bold text-[#dc828a] hover:text-white">
            ♥
          </Link>

          {/* Right side: Other links */}
          <NavLinks />
        </nav>

        {/* Page content */}
        {children}

        {/* Footer (visible on every page) */}
        <footer className="w-full bg-white text-black py-6 mt-12 shadow-inner">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
            {/* Contact info */}
            <p className="text-sm">
              Reach me at{" "}
              <a
                href="mailto:anikathapar22@gmail.com"
                className="hover:text-[#dc828a] transition-colors"
              >
                anikathapar22@gmail.com
              </a>
            </p>

            {/* Social links */}
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/anika-thapar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dc828a] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/anikaact"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dc828a] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/anika._.t"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dc828a] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@anikaserves"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dc828a] transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
