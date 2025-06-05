import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_LINK } from "../lib/links";

export const SiteHeader = () => {
  return (
    <header className='sticky top-0 z-50 w-full bg-[#f8f7f4]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f8f7f4]/60 shadow-sm py-2'>
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
            <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-green to-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </Link>
          <Link href='/about' className='text-sm font-medium relative group'>
            About Us
            <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-green to-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </Link>
          <Link
            target='_blank'
            href={WHATSAPP_LINK}
            className='text-sm font-medium relative group'
          >
            Contact
            <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-green to-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
