"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { MapPin, Calendar, Star } from "lucide-react";
import { travelPackages } from "@/lib/data";

// Import the button variants at the top of the file
import { PrimaryButton, GhostButton } from "@/components/ui/button-variants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { formatPrice } from "../../lib/utils";

// Calculate min and max prices from data
const minPrice = Math.min(...travelPackages.map((pkg) => pkg.price));
const maxPrice = Math.max(...travelPackages.map((pkg) => pkg.price));

export default function PackagesPage() {
  // State for filters
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [filteredPackages, setFilteredPackages] = useState(travelPackages);

  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 6;

  // Duration options
  const durationOptions = [
    { id: "1-3", label: "1-3 days" },
    { id: "4-7", label: "4-7 days" },
    { id: "8-14", label: "8-14 days" },
    { id: "15+", label: "15+ days" },
  ];

  // Function to check if a package falls within a duration range
  const isInDurationRange = (duration: string, range: string): boolean => {
    const days = Number.parseInt(duration.split(" ")[0], 10);

    switch (range) {
      case "1-3":
        return days >= 1 && days <= 3;
      case "4-7":
        return days >= 4 && days <= 7;
      case "8-14":
        return days >= 8 && days <= 14;
      case "15+":
        return days >= 15;
      default:
        return false;
    }
  };

  // Apply filters when any filter changes
  useEffect(() => {
    let results = travelPackages;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (pkg) =>
          pkg.title.toLowerCase().includes(query) ||
          pkg.location.toLowerCase().includes(query) ||
          pkg.description.toLowerCase().includes(query)
      );
    }

    // Apply price filter
    results = results.filter((pkg) => {
      return pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
    });

    // Apply duration filter
    if (selectedDurations.length > 0) {
      results = results.filter((pkg) =>
        selectedDurations.some((range) =>
          isInDurationRange(pkg.duration, range)
        )
      );
    }

    setFilteredPackages(results);
  }, [searchQuery, priceRange, selectedDurations]);

  // Toggle duration selection
  const toggleDuration = (durationId: string) => {
    setSelectedDurations((prev) =>
      prev.includes(durationId)
        ? prev.filter((id) => id !== durationId)
        : [...prev, durationId]
    );
  };

  // Apply filters
  const applyFilters = () => {
    // Filters are already applied via useEffect
  };

  // Calculate pagination
  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = filteredPackages.slice(
    indexOfFirstPackage,
    indexOfLastPackage
  );
  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);

  // Add this function to handle page changes
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Scroll to top of packages section
      window.scrollTo({ top: 500, behavior: "smooth" });
    }
  };

  return (
    <main className='flex min-h-screen flex-col'>
      {/* Hero section */}
      <section className='relative h-[55vh] w-full overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60 z-10' />
        <Image
          src='/packages-showcase.jpg'
          alt='Tour Packages'
          unoptimized
          height={800}
          width={1600}
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

      {/* Packages section */}
      <section className='py-16 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {/* Filters sidebar */}
            <div className='lg:col-span-1'>
              <div className='sticky top-24 space-y-8 bg-card p-6 rounded-xl shadow-xs'>
                <div>
                  <h3 className='text-xl font-semibold mb-4'>Find Your Trip</h3>
                  <div className='relative'>
                    <Input
                      type='search'
                      placeholder='Search destinations...'
                      className='w-full rounded-lg h-12'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className='border-t pt-6'>
                  <h3 className='text-lg font-semibold mb-4'>Price Range</h3>
                  <div className='space-y-6'>
                    <Slider
                      value={priceRange}
                      min={minPrice}
                      max={maxPrice}
                      step={10000}
                      className='py-4'
                      onValueChange={setPriceRange}
                    />
                    <div className='flex justify-between'>
                      <span className='text-primary font-medium'>
                        {formatPrice(priceRange[0])}
                      </span>
                      <span className='text-primary font-medium'>
                        {formatPrice(priceRange[1])}
                      </span>
                    </div>
                  </div>
                </div>

                <div className='border-t pt-6'>
                  <h3 className='text-lg font-semibold mb-4'>Duration</h3>
                  <div className='space-y-3'>
                    {durationOptions.map((option) => (
                      <div key={option.id} className='flex items-center'>
                        <input
                          type='checkbox'
                          id={option.id}
                          className='mr-3 h-4 w-4 accent-primary'
                          checked={selectedDurations.includes(option.id)}
                          onChange={() => toggleDuration(option.id)}
                        />
                        <label htmlFor={option.id} className='text-base'>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <PrimaryButton
                  className='w-full h-12 rounded-lg text-base'
                  onClick={applyFilters}
                >
                  Apply Filters
                </PrimaryButton>
              </div>
            </div>

            {/* Packages grid */}
            <div className='lg:col-span-3'>
              <div className='flex justify-between items-center mb-8'>
                <p className='text-muted-foreground text-lg'>
                  Showing {filteredPackages.length} packages
                </p>
              </div>

              {filteredPackages.length === 0 ? (
                <div className='text-center py-12'>
                  <h3 className='text-xl font-semibold mb-2'>
                    No packages found
                  </h3>
                  <p className='text-muted-foreground'>
                    Try adjusting your filters to find more options.
                  </p>
                </div>
              ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {currentPackages.map((pkg) => (
                    <Link
                      href={`/packages/${pkg.id}`}
                      key={pkg.id}
                      className='block'
                    >
                      <div className='travel-card group bg-card'>
                        <div className='travel-card-badge bg-secondary text-secondary-foreground'>
                          {pkg.category}
                        </div>
                        <div className='travel-card-image'>
                          <img
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
                            <GhostButton className='p-0'>
                              View Details →
                            </GhostButton>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {filteredPackages.length > 0 && (
                <div className='flex justify-center mt-16'>
                  <nav className='flex items-center space-x-2'>
                    <Button
                      variant='outline'
                      size='icon'
                      className='h-10 w-10 rounded-full'
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
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

                    {Array.from({ length: Math.min(totalPages, 5) }).map(
                      (_, index) => {
                        // Logic to show pages around current page
                        let pageNumber;
                        if (totalPages <= 5) {
                          pageNumber = index + 1;
                        } else if (currentPage <= 3) {
                          pageNumber = index + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNumber = totalPages - 4 + index;
                        } else {
                          pageNumber = currentPage - 2 + index;
                        }

                        return (
                          <Button
                            key={pageNumber}
                            variant='outline'
                            size='sm'
                            className={`h-10 w-10 p-0 rounded-full ${
                              currentPage === pageNumber
                                ? "bg-primary text-primary-foreground border-none"
                                : ""
                            }`}
                            onClick={() => handlePageChange(pageNumber)}
                          >
                            {pageNumber}
                          </Button>
                        );
                      }
                    )}

                    <Button
                      variant='outline'
                      size='icon'
                      className='h-10 w-10 rounded-full'
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
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
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
