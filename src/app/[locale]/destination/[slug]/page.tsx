"use client";

import { formatPrice } from "@/data/destinations";
import {
    IG_BENANG_KELAMBU_GALLERY,
    IG_BENANG_KELAMBU_HERO,
    IG_GILI_NANGGU_GALLERY,
    IG_GILI_NANGGU_HERO,
    IG_SEMBALUN_RINJANI_GALLERY,
    IG_SEMBALUN_RINJANI_HERO,
} from "@/data/instagramPhotos";
import { BOAT_WELENRENG } from "@/data/sailingPhotos";
import { Link } from "@/i18n/navigation";
import {
  ArrowBack as ArrowBackIcon,
  CalendarToday as CalendarIcon,
  Cancel as CancelIcon,
  CheckCircle as CheckIcon,
  DirectionsBoat as BoatIcon,
  Instagram as InstagramIcon,
  Place as PlaceIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

// Mock destination data
const destinationData: Record<
  string,
  {
    id: string;
    name: string;
    slug: string;
    category: string;
    destination: string;
    duration: string;
    days: number;
    nights: number;
    price: number;
    image: string;
    gallery: string[];
    description: string;
    longDescription: string;
    highlights: string[];
    itinerary: Array<{ day: number; title: string; description: string }>;
    included: string[];
    excluded: string[];
    departure?: string;
    cabins?: Array<{
      name: string;
      capacity: string;
      price: number;
      extraBed?: number;
    }>;
  }
> = {
  "mandalika": {
    id: "1",
    name: "Mandalika Beach Resort",
    slug: "mandalika",
    category: "beach",
    destination: "mandalika",
    duration: "3d2n",
    days: 3,
    nights: 2,
    price: 4500000,
    image: "https://images.tourscanner.com/wp-content/uploads/2022/06/Mandalika-Beach-Lombok.jpg",
    gallery: [
      "https://cdn.prod.website-files.com/64b222c42a8a72a3d7b1f51e/6531e7587fdd85bf654ed306_Kuta-mandalika-beach-aerial-view-HQ.jpeg",
      "https://gomandalika.com/wp-content/uploads/2023/10/Areguling-2-Cover-scaled.jpg",
      "https://iseeindonesia.com/wp-content/uploads/2023/09/1694069466_56_10-Beaches-For-You-To-Visit-Around-Mandalika-Lombok.jpg",
      "https://www.indonesia.travel/contentassets/979b4c777b224e2f9d2ee7b4487d3290/_what-makes-mandalika-an-incredible-destination-these-7-things-will-give-you-the-answer.webp",
    ],
    description:
      "Kawasan wisata terpadu dengan pantai indah, resor mewah, dan Sirkuit MotoGP kelas dunia.",
    longDescription:
      "Mandalika adalah kawasan ekonomi khusus pariwisata yang terletak di Lombok Tengah. Dengan pantai-pantai eksotis seperti Pantai Kuta, resort berbintang, dan Sirkuit Mandalika yang menjadi tuan rumah MotoGP, destinasi ini menawarkan pengalaman liburan lengkap untuk semua kalangan.",
    highlights: [
      "Pantai Kuta Mandalika yang eksotis",
      "Sirkuit MotoGP kelas dunia",
      "Resort dan hotel berbintang",
      "Sunset spektakuler",
      "Water sports dan aktivitas pantai",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan & Pantai",
        description:
          "Tiba di Mandalika, check-in hotel, dan nikmati sore hari di Pantai Kuta Mandalika.",
      },
      {
        day: 2,
        title: "Eksplorasi & Water Sports",
        description:
          "Hari penuh aktivitas pantai, snorkeling, dan mengunjungi Sirkuit Mandalika.",
      },
      {
        day: 3,
        title: "Relaksasi & Kepulangan",
        description:
          "Waktu bebas untuk spa atau belanja oleh-oleh sebelum kepulangan.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "gili-trawangan": {
    id: "2",
    name: "Gili Trawangan Paradise",
    slug: "gili-trawangan",
    category: "beach",
    destination: "gili-trawangan",
    duration: "3d2n",
    days: 3,
    nights: 2,
    price: 3800000,
    image: "https://gobackpacking.com/wp-content/uploads/2021/08/Gili-Trawangan-Indonesia.jpg",
    gallery: [
      "https://authentic-indonesia.com/wp-content/uploads/2018/06/gilis-sunset-1.jpg",
      "https://lostonlombok.com/wp-content/uploads/2022/12/Gili-T-Snorkeling.jpg",
      "https://local-bali.com/wp-content/uploads/2020/04/Cidomo-Gili-1024x569.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Boats_at_Eastern_Gili_Trawangan_Beach.jpg",
    ],
    description:
      "Pulau tropis favorit dengan pasir putih, snorkeling, dan kehidupan malam yang hidup.",
    longDescription:
      "Gili Trawangan adalah pulau terbesar dari tiga Gili Islands yang terkenal dengan keindahan alamnya. Pulau bebas kendaraan bermotor ini menawarkan pantai berpasir putih, spot diving dan snorkeling kelas dunia, serta suasana yang sempurna untuk relaksasi dan petualangan.",
    highlights: [
      "Snorkeling dengan penyu laut",
      "Sunset view menakjubkan",
      "Nightlife yang menghibur",
      "Air laut jernih berwarna turquoise",
      "Keliling pulau dengan sepeda",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan & Pantai",
        description:
          "Tiba di Gili Trawangan, check-in akomodasi, dan habiskan hari dengan bersantai di pantai.",
      },
      {
        day: 2,
        title: "Snorkeling Adventure",
        description:
          "Trip snorkeling seharian melihat penyu laut dan kehidupan laut yang berwarna-warni.",
      },
      {
        day: 3,
        title: "Eksplorasi & Kepulangan",
        description:
          "Keliling pulau dengan sepeda, kunjungi toko lokal, dan berenang terakhir sebelum pulang.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "gili-nanggu": {
    id: "3",
    name: "Gili Nanggu Escape",
    slug: "gili-nanggu",
    category: "beach",
    destination: "gili-nanggu",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 3200000,
    image: IG_GILI_NANGGU_HERO,
    gallery: [
      IG_GILI_NANGGU_GALLERY,
      "https://www.tusktravel.com.mx/blog/wp-content/uploads/2020/08/Indonesia-Snorkeling-in-Gili-Nanggu-1024x683.jpg",
      "https://adventureindonesia.com/wp-content/uploads/2020/03/gili-nanggu.jpeg",
      "https://trekindonesia.com/wp-content/uploads/2025/12/gili-nanggu-1.webp",
    ],
    description:
      "Pulau kecil yang tenang dengan air laut jernih, cocok untuk relaksasi dan snorkeling.",
    longDescription:
      "Gili Nanggu adalah pulau tersembunyi di barat daya Lombok yang menawarkan ketenangan jauh dari keramaian. Dengan pantai berpasir putih, terumbu karang yang masih alami, dan suasana yang damai, pulau ini sempurna untuk pasangan atau siapa saja yang mencari ketenangan.",
    highlights: [
      "Pulau privat dan tenang",
      "Terumbu karang yang masih asri",
      "Snorkeling di perairan jernih",
      "Suasana romantis untuk honeymoon",
      "Sunset yang memukau",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan & Snorkeling",
        description:
          "Perjalanan ke Gili Nanggu, snorkeling di terumbu karang, dan menikmati sunset.",
      },
      {
        day: 2,
        title: "Relaksasi & Kepulangan",
        description:
          "Waktu bebas untuk bersantai di pantai sebelum kembali ke Lombok.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "pink-beach": {
    id: "4",
    name: "Pink Beach Adventure",
    slug: "pink-beach",
    category: "beach",
    destination: "pink-beach",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 3500000,
    image: "https://www.nayakasurfschool.com/wp-content/uploads/2020/02/Tangsi-beach-lombok-island.jpg",
    gallery: [
      "https://lombokloop.com/wp-content/uploads/2025/01/pink-beach-lombok-2.jpg",
      "https://images.ctfassets.net/dsbipkqphva2/gbF5PSWH0nAeTOQqBXM1Q/b09b96765c196e55ab363c53ec57c489/pink-beach-lombok-pelago-1-min.jpg",
      "https://images.trvl-media.com/place/6278535/7170a19a-6d34-4251-8290-a308c7a9646f.jpg?impolicy=fcrop&w=1200&h=500&q=medium",
      "https://coconut-story.com/wp-content/uploads/2023/02/lombok-pink-beach-2-1160x652.jpg",
    ],
    description:
      "Pantai unik dengan pasir berwarna merah muda dan panorama laut yang eksotis.",
    longDescription:
      "Pantai Pink (Tangsi Beach) adalah salah satu dari sedikit pantai berpasir merah muda di dunia. Warna unik pasirnya berasal dari pecahan terumbu karang merah yang bercampur dengan pasir putih. Destinasi ini menawarkan keindahan alam yang langka dan pengalaman fotografi yang tak terlupakan.",
    highlights: [
      "Pasir berwarna pink yang unik",
      "Panorama laut yang eksotis",
      "Spot fotografi terbaik",
      "Snorkeling dengan ikan warna-warni",
      "Keindahan alam yang langka",
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan ke Pantai Pink",
        description:
          "Perjalanan menuju Lombok Timur, eksplorasi Pantai Pink, snorkeling dan menikmati sunset.",
      },
      {
        day: 2,
        title: "Eksplorasi & Kepulangan",
        description:
          "Waktu bebas untuk foto-foto dan berenang sebelum kembali.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "senggigi": {
    id: "5",
    name: "Senggigi Beach Getaway",
    slug: "senggigi",
    category: "beach",
    destination: "senggigi",
    duration: "3d2n",
    days: 3,
    nights: 2,
    price: 3000000,
    image: "https://valsatravel.com/storage/2026/01/Pantai-Senggigi-03-1024x724.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Senggigi_Beach_by_Senggigi_Beach_Hotel.JPG/1280px-Senggigi_Beach_by_Senggigi_Beach_Hotel.JPG?utm_source=en.wikivoyage.org&utm_campaign=index&utm_content=thumbnail",
      "https://www.tourcompass.co.uk/api/attachments/wp-content/uploads/2019/11/D5a-Senggigi-bugten-p%C3%A5-Lombok-3.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Lombok_BatuBolong_EmptyThrone.JPG?utm_source=en.wikivoyage.org&utm_campaign=index&utm_content=thumbnail_unscaled",
      "https://www.blj.co.id/wp-content/uploads/2022/03/Senggigi-3.jpeg",
    ],
    description:
      "Destinasi wisata klasik Lombok dengan sunset indah dan fasilitas lengkap.",
    longDescription:
      "Senggigi adalah kawasan wisata paling terkenal di Lombok Barat. Dengan garis pantai yang panjang, berbagai resort dan hotel, restoran, serta akses mudah ke Gili Islands, Senggigi adalah pilihan sempurna untuk liburan keluarga atau sebagai base camp menjelajahi Lombok.",
    highlights: [
      "Sunset spektakuler",
      "Akses mudah ke Gili Islands",
      "Berbagai pilihan resort",
      "Kuliner seafood segar",
      "Cocok untuk keluarga",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan & Eksplorasi",
        description:
          "Tiba di Senggigi, check-in hotel, dan eksplorasi pantai sore hari.",
      },
      {
        day: 2,
        title: "Day Trip Gili",
        description:
          "Opsional day trip ke Gili Islands atau aktivitas di Senggigi.",
      },
      {
        day: 3,
        title: "Relaksasi & Kepulangan",
        description:
          "Waktu bebas untuk spa, belanja, atau berenang sebelum pulang.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "sembalun-rinjani": {
    id: "6",
    name: "Sembalun Rinjani Trek",
    slug: "sembalun-rinjani",
    category: "tour",
    destination: "sembalun-rinjani",
    duration: "4d3n",
    days: 4,
    nights: 3,
    price: 4200000,
    image: IG_SEMBALUN_RINJANI_HERO,
    gallery: [
      IG_SEMBALUN_RINJANI_GALLERY,
      "https://thelangkahtravel.com/wp-content/uploads/2020/02/Savana-Propok-Lombok-1024x576.jpg",
      "https://lombokloop.com/wp-content/uploads/2024/10/sembalun-village-lombok-1-1024x767.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Rinjani_Summit_Sunrise.jpg/960px-Rinjani_Summit_Sunrise.jpg?utm_source=en.wikivoyage.org&utm_campaign=index&utm_content=thumbnail",
    ],
    description:
      "Desa pegunungan di kaki Gunung Rinjani, gerbang utama pendakian dan wisata alam.",
    longDescription:
      "Sembalun adalah desa pegunungan yang menjadi gerbang utama untuk pendakian Gunung Rinjani. Dengan pemandangan lembah hijau, udara sejuk pegunungan, dan akses ke jalur pendakian terbaik, Sembalun menawarkan pengalaman wisata alam yang tak terlupakan bagi para pecinta adventure.",
    highlights: [
      "Pendakian Gunung Rinjani",
      "Sunrise dari puncak",
      "Danau Segara Anak",
      "Pemandangan lembah hijau",
      "Camping di bawah bintang",
    ],
    itinerary: [
      {
        day: 1,
        title: "Mulai Pendakian",
        description:
          "Perjalanan dari Sembalun, trekking ke Pos 1 dan Pos 2, lanjut ke Base Camp.",
      },
      {
        day: 2,
        title: "Summit Attack",
        description:
          "Pendakian pagi-pagi untuk menyaksikan sunrise dari puncak, lalu turun ke crater rim.",
      },
      {
        day: 3,
        title: "Danau Segara Anak",
        description:
          "Kunjungi danau kawah dan nikmati hot springs sebelum melanjutkan turun.",
      },
      {
        day: 4,
        title: "Kepulangan",
        description:
          "Turun via jalur Senaru dan kembali ke hotel.",
      },
    ],
    included: [
      "accommodation",
      "meals",
      "transportation",
      "guide",
      "entrance",
      "insurance",
    ],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "gili-gede": {
    id: "7",
    name: "Gili Gede Escape",
    slug: "gili-gede",
    category: "beach",
    destination: "gili-gede",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 2800000,
    image: "https://authentic-indonesia.com/wp-content/uploads/2019/10/gili-gede-lombok.jpg",
    gallery: [
      "https://jejakpiknik.com/wp-content/uploads/2017/12/@whodoido.jpg",
      "https://jejakpiknik.com/wp-content/uploads/2017/12/@schoschi090596.jpg",
      "https://jejakpiknik.com/wp-content/uploads/2017/12/@alexa__fortin.jpg",
      "https://jejakpiknik.com/wp-content/uploads/2017/12/@mael-e1579904825525.jpg",
    ],
    description:
      "Pulau terbesar di selatan Lombok dengan keindahan alam yang masih asri dan suasana tenang.",
    longDescription:
      "Gili Gede adalah pulau terbesar di antara pulau-pulau kecil di selatan Lombok. Pulau ini menawarkan keindahan alam yang masih alami, terumbu karang yang sehat, dan kehidupan masyarakat lokal yang ramah. Cocok untuk yang mencari ketenangan dan pengalaman otentik.",
    highlights: [
      "Pulau terbesar di selatan Lombok",
      "Terumbu karang yang sehat",
      "Kehidupan lokal autentik",
      "Suasana tenang dan damai",
      "Snorkeling dan diving",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan & Eksplorasi",
        description:
          "Perjalanan ke Gili Gede, check-in, snorkeling, dan menikmati sunset.",
      },
      {
        day: 2,
        title: "Island Tour & Kepulangan",
        description:
          "Keliling pulau, berinteraksi dengan warga lokal, lalu kembali ke Lombok.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "sasak-tour": {
    id: "8",
    name: "Sasak Village Tour",
    slug: "sasak-tour",
    category: "culture",
    destination: "sasak-tour",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 1500000,
    image: "https://www.mataramweb.com/wp-content/uploads/2025/01/sasak-tribe-traditional-house-in-sade-village-lombok-indonesia.jpg",
    gallery: [
      "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-desa-sade-lombok-keunikan-dan-pesona-rumah-tradisional-suku-sasak-yang-ramah-lingkungan-1k8NaVkvHD.jpg?tr=w-1200,h-675,fo-center",
      "https://ik.imagekit.io/tvlk/dam/i/01kfzg2ar359fmpbp3ecfaejxm.jpeg?tr=q-70,c-at_max,w-1000,h-600",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEGCa-p626rUAj9kLaJVUtCUcZXJqnWfrPLFZBVHHxV1MrLReQ1feClVksty3xXFFfyfzh8E5ipT9JNBGmmXlt2zBdGxz9O4G__Zbs1NUkHR5yH2jvexmFm7byUixO1279Ej9h1yAHbgs0/",
      "https://tourevent.id/wp-content/uploads/2021/06/Desa-Sade-by-COS-Indonesia-5.jpg",
    ],
    description:
      "Jelajahi desa-desa tradisional Sasak dan pelajari budaya serta kerajinan tangan khas Lombok.",
    longDescription:
      "Sasak Tour membawa Anda mengenal lebih dekat budaya dan tradisi suku Sasak yang merupakan penduduk asli Lombok. Kunjungi desa-desa tradisional seperti Sade dan Ende, pelajari teknik tenun khas Lombok, dan nikmati keramahan penduduk lokal.",
    highlights: [
      "Kunjungan desa tradisional Sade",
      "Belajar tenun songket",
      "Melihat rumah adat Sasak",
      "Interaksi dengan penduduk lokal",
      "Kuliner tradisional Sasak",
    ],
    itinerary: [
      {
        day: 1,
        title: "Eksplorasi Desa Sasak",
        description:
          "Kunjungi Desa Sade dan Ende, pelajari budaya dan kerajinan lokal.",
      },
      {
        day: 2,
        title: "Workshop & Kepulangan",
        description:
          "Ikuti workshop tenun, cooking class masakan Sasak, lalu kembali.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "mataram-tour": {
    id: "9",
    name: "Mataram City Tour",
    slug: "mataram-tour",
    category: "city",
    destination: "mataram-tour",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 1200000,
    image: "https://i0.wp.com/tourevent.id/wp-content/uploads/2016/09/Islamic-Center-NTB-by-COs-Indonesia.jpg?resize=1024%2C576&ssl=1",
    gallery: [
      "https://zjglidcehtsqqqhbdxyp.supabase.co/storage/v1/object/public/atourin/images/destination/mataram/pura-meru-profile1645720085.png?x-image-process=image/resize,p_100,limit_1/imageslim",
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Mayura_Water_Palace_%286215204739%29.jpg?utm_source=en.wikivoyage.org&utm_campaign=index&utm_content=thumbnail_unscaled",
      "https://www.indonesia.travel/contentassets/1d5f8340ca264eb8a5ea0848ae2055fa/tembolak-pelangi-mataram.jpg",
      "https://images.squarespace-cdn.com/content/v1/55a10a4de4b04267aaec9d80/1473324066084-96U2NHRKPR13ORLOV2C9/_MG_8910.jpg?format=1500w",
    ],
    description:
      "Eksplorasi ibu kota Lombok dengan sejarah kerajaan, pura-pura kuno, dan kuliner lokal.",
    longDescription:
      "Mataram Tour mengajak Anda menjelajahi ibu kota Lombok dan sekitarnya. Kunjungi Pura Meru, Taman Mayura, Islamic Center, dan nikmati kuliner khas Lombok. Tour ini cocok untuk Anda yang ingin mengenal sisi urban dan historis Lombok.",
    highlights: [
      "Pura Meru - pura terbesar di Lombok",
      "Taman Mayura dan kolam",
      "Islamic Center NTB",
      "Kuliner Taliwang",
      "Pusat oleh-oleh Lombok",
    ],
    itinerary: [
      {
        day: 1,
        title: "Wisata Sejarah & Budaya",
        description:
          "Kunjungi Pura Meru, Taman Mayura, dan Islamic Center.",
      },
      {
        day: 2,
        title: "Kuliner & Belanja",
        description:
          "Tour kuliner dan belanja oleh-oleh khas Lombok.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "benang-kelambu": {
    id: "10",
    name: "Benang Kelambu Waterfall",
    slug: "benang-kelambu",
    category: "tour",
    destination: "benang-kelambu",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 1800000,
    image: IG_BENANG_KELAMBU_HERO,
    gallery: [
      IG_BENANG_KELAMBU_GALLERY,
      "https://thelangkahtravel.com/wp-content/uploads/2015/08/Air-Terjun-Benang-Kelambu.jpg",
      "https://images.squarespace-cdn.com/content/v1/6202075c11e33a5400e9f3ae/aeafcd9c-6499-46fb-afd8-f5761b100b1e/travel_photography_benang_kelambu_waterfalls_indonesia-8.jpg?format=1000w",
      "https://faszination-suedostasien.de/wp-content/uploads/2022/07/lombok-benang-kelambu-wasserfall-1169058055.jpg.webp",
    ],
    description:
      "Air terjun menakjubkan dengan tirai air alami yang indah di tengah hutan tropis.",
    longDescription:
      "Air Terjun Benang Kelambu adalah salah satu air terjun terindah di Lombok. Namanya berasal dari bentuk air yang jatuh menyerupai tirai (kelambu). Terletak di lereng Gunung Rinjani, air terjun ini dikelilingi hutan tropis yang asri dan udara sejuk pegunungan.",
    highlights: [
      "Air terjun berbentuk tirai",
      "Hutan tropis yang asri",
      "Udara sejuk pegunungan",
      "Trekking ringan",
      "Spot foto instagramable",
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan & Trekking",
        description:
          "Perjalanan ke lokasi, trekking menuju air terjun, dan menikmati keindahan alam.",
      },
      {
        day: 2,
        title: "Eksplorasi & Kepulangan",
        description:
          "Eksplorasi sekitar, kunjungi Benang Stokel, lalu kembali.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "mandalika-circuit": {
    id: "11",
    name: "Mandalika Circuit Experience",
    slug: "mandalika-circuit",
    category: "city",
    destination: "mandalika-circuit",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 2500000,
    image: "https://resources.motogp.pulselive.com/photo-resources/2025/10/01/d36f56c9-5bce-4f81-b13f-e70425ee952e/Pertamina-Mandalika-Circuit.jpg?width=1300",
    gallery: [
      "https://ik.imagekit.io/tvlk/blog/2022/01/SIRKUIT-MANDALIKA.jpg?tr=dpr-1.5,h-320,q-40,w-1024",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Main_Straight_of_Mandalika_International_Circuit.jpg/960px-Main_Straight_of_Mandalika_International_Circuit.jpg?utm_source=en.wikivoyage.org&utm_campaign=index&utm_content=thumbnail",
      "https://images.squarespace-cdn.com/content/v1/6619fcfaede0342d74cf2299/5e4ecda7-52d0-4b93-a0b4-9bf3ecec2d52/Motorcycle+Racing+Mandalika+Circuit+17.JPG",
      "https://ik.imagekit.io/tvlk/blog/2022/01/Mandalika-sirkuit.jpg?tr=q-70,c-at_max,w-1000,h-600",
    ],
    description:
      "Sirkuit balap internasional MotoGP dengan fasilitas modern dan pemandangan laut.",
    longDescription:
      "Sirkuit Mandalika adalah sirkuit balap kelas dunia yang menjadi tuan rumah MotoGP sejak 2022. Nikmati pengalaman melihat sirkuit dari dekat, foto di berbagai spot ikonik, dan rasakan atmosfer balap internasional dengan latar belakang pemandangan laut yang menakjubkan.",
    highlights: [
      "Tour sirkuit MotoGP",
      "Foto di paddock area",
      "Museum dan galeri MotoGP",
      "Pemandangan laut dari sirkuit",
      "Pengalaman VIP area",
    ],
    itinerary: [
      {
        day: 1,
        title: "Circuit Tour",
        description:
          "Tour lengkap sirkuit, kunjungi paddock, pit lane, dan tribun utama.",
      },
      {
        day: 2,
        title: "Pantai & Kepulangan",
        description:
          "Nikmati pantai sekitar Mandalika sebelum kembali.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "sailing-lombok-labuan-bajo": {
    id: "12",
    name: "Sailing Lombok \u2013 Labuan Bajo",
    slug: "sailing-lombok-labuan-bajo",
    category: "sailing",
    destination: "sailing-lombok-labuan-bajo",
    duration: "4d3n",
    days: 4,
    nights: 3,
    price: 6500000,
    departure: "Berangkat setiap Kamis",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Phinisi%2C_Penjelajah_Pulau_di_Labuan_Bajo.jpg/1920px-Phinisi%2C_Penjelajah_Pulau_di_Labuan_Bajo.jpg",
    gallery: [
      BOAT_WELENRENG,
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hiu_paus_%28_whale_shark_%29.jpg/1280px-Hiu_paus_%28_whale_shark_%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Salt_Lake_Satonda.jpg/1280px-Salt_Lake_Satonda.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Komodo_dragon%2C_Varanus_komodoensis%2C_Komodo_Island%2C_Indonesia%2C_20250822_1319_2752.jpg/1280px-Komodo_dragon%2C_Varanus_komodoensis%2C_Komodo_Island%2C_Indonesia%2C_20250822_1319_2752.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Kelor_Island.jpg/1280px-Kelor_Island.jpg",
    ],
    description:
      "4 hari 3 malam berlayar dengan KLM Welenreng dari Lombok ke Labuan Bajo: berenang bersama whale shark, mendaki Pulau Satonda, dan bertemu komodo di habitat aslinya.",
    longDescription:
      "Berlayarlah dari Lombok menuju Labuan Bajo di atas KLM Welenreng, kapal phinisi kayu dengan kabin ber-AC dan kamar mandi dalam. Selama 4 hari 3 malam, Anda akan berenang bersama hiu paus di Teluk Saleh, mendaki dan snorkeling di Danau Satonda, melihat manta di Takat Makassar, berjalan di antara komodo di Pulau Komodo, menikmati Pink Beach dan panorama Pulau Padar, hingga snorkeling bersama baby shark di Pulau Kelor sebelum tiba di Labuan Bajo. Semua makan, peralatan snorkeling, pemandu, dan dokumentasi sudah termasuk \u2014 Anda cukup menikmati lautnya.",
    highlights: [
      "Berenang bersama whale shark di Teluk Saleh",
      "Hiking & snorkeling di Danau Satonda",
      "Manta ray di Takat Makassar",
      "Bertemu komodo di Pulau Komodo",
      "Pink Beach, Pulau Padar & Pulau Kalong",
      "Snorkeling bersama baby shark di Pulau Kelor",
    ],
    itinerary: [
      {
        day: 1,
        title: "Senggigi \u2013 Kenawa",
        description:
          "Meeting point di Senggigi, menuju Pelabuhan Kayangan, lalu berlayar ke Pulau Kenawa untuk snorkeling dan menikmati sunset pertama di atas kapal.",
      },
      {
        day: 2,
        title: "Whale Shark & Satonda",
        description:
          "Berenang bersama whale shark di pagi hari, lalu ke Pulau Satonda untuk hiking dan snorkeling di danaunya yang unik.",
      },
      {
        day: 3,
        title: "Manta, Komodo & Padar",
        description:
          "Manta di Takat Makassar, bertemu komodo di Pulau Komodo, Pink Beach, panorama Pulau Padar, dan ribuan kelelawar di Pulau Kalong saat senja.",
      },
      {
        day: 4,
        title: "Kelor \u2013 Labuan Bajo",
        description:
          "Strawberry Rock, Manjarite, dan Pulau Kelor untuk snorkeling bersama baby shark, lalu tiba di Labuan Bajo sekitar pukul 13.00\u201314.00.",
      },
    ],
    included: ["accommodation", "meals", "guide", "wifi", "snorkeling", "documentation", "shuttle"],
    excluded: ["flightsHotel", "insurance", "personal", "tips", "entryFee"],
    cabins: [
      {
        name: "Family Cabin with Balcony",
        capacity: "1\u20134",
        price: 10500000,
        extraBed: 5500000,
      },
      {
        name: "Private Cabin",
        capacity: "1\u20133",
        price: 9500000,
        extraBed: 5000000,
      },
      {
        name: "Sharing Cabin Main Deck",
        capacity: "1\u20136",
        price: 7500000,
      },
      {
        name: "Sharing Cabin Lower Deck",
        capacity: "1\u201312",
        price: 6500000,
      },
    ],
  },
  "sailing-labuan-bajo-lombok": {
    id: "13",
    name: "Sailing Labuan Bajo \u2013 Lombok",
    slug: "sailing-labuan-bajo-lombok",
    category: "sailing",
    destination: "sailing-labuan-bajo-lombok",
    duration: "4d4n",
    days: 4,
    nights: 4,
    price: 6500000,
    departure: "Berangkat setiap Minggu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Pulau_Padar_1.jpg/1920px-Pulau_Padar_1.jpg",
    gallery: [
      BOAT_WELENRENG,
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Varanus_komodoensis%2C_Komodo_Island%2C_Indonesia%2C_20250822_1332_2808.jpg/1280px-Varanus_komodoensis%2C_Komodo_Island%2C_Indonesia%2C_20250822_1332_2808.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Manta_ray.jpg/1280px-Manta_ray.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Pink_Beach_Shore.jpg/1280px-Pink_Beach_Shore.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Sumbawa_Adventour_-_Moyo_Island_Mata_Jitu_Waterfall.jpg/1280px-Sumbawa_Adventour_-_Moyo_Island_Mata_Jitu_Waterfall.jpg",
    ],
    description:
      "4 hari 4 malam dari Labuan Bajo kembali ke Lombok: sunrise di Pulau Padar, komodo, manta, Pantai Pink, lalu whale shark dan Air Terjun Mata Jitu di Pulau Moyo.",
    longDescription:
      "Dari Labuan Bajo, KLM Welenreng membawa Anda menyusuri Taman Nasional Komodo: sunrise dari puncak Pulau Padar, komodo di habitat aslinya, Pantai Pink, dan manta ray di Manta Point. Perjalanan berlanjut ke pantai-pantai tenang Sumbawa, berenang bersama whale shark, dan bermain air di Air Terjun Mata Jitu yang bertingkat-tingkat di Pulau Moyo, sebelum check-out keesokan paginya di Lombok. Kabin ber-AC dengan kamar mandi dalam, semua makan, snorkeling, pemandu, dan dokumentasi sudah termasuk.",
    highlights: [
      "Sunrise dari puncak Pulau Padar",
      "Komodo, Pink Beach & Manta Point",
      "Pantai Savana & Coral Beach yang tenang",
      "Berenang bersama whale shark",
      "Air Terjun Mata Jitu di Pulau Moyo",
      "4 malam nyaman di atas kapal phinisi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Berangkat dari Labuan Bajo",
        description:
          "Penjemputan dari bandara/hotel pukul 17.00, berangkat dari pelabuhan pukul 19.00, dan bermalam pertama di atas kapal.",
      },
      {
        day: 2,
        title: "Padar, Komodo & Manta",
        description:
          "Sunrise di Pulau Padar, bertemu komodo di Pulau Komodo, Pink Beach, dan snorkeling bersama manta di Manta Point.",
      },
      {
        day: 3,
        title: "Savana & Coral Beach",
        description:
          "Seharian bersantai di Savana Beach dan Coral Beach: snorkeling, berenang, dan menikmati pantai yang masih sepi.",
      },
      {
        day: 4,
        title: "Whale Shark & Mata Jitu",
        description:
          "Berenang bersama whale shark, lalu ke Pulau Moyo untuk Air Terjun Mata Jitu. Check-out keesokan paginya pukul 07.00\u201308.00.",
      },
    ],
    included: ["accommodation", "meals", "guide", "wifi", "snorkeling", "documentation", "pickup"],
    excluded: ["flightsHotel", "insurance", "personal", "tips", "entryFee"],
    cabins: [
      {
        name: "Family Cabin with Balcony",
        capacity: "1\u20134",
        price: 10500000,
        extraBed: 5500000,
      },
      {
        name: "Private Cabin",
        capacity: "1\u20133",
        price: 9500000,
        extraBed: 5000000,
      },
      {
        name: "Sharing Cabin Main Deck",
        capacity: "1\u20136",
        price: 7500000,
      },
      {
        name: "Sharing Cabin Lower Deck",
        capacity: "1\u201312",
        price: 6500000,
      },
    ],
  }
};

export default function DestinationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const t = useTranslations("destinationDetail");
  const tCategories = useTranslations("hero.searchForm.categories");
  const tDestinations = useTranslations("hero.searchForm.destinations");

  const destination = destinationData[slug];

  if (!destination) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 10,
        }}
      >
        <Container>
          <Typography variant="h4" textAlign="center" mb={2}>
            Destination not found
          </Typography>
          <Box textAlign="center">
            <Button
              component={Link}
              href="/"
              variant="contained"
              startIcon={<ArrowBackIcon />}
            >
              Back to Home
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  const getCategoryLabel = (value: string) => {
    const map: Record<string, string> = {
      beach: tCategories("beach"),
      city: tCategories("city"),
      culture: tCategories("culture"),
      tour: tCategories("tour"),
      business: tCategories("business"),
      honeymoon: tCategories("honeymoon"),
      sailing: tCategories("sailing"),
    };
    return map[value] || value;
  };

  const getDestinationLabel = (value: string) => {
    const map: Record<string, string> = {
      mandalika: tDestinations("mandalika"),
      "gili-trawangan": tDestinations("giliTrawangan"),
      "gili-nanggu": tDestinations("giliNanggu"),
      "gili-gede": tDestinations("giliGede"),
      "pink-beach": tDestinations("pinkBeach"),
      "sasak-tour": tDestinations("sasakTour"),
      "mataram-tour": tDestinations("mataramTour"),
      "benang-kelambu": tDestinations("benangKelambu"),
      senggigi: tDestinations("senggigi"),
      "mandalika-circuit": tDestinations("mandalikaCircuit"),
      "sembalun-rinjani": tDestinations("sembalunRinjani"),
      "sailing-lombok-labuan-bajo": tDestinations("sailingLombokLabuanBajo"),
      "sailing-labuan-bajo-lombok": tDestinations("sailingLabuanBajoLombok"),
    };
    return map[value] || value;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        pt: { xs: 10, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
          sx={{ mb: 3, textTransform: "none" }}
        >
          Back
        </Button>

        {/* Main Card - Similar to Search Results */}
        <Card
          sx={{
            mb: 4,
            overflow: "hidden",
            borderRadius: 2,
            transition: "all 0.3s ease",
            boxShadow: 3,
          }}
        >
          <Grid container>
            {/* Image Section */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 300, md: "100%" },
                  minHeight: { md: 400 },
                  overflow: "hidden",
                  "& img": {
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  unoptimized={destination.image.startsWith("data:")}
                />
              </Box>
            </Grid>

            {/* Content Section */}
            <Grid size={{ xs: 12, md: 7 }}>
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Chip
                  label={getCategoryLabel(destination.category)}
                  color="secondary"
                  size="small"
                  sx={{ mb: 2, fontWeight: 600 }}
                />
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                  }}
                >
                  {destination.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, minHeight: 40 }}
                >
                  {destination.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Chip
                    icon={<PlaceIcon fontSize="small" />}
                    label={getDestinationLabel(destination.destination)}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: "0.75rem" }}
                  />
                  <Chip
                    icon={<CalendarIcon fontSize="small" />}
                    label={`${destination.days} ${t("days")} / ${destination.nights
                      } ${t("nights")}`}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: "0.75rem" }}
                  />
                  {destination.departure && (
                    <Chip
                      icon={<BoatIcon fontSize="small" />}
                      label={destination.departure}
                      size="small"
                      variant="outlined"
                      color="primary"
                      sx={{ fontSize: "0.75rem", fontWeight: 600 }}
                    />
                  )}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box>
                    {destination.cabins && (
                      <Typography variant="caption" color="text.secondary">
                        {t("startingFrom")}
                      </Typography>
                    )}
                    <Typography
                      variant="h5"
                      color="primary.main"
                      fontWeight={700}
                    >
                      {formatPrice(destination.price, "IDR")}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {t("perPerson")}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    href={`https://wa.me/62895634060842?text=${encodeURIComponent(
                      `Halo, saya tertarik dengan paket wisata ${destination.name}. Bolehkah saya minta informasi lebih lanjut mengenai ketersediaan dan detail harganya?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textTransform: "none",
                      fontWeight: 700,
                      py: 1.5,
                      borderRadius: 2,
                      background: "linear-gradient(45deg, #128C7E 30%, #075E54 90%)",
                      boxShadow: "0 3px 5px 2px rgba(37, 211, 102, .3)",
                      color: "white",
                      "&:hover": {
                        background:
                          "linear-gradient(45deg, #075E54 30%, #128C7E 90%)",
                      },
                    }}
                  >
                    Pesan Sekarang via WhatsApp
                  </Button>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Overview */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mb: 2, color: "primary.main" }}
              >
                {t("overview")}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {destination.longDescription}
              </Typography>
            </Paper>

            {/* Highlights */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mb: 3, color: "primary.main" }}
              >
                {t("highlights")}
              </Typography>
              <Grid container spacing={2}>
                {destination.highlights.map((highlight, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1,
                      }}
                    >
                      <CheckIcon color="primary" sx={{ mt: 0.5 }} />
                      <Typography variant="body1">{highlight}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* Cabin Options */}
            {destination.cabins && (
              <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600, mb: 1, color: "primary.main" }}
                >
                  {t("cabins")}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {t("cabinNote")}
                </Typography>
                <Grid container spacing={2}>
                  {destination.cabins.map((cabin, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          border: "1px solid",
                          borderColor: "divider",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 1,
                          }}
                        >
                          <Typography variant="subtitle1" fontWeight={700}>
                            {cabin.name}
                          </Typography>
                          <Chip
                            label={`${cabin.capacity} ${t("pax")}`}
                            size="small"
                            color="primary"
                            variant="outlined"
                            sx={{ fontWeight: 600, flexShrink: 0 }}
                          />
                        </Box>
                        <Typography
                          variant="h6"
                          color="primary.main"
                          fontWeight={700}
                        >
                          {formatPrice(cabin.price, "IDR")}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t("perPerson")}
                        </Typography>
                        {cabin.extraBed && (
                          <Typography variant="body2" color="text.secondary">
                            {t("extraBed")}: {formatPrice(cabin.extraBed, "IDR")}
                          </Typography>
                        )}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            )}

            {/* Itinerary */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mb: 3, color: "primary.main" }}
              >
                {t("itinerary")}
              </Typography>
              {destination.itinerary.map((item, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Chip
                      label={`${t("day")} ${item.day}`}
                      color="primary"
                      sx={{ mr: 2, fontWeight: 600 }}
                    />
                    <Typography variant="h6" fontWeight={600}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ pl: { xs: 0, sm: 8 } }}
                  >
                    {item.description}
                  </Typography>
                  {index < destination.itinerary.length - 1 && (
                    <Divider sx={{ mt: 2 }} />
                  )}
                </Box>
              ))}
            </Paper>

            {/* Gallery */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mb: 3, color: "primary.main" }}
              >
                {t("gallery")}
              </Typography>
              <Grid container spacing={2}>
                {destination.gallery.map((img, index) => (
                  <Grid size={{ xs: 6, md: 3 }} key={index}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: 200,
                        borderRadius: 2,
                        overflow: "hidden",
                        cursor: "pointer",
                        "&:hover img": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <Image
                        src={img}
                        alt={`${destination.name} ${index + 1}`}
                        fill
                        style={{
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        unoptimized={img.startsWith("data:")}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* Instagram */}
            <Paper
              elevation={2}
              sx={{
                p: 4,
                mb: 4,
                borderRadius: 2,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                gap: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  borderRadius: 3,
                  flexShrink: 0,
                  background:
                    "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  color: "white",
                }}
              >
                <InstagramIcon fontSize="large" />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {t("instagramTitle")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("instagramText")}
                </Typography>
              </Box>
              <Button
                variant="contained"
                href="https://www.instagram.com/sasakjourney/"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<InstagramIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: 2,
                  whiteSpace: "nowrap",
                  width: { xs: "100%", sm: "auto" },
                  background:
                    "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  color: "white",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #bc1888 0%, #cc2366 25%, #dc2743 50%, #e6683c 75%, #f09433 100%)",
                  },
                }}
              >
                {t("instagramButton")}
              </Button>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            {/* What's Included & Excluded Card */}
            <Paper
              elevation={2}
              sx={{
                p: 4,
                mb: 4,
                borderRadius: 2,
                position: "sticky",
                top: 100,
              }}
            >
              {/* What's Included */}
              <Typography variant="h6" fontWeight={600} mb={2}>
                {t("included")}
              </Typography>
              <List dense>
                {destination.included.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={t(`items.included.${item}`)}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 2 }} />

              {/* What's Excluded */}
              <Typography variant="h6" fontWeight={600} mb={2}>
                {t("excluded")}
              </Typography>
              <List dense>
                {destination.excluded.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CancelIcon color="error" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={t(`items.excluded.${item}`)}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
