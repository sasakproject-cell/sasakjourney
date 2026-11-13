// ==========================================
// Vehicle Package Types & Data
// ==========================================

export interface ExtraAreaCharge {
    area: string;
    price: number;
}

export interface VehiclePackage {
    id: string;
    name: string;
    price: number;
    currency: string;
    durationHours: number;
    extraTimePricePerHour?: number;
    capacity: number;
    include: string[];
    freeItems: string[];
    extraAreaCharge?: ExtraAreaCharge;
    image?: string;
}

export const vehiclePackages: VehiclePackage[] = [
    {
        id: "avanza-new",
        name: "All New Avanza",
        price: 750000,
        currency: "IDR",
        durationHours: 12,
        extraTimePricePerHour: 50000,
        capacity: 5,
        include: ["car", "fuel", "driver"],
        freeItems: ["mineralWater"],
        image: "https://www.toyotacirebon.id/file/avanza2021-07.jpg",
    },
    {
        id: "innova-reborn",
        name: "Innova Reborn",
        price: 850000,
        currency: "IDR",
        durationHours: 12,
        extraTimePricePerHour: 60000,
        capacity: 5,
        include: ["car", "fuel", "driver"],
        freeItems: ["mineralWater"],
        image: "https://imgx.gridoto.com/crop/0x0:0x0/750x500/photo/2025/12/02/toyota-kijang-innova-reborn-flj-20251202022523.jpg",
    },
    {
        id: "grand-innova",
        name: "Grand Innova",
        price: 700000,
        currency: "IDR",
        durationHours: 12,
        extraTimePricePerHour: 50000,
        capacity: 5,
        include: ["car", "fuel", "driver"],
        freeItems: ["mineralWater"],
        image: "https://www.luxurybalitravel.com/wp-content/uploads/2020/08/Toyota-Grand-Innova5.jpg",
    },
    {
        id: "toyota-hiace",
        name: "Toyota Hiace",
        price: 1200000,
        currency: "IDR",
        durationHours: 12,
        capacity: 15,
        include: ["car", "fuel", "driver"],
        extraAreaCharge: {
            area: "Sembalun",
            price: 150000,
        },
        freeItems: ["mineralWater"],
        image: "https://jwc.gotra-resources.my.id/web-upload/1687324605-21-06-2023-FbgsOVEQTcpLWP61kG8vfxBY9CnUtDdz.png",
    },
    {
        id: "medium-bus",
        name: "Medium Bus",
        price: 1800000,
        currency: "IDR",
        durationHours: 12,
        extraTimePricePerHour: 100000,
        capacity: 30,
        include: ["car", "fuel", "driver"],
        freeItems: ["mineralWater"],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6vsRNBNR29sJAFRazccuIR57I6fBFU5tOwCXTt1e2DuOx4LvE1kZ_hH_Ws-1pSu6AmSM0rStovhRnu8bR99B5eUu-ZNdCvoxtSqgF3w-kKwB3QmsU2iKiKXLrOJ5COKgRa2PGd56mKonW/s1600/1665673924856852-0.png",
    },
    {
        id: "big-bus",
        name: "Big Bus",
        price: 2300000,
        currency: "IDR",
        durationHours: 12,
        extraTimePricePerHour: 100000,
        capacity: 45,
        include: ["car", "fuel", "driver"],
        freeItems: ["mineralWater"],
        image: "https://kinglong.ae/wcm/connect/kinglong.ae3130/c851ea8a-9902-47d0-94b9-bac009d3c5ba/xmq6128_05_e1571120390124_ca09e583f4.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_MGD4GA015HEHD06J7QOTSH6806-c851ea8a-9902-47d0-94b9-bac009d3c5ba-oyV3KSw",
    },
];

// Helper function to format price
export const formatVehiclePrice = (price: number, currency: string): string => {
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
