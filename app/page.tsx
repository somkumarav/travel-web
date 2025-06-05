"use client";

import Link from "next/link";
import { Play, MapPin, Calendar, Star, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/ui/button-variants";
import { Card, CardContent } from "@/components/ui/card";
import { getFeaturedPackages } from "@/lib/data";
import { WHATSAPP_LINK } from "../lib/links";

export default function Home() {
  const packages = getFeaturedPackages(4);

  return (
    <main className='flex min-h-screen flex-col'>
      {/* Hero section with video */}
      <section className='relative h-screen w-full overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10' />
        <video
          className='absolute inset-0 w-full h-full object-cover'
          src='/landing-showcase.mp4'
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className='relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white'>
          <div className='animate-float flex flex-col items-center justify-center'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
              Travel Beyond Limits, Your Way!
            </h1>
            <p className='text-xl md:text-2xl mb-10 max-w-3xl font-light'>
              Experience the perfect blend of guided tours and personal
              exploration. Whether you seek luxury or budget-friendly travel,
              Zenvia takes you beyond the ordinary!
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-5'>
            <PrimaryButton>
              <Link href='/'>Explore Packages</Link>
            </PrimaryButton>
            <SecondaryButton className='text-white border-white'>
              <Link target='_blank' href={WHATSAPP_LINK}>
                Contact Us
              </Link>
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Why Travel with Zenvia section */}
      <section className='py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 travel-gradient-text'>
              Why Travel with Zenvia?
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
              We offer the perfect blend of structure and freedom for an
              unforgettable travel experience
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <Card className='border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2'>
              <CardContent className='p-8'>
                <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='28'
                    height='28'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'></path>
                    <circle cx='12' cy='10' r='3'></circle>
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-4'>Free Leisure Day</h3>
                <p className='text-muted-foreground'>
                  Every package includes a free day with 150 km cab allowance to
                  explore at your own pace
                </p>
              </CardContent>
            </Card>

            <Card className='border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2'>
              <CardContent className='p-8'>
                <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='28'
                    height='28'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z'></path>
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-4'>Personalized Service</h3>
                <p className='text-muted-foreground'>
                  Tailored travel experiences designed to match your preferences
                  and interests
                </p>
              </CardContent>
            </Card>

            <Card className='border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2'>
              <CardContent className='p-8'>
                <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='28'
                    height='28'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10'></path>
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-4'>
                  Budget & Luxury Options
                </h3>
                <p className='text-muted-foreground'>
                  Choose from a range of accommodations and experiences to fit
                  your budget and preferences
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Destinations section */}
      <section className='py-24 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 travel-gradient-text'>
              Top Destinations
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
              Choose from our selection of carefully crafted travel experiences
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {packages.map((pkg) => (
              <Link href={`/packages/${pkg.id}`} key={pkg.id} className='block'>
                <div className='travel-card group bg-white'>
                  {pkg.featured && (
                    <div className='travel-card-badge bg-secondary text-secondary-foreground'>
                      Featured
                    </div>
                  )}
                  <div className='travel-card-image'>
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80'></div>
                  </div>
                  <div className='travel-card-content'>
                    <div className='travel-card-location'>
                      <MapPin className='h-4 w-4 mr-1 text-primary' />
                      <span>{pkg.location}</span>
                    </div>
                    <h3 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors'>
                      {pkg.title}
                    </h3>
                    <p className='text-muted-foreground text-sm line-clamp-2'>
                      {pkg.description}
                    </p>

                    <div className='travel-card-footer'>
                      <div className='travel-card-price text-primary'>
                        {pkg.price}
                      </div>
                      <div className='travel-card-duration bg-primary/10 text-primary'>
                        <Calendar className='h-3 w-3 inline-block mr-1' />
                        {pkg.duration}
                      </div>
                    </div>

                    <div className='mt-4 flex items-center justify-between'>
                      <div className='flex items-center'>
                        <Star className='h-4 w-4 text-secondary fill-secondary' />
                        <span className='ml-1 text-sm font-medium'>
                          {pkg.rating}
                        </span>
                      </div>
                      <Button
                        variant='ghost'
                        className='text-primary hover:text-primary hover:bg-primary/10 p-0'
                      >
                        View Details →
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Replace the "View All Destinations" button */}
          <div className='mt-16 text-center'>
            <Link href='/packages'>
              <SecondaryButton>View All Destinations</SecondaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers section */}
      <section className='py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 travel-gradient-text'>
              Special Offers
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
              Take advantage of our limited-time deals and exclusive packages
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-muted rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'>
              <div className='flex flex-col md:flex-row'>
                <div className='md:w-2/5 relative'>
                  <img
                    src='/placeholder.svg?height=400&width=300'
                    alt='Early Bird Discount'
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium'>
                    20% OFF
                  </div>
                </div>
                <div className='md:w-3/5 p-6 flex flex-col justify-between'>
                  <div>
                    <h3 className='text-xl font-bold mb-2'>
                      Early Bird Discount
                    </h3>
                    <p className='text-muted-foreground mb-4'>
                      Book any package 3 months in advance and get 20% off.
                      Limited time offer!
                    </p>
                    <ul className='space-y-2 mb-4'>
                      <li className='flex items-start'>
                        <Check className='h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5' />
                        <span>Valid on all international packages</span>
                      </li>
                      <li className='flex items-start'>
                        <Check className='h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5' />
                        <span>No hidden fees or charges</span>
                      </li>
                      <li className='flex items-start'>
                        <Check className='h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5' />
                        <span>
                          Free cancellation up to 30 days before departure
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* Replace the "Book Now" buttons in the Special Offers section */}
                  <PrimaryButton className='w-full md:w-auto'>
                    Book Now <ArrowRight className='ml-2 h-4 w-4' />
                  </PrimaryButton>
                </div>
              </div>
            </div>

            <div className='bg-muted rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'>
              <div className='flex flex-col md:flex-row'>
                <div className='md:w-2/5 relative'>
                  <img
                    src='/placeholder.svg?height=400&width=300'
                    alt='Group Discount'
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium'>
                    SPECIAL
                  </div>
                </div>
                <div className='md:w-3/5 p-6 flex flex-col justify-between'>
                  <div>
                    <h3 className='text-xl font-bold mb-2'>Group Discount</h3>
                    <p className='text-muted-foreground mb-4'>
                      Book for a group of 5 or more and get one person free.
                      Perfect for family trips!
                    </p>
                    <ul className='space-y-2 mb-4'>
                      <li className='flex items-start'>
                        <Check className='h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5' />
                        <span>Valid on all packages over 5 days</span>
                      </li>
                      <li className='flex items-start'>
                        <Check className='h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5' />
                        <span>Includes all accommodations and activities</span>
                      </li>
                      <li className='flex items-start'>
                        <Check className='h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5' />
                        <span>Special group activities included</span>
                      </li>
                    </ul>
                  </div>
                  {/* Replace the second "Book Now" button */}
                  <PrimaryButton className='w-full md:w-auto'>
                    Book Now <ArrowRight className='ml-2 h-4 w-4' />
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className='py-24 bg-muted/20'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 travel-gradient-text'>
              What Our Travelers Say
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
              Hear from those who have experienced our exceptional service
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-2xl shadow-md relative'>
              <div className='absolute -top-5 left-8 w-10 h-10 bg-secondary rounded-full flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  stroke='currentColor'
                  strokeWidth='0'
                  className='text-white'
                >
                  <path d='M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.795-1.148 1.44-1.65.41-.334.915-.97 1.511-1.906.315-.47.256-1.02-.135-1.51-.39-.49-.96-.588-1.708-.294l-.126.075c-.285.174-.492.372-.623.595l-.115.195c-.127.215-.19.438-.19.665 0 .235.07.404.211.503l.924.68c.133.098.2.238.2.417 0 .18-.067.319-.2.417-.194.14-.681.44-1.46.9-.59.36-1.098.769-1.522 1.228s-.739.959-.943 1.49-.305 1.12-.296 1.75c.01.644.167 1.203.477 1.685.315.488.76.870 1.333 1.147.583.276 1.225.414 1.927.414.602 0 1.15-.135 1.645-.405.495-.27.892-.646 1.192-1.133.3-.487.449-1.077.449-1.766zm9.695 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.55-.137-1.07-.146-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.795-1.148 1.44-1.65.41-.334.915-.97 1.511-1.906.315-.47.256-1.02-.135-1.51-.39-.49-.96-.588-1.708-.294l-.126.075c-.285.174-.492.372-.623.595l-.115.195c-.127.215-.19.438-.19.665 0 .235.07.404.211.503l.924.68c.133.098.2.238.2.417 0 .18-.067.319-.2.417-.194.14-.681.44-1.46.9-.59.36-1.098.769-1.522 1.228s-.739.959-.943 1.49-.305 1.12-.296 1.75c.01.644.167 1.203.477 1.685.315.488.76.870 1.333 1.147.583.276 1.225.414 1.927.414.602 0 1.15-.135 1.645-.405.495-.27.892-.646 1.192-1.133.3-.487.449-1.077.449-1.766z' />
                </svg>
              </div>
              <div className='pt-6'>
                <p className='italic mb-6 text-lg'>
                  "Our trip to Bali was absolutely perfect. The free leisure day
                  with cab allowance was the highlight - we discovered a hidden
                  waterfall that wasn't on any tourist map!"
                </p>
                <div className='flex items-center'>
                  <div className='w-12 h-12 rounded-full bg-primary/20 mr-4 flex items-center justify-center text-primary font-bold'>
                    SJ
                  </div>
                  <div>
                    <p className='font-semibold'>Sarah Johnson</p>
                    <p className='text-sm text-muted-foreground'>
                      Tropical Paradise Tour
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white p-8 rounded-2xl shadow-md relative'>
              <div className='absolute -top-5 left-8 w-10 h-10 bg-secondary rounded-full flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  stroke='currentColor'
                  strokeWidth='0'
                  className='text-white'
                >
                  <path d='M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.795-1.148 1.44-1.65.41-.334.915-.97 1.511-1.906.315-.47.256-1.02-.135-1.51-.39-.49-.96-.588-1.708-.294l-.126.075c-.285.174-.492.372-.623.595l-.115.195c-.127.215-.19.438-.19.665 0 .235.07.404.211.503l.924.68c.133.098.2.238.2.417 0 .18-.067.319-.2.417-.194.14-.681.44-1.46.9-.59.36-1.098.769-1.522 1.228s-.739.959-.943 1.49-.305 1.12-.296 1.75c.01.644.167 1.203.477 1.685.315.488.76.870 1.333 1.147.583.276 1.225.414 1.927.414.602 0 1.15-.135 1.645-.405.495-.27.892-.646 1.192-1.133.3-.487.449-1.077.449-1.766z' />
                </svg>
              </div>
              <div className='pt-6'>
                <p className='italic mb-6 text-lg'>
                  "The Safari Experience was a once-in-a-lifetime adventure. The
                  accommodations were luxurious, and seeing the wildlife up
                  close was breathtaking."
                </p>
                <div className='flex items-center'>
                  <div className='w-12 h-12 rounded-full bg-primary/20 mr-4 flex items-center justify-center text-primary font-bold'>
                    ER
                  </div>
                  <div>
                    <p className='font-semibold'>Michael Thompson</p>
                    <p className='text-sm text-muted-foreground'>
                      Safari Experience Tour
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white p-8 rounded-2xl shadow-md relative'>
              <div className='absolute -top-5 left-8 w-10 h-10 bg-secondary rounded-full flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  stroke='currentColor'
                  strokeWidth='0'
                  className='text-white'
                >
                  <path d='M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.795-1.148 1.44-1.65.41-.334.915-.97 1.511-1.906.315-.47.256-1.02-.135-1.51-.39-.49-.96-.588-1.708-.294l-.126.075c-.285.174-.492.372-.623.595l-.115.195c-.127.215-.19.438-.19.665 0 .235.07.404.211.503l.924.68c.133.098.2.238.2.417 0 .18-.067.319-.2.417-.194.14-.681.44-1.46.9-.59.36-1.098.769-1.522 1.228s-.739.959-.943 1.49-.305 1.12-.296 1.75c.01.644.167 1.203.477 1.685.315.488.76.870 1.333 1.147.583.276 1.225.414 1.927.414.602 0 1.15-.135 1.645-.405.495-.27.892-.646 1.192-1.133.3-.487.449-1.077.449-1.766z' />
                </svg>
              </div>
              <div className='pt-6'>
                <p className='italic mb-6 text-lg'>
                  "As a budget traveler, I was amazed at the quality of
                  accommodations and experiences Zenvia provided. The value for
                  money is unbeatable, and the free leisure day was a fantastic
                  bonus!"
                </p>
                <div className='flex items-center'>
                  <div className='w-12 h-12 rounded-full bg-primary/20 mr-4 flex items-center justify-center text-primary font-bold'>
                    ER
                  </div>
                  <div>
                    <p className='font-semibold'>Emily Rodriguez</p>
                    <p className='text-sm text-muted-foreground'>
                      Island Hopping Tour
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easy Booking Section */}
      <section className='py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 travel-gradient-text'>
              Book Your Dream Trip
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
              Follow these simple steps to book your next adventure with Zenvia
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-primary'>
                <span className='text-2xl font-bold'>1</span>
              </div>
              <h3 className='text-xl font-bold mb-3'>
                Choose Your Destination
              </h3>
              <p className='text-muted-foreground'>
                Browse our packages and select your dream destination
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-primary'>
                <span className='text-2xl font-bold'>2</span>
              </div>
              <h3 className='text-xl font-bold mb-3'>Customize Your Trip</h3>
              <p className='text-muted-foreground'>
                Select your preferred dates, accommodations, and activities
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-primary'>
                <span className='text-2xl font-bold'>3</span>
              </div>
              <h3 className='text-xl font-bold mb-3'>Secure Your Booking</h3>
              <p className='text-muted-foreground'>
                Complete your booking with our secure payment system
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-primary'>
                <span className='text-2xl font-bold'>4</span>
              </div>
              <h3 className='text-xl font-bold mb-3'>Pack & Go!</h3>
              <p className='text-muted-foreground'>
                Receive your itinerary and get ready for an amazing journey
              </p>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <Link href='/packages'>
              <SecondaryButton>Start Planning Your Trip</SecondaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-gray-100 py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4'>Zenvia</h3>
              <p className='mb-4 text-gray-400'>
                Creating unforgettable travel experiences since 2005. Our
                mission is to make your travel dreams a reality.
              </p>
              <div className='flex space-x-4'>
                <a href='#' className='text-gray-400 hover:text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                  </svg>
                </a>
                <a href='#' className='text-gray-400 hover:text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <rect
                      x='2'
                      y='2'
                      width='20'
                      height='20'
                      rx='5'
                      ry='5'
                    ></rect>
                    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                    <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
                  </svg>
                </a>
                <a href='#' className='text-gray-400 hover:text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
              <ul className='space-y-2'>
                <li>
                  <Link href='/' className='text-gray-400 hover:text-white'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/packages'
                    className='text-gray-400 hover:text-white'
                  >
                    Tour Packages
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='text-gray-400 hover:text-white'
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4'>Contact Info</h3>
              <ul className='space-y-2 text-gray-400'>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mr-2 mt-1'
                  >
                    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                    <circle cx='12' cy='10' r='3'></circle>
                  </svg>
                  <span>123 Travel Street, City, Country</span>
                </li>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mr-2 mt-1'
                  >
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                  </svg>
                  <span>8111828967</span>
                </li>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mr-2 mt-1'
                  >
                    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                    <polyline points='22,6 12,13 2,6'></polyline>
                  </svg>
                  <span>info@zenvia.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4'>We Accept</h3>
              <div className='flex flex-wrap gap-2'>
                <div className='bg-white text-gray-900 rounded px-2 py-1 text-xs font-semibold'>
                  VISA
                </div>
                <div className='bg-white text-gray-900 rounded px-2 py-1 text-xs font-semibold'>
                  MASTERCARD
                </div>
                <div className='bg-white text-gray-900 rounded px-2 py-1 text-xs font-semibold'>
                  AMEX
                </div>
                <div className='bg-white text-gray-900 rounded px-2 py-1 text-xs font-semibold'>
                  PAYPAL
                </div>
              </div>

              <h3 className='text-lg font-semibold mt-6 mb-4'>
                Business Hours
              </h3>
              <p className='text-gray-400'>
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
            <p>
              &copy; {new Date().getFullYear()} Zenvia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
