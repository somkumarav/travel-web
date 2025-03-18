import Link from "next/link";
import { Play, MapPin, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Sample travel packages data
  const packages = [
    {
      id: 1,
      title: "Tropical Paradise",
      description:
        "Experience the beauty of Bali with our all-inclusive package",
      price: "$1,299",
      duration: "7 days",
      location: "Bali, Indonesia",
      rating: 4.8,
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 2,
      title: "European Adventure",
      description: "Explore the historic cities of Europe with guided tours",
      price: "$1,899",
      duration: "10 days",
      location: "Multiple Cities, Europe",
      rating: 4.7,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Mountain Retreat",
      description:
        "Discover the serenity of the Swiss Alps with luxury accommodations",
      price: "$2,199",
      duration: "8 days",
      location: "Swiss Alps, Switzerland",
      rating: 4.9,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Safari Experience",
      description:
        "Witness the majestic wildlife of Africa on an unforgettable journey",
      price: "$2,499",
      duration: "9 days",
      location: "Kenya & Tanzania",
      rating: 4.8,
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <main className='flex min-h-screen flex-col'>
      {/* Hero section with video */}
      <section className='relative h-screen w-full overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10' />
        <video
          className='absolute inset-0 w-full h-full object-cover'
          poster='/placeholder.svg?height=1080&width=1920'
          autoPlay
          muted
          loop
          playsInline
        >
          <source src='#' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white'>
          <div className='animate-float flex flex-col items-center justify-center'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
              Discover Your Next Adventure
            </h1>
            <p className='text-xl md:text-2xl mb-10 max-w-2xl font-light'>
              Unforgettable travel experiences tailored to your dreams
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button
              size='lg'
              className='bg-primary hover:bg-primary/90 h-14 px-8 text-base rounded-full transition-all duration-300 transform hover:scale-105'
            >
              Explore Packages
            </Button>
            <Button
              size='lg'
              className='text-white bg-secondary hover:bg-white/20 h-14 px-8 text-base rounded-full transition-all duration-300'
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Packages section */}
      <section className='py-24 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 travel-gradient-text'>
              Popular Destinations
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
              Choose from our selection of carefully crafted travel experiences
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {packages.map((pkg) => (
              <div key={pkg.id} className='travel-card group bg-white'>
                {pkg.featured && (
                  <div className='travel-card-badge bg-secondary text-secondary-foreground'>
                    Featured
                  </div>
                )}
                <div className='travel-card-image'>
                  <img src={pkg.image || "/placeholder.svg"} alt={pkg.title} />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-80'></div>
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
                    <Link href={`/packages/${pkg.id}`}>
                      <Button
                        variant='ghost'
                        className='text-primary hover:text-primary hover:bg-primary/10 p-0'
                      >
                        View Details →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-16 text-center'>
            <Link href='/packages'>
              <Button className='rounded-full px-8 py-6 text-lg font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300'>
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className='py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 travel-gradient-text'>
              Why Choose Us
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
              We provide exceptional travel experiences with attention to every
              detail
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className='bg-muted p-8 rounded-2xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-2'>
              <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
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
                  className='text-primary'
                >
                  <path d='M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z'></path>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-4'>Personalized Service</h3>
              <p className='text-muted-foreground'>
                Tailored travel experiences designed to match your preferences
                and interests
              </p>
            </div>

            <div className='bg-muted p-8 rounded-2xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-2'>
              <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
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
                  className='text-primary'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <polyline points='12 6 12 12 16 14'></polyline>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-4'>24/7 Support</h3>
              <p className='text-muted-foreground'>
                Our team is available around the clock to assist you during your
                journey
              </p>
            </div>

            <div className='bg-muted p-8 rounded-2xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-2'>
              <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
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
                  className='text-primary'
                >
                  <path d='M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5'></path>
                  <path d='M8.5 8.5v.01'></path>
                  <path d='M16 15.5v.01'></path>
                  <path d='M12 12v.01'></path>
                  <path d='M11 17v.01'></path>
                  <path d='M7 14v.01'></path>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-4'>Best Value</h3>
              <p className='text-muted-foreground'>
                Competitive prices with no compromise on quality and experiences
              </p>
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
                  "Our trip to Bali was absolutely perfect. Every detail was
                  taken care of, and the accommodations were stunning. We can't
                  wait to book our next adventure!"
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
                  <path d='M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.795-1.148 1.44-1.65.41-.334.915-.97 1.511-1.906.315-.47.256-1.02-.135-1.51-.39-.49-.96-.588-1.708-.294l-.126.075c-.285.174-.492.372-.623.595l-.115.195c-.127.215-.19.438-.19.665 0 .235.07.404.211.503l.924.68c.133.098.2.238.2.417 0 .18-.067.319-.2.417-.194.14-.681.44-1.46.9-.59.36-1.098.769-1.522 1.228s-.739.959-.943 1.49-.305 1.12-.296 1.75c.01.644.167 1.203.477 1.685.315.488.76.870 1.333 1.147.583.276 1.225.414 1.927.414.602 0 1.15-.135 1.645-.405.495-.27.892-.646 1.192-1.133.3-.487.449-1.077.449-1.766zm9.695 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.55-.137-1.07-.146-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.795-1.148 1.44-1.65.41-.334.915-.97 1.511-1.906.315-.47.256-1.02-.135-1.51-.39-.49-.96-.588-1.708-.294l-.126.075c-.285.174-.492.372-.623.595l-.115.195c-.127.215-.19.438-.19.665 0 .235.07.404.211.503l.924.68c.133.098.2.238.2.417 0 .18-.067.319-.2.417-.194.14-.681.44-1.46.9-.59.36-1.098.769-1.522 1.228s-.739.959-.943 1.49-.305 1.12-.296 1.75c.01.644.167 1.203.477 1.685.315.488.76.870 1.333 1.147.583.276 1.225.414 1.927.414.602 0 1.15-.135 1.645-.405.495-.27.892-.646 1.192-1.133.3-.487.449-1.077.449-1.766z' />
                </svg>
              </div>
              <div className='pt-6'>
                <p className='italic mb-6 text-lg'>
                  "The European Adventure exceeded all our expectations. The
                  guides were knowledgeable, and we felt like we truly
                  experienced the culture of each city we visited."
                </p>
                <div className='flex items-center'>
                  <div className='w-12 h-12 rounded-full bg-primary/20 mr-4 flex items-center justify-center text-primary font-bold'>
                    MT
                  </div>
                  <div>
                    <p className='font-semibold'>Michael Thompson</p>
                    <p className='text-sm text-muted-foreground'>
                      European Adventure Tour
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
                  <path d='M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.795-1.148 1.44-1.65.41-.334.915-.97 1.511-1.906.315-.47.256-1.02-.135-1.51-.39-.49-.96-.588-1.708-.294l-.126.075c-.285.174-.492.372-.623.595l-.115.195c-.127.215-.19.438-.19.665 0 .235.07.404.211.503l.924.68c.133.098.2.238.2.417 0 .18-.067.319-.2.417-.194.14-.681.44-1.46.9-.59.36-1.098.769-1.522 1.228s-.739.959-.943 1.49-.305 1.12-.296 1.75c.01.644.167 1.203.477 1.685.315.488.76.870 1.333 1.147.583.276 1.225.414 1.927.414.602 0 1.15-.135 1.645-.405.495-.27.892-.646 1.192-1.133.3-.487.449-1.077.449-1.766zm9.695 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.55-.137-1.07-.146-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.795-1.148 1.44-1.65.41-.334.915-.97 1.511-1.906.315-.47.256-1.02-.135-1.51-.39-.49-.96-.588-1.708-.294l-.126.075c-.285.174-.492.372-.623.595l-.115.195c-.127.215-.19.438-.19.665 0 .235.07.404.211.503l.924.68c.133.098.2.238.2.417 0 .18-.067.319-.2.417-.194.14-.681.44-1.46.9-.59.36-1.098.769-1.522 1.228s-.739.959-.943 1.49-.305 1.12-.296 1.75c.01.644.167 1.203.477 1.685.315.488.76.870 1.333 1.147.583.276 1.225.414 1.927.414.602 0 1.15-.135 1.645-.405.495-.27.892-.646 1.192-1.133.3-.487.449-1.077.449-1.766z' />
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
                    <p className='font-semibold'>Emily Rodriguez</p>
                    <p className='text-sm text-muted-foreground'>
                      Safari Experience Tour
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-zinc-950 text-gray-100 py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4'>Wanderlust Travel</h3>
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
                <li>
                  <Link
                    href='/packages'
                    className='text-gray-400 hover:text-white'
                  >
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-gray-400 hover:text-white'>
                    Travel Blog
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
                  <span>+1 (555) 123-4567</span>
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
                  <span>info@wanderlusttravel.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4'>We Accept</h3>
              <div className='flex flex-wrap gap-2'>
                <div className='bg-gray-200 text-gray-900 rounded px-2 py-1 text-xs font-semibold'>
                  VISA
                </div>
                <div className='bg-gray-200 text-gray-900 rounded px-2 py-1 text-xs font-semibold'>
                  MASTERCARD
                </div>
                <div className='bg-gray-200 text-gray-900 rounded px-2 py-1 text-xs font-semibold'>
                  AMEX
                </div>
                <div className='bg-gray-200 text-gray-900 rounded px-2 py-1 text-xs font-semibold'>
                  PAYPAL
                </div>
              </div>

              <h3 className='text-lg font-semibold mt-6 mb-2'>
                Business Hours
              </h3>
              <p className='text-gray-400'>
                Monday - Saturday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
            <p>
              &copy; {new Date().getFullYear()} Wanderlust Travel. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
