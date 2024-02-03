import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Specials from "./components/Specials";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://envybeauty.com.au"),
  title: {
    default: "Envy Skin & Beauty Specialists",
    template: "%s | Envy Skin & Beauty Specialists",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "",
  },
  description:
    "Envy Skin and beauty are Bunbury's experts in tackling clients skin concerns, from acne and scaring, pigmentation and uneven skin tone and ageing.",
  keywords: [
    "Bunbury beauty salon",
    "Skin treatments Bunbury",
    "Luxury facials Bunbury",
    "IPL treatments South West Australia",
    "Bunbury massages",
    "Waxing services Bunbury",
    "Professional makeup Bunbury",
    "Skincare products Bunbury",
    "Relaxing spa treatments Bunbury",
    "Experienced beauty salon South West Australia",
    "Luxury beauty experience Bunbury",
    "Bunbury IPL specialists",
    "Trusted salon Bunbury",
    "Beauty treatments South West Australia",
    "Women's beauty salon Bunbury",
    "Best beauty salon in Bunbury",
    "IPL treatment experts in South West Australia",
    "Relaxing luxury facial treatments Bunbury",
    "Trusted beauty salon with 30 years experience Bunbury",
    "Bunbury salon for women's skincare and makeup",
    "Beauty treatments in South West Australia",
    "Bunbury area luxury spa and salon",
    "Beauty services Bunbury and surrounding areas",
    "Luxury beauty experience",
    "Trusted skincare experts",
    "IPL treatments",
    "Relaxing luxury spa Bunbury",
    "Tailored beauty solutions for women",
    "5 Star Beauty Salon Bunbury",
    "Best Beauty Salon Bunbury",
    "Spray Tans Bunbury",
    "Makeup artists Bunbury",
    "Acne treatments Bunbury",
    "Pigmentation treatments Bunbury",
    "Sun damage treatments Bunbury",
    "Bad skin remedies Bunbury",
    "Manicure services Bunbury",
    "Pedicure services Bunbury",
    "Eyebrow shaping Bunbury",
    "Eyebrow and eyelash tinting Bunbury",
    "Microdermabrasion Bunbury",
    "Anti-aging treatments Bunbury",
    "Organic beauty products Bunbury",
    "Hair removal Bunbury",
    "Beauty consultations Bunbury",
    "Custom skincare routines Bunbury",
    "Facial peels Bunbury",
    "Beauty packages Bunbury",
    "Bunbury beauty gift vouchers",
    "Nail salon Bunbury",
    "Skincare clinic Bunbury",
    "Beauty promotions Bunbury",
    "High-quality beauty products Bunbury",
    "Bunbury skincare specialists",
    "Facial rejuvenation Bunbury",
    "Local beauty salon Bunbury",
    "Top-rated beauty salon Bunbury",
    "Spa day packages Bunbury",
    "Skin hydration treatments Bunbury",
    "Sensitive skin treatments Bunbury",
    "Luxury spa day Bunbury",
    "Beauty salon reviews Bunbury",
    "Bunbury beauty salon appointments",
  ],
  authors: [
    { name: "Kadyn-Jai Pearce" },
    { name: "Lani Miskimmon", url: "https://envybeauty.com.au" },
  ],
  creator: "Kadyn-Jai, Lani Miskimmon",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="fade-in">
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
      <link rel="icon" type="image/ico" sizes="32x32" href="/favicon.ico" />

      <body className={`${raleway.className}`}>
        <Specials></Specials>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
