import Link from "next/link";
import { Palmtree } from "lucide-react";

export const SiteHeader = () => {
  return (
    <header className='sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm'>
      <div className='container flex h-16 items-center'>
        <Link href='/' className='flex items-center gap-2'>
          <div className='bg-primary text-primary-foreground p-1.5 rounded-full'>
            <Palmtree className='h-5 w-5' />
          </div>
          <span className='font-bold text-lg'>Zenvia</span>
        </Link>
        <nav className='ml-auto flex gap-6'>
          <Link href='/packages' className='text-sm font-medium relative group'>
            Packages
            <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </Link>
          <Link href='/about' className='text-sm font-medium relative group'>
            About Us
            <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </Link>
          <Link href='#' className='text-sm font-medium relative group'>
            Contact
            <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
