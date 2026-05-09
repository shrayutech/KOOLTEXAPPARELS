import React from 'react';
import { notFound } from 'next/navigation';

const locationData = {
  "maharashtra": {
    name: "Maharashtra",
    title: "Uniform Manufacturer in Maharashtra | Industrial & School Apparel",
    desc: "KOOLTEX APPARELS is the leading bulk uniform supplier in Maharashtra, serving Mumbai, Pune, Nagpur, and Chhatrapati Sambhajinagar with premium apparel manufacturing.",
    content: "Our Maharashtra division specializes in high-volume production for the state's booming industrial and educational sectors. With our main hub in Bidkin, we are strategically positioned to deliver custom uniforms across all major districts of Maharashtra."
  },
  "bidkin": {
    name: "Bidkin",
    title: "Apparel Manufacturer in Bidkin, Chh. Sambhajinagar",
    desc: "Located in the heart of the industrial zone, our Bidkin manufacturing unit is India's hub for high-quality T-shirts, school uniforms, and safety jackets.",
    content: "Our Bidkin facility at Gat No. 97, Bidkin-Shendra Road, is equipped with the latest automated stitching and printing technology. We provide 'near me' convenience for businesses in the Aurangabad region while maintaining global quality standards."
  }
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locationData[slug];
  
  if (!location) return {};
  
  return {
    title: location.title,
    description: location.desc,
    keywords: `uniform manufacturer in ${location.name}, bulk apparel ${location.name}, school uniform supplier ${location.name}, industrial safety wear ${location.name}`,
    alternates: {
      canonical: `/locations/${slug}`,
    }
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = locationData[slug];

  if (!location) notFound();

  return (
    <div className="bg-white min-h-screen pt-48 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-black mb-8 text-dark tracking-tighter uppercase">
          {location.name} <span className="text-primary italic">Operations</span>
        </h1>
        
        <div className="bg-light p-12 rounded-[3rem] border border-steel/10 shadow-sm mb-16">
          <h2 className="text-2xl font-black mb-6 text-dark uppercase tracking-tight">Enterprise Manufacturing Hub</h2>
          <p className="text-body text-xl leading-relaxed font-medium mb-8">
            {location.desc}
          </p>
          <div className="prose prose-lg text-body/80 font-medium leading-relaxed">
            <p>{location.content}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 bg-secondary text-white rounded-[2.5rem] shadow-xl">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Local Support</h3>
            <p className="text-white/70 font-medium mb-6">Connect with our regional production consultants for on-site meetings and fabric sampling.</p>
            <a href="/contact" className="text-primary font-black uppercase tracking-widest text-sm hover:gap-4 transition-all flex items-center gap-2">
              Contact Local Hub →
            </a>
          </div>
          <div className="p-10 bg-white border border-steel/10 rounded-[2.5rem] shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-dark uppercase tracking-widest text-secondary">Why {location.name}?</h3>
            <p className="text-body font-medium">Strategic logistics and high-volume capacity ensure faster turnaround times for our {location.name} partners.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
