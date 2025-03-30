// Import the button variants at the top of the file
import { PrimaryButton } from "@/components/ui/button-variants";
import Link from "next/link";
import { MAILTO_LINK, WHATSAPP_LINK } from "../../lib/links";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className='flex min-h-screen flex-col'>
      {/* Hero section */}
      <section className='relative h-[50vh] w-full overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10' />
        <Image
          src='/about-showcase.jpg'
          alt='About Zenvia'
          unoptimized
          height={800}
          width={1600}
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative z-20 container mx-auto px-4 h-full flex flex-col justify-center'>
          <div className='max-w-3xl'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 text-white leading-tight'>
              About Zenvia
            </h1>
            <p className='text-2xl text-white/90 font-light'>
              "More Than a Journey, An Experience!"
            </p>
          </div>
        </div>
      </section>

      {/* Main content section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 max-w-4xl'>
          <div className='prose prose-lg max-w-none'>
            <p className='text-xl leading-relaxed mb-8'>
              At Zenvia, we believe travel should be a perfect mix of adventure,
              comfort, and personal exploration. That's why we offer customized
              and fixed departure packages, catering to both budget-conscious
              and luxury travelers.
            </p>

            <p className='text-xl leading-relaxed mb-8'>
              What makes us unique? Every tour includes a free leisure day with
              a 150 km cab allowance, so you can create your own adventure
              beyond the planned itinerary. Your journey, your experience – with
              our seamless service and hospitality!
            </p>

            <p className='text-xl leading-relaxed mb-12 font-medium italic'>
              Because at Zenvia, your journey should feel like your own.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission section */}
      <section className='py-16 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='bg-white p-8 rounded-xl shadow-md'>
              <div className='flex items-center mb-6'>
                <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-4'>
                  <span className='text-3xl'>🌍</span>
                </div>
                <h2 className='text-3xl font-bold'>Our Vision</h2>
              </div>
              <p className='text-lg text-muted-foreground italic'>
                "To create seamless, flexible, and high-quality travel
                experiences where every traveler enjoys both guided tours and
                personal freedom to explore."
              </p>
            </div>

            <div className='bg-white p-8 rounded-xl shadow-md'>
              <div className='flex items-center mb-6'>
                <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mr-4'>
                  <span className='text-3xl'>🚀</span>
                </div>
                <h2 className='text-3xl font-bold'>Our Mission</h2>
              </div>
              <ul className='space-y-3 text-lg text-muted-foreground'>
                <li className='flex items-start'>
                  <span className='mr-2'>•</span>
                  <span>
                    To provide affordable yet luxurious travel experiences for
                    all types of travelers.
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2'>•</span>
                  <span>
                    To blend structured itineraries with personalized
                    exploration.
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2'>•</span>
                  <span>
                    To deliver unmatched hospitality, flexibility, and comfort
                    in every journey.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-12 text-center travel-gradient-text'>
            What Makes Zenvia Different?
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-muted p-8 rounded-xl hover:shadow-md transition-all duration-300'>
              <div className='text-3xl mb-4'>💡</div>
              <h3 className='text-xl font-bold mb-3'>Your Trip, Your Way</h3>
              <p className='text-muted-foreground'>
                Structured itineraries with personal freedom.
              </p>
            </div>

            <div className='bg-muted p-8 rounded-xl hover:shadow-md transition-all duration-300'>
              <div className='text-3xl mb-4'>🚗</div>
              <h3 className='text-xl font-bold mb-3'>Free Leisure Day</h3>
              <p className='text-muted-foreground'>
                150 km cab allowance to explore on your own.
              </p>
            </div>

            <div className='bg-muted p-8 rounded-xl hover:shadow-md transition-all duration-300'>
              <div className='text-3xl mb-4'>🌏</div>
              <h3 className='text-xl font-bold mb-3'>
                Domestic & International Tours
              </h3>
              <p className='text-muted-foreground'>
                Carefully crafted experiences worldwide.
              </p>
            </div>

            <div className='bg-muted p-8 rounded-xl hover:shadow-md transition-all duration-300'>
              <div className='text-3xl mb-4'>💼</div>
              <h3 className='text-xl font-bold mb-3'>
                Fixed & Customized Packages
              </h3>
              <p className='text-muted-foreground'>
                Choose a pre-planned trip or design your own.
              </p>
            </div>

            <div className='bg-muted p-8 rounded-xl hover:shadow-md transition-all duration-300'>
              <div className='text-3xl mb-4'>🏨</div>
              <h3 className='text-xl font-bold mb-3'>Budget & Luxury Travel</h3>
              <p className='text-muted-foreground'>
                Something for everyone, from affordable to high-end.
              </p>
            </div>

            <div className='bg-muted p-8 rounded-xl hover:shadow-md transition-all duration-300'>
              <div className='text-3xl mb-4'>📞</div>
              <h3 className='text-xl font-bold mb-3'>24/7 Travel Support</h3>
              <p className='text-muted-foreground'>
                We're here for you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us section */}
      <section className='py-16 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-12 text-center travel-gradient-text'>
            Why Choose Us?
          </h2>

          <div className='max-w-3xl mx-auto'>
            <ul className='space-y-6'>
              <li className='flex items-start bg-white p-6 rounded-xl shadow-sm'>
                <div className='text-2xl mr-4 text-primary'>✅</div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>Personalized Touch</h3>
                  <p className='text-muted-foreground'>
                    Every trip is designed with YOU in mind.
                  </p>
                </div>
              </li>

              <li className='flex items-start bg-white p-6 rounded-xl shadow-sm'>
                <div className='text-2xl mr-4 text-primary'>✅</div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>Hassle-Free Travel</h3>
                  <p className='text-muted-foreground'>
                    We handle everything, from transport to hotels.
                  </p>
                </div>
              </li>

              <li className='flex items-start bg-white p-6 rounded-xl shadow-sm'>
                <div className='text-2xl mr-4 text-primary'>✅</div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>
                    World-Class Service
                  </h3>
                  <p className='text-muted-foreground'>
                    Comfort, reliability, and hospitality at every step.
                  </p>
                </div>
              </li>

              <li className='flex items-start bg-white p-6 rounded-xl shadow-sm'>
                <div className='text-2xl mr-4 text-primary'>✅</div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>Exclusive Deals</h3>
                  <p className='text-muted-foreground'>
                    Best prices without compromising on quality.
                  </p>
                </div>
              </li>

              <li className='flex items-start bg-white p-6 rounded-xl shadow-sm'>
                <div className='text-2xl mr-4 text-primary'>✅</div>
                <div>
                  <h3 className='text-xl font-bold mb-2'>
                    Memorable Experiences
                  </h3>
                  <p className='text-muted-foreground'>
                    Travel beyond the itinerary, create your own adventure.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Founder quote section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto bg-primary/5 p-8 rounded-xl relative'>
            <div className='absolute -top-6 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
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
              <p className='text-xl italic leading-relaxed mb-6'>
                "We started Zenvia with a vision—to make travel not just a tour,
                but an experience. Every traveler deserves both structure and
                freedom, and that's exactly what we deliver. Let's make your
                next trip extraordinary!"
              </p>

              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full bg-primary/20 mr-4 flex items-center justify-center text-primary font-bold'>
                  MT
                </div>
                <div>
                  <p className='font-semibold'>Mashood T</p>
                  <p className='text-sm text-muted-foreground'>
                    Founder of Zenvia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className='py-16 bg-gradient-to-r from-primary to-secondary text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-8'>
            📍 Let's Plan Your Next Adventure!
          </h2>

          <div className='max-w-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Link
              href={WHATSAPP_LINK}
              target='_blank'
              className='bg-white/10 backdrop-blur-sm py-6 rounded-xl px-2'
            >
              <div className='text-3xl mb-3'>📞</div>
              <h3 className='text-xl font-bold mb-2'>Call/WhatsApp</h3>
              <p>8111828967</p>
            </Link>

            <Link
              href={MAILTO_LINK}
              className='bg-white/10 backdrop-blur-sm py-6 rounded-xl px-2'
            >
              <div className='text-3xl mb-3'>📧</div>
              <h3 className='text-xl font-bold mb-2'>Email Us</h3>
              <p>info@zenvia.com</p>
            </Link>

            <div className='bg-white/10 backdrop-blur-sm py-6 rounded-xl px-2'>
              <div className='text-3xl mb-3'>🌐</div>
              <h3 className='text-xl font-bold mb-2'>Visit Us</h3>
              <p>www.zenviatours.com</p>
            </div>
          </div>

          <div className='mt-12'>
            <PrimaryButton className='h-14 bg-white text-primary hover:bg-white/90'>
              <Link href={WHATSAPP_LINK} target='_blank'>
                Contact Us Now
              </Link>
            </PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
