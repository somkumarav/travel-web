"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LINKS } from "../../lib/links";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export default function AboutPage() {
  const features: Feature[] = [
    {
      icon: "💡",
      title: "Your Trip, Your Way",
      description: "Structured itineraries with personal freedom.",
    },
    {
      icon: "🚗",
      title: "Free Leisure Day",
      description: "150 km cab allowance to explore on your own.",
    },
    {
      icon: "🌏",
      title: "Global Destinations",
      description: "Carefully crafted experiences worldwide.",
    },
    {
      icon: "💼",
      title: "Flexible Packages",
      description: "Choose a pre-planned trip or design your own.",
    },
    {
      icon: "🏨",
      title: "All Budgets Welcome",
      description: "From affordable to luxury experiences.",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "We're here for you every step of the way.",
    },
  ];

  return (
    <main className='flex min-h-screen flex-col'>
      {/* Hero section */}
      <section className='relative h-[55vh] w-full overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60 z-10' />
        <img
          src='/about-showcase.jpg'
          alt='About Zenvia'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative z-20 container mx-auto px-4 h-full flex flex-col justify-center'>
          <div className='max-w-3xl'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 text-white leading-tight'>
              Your Journey, Our Passion
            </h1>
            <p className='text-2xl text-white/90 font-light'>
              We believe in creating unforgettable travel experiences that blend
              guided tours with personal exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story section */}
      <section className='py-24 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 travel-gradient-text'>
              Our Story
            </h2>
            <p className='text-muted-foreground text-lg leading-relaxed mb-12'>
              Founded in 2005, Zenvia has been at the forefront of innovative
              travel experiences. We understand that every traveler is unique,
              which is why we offer a perfect blend of structured itineraries
              and personal freedom. Our commitment to quality service and
              attention to detail has made us a trusted name in the travel
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className='py-24 bg-muted/20'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 travel-gradient-text'>
              Why Choose Zenvia?
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
              We combine the best of guided tours with the freedom to explore
              independently
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className='border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2'
              >
                <CardContent className='p-8'>
                  <div className='text-4xl mb-6'>{feature.icon}</div>
                  <h3 className='text-xl font-bold mb-4'>{feature.title}</h3>
                  <p className='text-muted-foreground'>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className='py-24 bg-linear-to-r from-primary/10 to-secondary/10'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-12 travel-gradient-text'>
            Ready to Start Your Journey?
          </h2>

          <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Link
              href={LINKS.WHATSAPP}
              target='_blank'
              className='group bg-card p-8 rounded-2xl transition-all duration-300 hover:shadow-lg'
            >
              <div className='text-3xl mb-4 group-hover:scale-110 transition-transform'>
                📞
              </div>
              <h3 className='text-xl font-bold mb-2'>Call/WhatsApp</h3>
              <p className='text-muted-foreground'>8111828967</p>
            </Link>

            <Link
              href={LINKS.MAILTO}
              className='group bg-card p-8 rounded-2xl transition-all duration-300 hover:shadow-lg'
            >
              <div className='text-3xl mb-4 group-hover:scale-110 transition-transform'>
                📧
              </div>
              <h3 className='text-xl font-bold mb-2'>Email Us</h3>
              <p className='text-muted-foreground'>info@zenvia.com</p>
            </Link>

            <div className='group bg-card p-8 rounded-2xl transition-all duration-300 hover:shadow-lg'>
              <div className='text-3xl mb-4 group-hover:scale-110 transition-transform'>
                🌐
              </div>
              <h3 className='text-xl font-bold mb-2'>Visit Us</h3>
              <p className='text-muted-foreground'>www.zenviatours.com</p>
            </div>
          </div>

          <div className='mt-12'>
            <Button asChild className='h-14 rounded-full'>
              <Link
                href={LINKS.WHATSAPP}
                target='_blank'
                className='flex items-center gap-2'
              >
                Contact Us Now
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='w-4 h-4'
                >
                  <path d='M5 12h14' />
                  <path d='m12 5 7 7-7 7' />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
