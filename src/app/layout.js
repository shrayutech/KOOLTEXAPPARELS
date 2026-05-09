import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppFAB from "../components/contact/WhatsAppFAB";
import JsonLd from "../components/common/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kooltexapparels.com"),
  title: {
    default: "KOOLTEX APPARELS | Premium Uniform & Apparel Manufacturer in India",
    template: "%s | KOOLTEX APPARELS",
  },
  description: "KOOLTEX APPARELS is a leading manufacturer of premium T-shirts, school uniforms, corporate wear, and industrial safety jackets in India. Quality guaranteed bulk supplier.",
  keywords: ["T-Shirt Manufacturer India", "School Uniform Manufacturer", "Corporate Uniform Supplier", "Safety Jacket Manufacturer", "Bulk Apparel India", "Uniform Supplier Maharashtra"],
  authors: [{ name: "KOOLTEX APPARELS" }],
  creator: "KOOLTEX APPARELS",
  publisher: "KOOLTEX APPARELS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "KOOLTEX APPARELS | Premium Uniform Manufacturer",
    description: "Leading manufacturer of high-quality uniforms and custom apparel in India.",
    url: "https://kooltexapparels.com",
    siteName: "KOOLTEX APPARELS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOOLTEX APPARELS | Premium Uniform Manufacturer",
    description: "High-quality uniforms and custom apparel for businesses and schools.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KOOLTEX APPARELS",
    "url": "https://kooltexapparels.com",
    "logo": "https://kooltexapparels.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-86984-67777",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.instagram.com/kooltexapparels/",
      "https://www.facebook.com/kooltexapparels"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KOOLTEX APPARELS",
    "image": "https://kooltexapparels.com/manufacturing-unit.jpg",
    "@id": "https://kooltexapparels.com",
    "url": "https://kooltexapparels.com",
    "telephone": "+918698467777",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gat No. 97, Bidkin-Shendra Road",
      "addressLocality": "Bidkin",
      "postalCode": "431105",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.697023391723633,
      "longitude": 75.29815673828125
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppFAB />
        </div>
      </body>
    </html>
  );
}
