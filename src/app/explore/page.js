import ProductGrid from "@/components/explore/ProductGrid";
import { Suspense } from "react";
import JsonLd from "@/components/common/JsonLd";

export const metadata = {
  title: "Explore Products | Premium T-Shirts, Uniforms & Safety Jackets",
  description: "Browse our extensive catalog of high-quality apparel. From school uniforms to corporate wear and industrial safety jackets. Bulk orders only.",
  alternates: {
    canonical: "/explore",
  },
};

export default function ExplorePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the minimum order quantity for custom uniforms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum order quantity varies by product, but generally starts at 50 units for custom stitching and branding."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver uniforms across India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we deliver bulk orders to all major cities in India including Mumbai, Pune, Delhi, Bangalore, and Hyderabad."
        }
      },
      {
        "@type": "Question",
        "name": "Can we get custom logo embroidery on T-shirts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer computerized embroidery and high-quality screen printing services for all our apparel."
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <JsonLd data={faqSchema} />
      
      {/* Header with Enterprise Blue Styling */}
      <section className="bg-secondary pt-48 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h3 className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-8">Strategic Assets</h3>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase">
            Product <span className="text-primary italic">Catalog.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
            Premium manufacturing solutions for corporate, educational, and industrial sectors. Excellence in every stitch, delivered nationwide.
          </p>
        </div>
      </section>

      <Suspense fallback={
        <div className="h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-secondary font-black uppercase tracking-widest text-xs animate-pulse">Initializing Catalog...</p>
          </div>
        </div>
      }>
        <ProductGrid />
      </Suspense>
    </div>
  );
}
