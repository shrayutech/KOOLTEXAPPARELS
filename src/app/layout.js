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
    default: "Best T-Shirt & Uniform Manufacturer in India | KOOLTEX APPARELS",
    template: "%s | KOOLTEX APPARELS",
  },
  description: "Premium bulk manufacturer of T-shirts, school uniforms, corporate wear, safety jackets & aprons. ISO 9001:2015 & OEKO-TEX certified supplier in India.",
  keywords: [
    "Best T-Shirt Manufacturer in India",
    "School Uniform Manufacturer",
    "Corporate Uniform Supplier",
    "Track Suit Manufacturer India",
    "Safety Jacket Manufacturer",
    "Apron Manufacturer",
    "Uniform Manufacturer in Maharashtra",
    "Industrial Uniform Supplier",
    "Bulk Uniform Manufacturer India",
    "Custom Apparel Manufacturing India",
    "Uniform Supplier Aurangabad",
    "ISO Certified Uniform Manufacturer",
    "OEKO-TEX Uniform Supplier",
    "Bidkin Apparel Factory"
  ],
  authors: [{ name: "KOOLTEX APPARELS" }],
  creator: "KOOLTEX APPARELS",
  publisher: "KOOLTEX APPARELS",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best T-Shirt & Uniform Manufacturer in India | KOOLTEX APPARELS",
    description: "Leading manufacturer of high-quality uniforms and custom apparel in India. Expert bulk production for schools, corporates, and industries.",
    url: "https://kooltexapparels.com",
    siteName: "KOOLTEX APPARELS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KOOLTEX APPARELS Manufacturing Facility",
      },
    ],
    locale: "en_IN",
    type: "website",
    modifiedTime: "2026-05-22T14:46:56Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOOLTEX APPARELS | Premium Uniform & Apparel Manufacturer",
    description: "High-quality bulk apparel manufacturing for schools and industries across India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KOOLTEX APPARELS",
    "url": "https://kooltexapparels.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kooltexapparels.com/explore?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kooltexapparels.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://kooltexapparels.com/about"
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={breadcrumbSchema} />
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
