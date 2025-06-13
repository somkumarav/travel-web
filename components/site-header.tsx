"use client";

import Link from "next/link";
import Image from "next/image";
import { LINKS } from "../lib/links";
import { ThemeToggle } from "./theme-toggle";

export const SiteHeader = () => {
  return (
    <header className='sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 shadow-xs py-2'>
      <div className='container flex items-center'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='Zenvia Logo'
            width={100}
            height={100}
            className='h-[50px] md:h-[75px] w-auto'
          />
        </Link>
        <nav className='ml-auto flex items-center gap-4 md:gap-6'>
          <Link
            href='/packages'
            className='text-xs md:text-sm font-medium relative group text-foreground'
          >
            Packages
            <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-linear-to-r from-brand-green to-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </Link>
          <Link
            href='/about'
            className='text-xs md:text-sm font-medium relative group text-foreground'
          >
            About Us
            <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-linear-to-r from-brand-green to-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </Link>
          <Link
            target='_blank'
            href={LINKS.WHATSAPP}
            className='text-xs md:text-sm font-medium relative group text-foreground'
          >
            Contact
            <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-linear-to-r from-brand-green to-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
