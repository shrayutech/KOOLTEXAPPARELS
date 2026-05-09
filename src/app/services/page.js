import ServicesClient from "@/components/services/ServicesClient";

export const metadata = {
  title: "Manufacturing Services | Custom Uniforms & Bulk Production",
  description: "Explore our range of manufacturing services including custom uniforms, bulk apparel production, and safety wear. Precision and quality in every stitch.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
