// ==========================================
// Travel Categories
// ==========================================
export interface TravelCategory {
    id: string;
    labelKey: string; // Translation key
}

export const travelCategories: TravelCategory[] = [
    { id: "beach", labelKey: "beach" },
    { id: "city", labelKey: "city" },
    { id: "culture", labelKey: "culture" },
    { id: "tour", labelKey: "tour" },
    { id: "business", labelKey: "business" },
    { id: "honeymoon", labelKey: "honeymoon" },
];

// ==========================================
// Destinations for Search Form
// ==========================================
export interface SearchDestination {
    id: string;
    labelKey: string; // Translation key
    categories: string[]; // Related category IDs
}

export const searchDestinations: SearchDestination[] = [
    {
        id: "mandalika",
        labelKey: "mandalika",
        categories: ["beach", "city"],
    },
    {
        id: "gili-trawangan",
        labelKey: "giliTrawangan",
        categories: ["beach", "honeymoon"],
    },
    {
        id: "gili-nanggu",
        labelKey: "giliNanggu",
        categories: ["beach", "honeymoon"],
    },
    {
        id: "gili-gede",
        labelKey: "giliGede",
        categories: ["beach", "honeymoon"],
    },
    {
        id: "pink-beach",
        labelKey: "pinkBeach",
        categories: ["beach"],
    },
    {
        id: "sasak-tour",
        labelKey: "sasakTour",
        categories: ["culture", "tour"],
    },
    {
        id: "mataram-tour",
        labelKey: "mataramTour",
        categories: ["city", "culture"],
    },
    {
        id: "benang-kelambu",
        labelKey: "benangKelambu",
        categories: ["tour"],
    },
    {
        id: "senggigi",
        labelKey: "senggigi",
        categories: ["beach", "city"],
    },
    {
        id: "mandalika-circuit",
        labelKey: "mandalikaCircuit",
        categories: ["city", "business"],
    },
    {
        id: "sembalun-rinjani",
        labelKey: "sembalunRinjani",
        categories: ["tour"],
    },
];

// ==========================================
// Durations
// ==========================================
export interface Duration {
    id: string;
    labelKey: string; // Translation key
}

export const durations: Duration[] = [
    { id: "2d1n", labelKey: "2d1n" },
    { id: "3d2n", labelKey: "3d2n" },
    { id: "4d3n", labelKey: "4d3n" },
    { id: "5d4n", labelKey: "5d4n" },
    { id: "6d5n", labelKey: "6d5n" },
    { id: "honeymoon", labelKey: "honeymoon" },
];

// ==========================================
// Popular Destinations (for cards display)
// ==========================================
export interface PopularDestination {
    key: string;
    slug: string;
    image: string;
    priceFrom: number;
    currency: string;
    location: string;
    tags: string[];
    categories: string[];
}

export const popularDestinations: PopularDestination[] = [
    {
        key: "mandalika",
        slug: "mandalika",
        image: "https://images.tourscanner.com/wp-content/uploads/2022/06/Mandalika-Beach-Lombok.jpg",
        priceFrom: 4500000,
        currency: "IDR",
        location: "Lombok Tengah, NTB",
        tags: ["beach", "resort", "motogp"],
        categories: ["beach", "city"],
    },
    {
        key: "giliTrawangan",
        slug: "gili-trawangan",
        image: "https://gobackpacking.com/wp-content/uploads/2021/08/Gili-Trawangan-Indonesia.jpg",
        priceFrom: 3800000,
        currency: "IDR",
        location: "Lombok Utara, NTB",
        tags: ["island", "snorkeling", "nightlife"],
        categories: ["beach", "honeymoon"],
    },
    {
        key: "giliNanggu",
        slug: "gili-nanggu",
        image: "https://cdn.kimkim.com/files/a/images/c70de7da7759127851e5d24c34517f0e3455722f/original-c07dc8e7069d8e0dde8aaae033304fd5.jpg",
        priceFrom: 3200000,
        currency: "IDR",
        location: "Lombok Barat, NTB",
        tags: ["island", "peaceful", "snorkeling"],
        categories: ["beach", "honeymoon"],
    },
    {
        key: "giliGede",
        slug: "gili-gede",
        image: "https://authentic-indonesia.com/wp-content/uploads/2019/10/gili-gede-lombok.jpg",
        priceFrom: 2800000,
        currency: "IDR",
        location: "Lombok Barat, NTB",
        tags: ["island", "peaceful", "snorkeling"],
        categories: ["beach", "honeymoon"],
    },
    {
        key: "pinkBeach",
        slug: "pink-beach",
        image: "https://www.nayakasurfschool.com/wp-content/uploads/2020/02/Tangsi-beach-lombok-island.jpg",
        priceFrom: 3500000,
        currency: "IDR",
        location: "Lombok Timur, NTB",
        tags: ["beach", "iconic", "photography"],
        categories: ["beach"],
    },
    {
        key: "sasakTour",
        slug: "sasak-tour",
        image: "https://www.mataramweb.com/wp-content/uploads/2025/01/sasak-tribe-traditional-house-in-sade-village-lombok-indonesia.jpg",
        priceFrom: 1500000,
        currency: "IDR",
        location: "Lombok Tengah, NTB",
        tags: ["culture", "village", "tradition"],
        categories: ["culture", "tour"],
    },
    {
        key: "mataramTour",
        slug: "mataram-tour",
        image: "https://i0.wp.com/tourevent.id/wp-content/uploads/2016/09/Islamic-Center-NTB-by-COs-Indonesia.jpg?resize=1024%2C576&ssl=1",
        priceFrom: 1200000,
        currency: "IDR",
        location: "Mataram, NTB",
        tags: ["city", "culture", "history"],
        categories: ["city", "culture"],
    },
    {
        key: "benangKelambu",
        slug: "benang-kelambu",
        image: "https://usercontent.one/wp/www.sunshineseeker.com/wp-content/uploads/2023/12/Benang-Kelambu-Waterfall-Lombok-Things-To-Do-1536x1025.jpg?media=1742686013",
        priceFrom: 1800000,
        currency: "IDR",
        location: "Lombok Tengah, NTB",
        tags: ["waterfall", "nature", "trekking"],
        categories: ["tour"],
    },
    {
        key: "senggigi",
        slug: "senggigi",
        image: "https://valsatravel.com/storage/2026/01/Pantai-Senggigi-03-1024x724.jpg",
        priceFrom: 3000000,
        currency: "IDR",
        location: "Lombok Barat, NTB",
        tags: ["beach", "sunset", "family"],
        categories: ["beach", "city"],
    },
    {
        key: "mandalikaCircuit",
        slug: "mandalika-circuit",
        image: "https://resources.motogp.pulselive.com/photo-resources/2025/10/01/d36f56c9-5bce-4f81-b13f-e70425ee952e/Pertamina-Mandalika-Circuit.jpg?width=1300",
        priceFrom: 2500000,
        currency: "IDR",
        location: "Lombok Tengah, NTB",
        tags: ["motogp", "sport", "racing"],
        categories: ["city", "business"],
    },
    {
        key: "sembalunRinjani",
        slug: "sembalun-rinjani",
        image: "https://static.333travel.nl/web-images/12/2024/675804f7211e2/indonesie-lombok-rinjani-vulkaan-krater-meer-2.jpeg",
        priceFrom: 4200000,
        currency: "IDR",
        location: "Lombok Timur, NTB",
        tags: ["mountain", "trekking", "nature"],
        categories: ["tour"],
    },
];

// Helper function to filter destinations by category
export const getDestinationsByCategory = (categoryId: string): SearchDestination[] => {
    if (!categoryId) return searchDestinations;
    return searchDestinations.filter((dest) => dest.categories.includes(categoryId));
};

// Helper function to format price
export const formatPrice = (price: number, currency: string): string => {
    if (currency === "IDR") {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    }
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
    }).format(price);
};
