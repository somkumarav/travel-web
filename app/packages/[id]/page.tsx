import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Users, Utensils, Wifi, Bed, Car } from "lucide-react";

// This would typically come from a database or API
const getPackageData = (id: string) => {
  const packages = [
    {
      id: "1",
      title: "Tropical Paradise",
      description:
        "Experience the beauty of Bali with our all-inclusive package",
      longDescription:
        "Immerse yourself in the stunning landscapes and rich culture of Bali. This comprehensive package includes luxury accommodations, guided tours to ancient temples, relaxing spa treatments, and exciting outdoor activities. Enjoy pristine beaches, lush rice terraces, and vibrant local markets.",
      price: "$1,299",
      duration: "7 days",
      location: "Bali, Indonesia",
      groupSize: "2-12 people",
      meals: "All meals included",
      accommodation: "4-star beachfront resort",
      transportation: "Airport transfers and tour transportation",
      image: "/placeholder.svg?height=600&width=1200",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Bali",
          description:
            "Airport pickup and transfer to your beachfront resort. Welcome dinner and orientation.",
        },
        {
          day: "Day 2",
          title: "Ubud Cultural Tour",
          description:
            "Visit the sacred Monkey Forest, Ubud Palace, and local art markets. Traditional dance performance in the evening.",
        },
        {
          day: "Day 3",
          title: "Temple and Rice Terrace Exploration",
          description:
            "Tour of Tanah Lot Temple, Tegalalang Rice Terraces, and coffee plantation visit.",
        },
        {
          day: "Day 4",
          title: "Beach Day and Water Activities",
          description:
            "Relax on the beach or choose from optional water activities like snorkeling, surfing, or paddleboarding.",
        },
        {
          day: "Day 5",
          title: "Mount Batur Sunrise Trek",
          description:
            "Early morning trek to witness the breathtaking sunrise from Mount Batur. Afternoon spa treatment.",
        },
        {
          day: "Day 6",
          title: "Island Hopping",
          description:
            "Boat trip to Nusa Penida, visiting Kelingking Beach, Angel's Billabong, and Crystal Bay.",
        },
        {
          day: "Day 7",
          title: "Departure Day",
          description:
            "Free morning for last-minute shopping or relaxation. Airport transfer for departure.",
        },
      ],
      inclusions: [
        "6 nights accommodation in 4-star beachfront resort",
        "All meals (breakfast, lunch, and dinner)",
        "Airport transfers and tour transportation",
        "English-speaking guide throughout the tour",
        "Entrance fees to all attractions in the itinerary",
        "Welcome dinner with traditional performances",
        "One spa treatment session",
        "Mount Batur sunrise trek with breakfast",
        "Island hopping boat trip",
        "Travel insurance",
      ],
      exclusions: [
        "International airfare",
        "Personal expenses",
        "Optional activities not mentioned in the itinerary",
        "Alcoholic beverages",
        "Tips for guides and drivers",
      ],
    },
    {
      id: "2",
      title: "European Adventure",
      description: "Explore the historic cities of Europe with guided tours",
      longDescription:
        "Embark on an unforgettable journey through Europe's most iconic cities. This carefully crafted tour takes you through the heart of European culture, history, and cuisine. Visit world-famous landmarks, enjoy authentic local experiences, and create memories that will last a lifetime.",
      price: "$1,899",
      duration: "10 days",
      location: "Multiple cities in Europe",
      groupSize: "4-16 people",
      meals: "Breakfast included, select dinners",
      accommodation: "4-star city center hotels",
      transportation: "High-speed train between cities, private coach",
      image: "/placeholder.svg?height=600&width=1200",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Paris",
          description:
            "Welcome to Paris! Transfer to your hotel and enjoy a welcome dinner cruise on the Seine River.",
        },
        {
          day: "Day 2",
          title: "Paris Highlights",
          description:
            "Visit the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Evening at leisure.",
        },
        {
          day: "Day 3",
          title: "Paris to Amsterdam",
          description:
            "Morning high-speed train to Amsterdam. Afternoon canal cruise and walking tour.",
        },
        {
          day: "Day 4",
          title: "Amsterdam Exploration",
          description:
            "Visit the Rijksmuseum, Van Gogh Museum, and Anne Frank House. Free evening to explore.",
        },
        {
          day: "Day 5",
          title: "Amsterdam to Berlin",
          description:
            "Train journey to Berlin. Evening orientation walk and dinner in a traditional German restaurant.",
        },
        {
          day: "Day 6",
          title: "Berlin Highlights",
          description:
            "Visit the Brandenburg Gate, Reichstag, Berlin Wall Memorial, and Checkpoint Charlie.",
        },
        {
          day: "Day 7",
          title: "Berlin to Prague",
          description:
            "Train to Prague. Evening walking tour of Old Town and dinner.",
        },
        {
          day: "Day 8",
          title: "Prague Exploration",
          description:
            "Visit Prague Castle, Charles Bridge, and the Astronomical Clock. Optional folklore dinner show.",
        },
        {
          day: "Day 9",
          title: "Prague at Leisure",
          description:
            "Free day to explore Prague at your own pace. Farewell dinner in the evening.",
        },
        {
          day: "Day 10",
          title: "Departure Day",
          description: "Transfer to Prague Airport for your departure flight.",
        },
      ],
      inclusions: [
        "9 nights accommodation in 4-star city center hotels",
        "Daily breakfast and select dinners",
        "High-speed train transportation between cities",
        "Airport transfers",
        "English-speaking guide throughout the tour",
        "Entrance fees to all attractions in the itinerary",
        "Welcome dinner cruise in Paris",
        "Amsterdam canal cruise",
        "Farewell dinner in Prague",
        "Travel insurance",
      ],
      exclusions: [
        "International airfare",
        "Personal expenses",
        "Meals not mentioned in the itinerary",
        "Optional activities",
        "Tips for guides and drivers",
      ],
    },
  ];

  return packages.find((pkg) => pkg.id === id);
};

export default function PackageDetail({ params }: { params: { id: string } }) {
  const packageData = getPackageData(params.id);

  if (!packageData) {
    return (
      <div className='container mx-auto px-4 py-16 text-center'>
        <h1 className='text-3xl font-bold mb-4'>Package Not Found</h1>
        <p className='mb-8'>The package you are looking for does not exist.</p>
        <Link href='/packages'>
          <Button>View All Packages</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className='flex min-h-screen flex-col'>
      {/* Hero section */}
      <section className='relative h-[60vh] w-full overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10' />
        <img
          src={packageData.image || "/placeholder.svg"}
          alt={packageData.title}
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-16'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4 text-white'>
              {packageData.title}
            </h1>
            <p className='text-xl text-white/90 mb-6'>
              {packageData.description}
            </p>
            <div className='flex flex-wrap gap-6 text-white'>
              <div className='flex items-center'>
                <Clock className='mr-2 h-5 w-5 text-primary' />
                <span>{packageData.duration}</span>
              </div>
              <div className='flex items-center'>
                <MapPin className='mr-2 h-5 w-5 text-primary' />
                <span>{packageData.location}</span>
              </div>
              <div className='flex items-center'>
                <Users className='mr-2 h-5 w-5 text-primary' />
                <span>{packageData.groupSize}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package details */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <div className='lg:col-span-2'>
              <Tabs defaultValue='overview' className='w-full'>
                <TabsList className='w-full justify-start mb-10 bg-muted/30 p-1 rounded-full'>
                  <TabsTrigger value='overview' className='rounded-full'>
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value='itinerary' className='rounded-full'>
                    Itinerary
                  </TabsTrigger>
                  <TabsTrigger value='inclusions' className='rounded-full'>
                    Inclusions
                  </TabsTrigger>
                  <TabsTrigger value='gallery' className='rounded-full'>
                    Gallery
                  </TabsTrigger>
                </TabsList>
                <TabsContent value='overview' className='space-y-8'>
                  <div>
                    <h2 className='text-3xl font-bold mb-6'>About This Tour</h2>
                    <p className='text-muted-foreground text-lg leading-relaxed'>
                      {packageData.longDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className='text-2xl font-bold mb-6'>Tour Highlights</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <Card className='border-none shadow-sm hover:shadow-md transition-all duration-300'>
                        <CardContent className='p-6 flex items-start'>
                          <Bed className='h-6 w-6 mr-4 text-primary flex-shrink-0' />
                          <div>
                            <h4 className='font-semibold text-lg mb-1'>
                              Accommodation
                            </h4>
                            <p className='text-muted-foreground'>
                              {packageData.accommodation}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className='border-none shadow-sm hover:shadow-md transition-all duration-300'>
                        <CardContent className='p-6 flex items-start'>
                          <Utensils className='h-6 w-6 mr-4 text-primary flex-shrink-0' />
                          <div>
                            <h4 className='font-semibold text-lg mb-1'>
                              Meals
                            </h4>
                            <p className='text-muted-foreground'>
                              {packageData.meals}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className='border-none shadow-sm hover:shadow-md transition-all duration-300'>
                        <CardContent className='p-6 flex items-start'>
                          <Car className='h-6 w-6 mr-4 text-primary flex-shrink-0' />
                          <div>
                            <h4 className='font-semibold text-lg mb-1'>
                              Transportation
                            </h4>
                            <p className='text-muted-foreground'>
                              {packageData.transportation}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className='border-none shadow-sm hover:shadow-md transition-all duration-300'>
                        <CardContent className='p-6 flex items-start'>
                          <Wifi className='h-6 w-6 mr-4 text-primary flex-shrink-0' />
                          <div>
                            <h4 className='font-semibold text-lg mb-1'>
                              Connectivity
                            </h4>
                            <p className='text-muted-foreground'>
                              Free WiFi at all accommodations
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value='itinerary' className='space-y-8'>
                  <h2 className='text-3xl font-bold mb-6'>Tour Itinerary</h2>
                  <div className='space-y-8'>
                    {packageData.itinerary.map((day, index) => (
                      <div
                        key={index}
                        className='border-l-2 border-primary pl-6 pb-6 relative'
                      >
                        <div className='absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1'></div>
                        <h3 className='text-xl font-bold mb-2'>
                          {day.day}: {day.title}
                        </h3>
                        <p className='text-muted-foreground text-lg'>
                          {day.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value='inclusions' className='space-y-8'>
                  <div>
                    <h2 className='text-3xl font-bold mb-6'>What's Included</h2>
                    <ul className='space-y-3 text-lg'>
                      {packageData.inclusions.map((item, index) => (
                        <li key={index} className='flex items-start'>
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
                            className='h-6 w-6 mr-3 text-green-500 flex-shrink-0'
                          >
                            <polyline points='20 6 9 17 4 12'></polyline>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className='text-3xl font-bold mb-6'>
                      What's Not Included
                    </h2>
                    <ul className='space-y-3 text-lg'>
                      {packageData.exclusions.map((item, index) => (
                        <li key={index} className='flex items-start'>
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
                            className='h-6 w-6 mr-3 text-red-500 flex-shrink-0'
                          >
                            <line x1='18' y1='6' x2='6' y2='18'></line>
                            <line x1='6' y1='6' x2='18' y2='18'></line>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value='gallery' className='space-y-8'>
                  <h2 className='text-3xl font-bold mb-6'>Tour Gallery</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {packageData.gallery.map((image, index) => (
                      <img
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`${packageData.title} - Gallery image ${
                          index + 1
                        }`}
                        className='rounded-xl w-full h-72 object-cover transition-all duration-300 hover:shadow-lg'
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className='sticky top-24 bg-background border-none rounded-xl p-8 shadow-lg'>
                <div className='mb-6'>
                  <div className='text-4xl font-bold text-primary mb-2'>
                    {packageData.price}
                  </div>
                  <p className='text-muted-foreground'>per person</p>
                </div>

                <div className='space-y-6 mb-8'>
                  <div className='space-y-3'>
                    <label className='text-sm font-medium'>
                      Departure Date
                    </label>
                    <input
                      type='date'
                      className='flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    />
                  </div>
                  <div className='space-y-3'>
                    <label className='text-sm font-medium'>Travelers</label>
                    <select className='flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </div>
                </div>

                <Button className='w-full h-12 rounded-lg mb-4 text-base font-medium'>
                  Book Now
                </Button>
                <Button
                  variant='outline'
                  className='w-full h-12 rounded-lg text-base font-medium'
                >
                  Inquire About This Tour
                </Button>

                <div className='mt-8 text-center'>
                  <p className='text-sm text-muted-foreground mb-1'>
                    Need help planning your trip?
                  </p>
                  <p className='font-medium text-lg'>
                    Call us at +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related packages */}
      <section className='py-12 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-bold mb-8'>You May Also Like</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Card className='overflow-hidden'>
              <div className='aspect-video w-full overflow-hidden'>
                <img
                  src='/placeholder.svg?height=400&width=600'
                  alt='Mountain Retreat'
                  className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>Mountain Retreat</h3>
                <p className='text-muted-foreground mb-4'>
                  Discover the serenity of the Swiss Alps with luxury
                  accommodations
                </p>
                <div className='flex justify-between items-center mb-4'>
                  <span className='text-xl font-bold text-primary'>$2,199</span>
                  <span className='text-sm text-muted-foreground'>8 days</span>
                </div>
                <Link href='/packages/3' className='w-full'>
                  <Button variant='outline' className='w-full'>
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className='overflow-hidden'>
              <div className='aspect-video w-full overflow-hidden'>
                <img
                  src='/placeholder.svg?height=400&width=600'
                  alt='Safari Experience'
                  className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>Safari Experience</h3>
                <p className='text-muted-foreground mb-4'>
                  Witness the majestic wildlife of Africa on an unforgettable
                  journey
                </p>
                <div className='flex justify-between items-center mb-4'>
                  <span className='text-xl font-bold text-primary'>$2,499</span>
                  <span className='text-sm text-muted-foreground'>9 days</span>
                </div>
                <Link href='/packages/4' className='w-full'>
                  <Button variant='outline' className='w-full'>
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className='overflow-hidden'>
              <div className='aspect-video w-full overflow-hidden'>
                <img
                  src='/placeholder.svg?height=400&width=600'
                  alt='Cultural Immersion'
                  className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>Cultural Immersion</h3>
                <p className='text-muted-foreground mb-4'>
                  Experience the rich traditions and history of Japan
                </p>
                <div className='flex justify-between items-center mb-4'>
                  <span className='text-xl font-bold text-primary'>$2,799</span>
                  <span className='text-sm text-muted-foreground'>12 days</span>
                </div>
                <Link href='/packages/5' className='w-full'>
                  <Button variant='outline' className='w-full'>
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
