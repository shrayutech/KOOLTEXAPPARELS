import HomeClient from "@/components/home/HomeClient";

export const metadata = {
  title: "Best T-Shirt & Uniform Manufacturer in India | KOOLTEX APPARELS",
  description: "KOOLTEX APPARELS is a leading manufacturer and supplier of T-Shirts, Track Suits, School Uniforms, Corporate Uniforms, Safety Jackets & Aprons across India.",
  keywords: "T-Shirt Manufacturer, School Uniform Manufacturer, Corporate Uniform Supplier, Safety Jacket Manufacturer, Apron Manufacturer India, Uniform Manufacturer in India, Maharashtra, Chhatrapati Sambhajinagar",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
