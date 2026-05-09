"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingBag, X, Filter } from 'lucide-react';
import Image from 'next/image';

const ProductGrid = ({ initialCategory = "All" }) => {
  const router = useRouter();
  const categories = [
    "All", "T-Shirts", "Track Suits", "School Uniforms", "Corporate Uniforms", "Safety Jackets", "Aprons"
  ];
  
  const products = [
    { id: 1, name: "Premium Cotton T-Shirt", category: "T-Shirts", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800" },
    { id: 2, name: "Athletic Track Suit", category: "Track Suits", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800" },
    { id: 3, name: "Formal School Uniform", category: "School Uniforms", image: "https://images.unsplash.com/photo-1628554271148-3b61a97a8461?q=80&w=800" },
    { id: 4, name: "Executive Blazer", category: "Corporate Uniforms", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800" },
    { id: 5, name: "High-Visibility Safety Vest", category: "Safety Jackets", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800" },
    { id: 6, name: "Heavy Duty Kitchen Apron", category: "Aprons", image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=800" },
    { id: 7, name: "V-Neck Corporate Tee", category: "T-Shirts", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800" },
    { id: 8, name: "Winter Warm Track Suit", category: "Track Suits", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800" },
    { id: 9, name: "Primary School Sweater", category: "School Uniforms", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800" },
    { id: 10, name: "Waterproof Safety Jacket", category: "Safety Jackets", image: "https://images.unsplash.com/photo-1582550943580-b0ac09312013?q=80&w=800" },
    { id: 11, name: "Modern Barista Apron", category: "Aprons", image: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?q=80&w=800" },
    { id: 12, name: "Corporate Oxford Shirt", category: "Corporate Uniforms", image: "https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?q=80&w=800" },
  ];

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (initialCategory !== "All") {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      router.push('/explore');
    } else {
      router.push(`/explore/${cat.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <div className="section-padding pt-12">
      <div className="container mx-auto">
        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all duration-300 ${activeCategory === cat
                    ? 'bg-primary text-white shadow-xl scale-105'
                    : 'bg-light text-secondary/40 hover:bg-steel/20 border border-steel/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-steel" size={20} />
            <input
              type="text"
              placeholder="Search Strategic Catalog..."
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-light border border-steel/10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-steel/10"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black text-primary uppercase tracking-widest shadow-sm">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="bg-white text-secondary px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors mb-4 uppercase tracking-tight">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-slate/40 text-[10px] font-black uppercase tracking-widest">Enterprise Ready</span>
                    <Link
                      href="/contact"
                      className="text-primary font-black text-[10px] uppercase tracking-[0.2em] underline group-hover:no-underline"
                    >
                      Bulk Inquiry
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-32 bg-light rounded-[3rem] border border-dashed border-steel/30">
            <Search size={48} className="mx-auto text-steel mb-6" />
            <h3 className="text-3xl font-bold text-secondary mb-2 uppercase tracking-tighter">No strategic assets found</h3>
            <p className="text-slate/40 font-medium">Please refine your search parameters or select a different category.</p>
          </div>
        )}

        {/* Product Details Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-secondary/90 backdrop-blur-md"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-8 right-8 z-10 w-12 h-12 bg-light/50 hover:bg-light backdrop-blur-md rounded-full flex items-center justify-center text-secondary transition-all"
                >
                  <X size={24} />
                </button>

                <div className="w-full lg:w-1/2 h-80 lg:h-auto relative">
                  <Image 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    fill
                    className="object-cover" 
                  />
                </div>

                <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                  <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6">{selectedProduct.category} Unit</span>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-secondary tracking-tighter uppercase">{selectedProduct.name}</h2>
                  <p className="text-slate/60 text-lg mb-10 leading-relaxed font-medium">
                    Our {selectedProduct.name} is engineered for professional durability and comfort. Utilizing premium industrial-grade materials, this product meets the highest standards for enterprise-scale requirements.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-12">
                    {[
                      'Strategic Customization', 
                      'Industrial Durability', 
                      'Bulk Scaling Ready', 
                      'Eco-Compliant Fabric'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                        <span className="text-slate/60 font-bold text-xs uppercase tracking-widest">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    onClick={() => setSelectedProduct(null)}
                    className="btn-primary py-5 text-center flex items-center justify-center gap-4 text-lg"
                  >
                    <ShoppingBag size={24} /> Start Strategic Bulk Order
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductGrid;
