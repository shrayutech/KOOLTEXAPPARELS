import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Search, Filter, ShoppingBag, X } from 'lucide-react';

const ProductGrid = () => {
  const categories = [
    "All", "T-Shirts", "Track Suits", "School Uniforms", "Corporate Uniforms", "Safety Jackets", "Aprons"
  ];

  const products = [
    { id: 1, name: "Premium Cotton T-Shirt", category: "T-Shirts", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1974&auto=format&fit=crop" },
    { id: 2, name: "Athletic Track Suit", category: "Track Suits", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2040&auto=format&fit=crop" },
    { id: 3, name: "Secondary School Uniform", category: "School Uniforms", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" },
    { id: 4, name: "Executive Business Suit", category: "Corporate Uniforms", image: "https://images.unsplash.com/photo-1591336397453-6a98da6287da?q=80&w=2070&auto=format&fit=crop" },
    { id: 5, name: "Industrial Safety Vest", category: "Safety Jackets", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop" },
    { id: 6, name: "Professional Chef Apron", category: "Aprons", image: "https://images.unsplash.com/photo-1581615307205-1887e915474c?q=80&w=1935&auto=format&fit=crop" },
    { id: 7, name: "Oversized Graphic Tee", category: "T-Shirts", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2070&auto=format&fit=crop" },
    { id: 8, name: "Sports Training Pants", category: "Track Suits", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop" },
    { id: 9, name: "Kindergarten Uniform Set", category: "School Uniforms", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1974&auto=format&fit=crop" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.category) {
      setActiveCategory(location.state.category);
      // Scroll to product grid if navigating from footer
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.state]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="section-padding pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-widest shadow-sm">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link to="/contact" className="bg-white text-secondary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <ShoppingBag size={18} />
                      Inquire Now
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors mb-2">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm font-medium">Bulk Only</span>
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="text-primary font-bold text-sm underline group-hover:no-underline cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Product Details Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
              ></motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
              >
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white md:text-secondary md:bg-gray-100 md:hover:bg-gray-200 transition-all"
                >
                  <X size={24} />
                </button>

                <div className="w-full md:w-1/2 h-64 md:h-auto">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">{selectedProduct.category}</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">{selectedProduct.name}</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our premium {selectedProduct.name} is manufactured using high-quality materials to ensure maximum durability and comfort. Perfect for bulk organizational requirements.
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    {['Custom Logo Branding', 'Available in multiple colors', 'Size range: S to 5XL', 'Premium fabric options'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/contact" 
                    onClick={() => setSelectedProduct(null)}
                    className="btn-primary py-4 text-center flex items-center justify-center gap-3"
                  >
                    <ShoppingBag size={20} /> Inquire About Bulk Order
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or category filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
