"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  MapPin,
  Users,
  Utensils,
  Wifi,
  Bed,
  Car,
  Star,
} from "lucide-react";
import { getPackageById, getRelatedPackages } from "@/lib/data";
// Import the button variants at the top of the file
import { OutlineButton, GhostButton } from "@/components/ui/button-variants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LINKS } from "../../../lib/links";
import { formatPrice } from "../../../lib/utils";
import React from "react";

export default function PackageDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const unwrappedParams = React.use(params);
  const packageData = getPackageById(unwrappedParams.id);
  const relatedPackages = getRelatedPackages(
    Number.parseInt(unwrappedParams.id, 10),
    3
  );

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
        <div className='absolute inset-0 bg-linear-to-b from-black/60 to-black/30 z-10' />
        <Image
          height={0}
          width={0}
          unoptimized
          src={packageData.image || "/placeholder.svg"}
          alt={packageData.title}
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-16'>
          <div className='max-w-3xl'>
            <div className='flex items-center mb-2'>
              <span className='bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium'>
                {packageData.category}
              </span>
              <div className='flex items-center ml-4'>
                <Star className='h-4 w-4 text-yellow-400 fill-yellow-400' />
                <span className='ml-1 text-white'>{packageData.rating}</span>
              </div>
            </div>
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
                  <TabsTrigger
                    value='overview'
                    className='rounded-full cursor-pointer'
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value='itinerary'
                    className='rounded-full cursor-pointer'
                  >
                    Itinerary
                  </TabsTrigger>
                  <TabsTrigger
                    value='inclusions'
                    className='rounded-full cursor-pointer'
                  >
                    Inclusions
                  </TabsTrigger>
                  <TabsTrigger
                    value='gallery'
                    className='rounded-full cursor-pointer'
                  >
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
                      <Card className='border-none shadow-xs hover:shadow-md transition-all duration-300'>
                        <CardContent className='p-6 flex items-start'>
                          <Bed className='h-6 w-6 mr-4 text-primary shrink-0' />
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
                      <Card className='border-none shadow-xs hover:shadow-md transition-all duration-300'>
                        <CardContent className='p-6 flex items-start'>
                          <Utensils className='h-6 w-6 mr-4 text-primary shrink-0' />
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
                      <Card className='border-none shadow-xs hover:shadow-md transition-all duration-300'>
                        <CardContent className='p-6 flex items-start'>
                          <Car className='h-6 w-6 mr-4 text-primary shrink-0' />
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
                      <Card className='border-none shadow-xs hover:shadow-md transition-all duration-300'>
                        <CardContent className='p-6 flex items-start'>
                          <Wifi className='h-6 w-6 mr-4 text-primary shrink-0' />
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
                    {packageData.itinerary?.map((day, index) => (
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
                      {packageData.inclusions?.map((item, index) => (
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
                            className='h-6 w-6 mr-3 text-green-500 shrink-0'
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
                      {packageData.exclusions?.map((item, index) => (
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
                            className='h-6 w-6 mr-3 text-red-500 shrink-0'
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
                    {packageData.gallery?.map((image, index) => (
                      <Image
                        height={0}
                        width={0}
                        unoptimized
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

            {/* Booking form */}
            <div className='lg:col-span-1'>
              <div className='sticky top-24 bg-card p-6 rounded-xl shadow-xs'>
                <div className='mb-6'>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    {formatPrice(packageData.price)}
                  </div>
                  <p className='text-muted-foreground'>per person</p>
                </div>

                <div className='space-y-6 mb-8'>
                  <div className='flex items-center gap-3 text-muted-foreground'>
                    <Clock className='h-5 w-5 text-primary' />
                    <span>{packageData.duration}</span>
                  </div>
                  <div className='flex items-center gap-3 text-muted-foreground'>
                    <Users className='h-5 w-5 text-primary' />
                    <span>Group Size: {packageData.groupSize}</span>
                  </div>
                  <div className='flex items-center gap-3 text-muted-foreground'>
                    <Star className='h-5 w-5 text-yellow-400 fill-yellow-400' />
                    <span>Rating: {packageData.rating}</span>
                  </div>
                  <div className='flex items-center gap-3 text-muted-foreground'>
                    <MapPin className='h-5 w-5 text-primary' />
                    <span>{packageData.location}</span>
                  </div>
                </div>

                <div className='border-t border-border pt-6 mb-8'>
                  <h3 className='font-semibold mb-4'>Package Includes:</h3>
                  <ul className='space-y-3'>
                    {packageData.inclusions?.slice(0, 4).map((item, index) => (
                      <li
                        key={index}
                        className='flex items-start gap-2 text-sm text-muted-foreground'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='h-4 w-4 text-green-500 shrink-0 mt-0.5'
                        >
                          <polyline points='20 6 9 17 4 12'></polyline>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <OutlineButton className='w-full h-12 rounded-lg text-base font-medium mb-6'>
                  <Link href={LINKS.WHATSAPP} target='_blank'>
                    Inquire About This Tour
                  </Link>
                </OutlineButton>

                <div className='space-y-4 text-center'>
                  <div className='p-4 rounded-lg'>
                    <p className='text-sm text-muted-foreground mb-1'>
                      Need help planning your trip?
                    </p>
                    <p className='font-medium text-lg'>Call us at 8111828967</p>
                  </div>
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
            {relatedPackages.map((pkg) => (
              <Link
                href={`/packages/${pkg.id}`}
                key={pkg.id}
                className='travel-card group bg-card'
              >
                <div className='travel-card-badge bg-secondary text-secondary-foreground'>
                  {pkg.category}
                </div>
                <div className='travel-card-image'>
                  <Image
                    unoptimized
                    height={0}
                    width={0}
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-80'></div>
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
                      {formatPrice(pkg.price)}
                    </div>
                    <div className='travel-card-duration bg-primary/10 text-primary'>
                      <Clock className='h-3 w-3 inline-block mr-1' />
                      {pkg.duration}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
