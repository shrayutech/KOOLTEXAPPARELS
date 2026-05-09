import Image from 'next/image';
import { notFound } from 'next/navigation';

const blogPosts = {
  "best-school-uniform-fabrics": {
    title: "Best School Uniform Fabrics for Indian Climate",
    content: "Content about school uniform fabrics...",
    date: "May 5, 2024",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200"
  },
  "corporate-uniform-trends-2024": {
    title: "Corporate Uniform Trends in India: 2024 Edition",
    content: "Content about corporate trends...",
    date: "April 28, 2024",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1200"
  },
  "importance-of-safety-jackets": {
    title: "Importance of High-Visibility Safety Jackets in Construction",
    content: "Content about safety jackets...",
    date: "April 15, 2024",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1200"
  }
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) return {};
  
  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) notFound();

  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <p className="text-primary font-bold mb-4">{post.date}</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-12">{post.title}</h1>
        
        <div className="relative h-[400px] md:h-[600px] mb-12 rounded-[2.5rem] overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <p>{post.content}</p>
          <p>
            Kooltex Apparels is committed to providing the best information and quality in the industry. 
            For bulk orders of these products, contact us today.
          </p>
        </div>
      </div>
    </div>
  );
}
