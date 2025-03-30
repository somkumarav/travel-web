// Centralized data file for all package information

export type Package = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  price: string;
  duration: string;
  location: string;
  category: string;
  rating: number;
  image: string;
  featured?: boolean;
  groupSize?: string;
  meals?: string;
  accommodation?: string;
  transportation?: string;
  gallery?: string[];
  itinerary?: {
    day: string;
    title: string;
    description: string;
  }[];
  inclusions?: string[];
  exclusions?: string[];
};

export const travelPackages: Package[] = [
  {
    id: 1,
    title: "Tropical Paradise",
    description: "Experience the beauty of Bali with our all-inclusive package",
    longDescription:
      "Immerse yourself in the stunning landscapes and rich culture of Bali. This comprehensive package includes luxury accommodations, guided tours to ancient temples, relaxing spa treatments, and exciting outdoor activities. Enjoy pristine beaches, lush rice terraces, and vibrant local markets.",
    price: "$1,299",
    duration: "7 days",
    location: "Bali, Indonesia",
    category: "Beach",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    groupSize: "2-12 people",
    meals: "All meals included",
    accommodation: "4-star beachfront resort",
    transportation: "Airport transfers and tour transportation",
    gallery: [
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000&auto=format&fit=crop",
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
      "Free leisure day with 150 km cab allowance",
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
    id: 2,
    title: "Mountain Retreat",
    description:
      "Discover the serenity of the Swiss Alps with luxury accommodations",
    longDescription:
      "Escape to the breathtaking Swiss Alps for a rejuvenating mountain retreat. Stay in luxurious alpine lodges, enjoy panoramic views, and experience the perfect blend of adventure and relaxation. From hiking scenic trails to indulging in world-class cuisine, this package offers an unforgettable mountain experience.",
    price: "$2,199",
    duration: "8 days",
    location: "Swiss Alps, Switzerland",
    category: "Adventure",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=1000&auto=format&fit=crop",
    groupSize: "2-10 people",
    meals: "Breakfast and dinner included",
    accommodation: "Luxury alpine lodges",
    transportation: "Private transfers and cable cars",
    gallery: [
      "https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?q=80&w=1000&auto=format&fit=crop",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Zurich",
        description:
          "Welcome to Switzerland! Transfer from Zurich Airport to your alpine lodge in the Swiss Alps.",
      },
      {
        day: "Day 2",
        title: "Alpine Exploration",
        description:
          "Guided hiking tour through scenic mountain trails with breathtaking panoramic views.",
      },
      {
        day: "Day 3",
        title: "Lake Cruise and Village Tour",
        description:
          "Cruise on a crystal-clear alpine lake followed by a tour of a traditional Swiss village.",
      },
      {
        day: "Day 4",
        title: "Adventure Activities",
        description:
          "Choose from paragliding, mountain biking, or rock climbing with professional guides.",
      },
      {
        day: "Day 5",
        title: "Glacier Experience",
        description:
          "Full-day excursion to a magnificent glacier with ice cave exploration.",
      },
      {
        day: "Day 6",
        title: "Wellness Day",
        description:
          "Enjoy the spa facilities at your lodge with optional massage treatments and yoga sessions.",
      },
      {
        day: "Day 7",
        title: "Cheese and Chocolate Tour",
        description:
          "Visit a traditional cheese factory and chocolate workshop with tastings.",
      },
      {
        day: "Day 8",
        title: "Departure Day",
        description: "Transfer to Zurich Airport for your departure flight.",
      },
    ],
    inclusions: [
      "7 nights accommodation in luxury alpine lodges",
      "Daily breakfast and dinner",
      "Airport transfers and local transportation",
      "English-speaking mountain guide",
      "All activities mentioned in the itinerary",
      "Cable car passes",
      "Spa access at the lodge",
      "Cheese and chocolate tasting",
      "Travel insurance",
      "Free leisure day with 150 km cab allowance",
    ],
    exclusions: [
      "International airfare",
      "Lunches",
      "Personal expenses",
      "Optional activities not mentioned in the itinerary",
      "Tips for guides and drivers",
    ],
  },
  {
    id: 3,
    title: "Safari Experience",
    description:
      "Witness the majestic wildlife of Africa on an unforgettable journey",
    longDescription:
      "Embark on the adventure of a lifetime with our African Safari Experience. Witness the incredible wildlife in their natural habitat, stay in luxurious safari lodges, and immerse yourself in the breathtaking landscapes of Africa. This carefully crafted itinerary offers the perfect balance of wildlife viewing, cultural experiences, and relaxation.",
    price: "$2,499",
    duration: "9 days",
    location: "Kenya & Tanzania",
    category: "Wildlife",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop",
    groupSize: "4-12 people",
    meals: "All meals included",
    accommodation: "Luxury safari lodges and tented camps",
    transportation: "4x4 safari vehicles and domestic flights",
    gallery: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516299466557-7a716a8eb3ce?q=80&w=1000&auto=format&fit=crop",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        description:
          "Welcome to Kenya! Transfer to your hotel in Nairobi for an overnight stay.",
      },
      {
        day: "Day 2",
        title: "Masai Mara National Reserve",
        description:
          "Morning flight to Masai Mara. Afternoon game drive to spot the Big Five.",
      },
      {
        day: "Day 3",
        title: "Masai Mara Safari",
        description:
          "Full day of game drives in the Masai Mara, known for its exceptional wildlife viewing.",
      },
      {
        day: "Day 4",
        title: "Masai Village Visit",
        description:
          "Morning game drive followed by a visit to a traditional Masai village.",
      },
      {
        day: "Day 5",
        title: "Serengeti National Park",
        description:
          "Flight to Tanzania and transfer to Serengeti National Park. Afternoon game drive.",
      },
      {
        day: "Day 6",
        title: "Serengeti Safari",
        description:
          "Full day exploring the vast plains of Serengeti, famous for the great migration.",
      },
      {
        day: "Day 7",
        title: "Ngorongoro Crater",
        description:
          "Drive to Ngorongoro Conservation Area. Afternoon at leisure at your lodge overlooking the crater.",
      },
      {
        day: "Day 8",
        title: "Ngorongoro Crater Safari",
        description:
          "Full-day game drive in the Ngorongoro Crater, a UNESCO World Heritage Site.",
      },
      {
        day: "Day 9",
        title: "Departure Day",
        description:
          "Transfer to Kilimanjaro Airport for your departure flight.",
      },
    ],
    inclusions: [
      "8 nights accommodation in luxury safari lodges and tented camps",
      "All meals during the safari",
      "Domestic flights between game reserves",
      "Airport transfers and transportation in 4x4 safari vehicles",
      "English-speaking safari guide",
      "All game drives and park entrance fees",
      "Masai village visit",
      "Bottled water during game drives",
      "Travel insurance",
      "Free leisure day with 150 km cab allowance",
    ],
    exclusions: [
      "International airfare",
      "Visa fees",
      "Personal expenses",
      "Optional activities not mentioned in the itinerary",
      "Tips for guides and drivers",
      "Alcoholic beverages",
    ],
  },
  {
    id: 4,
    title: "Cultural Immersion",
    description: "Experience the rich traditions and history of Japan",
    longDescription:
      "Dive deep into the fascinating culture of Japan with our immersive tour. From ancient temples to modern cities, experience the perfect blend of tradition and innovation. Enjoy authentic cuisine, participate in traditional ceremonies, and witness the breathtaking beauty of Japan's landscapes.",
    price: "$2,799",
    duration: "12 days",
    location: "Japan",
    category: "Cultural",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1000&auto=format&fit=crop",
    groupSize: "6-14 people",
    meals: "Breakfast included, select traditional dinners",
    accommodation: "Mix of traditional ryokans and modern hotels",
    transportation: "Bullet trains and private coaches",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1000&auto=format&fit=crop",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Tokyo",
        description:
          "Welcome to Japan! Transfer to your hotel in Tokyo for an overnight stay.",
      },
      {
        day: "Day 2",
        title: "Tokyo Exploration",
        description:
          "Visit Meiji Shrine, Harajuku, Shibuya Crossing, and Tokyo Tower.",
      },
      {
        day: "Day 3",
        title: "Tokyo Cultural Experiences",
        description:
          "Participate in a tea ceremony, try calligraphy, and visit the Edo-Tokyo Museum.",
      },
      {
        day: "Day 4",
        title: "Hakone and Mount Fuji",
        description:
          "Day trip to Hakone with views of Mount Fuji, lake cruise, and hot springs.",
      },
      {
        day: "Day 5",
        title: "Kyoto Transfer",
        description:
          "Bullet train to Kyoto. Afternoon visit to Fushimi Inari Shrine with thousands of torii gates.",
      },
      {
        day: "Day 6",
        title: "Kyoto Temples and Gardens",
        description:
          "Visit Kinkaku-ji (Golden Pavilion), Ryoan-ji Zen Garden, and Arashiyama Bamboo Grove.",
      },
      {
        day: "Day 7",
        title: "Kyoto Cultural Day",
        description:
          "Kimono wearing experience, traditional cooking class, and geisha district walking tour.",
      },
      {
        day: "Day 8",
        title: "Nara Day Trip",
        description:
          "Visit Nara Park with friendly deer, Todai-ji Temple, and Kasuga Taisha Shrine.",
      },
      {
        day: "Day 9",
        title: "Hiroshima and Miyajima",
        description:
          "Bullet train to Hiroshima. Visit Peace Memorial Park and the floating torii gate at Miyajima.",
      },
      {
        day: "Day 10",
        title: "Osaka Transfer",
        description:
          "Train to Osaka. Explore Dotonbori district and Osaka Castle.",
      },
      {
        day: "Day 11",
        title: "Osaka Food Tour",
        description:
          "Guided food tour to sample Osaka's famous street food and local specialties.",
      },
      {
        day: "Day 12",
        title: "Departure Day",
        description:
          "Transfer to Osaka International Airport for your departure flight.",
      },
    ],
    inclusions: [
      "11 nights accommodation in a mix of traditional ryokans and modern hotels",
      "Daily breakfast and select traditional dinners",
      "Japan Rail Pass for bullet trains",
      "Airport transfers and local transportation",
      "English-speaking guide throughout the tour",
      "Entrance fees to all attractions in the itinerary",
      "Traditional cultural experiences (tea ceremony, cooking class, kimono wearing)",
      "Guided food tour in Osaka",
      "Travel insurance",
      "Free leisure day with 150 km cab allowance",
    ],
    exclusions: [
      "International airfare",
      "Meals not mentioned in the itinerary",
      "Personal expenses",
      "Optional activities",
      "Tips for guides and drivers",
    ],
  },
  {
    id: 5,
    title: "Island Hopping",
    description:
      "Explore the beautiful islands of Greece with crystal clear waters",
    longDescription:
      "Experience the magic of the Greek islands with our island-hopping adventure. From the iconic white-washed buildings of Santorini to the vibrant nightlife of Mykonos, discover the unique charm of each island. Enjoy crystal-clear waters, delicious Mediterranean cuisine, and unforgettable sunsets.",
    price: "$1,999",
    duration: "10 days",
    location: "Greece",
    category: "Beach",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=1000&auto=format&fit=crop",
    groupSize: "4-16 people",
    meals: "Breakfast included, welcome and farewell dinners",
    accommodation: "Boutique hotels with sea views",
    transportation: "Ferry transfers between islands",
    gallery: [
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1000&auto=format&fit=crop",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Athens",
        description:
          "Welcome to Greece! Transfer to your hotel in Athens for an overnight stay.",
      },
      {
        day: "Day 2",
        title: "Athens Exploration",
        description:
          "Visit the Acropolis, Parthenon, and Plaka district. Welcome dinner with traditional Greek food.",
      },
      {
        day: "Day 3",
        title: "Mykonos Transfer",
        description:
          "Morning ferry to Mykonos. Afternoon orientation walk through Mykonos Town.",
      },
      {
        day: "Day 4",
        title: "Mykonos Beaches",
        description:
          "Day at leisure to enjoy the famous beaches of Mykonos or optional boat trip.",
      },
      {
        day: "Day 5",
        title: "Santorini Transfer",
        description:
          "Ferry to Santorini. Evening visit to Oia village to watch the famous sunset.",
      },
      {
        day: "Day 6",
        title: "Santorini Exploration",
        description:
          "Visit Fira, Imerovigli, and black sand beaches. Optional wine tasting tour.",
      },
      {
        day: "Day 7",
        title: "Santorini Sailing",
        description:
          "Catamaran sailing trip around Santorini with swimming stops and BBQ lunch.",
      },
      {
        day: "Day 8",
        title: "Naxos Transfer",
        description:
          "Ferry to Naxos. Afternoon exploration of Naxos Town and Portara (Temple of Apollo).",
      },
      {
        day: "Day 9",
        title: "Naxos Villages",
        description:
          "Jeep safari to discover the mountain villages and hidden beaches of Naxos. Farewell dinner.",
      },
      {
        day: "Day 10",
        title: "Departure Day",
        description:
          "Ferry back to Athens and transfer to Athens International Airport for your departure flight.",
      },
    ],
    inclusions: [
      "9 nights accommodation in boutique hotels with sea views",
      "Daily breakfast, welcome and farewell dinners",
      "Ferry transfers between islands",
      "Airport transfers and local transportation",
      "English-speaking guide throughout the tour",
      "Entrance fees to all attractions in the itinerary",
      "Catamaran sailing trip with BBQ lunch",
      "Jeep safari in Naxos",
      "Travel insurance",
      "Free leisure day with 150 km cab allowance",
    ],
    exclusions: [
      "International airfare",
      "Meals not mentioned in the itinerary",
      "Personal expenses",
      "Optional activities",
      "Tips for guides and drivers",
    ],
  },
  {
    id: 6,
    title: "Amazon Expedition",
    description:
      "Journey through the world's largest rainforest and discover exotic wildlife",
    longDescription:
      "Embark on an unforgettable expedition into the heart of the Amazon rainforest. Experience the incredible biodiversity, meet indigenous communities, and navigate the mighty Amazon River. Stay in eco-friendly lodges, spot exotic wildlife, and learn about conservation efforts in this vital ecosystem.",
    price: "$2,399",
    duration: "8 days",
    location: "Brazil",
    category: "Adventure",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=1000&auto=format&fit=crop",
    groupSize: "6-12 people",
    meals: "All meals included",
    accommodation: "Eco-friendly jungle lodges",
    transportation: "Boat transfers and jungle treks",
    gallery: [
      "https://images.unsplash.com/photo-1551479810-5e9e49fef04a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597998430298-d8c0c4a20e93?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572902538263-24f7a4a9b9e5?q=80&w=1000&auto=format&fit=crop",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Manaus",
        description:
          "Welcome to Brazil! Transfer to your hotel in Manaus for an overnight stay.",
      },
      {
        day: "Day 2",
        title: "Amazon River Transfer",
        description:
          "Boat journey to your jungle lodge. Afternoon introduction to the rainforest ecosystem.",
      },
      {
        day: "Day 3",
        title: "Jungle Trekking",
        description:
          "Guided jungle trek to learn about medicinal plants and spot wildlife.",
      },
      {
        day: "Day 4",
        title: "Canoe Exploration",
        description:
          "Canoe through small tributaries to observe birds, monkeys, and other wildlife.",
      },
      {
        day: "Day 5",
        title: "Indigenous Community Visit",
        description:
          "Visit a local indigenous community to learn about their way of life and traditions.",
      },
      {
        day: "Day 6",
        title: "Night Safari",
        description:
          "Exciting night safari to spot nocturnal animals like caimans and night monkeys.",
      },
      {
        day: "Day 7",
        title: "Piranha Fishing and Swimming",
        description:
          "Try traditional piranha fishing and swim in a safe area of the Amazon River.",
      },
      {
        day: "Day 8",
        title: "Departure Day",
        description:
          "Return to Manaus and transfer to the airport for your departure flight.",
      },
    ],
    inclusions: [
      "7 nights accommodation (1 night in Manaus, 6 nights in jungle lodges)",
      "All meals during the expedition",
      "Boat transfers and local transportation",
      "English-speaking naturalist guide",
      "All activities mentioned in the itinerary",
      "Rubber boots and rain ponchos for jungle treks",
      "Bottled water during excursions",
      "Travel insurance",
      "Free leisure day with 150 km cab allowance",
    ],
    exclusions: [
      "International airfare",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional activities not mentioned in the itinerary",
      "Tips for guides and staff",
    ],
  },
  {
    id: 7,
    title: "Northern Lights",
    description: "Witness the magical aurora borealis in the Arctic Circle",
    longDescription:
      "Experience the wonder of the Northern Lights on this magical Arctic adventure. Stay in glass igloos and cozy cabins, go dog sledding through snowy forests, and chase the elusive aurora borealis. This winter wonderland offers a perfect mix of adventure, relaxation, and natural spectacles.",
    price: "$3,299",
    duration: "6 days",
    location: "Iceland",
    category: "Adventure",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1000&auto=format&fit=crop",
    groupSize: "4-12 people",
    meals: "All meals included",
    accommodation: "Mix of glass igloos and Arctic cabins",
    transportation: "Private Arctic vehicles",
    gallery: [
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520769490916-e7d5e4b0a4e4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579033485043-6aa18a5fa8f9?q=80&w=1000&auto=format&fit=crop",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Reykjavik",
        description:
          "Welcome to Iceland! Transfer to your hotel in Reykjavik for an overnight stay.",
      },
      {
        day: "Day 2",
        title: "Golden Circle Tour",
        description:
          "Visit Thingvellir National Park, Geysir geothermal area, and Gullfoss waterfall.",
      },
      {
        day: "Day 3",
        title: "South Coast and Northern Lights",
        description:
          "Explore the black sand beaches, waterfalls, and glaciers of the South Coast. Evening Northern Lights hunt.",
      },
      {
        day: "Day 4",
        title: "Dog Sledding and Blue Lagoon",
        description:
          "Morning dog sledding adventure followed by a relaxing soak in the Blue Lagoon.",
      },
      {
        day: "Day 5",
        title: "Glacier Hiking and Ice Cave",
        description:
          "Guided glacier hike and exploration of a natural ice cave. Evening Northern Lights photography workshop.",
      },
      {
        day: "Day 6",
        title: "Departure Day",
        description:
          "Transfer to Keflavik International Airport for your departure flight.",
      },
    ],
    inclusions: [
      "5 nights accommodation (mix of hotels, glass igloos, and Arctic cabins)",
      "All meals",
      "Airport transfers and transportation in private Arctic vehicles",
      "English-speaking guide throughout the tour",
      "All activities mentioned in the itinerary",
      "Northern Lights photography workshop",
      "Thermal clothing rental for Arctic activities",
      "Blue Lagoon entrance with towel and drink",
      "Travel insurance",
      "Free leisure day with 150 km cab allowance",
    ],
    exclusions: [
      "International airfare",
      "Personal expenses",
      "Optional activities not mentioned in the itinerary",
      "Alcoholic beverages",
      "Tips for guides and drivers",
    ],
  },
];

// Function to get a package by ID
export function getPackageById(id: number | string): Package | undefined {
  const numericId = typeof id === "string" ? Number.parseInt(id, 10) : id;
  return travelPackages.find((pkg) => pkg.id === numericId);
}

// Function to get featured packages
export function getFeaturedPackages(limit = 4): Package[] {
  const packages = travelPackages;

  // First try to get packages marked as featured
  const featured = packages.filter((pkg: Package) => pkg.featured);

  // If we have enough featured packages, return them up to the limit
  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }

  // Otherwise, return the featured ones plus some others to reach the limit
  return [
    ...featured,
    ...packages
      .filter((pkg: Package) => !pkg.featured)
      .slice(0, limit - featured.length),
  ];
}

// Function to get packages by category
export function getPackagesByCategory(category: string): Package[] {
  const packages = travelPackages;

  return packages.filter(
    (pkg: Package) => pkg.category.toLowerCase() === category.toLowerCase()
  );
}

// Function to get related packages (excluding the current one)
export function getRelatedPackages(currentId: number, limit = 3): Package[] {
  const packages = travelPackages;

  const current = packages.find((pkg: Package) => pkg.id === currentId);
  if (!current) return [];

  // First try to get packages in the same category
  const sameCategory = packages.filter(
    (pkg: Package) => pkg.id !== currentId && pkg.category === current.category
  );

  // If we have enough in the same category, return them up to the limit
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  // Otherwise, add some other packages to reach the limit
  const others = packages.filter(
    (pkg: Package) => pkg.id !== currentId && pkg.category !== current.category
  );

  return [...sameCategory, ...others.slice(0, limit - sameCategory.length)];
}
