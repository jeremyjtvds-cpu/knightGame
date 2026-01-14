import v60IMG from '../assets/v60.png';

export const PRODUCTS = [
    {
        id: "ethiopia-yirgacheffe",
        name: "Ethiopia Yirgacheffe",
        roaster: "Cerulean Coffee",
        category: "Whole Bean",
        price: 24.50,
        tastingNotes: ["Jasmine", "Lemon", "Peach"],
        roastLevel: 2, // 1-5 scale
        stock: 15,
        featured: true,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
        description: "A delicate, tea-like body with floral aromas and a bright citrus finish.",
        metadata: {
            process: "Washed",
            elevation: "2,000m",
            harvest: "2023"
        },
        reviews: [
            { id: 101, user: "CoffeeSnob99", rating: 5, comment: "Incredible acidity!" },
            { id: 102, user: "BrewMaster", rating: 4, comment: "Best as a pour-over." }
        ]
    },
    {
        id: "hario-v60-copper",
        name: "Copper V60 Dripper",
        roaster: "Hario",
        category: "Equipment",
        price: 75.00,
        tastingNotes: [],
        roastLevel: null,
        stock: 0,
        featured: true,
        image: v60Img,
        description: "Excellent thermal conductivity for the perfect extraction.",
        metadata: {
            material: "Copper",
            size: "02",
            origin: "Japan"
        },
        reviews: [
            { id: 101, user: "CoffeeSnob99", rating: 5, comment: "Incredible acidity!" },
            { id: 107, user "BrewMaster", rating: 4, comment: "Best as a pour-over." }
        ]
    },
    {
        id: "black-velvet-espresso",
        name: "Black Velvet Blend",
        roaster: "Cerulean Coffee",
        category: "Whole Bean",
        price: 19.00,
        tastingNotes: ["Dark Chocolate", "Molasses", "Cherry"],
        roastLevel: 4,
        stock: 42,
        featured: false,
        image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780",
        description: "Our signature espresso blend. Heavy body with a syrupy mouthfeel.",
        metadata: {
            process: "Natural/Washed Mix",
            elevation: "Various",
            harvest: "Seasonal"
        },
        reviews: [
            { id: 103, user: "LatteArtiste", rating: 5, comment: "Cuts through milk perfectly." }
        ]
    }
];