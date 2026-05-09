import ContactClient from "@/components/contact/ContactClient";

export const metadata = {
  title: "Contact Us | Bulk Order Inquiry & Custom Apparel",
  description: "Get in touch with KOOLTEX APPARELS for bulk orders, custom uniform designs, and apparel manufacturing inquiries. Serving Mumbai, Pune, Delhi and all over India.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
