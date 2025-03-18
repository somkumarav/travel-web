import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in the travel industry, Sarah founded Wanderlust Travel with a vision to create authentic travel experiences.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      position: "Head of Operations",
      bio: "Michael ensures that every tour runs smoothly, managing our global network of guides and partners to deliver exceptional service.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Chen",
      position: "Travel Experience Designer",
      bio: "Emily crafts unique itineraries that balance must-see attractions with off-the-beaten-path experiences for unforgettable journeys.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Patel",
      position: "Customer Relations Manager",
      bio: "David is dedicated to ensuring every client receives personalized attention and support before, during, and after their travels.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <img
          src="/placeholder.svg?height=800&width=1600"
          alt="About Wanderlust Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">About Wanderlust Travel</h1>
            <p className="text-2xl text-white/90 font-light">Creating unforgettable travel experiences since 2005</p>
          </div>
        </div>
      </section>

      {/* Our story section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-lg">
                <p>
                  Wanderlust Travel was founded in 2005 with a simple mission: to create travel experiences that go
                  beyond the ordinary. What began as a small operation with just three employees has grown into a global
                  travel company with a presence in over 50 countries.
                </p>
                <p>
                  Our founder, Sarah Johnson, started the company after spending a year backpacking across Southeast
                  Asia and witnessing the transformative power of travel. She believed that travel should be more than
                  just visiting famous landmarks—it should be about connecting with local cultures, supporting
                  communities, and creating memories that last a lifetime.
                </p>
                <p>
                  Today, we remain true to that original vision. While we've grown in size, we've maintained our
                  commitment to authentic, responsible travel experiences that benefit both travelers and the
                  destinations we visit.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=800&width=1200"
                alt="Wanderlust Travel team"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet our team section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 relative w-56 h-56 mx-auto rounded-full overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary mb-3 font-medium">{member.position}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our values section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="border-none shadow-md rounded-xl overflow-hidden">
              <CardContent className="p-10">
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Authentic Experiences</h3>
                <p className="text-center text-muted-foreground text-lg">
                  We believe in creating genuine connections with the places we visit. Our tours go beyond tourist
                  attractions to provide authentic cultural experiences and meaningful interactions with local
                  communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md rounded-xl overflow-hidden">
              <CardContent className="p-10">
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Responsible Tourism</h3>
                <p className="text-center text-muted-foreground text-lg">
                  We are committed to sustainable travel practices that respect the environment and benefit local
                  economies. We carefully select partners who share our dedication to responsible tourism.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md rounded-xl overflow-hidden">
              <CardContent className="p-10">
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Exceptional Service</h3>
                <p className="text-center text-muted-foreground text-lg">
                  We pride ourselves on personalized attention and care for every traveler. From the moment you book
                  until after you return home, our team is dedicated to making your journey seamless and memorable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-xl">Countries Covered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-xl">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-xl">Tour Packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="italic mb-4">
                  "Our trip to Bali was absolutely perfect. Every detail was taken care of, and the accommodations were
                  stunning. We can't wait to book our next adventure!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted mr-3"></div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Tropical Paradise Tour</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="italic mb-4">
                  "The European Adventure exceeded all our expectations. The guides were knowledgeable, and we felt like
                  we truly experienced the culture of each city we visited."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted mr-3"></div>
                  <div>
                    <p className="font-semibold">Michael Thompson</p>
                    <p className="text-sm text-muted-foreground">European Adventure Tour</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="italic mb-4">
                  "The Safari Experience was a once-in-a-lifetime adventure. The accommodations were luxurious, and
                  seeing the wildlife up close was breathtaking."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted mr-3"></div>
                  <div>
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Safari Experience Tour</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Contact our team of travel experts to plan your perfect getaway
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button className="h-14 px-8 rounded-full bg-white text-primary hover:bg-white/90 text-base font-medium">
              Browse Packages
            </Button>
            <Button
              variant="outline"
              className="h-14 px-8 rounded-full border-white text-white hover:bg-white/20 text-base font-medium"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

