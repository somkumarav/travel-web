// Import the button variants at the top of the file
import { PrimaryButton } from "@/components/ui/button-variants";
import Link from "next/link";
import { MAILTO_LINK, WHATSAPP_LINK } from "../../lib/links";
import Image from "next/image";

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
      <section className='relative h-[60vh] w-full overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10' />
        <Image
          src='/about-showcase.jpg'
          alt='About Zenvia'
          unoptimized
          height={800}
          width={1600}
          className='absolute inset-0 w-full h-full object-cover'
          priority
        />
        <div className='relative z-20 container mx-auto px-4 h-full flex flex-col justify-center'>
          <div className='max-w-3xl'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 text-white leading-tight'>
              About Zenvia
            </h1>
            <p className='text-2xl text-white/90 font-light max-w-xl'>
              "More Than a Journey, An Experience!"
            </p>
          </div>
        </div>
      </section>

      {/* Main content section */}
      <section className='py-24 bg-white'>
        <div className='container mx-auto px-4 max-w-4xl'>
          <div className='prose prose-lg max-w-none'>
            <p className='text-xl leading-relaxed mb-8 text-muted-foreground'>
              At Zenvia, we believe travel should be a perfect mix of adventure,
              comfort, and personal exploration. That's why we offer customized
              and fixed departure packages, catering to both budget-conscious
              and luxury travelers.
            </p>

            <p className='text-xl leading-relaxed mb-8 text-muted-foreground'>
              What makes us unique? Every tour includes a free leisure day with
              a 150 km cab allowance, so you can create your own adventure
              beyond the planned itinerary. Your journey, your experience – with
              our seamless service and hospitality!
            </p>

            <p className='text-2xl leading-relaxed mb-12 font-medium bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent'>
              Because at Zenvia, your journey should feel like your own.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission section */}
      <section className='py-24 bg-gradient-to-r from-brand-green/[0.02] to-brand-blue/[0.02]'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='group bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg'>
              <div className='flex items-center mb-6'>
                <div className='bg-brand-green/10 w-16 h-16 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform'>
                  <span className='text-3xl'>🌍</span>
                </div>
                <h2 className='text-3xl font-bold bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent'>
                  Our Vision
                </h2>
              </div>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                "To create seamless, flexible, and high-quality travel
                experiences where every traveler enjoys both guided tours and
                personal freedom to explore."
              </p>
            </div>

            <div className='group bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg'>
              <div className='flex items-center mb-6'>
                <div className='bg-brand-blue/10 w-16 h-16 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform'>
                  <span className='text-3xl'>🚀</span>
                </div>
                <h2 className='text-3xl font-bold bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent'>
                  Our Mission
                </h2>
              </div>
              <ul className='space-y-4 text-lg text-muted-foreground'>
                <li className='flex items-start'>
                  <span className='mr-3 text-brand-blue'>•</span>
                  <span>
                    To provide affordable yet luxurious travel experiences for
                    all types of travelers.
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-3 text-brand-blue'>•</span>
                  <span>
                    To blend structured itineraries with personalized
                    exploration.
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-3 text-brand-blue'>•</span>
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

      {/* Features Grid */}
      <section className='py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-16 text-center bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent'>
            What Makes Zenvia Different?
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='group p-8 rounded-2xl transition-all duration-300 hover:shadow-lg bg-gradient-to-r from-brand-green/[0.02] to-brand-blue/[0.02] hover:from-brand-green/[0.05] hover:to-brand-blue/[0.05]'
              >
                <div className='text-3xl mb-4 transform group-hover:scale-110 transition-transform'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-bold mb-3'>{feature.title}</h3>
                <p className='text-muted-foreground'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className='py-24 bg-gradient-to-r from-brand-green/[0.02] to-brand-blue/[0.02]'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm relative'>
            <div className='absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r from-brand-green to-brand-blue rounded-xl flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6 text-white'
              >
                <path d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z' />
                <path d='M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z' />
              </svg>
            </div>

            <div className='pt-6'>
              <p className='text-xl leading-relaxed mb-8 text-muted-foreground'>
                "We started Zenvia with a vision—to make travel not just a tour,
                but an experience. Every traveler deserves both structure and
                freedom, and that's exactly what we deliver. Let's make your
                next trip extraordinary!"
              </p>

              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-brand-green/10 to-brand-blue/10 mr-4 flex items-center justify-center font-bold text-brand-blue'>
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
      <section className='py-24 bg-gradient-to-r from-brand-green to-brand-blue text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-12'>
            Ready to Start Your Journey?
          </h2>

          <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Link
              href={WHATSAPP_LINK}
              target='_blank'
              className='group bg-white/10 backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 hover:bg-white/20'
            >
              <div className='text-3xl mb-4 group-hover:scale-110 transition-transform'>
                📞
              </div>
              <h3 className='text-xl font-bold mb-2'>Call/WhatsApp</h3>
              <p className='text-white/80'>8111828967</p>
            </Link>

            <Link
              href={MAILTO_LINK}
              className='group bg-white/10 backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 hover:bg-white/20'
            >
              <div className='text-3xl mb-4 group-hover:scale-110 transition-transform'>
                📧
              </div>
              <h3 className='text-xl font-bold mb-2'>Email Us</h3>
              <p className='text-white/80'>info@zenvia.com</p>
            </Link>

            <div className='group bg-white/10 backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 hover:bg-white/20'>
              <div className='text-3xl mb-4 group-hover:scale-110 transition-transform'>
                🌐
              </div>
              <h3 className='text-xl font-bold mb-2'>Visit Us</h3>
              <p className='text-white/80'>www.zenviatours.com</p>
            </div>
          </div>

          <div className='mt-12'>
            <PrimaryButton className='h-14 bg-white text-brand-blue hover:bg-white/90 transition-colors'>
              <Link
                href={WHATSAPP_LINK}
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
            </PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
