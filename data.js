// Static apartment data
const apartmentData = [
    {
        id: 1,
        title: "Elegant Studio Apartment",
        description: "A beautifully designed studio apartment perfect for professionals and students. Features modern amenities and a prime location.",
        price: "$1,200/month",
        bedrooms: 1,
        bathrooms: 1,
        area: "450 sq ft",
        images: [
            "./images/apt1-img1.jpg",
            "./images/apt1-img2.jpg",
            "./images/apt1-img3.jpg"
        ],
        features: ["Air Conditioning", "Modern Kitchen", "City View", "Furnished"]
    },
    {
        id: 2,
        title: "Spacious One Bedroom",
        description: "Comfortable one-bedroom apartment with separate living area. Ideal for couples or individuals seeking more space.",
        price: "$1,500/month",
        bedrooms: 1,
        bathrooms: 1,
        area: "650 sq ft",
        images: [
            "./images/apt2-img1.jpg",
            "./images/apt2-img2.jpg",
            "./images/apt2-img3.jpg",
            "./images/apt2-img4.jpg"
        ],
        features: ["Balcony", "Walk-in Closet", "Dishwasher", "Pet Friendly"]
    },
    {
        id: 3,
        title: "Modern Two Bedroom",
        description: "Contemporary two-bedroom apartment with open floor plan and premium finishes throughout.",
        price: "$2,100/month",
        bedrooms: 2,
        bathrooms: 2,
        area: "900 sq ft",
        images: [
            "./images/apt3-img1.jpg",
            "./images/apt3-img2.jpg",
            "./images/apt3-img3.jpg",
            "./images/apt3-img4.jpg"
        ],
        features: ["Granite Counters", "In-unit Laundry", "Master Suite", "Storage"]
    },
    {
        id: 4,
        title: "Luxury Penthouse Studio",
        description: "Premium studio with floor-to-ceiling windows and spectacular city views. Perfect for the discerning professional.",
        price: "$1,800/month",
        bedrooms: 1,
        bathrooms: 1,
        area: "550 sq ft",
        images: [
            "./images/apt4-img1.jpg",
            "./images/apt4-img2.jpg",
            "./images/apt4-img3.jpg",
            "./images/apt4-img4.jpg"
        ],
        features: ["Floor-to-ceiling Windows", "High Ceilings", "Premium Finishes", "Concierge"]
    },
    {
        id: 5,
        title: "Cozy Garden Apartment",
        description: "Ground floor apartment with private garden access. Perfect for those who love outdoor living.",
        price: "$1,400/month",
        bedrooms: 1,
        bathrooms: 1,
        area: "600 sq ft",
        images: [
            "./images/apt5-img1.jpg",
            "./images/apt5-img2.jpg",
            "./images/apt5-img3.jpg"
        ],
        features: ["Private Garden", "Patio", "Ground Floor", "Pet Friendly"]
    },
    {
        id: 6,
        title: "Executive Two Bedroom",
        description: "Sophisticated two-bedroom apartment designed for executives. Features premium amenities and elegant design.",
        price: "$2,400/month",
        bedrooms: 2,
        bathrooms: 2,
        area: "1000 sq ft",
        images: [
            "./images/apt6-img1.jpg",
            "./images/apt6-img2.jpg",
            "./images/apt6-img3.jpg",
            "./images/apt6-img4.jpg"
        ],
        features: ["Executive Design", "Premium Location", "Concierge Service", "Valet Parking"]
    },
    {
        id: 7,
        title: "Bright Corner Unit",
        description: "Corner apartment with abundant natural light and panoramic views. Features modern design and premium finishes.",
        price: "$1,700/month",
        bedrooms: 1,
        bathrooms: 1,
        area: "700 sq ft",
        images: [
            "./images/apt7-img1.jpg",
            "./images/apt7-img2.jpg",
            "./images/apt7-img3.jpg"
        ],
        features: ["Corner Unit", "Panoramic Views", "Natural Light", "Modern Design"]
    },
    {
        id: 8,
        title: "Family-Friendly Three Bedroom",
        description: "Spacious three-bedroom apartment perfect for families. Features large living areas and family-oriented amenities.",
        price: "$2,800/month",
        bedrooms: 3,
        bathrooms: 2,
        area: "1200 sq ft",
        images: [
            "./images/apt8-img1.jpg",
            "./images/apt8-img2.jpg",
            "./images/apt8-img3.jpg",
            "./images/apt8-img4.jpg"
        ],
        features: ["Family-Friendly", "Large Living Areas", "Multiple Bedrooms", "Near Schools"]
    },
    {
        id: 9,
        title: "Urban Loft Style",
        description: "Industrial-chic loft apartment with exposed brick and high ceilings. Perfect for creative professionals.",
        price: "$1,900/month",
        bedrooms: 1,
        bathrooms: 1,
        area: "800 sq ft",
        images: [
            "./images/apt9-img1.jpg",
            "./images/apt9-img2.jpg",
            "./images/apt9-img3.jpg",
            "./images/apt9-img4.jpg"
        ],
        features: ["Exposed Brick", "High Ceilings", "Loft Style", "Creative Space"]
    }
];