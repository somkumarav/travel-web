import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { Palmtree } from "lucide-react";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Travel - Discover the World",
  description:
    "Experience unforgettable travel adventures with our premium tour packages",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex flex-col min-h-screen'>
            <header className='sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm'>
              <div className='container flex h-16 items-center'>
                <Link href='/' className='flex items-center gap-2'>
                  <div className='bg-primary text-primary-foreground p-1.5 rounded-full'>
                    <Palmtree className='h-5 w-5' />
                  </div>
                  <span className='font-bold text-lg'>Wanderlust Travel</span>
                </Link>
                <nav className='ml-auto flex gap-6'>
                  <Link
                    href='/packages'
                    className='text-sm font-medium relative group'
                  >
                    Packages
                    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                  </Link>
                  <Link
                    href='/about'
                    className='text-sm font-medium relative group'
                  >
                    About Us
                    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                  </Link>
                  <Link
                    href='https://wa.me/+919567089997'
                    className='text-sm font-medium relative group'
                  >
                    Contact
                    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                  </Link>
                </nav>
              </div>
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
