import ProductGrid from "@/components/explore/ProductGrid";
import { Suspense } from "react";
import JsonLd from "@/components/common/JsonLd";
import { notFound } from "next/navigation";

const categoryMap = {
  "t-shirts": "T-Shirts",
  "track-suits": "Track Suits",
  "school-uniforms": "School Uniforms",
  "corporate-uniforms": "Corporate Uniforms",
  "safety-jackets": "Safety Jackets",
  "aprons": "Aprons"
};

export async function generateMetadata({ params }) {
  const { category } = await params;
  const decodedCategory = categoryMap[category];

  if (!decodedCategory) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${decodedCategory} Manufacturer & Supplier India | KOOLTEX APPARELS`,
    description: `High-quality ${decodedCategory} manufacturing and bulk supply services in India. Custom designs, premium fabrics, and reliable delivery for businesses and schools.`,
    keywords: `${decodedCategory} manufacturer, bulk ${decodedCategory} supplier, custom ${decodedCategory} India, ${decodedCategory} manufacturing Maharashtra`,
    alternates: {
      canonical: `/explore/${category}`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const decodedCategory = categoryMap[category];

  if (!decodedCategory) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the minimum order quantity for ${decodedCategory}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Our minimum order quantity for bulk ${decodedCategory} manufacturing usually starts from 50 units, depending on the customization requirements.`
        }
      },
      {
        "@type": "Question",
        "name": `Can we get custom branding on ${decodedCategory}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, we provide high-quality computerized embroidery and screen printing services to brand your ${decodedCategory} with your logo and design.`
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <JsonLd data={faqSchema} />
      <div className="pt-40 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-black mb-4 text-secondary tracking-tighter uppercase">
          {decodedCategory} <span className="text-primary italic">Manufacturing</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-3xl font-medium">
          Premium quality {decodedCategory} manufactured with precision and care. Serving schools, corporates, and industries across India with excellence in every stitch.
        </p>
      </div>
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading Products...</div>}>
        <ProductGrid initialCategory={decodedCategory} />
      </Suspense>
    </div>
  );
}
