// ==========================================
// Customer Reviews Data
// ==========================================
// ULASAN CONTOH — ganti dengan ulasan asli pelanggan.
// Untuk menambah ulasan, tambahkan satu entri di bawah ini
// (nama, kota asal, paket/destinasi, teks Indonesia + Inggris, rating 1-5).

export interface CustomerReview {
    name: string;
    origin: string;
    trip: {
        id: string;
        en: string;
    };
    text: {
        id: string;
        en: string;
    };
    rating: number;
}

export const customerReviews: CustomerReview[] = [
    {
        name: "Andini",
        origin: "Jakarta",
        trip: {
            id: "Gili Trawangan",
            en: "Gili Trawangan",
        },
        text: {
            id: "Pelayanannya ramah, driver tepat waktu, dan trip Gili Trawangan-nya seru banget. Snorkelingnya juara, pasti saya rekomendasikan ke teman-teman!",
            en: "Friendly service, the driver was on time, and the Gili Trawangan trip was so much fun. The snorkelling was amazing — I will definitely recommend it to friends!",
        },
        rating: 5,
    },
    {
        name: "Budi Santoso",
        origin: "Surabaya",
        trip: {
            id: "Mandalika & Pantai Selatan",
            en: "Mandalika & South Beaches",
        },
        text: {
            id: "Mobil bersih, AC dingin, driver tahu spot foto terbaik di Mandalika. Liburan jadi nyaman dari awal sampai akhir.",
            en: "Clean car, cold AC, and a driver who knew the best photo spots in Mandalika. A comfortable trip from start to finish.",
        },
        rating: 5,
    },
    {
        name: "Sari Wulandari",
        origin: "Bandung",
        trip: {
            id: "Paket Lombok 3 Hari 2 Malam",
            en: "3 Days 2 Nights Lombok Package",
        },
        text: {
            id: "Konsultasi via WhatsApp fast respon, itinerary dibantu sampai cocok dengan budget. Liburan jadi gampang, tinggal berangkat.",
            en: "The WhatsApp consultation was fast, and they helped adjust the itinerary to our budget. Travelling became easy — we just had to show up.",
        },
        rating: 5,
    },
];
