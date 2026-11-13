import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "adventureindonesia.com",
      },
      {
        protocol: "https",
        hostname: "authentic-indonesia.com",
      },
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.kimkim.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "coconut-story.com",
      },
      {
        protocol: "https",
        hostname: "faszination-suedostasien.de",
      },
      {
        protocol: "https",
        hostname: "gobackpacking.com",
      },
      {
        protocol: "https",
        hostname: "gomandalika.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "ik.imgkit.net",
      },
      {
        protocol: "https",
        hostname: "image.idntimes.com",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "images.tourscanner.com",
      },
      {
        protocol: "https",
        hostname: "images.trvl-media.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "imgx.gridoto.com",
      },
      {
        protocol: "https",
        hostname: "iseeindonesia.com",
      },
      {
        protocol: "https",
        hostname: "jejakpiknik.com",
      },
      {
        protocol: "https",
        hostname: "jwc.gotra-resources.my.id",
      },
      {
        protocol: "https",
        hostname: "kelilingnusantara.com",
      },
      {
        protocol: "https",
        hostname: "kinglong.ae",
      },
      {
        protocol: "https",
        hostname: "local-bali.com",
      },
      {
        protocol: "https",
        hostname: "lombokindotrans.com",
      },
      {
        protocol: "https",
        hostname: "lombokloop.com",
      },
      {
        protocol: "https",
        hostname: "lostonlombok.com",
      },
      {
        protocol: "https",
        hostname: "mediaim.expedia.com",
      },
      {
        protocol: "https",
        hostname: "resources.motogp.pulselive.com",
      },
      {
        protocol: "https",
        hostname: "s3.nevaobjects.id",
      },
      {
        protocol: "https",
        hostname: "sasak-journey.vercel.app",
      },
      {
        protocol: "https",
        hostname: "sembalun7summits.com",
      },
      {
        protocol: "https",
        hostname: "static.333travel.nl",
      },
      {
        protocol: "https",
        hostname: "thelangkahtravel.com",
      },
      {
        protocol: "https",
        hostname: "tourevent.id",
      },
      {
        protocol: "https",
        hostname: "trekindonesia.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "usercontent.one",
      },
      {
        protocol: "https",
        hostname: "valsatravel.com",
      },
      {
        protocol: "https",
        hostname: "www.blj.co.id",
      },
      {
        protocol: "https",
        hostname: "www.indonesia.travel",
      },
      {
        protocol: "https",
        hostname: "www.lazone.id",
      },
      {
        protocol: "https",
        hostname: "www.luxurybalitravel.com",
      },
      {
        protocol: "https",
        hostname: "www.mataramweb.com",
      },
      {
        protocol: "https",
        hostname: "www.nayakasurfschool.com",
      },
      {
        protocol: "https",
        hostname: "www.tourcompass.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.toyotacirebon.id",
      },
      {
        protocol: "https",
        hostname: "www.tusktravel.com.mx",
      },
      {
        protocol: "https",
        hostname: "zjglidcehtsqqqhbdxyp.supabase.co",
      },

    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
