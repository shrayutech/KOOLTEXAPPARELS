import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Industrial & Apparel Blog | KOOLTEX APPARELS",
  description: "Stay updated with the latest trends in corporate uniforms, school apparel, and industrial safety wear in India.",
};

const blogPosts = [
  {
    slug: "best-school-uniform-fabrics",
    title: "Best School Uniform Fabrics for Indian Climate",
    excerpt: "Choosing the right fabric for school uniforms is crucial for comfort and durability. Learn about the top choices...",
    date: "May 5, 2024",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800"
  },
  {
    slug: "corporate-uniform-trends-2024",
    title: "Corporate Uniform Trends in India: 2024 Edition",
    excerpt: "Discover how corporate attire is evolving in India's leading tech hubs like Bangalore and Pune...",
    date: "April 28, 2024",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800"
  },
  {
    slug: "importance-of-safety-jackets",
    title: "Importance of High-Visibility Safety Jackets in Construction",
    excerpt: "Safety should never be compromised. Explore why high-visibility gear is a must for industrial workers...",
    date: "April 15, 2024",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800"
  }
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12 text-center">Apparel & Manufacturing <span className="text-primary">Insights</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative h-64">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <p className="text-primary font-bold text-sm mb-2">{post.date}</p>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-gray-500 mb-6 line-clamp-2">{post.excerpt}</p>
                <span className="text-secondary font-bold flex items-center gap-2">
                  Read More <div className="w-2 h-2 bg-primary rounded-full"></div>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
