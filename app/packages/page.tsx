import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { MapPin, Calendar, Star } from "lucide-react";

export default function PackagesPage() {
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
      category: "Beach",
      rating: 4.8,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "European Adventure",
      description: "Explore the historic cities of Europe with guided tours",
      price: "$1,899",
      duration: "10 days",
      location: "Multiple Cities, Europe",
      category: "Cultural",
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
      category: "Adventure",
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
      category: "Wildlife",
      rating: 4.8,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Cultural Immersion",
      description: "Experience the rich traditions and history of Japan",
      price: "$2,799",
      duration: "12 days",
      location: "Japan",
      category: "Cultural",
      rating: 4.6,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Island Hopping",
      description:
        "Explore the beautiful islands of Greece with crystal clear waters",
      price: "$1,999",
      duration: "10 days",
      location: "Greece",
      category: "Beach",
      rating: 4.7,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Amazon Expedition",
      description:
        "Journey through the world's largest rainforest and discover exotic wildlife",
      price: "$2,399",
      duration: "8 days",
      location: "Brazil",
      category: "Adventure",
      rating: 4.5,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Northern Lights",
      description: "Witness the magical aurora borealis in the Arctic Circle",
      price: "$3,299",
      duration: "6 days",
      location: "Iceland",
      category: "Adventure",
      rating: 4.9,
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  // Categories with icons
  const categories = [
    { name: "Beach", icon: "🏖️", count: 12 },
    { name: "Adventure", icon: "🏔️", count: 15 },
    { name: "Cultural", icon: "🏛️", count: 8 },
    { name: "Wildlife", icon: "🦁", count: 6 },
    { name: "Luxury", icon: "✨", count: 9 },
  ];

  return (
    <main className='flex min-h-screen flex-col'>
      {/* Hero section */}
      <section className='relative h-[50vh] w-full overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10' />
        <img
          src='/placeholder.svg?height=800&width=1600'
          alt='Tour Packages'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative z-20 container mx-auto px-4 h-full flex flex-col justify-center'>
          <div className='max-w-3xl'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 text-white leading-tight'>
              Explore Our Destinations
            </h1>
            <p className='text-2xl text-white/90 font-light'>
              Find your perfect getaway from our collection of handpicked
              experiences
            </p>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <section className='bg-white py-8 shadow-sm'>
        <div className='container mx-auto px-4'>
          <div className='flex overflow-x-auto pb-2 gap-4 no-scrollbar'>
            <Button
              variant='ghost'
              className='rounded-full px-6 py-6 bg-primary/10 text-primary hover:bg-primary/20 whitespace-nowrap'
            >
              All Destinations
            </Button>
            {categories.map((category, index) => (
              <Button
                key={index}
                variant='ghost'
                className='rounded-full px-6 py-6 hover:bg-muted whitespace-nowrap'
              >
                <span className='mr-2 text-xl'>{category.icon}</span>
                {category.name}
                <span className='ml-2 bg-muted rounded-full px-2 py-0.5 text-xs'>
                  {category.count}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages section */}
      <section className='py-16 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {/* Filters sidebar */}
            <div className='lg:col-span-1'>
              <div className='sticky top-24 space-y-8 bg-white p-6 rounded-xl shadow-sm'>
                <div>
                  <h3 className='text-xl font-semibold mb-4'>Find Your Trip</h3>
                  <div className='relative'>
                    <Input
                      type='search'
                      placeholder='Search destinations...'
                      className='w-full rounded-lg h-12'
                    />
                  </div>
                </div>

                <div className='border-t pt-6'>
                  <h3 className='text-lg font-semibold mb-4'>Price Range</h3>
                  <div className='space-y-6'>
                    <Slider
                      defaultValue={[1000, 3000]}
                      min={500}
                      max={5000}
                      step={100}
                      className='py-4'
                    />
                    <div className='flex justify-between'>
                      <span className='text-primary font-medium'>$500</span>
                      <span className='text-primary font-medium'>$5,000+</span>
                    </div>
                  </div>
                </div>

                <div className='border-t pt-6'>
                  <h3 className='text-lg font-semibold mb-4'>Duration</h3>
                  <div className='space-y-3'>
                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        id='1-3'
                        className='mr-3 h-4 w-4 accent-primary'
                      />
                      <label htmlFor='1-3' className='text-base'>
                        1-3 days
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        id='4-7'
                        className='mr-3 h-4 w-4 accent-primary'
                      />
                      <label htmlFor='4-7' className='text-base'>
                        4-7 days
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        id='8-14'
                        className='mr-3 h-4 w-4 accent-primary'
                      />
                      <label htmlFor='8-14' className='text-base'>
                        8-14 days
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        id='15+'
                        className='mr-3 h-4 w-4 accent-primary'
                      />
                      <label htmlFor='15+' className='text-base'>
                        15+ days
                      </label>
                    </div>
                  </div>
                </div>

                <div className='border-t pt-6'>
                  <h3 className='text-lg font-semibold mb-4'>Rating</h3>
                  <div className='space-y-3'>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className='flex items-center'>
                        <input
                          type='checkbox'
                          id={`rating-${rating}`}
                          className='mr-3 h-4 w-4 accent-primary'
                        />
                        <label
                          htmlFor={`rating-${rating}`}
                          className='text-base flex items-center'
                        >
                          {Array.from({ length: rating }).map((_, i) => (
                            <Star
                              key={i}
                              className='h-4 w-4 text-secondary fill-secondary'
                            />
                          ))}
                          {Array.from({ length: 5 - rating }).map((_, i) => (
                            <Star key={i} className='h-4 w-4 text-gray-300' />
                          ))}
                          <span className='ml-2'>& Up</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className='w-full h-12 rounded-lg text-base font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90'>
                  Apply Filters
                </Button>
              </div>
            </div>

            {/* Packages grid */}
            <div className='lg:col-span-3'>
              <div className='flex justify-between items-center mb-8'>
                <p className='text-muted-foreground text-lg'>
                  Showing {packages.length} packages
                </p>
                <Select defaultValue='recommended'>
                  <SelectTrigger className='w-[200px] h-12 rounded-lg'>
                    <SelectValue placeholder='Sort by' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='recommended'>Recommended</SelectItem>
                    <SelectItem value='price-low'>
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value='price-high'>
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value='duration-short'>
                      Duration: Shortest
                    </SelectItem>
                    <SelectItem value='duration-long'>
                      Duration: Longest
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {packages.map((pkg) => (
                  <Link href={`/packages/${1}`}>
                    <div key={pkg.id} className='travel-card group bg-white'>
                      <div className='travel-card-badge bg-secondary text-secondary-foreground'>
                        {pkg.category}
                      </div>
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
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className='flex justify-center mt-16'>
                <nav className='flex items-center space-x-2'>
                  <Button
                    variant='outline'
                    size='icon'
                    disabled
                    className='h-10 w-10 rounded-full'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-4 w-4'
                    >
                      <polyline points='15 18 9 12 15 6'></polyline>
                    </svg>
                    <span className='sr-only'>Previous</span>
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    className='h-10 w-10 p-0 rounded-full bg-primary text-primary-foreground border-none'
                  >
                    1
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    className='h-10 w-10 p-0 rounded-full'
                  >
                    2
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    className='h-10 w-10 p-0 rounded-full'
                  >
                    3
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    className='h-10 w-10 p-0 rounded-full'
                  >
                    4
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    className='h-10 w-10 p-0 rounded-full'
                  >
                    5
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    className='h-10 w-10 rounded-full'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-4 w-4'
                    >
                      <polyline points='9 18 15 12 9 6'></polyline>
                    </svg>
                    <span className='sr-only'>Next</span>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className='py-16 bg-gradient-to-r from-primary to-secondary text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Subscribe to Our Newsletter
            </h2>
            <p className='mb-8 text-lg opacity-90'>
              Stay updated with our latest travel deals and destination guides
            </p>
            <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Your email address'
                className='flex h-12 w-full rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              />
              <Button className='h-12 rounded-full bg-white text-primary hover:bg-white/90 px-6 font-medium'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
