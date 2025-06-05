import Link from "next/link";
import Image from "next/image";
import { LINKS } from "../lib/links";

export const SiteHeader = () => {
  return (
    <header className='sticky top-0 z-50 w-full bg-off-white/95 backdrop-blur-sm supports-backdrop-filter:bg-off-white/60 shadow-xs py-2'>
      <div className='container flex items-center'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='Zenvia Logo'
            width={100}
            height={100}
            className='h-[75px] w-auto logo-img-correction'
          />
        </Link>
        <nav className='ml-auto flex gap-6'>
          <Link href='/packages' className='text-sm font-medium relative group'>
            Packages
            <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-linear-to-r from-brand-green to-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </Link>
          <Link href='/about' className='text-sm font-medium relative group'>
            About Us
            <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-linear-to-r from-brand-green to-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </Link>
          <Link
            target='_blank'
            href={LINKS.WHATSAPP}
            className='text-sm font-medium relative group'
          >
            Contact
            <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-linear-to-r from-brand-green to-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
