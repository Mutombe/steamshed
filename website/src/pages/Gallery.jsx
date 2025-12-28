import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGem, FaMountain, FaFilter, FaArrowRight } from 'react-icons/fa';
import { IoDiamondSharp } from "react-icons/io5";

// Unsplash Placeholders (Replace with your real assets later)
const heroBg = "/about.jpg"; 

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      image: "/j8.jpg",
      title: 'Raw Gold Ore',
      category: 'mining',
      description: 'High-grade gold ore extracted from the Great Dyke belt.',
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2940&auto=format&fit=crop",
      title: 'Garnet Signet',
      category: 'jewelry',
      description: 'A statement piece featuring a deep red Zimbabwean garnet.',
    },
    {
      id: 3,
      image: "/j9.jpg",
      title: 'Uncut Emeralds',
      category: 'mining',
      description: 'Rough emerald crystals showing excellent clarity and color.',
    },
    {
      id: 4,
      image: "/j5.jpg",
      title: 'Bridal Collection',
      category: 'jewelry',
      description: 'Elegant diamond settings for the modern bride.',
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2940&auto=format&fit=crop",
      title: 'Gold Bullion',
      category: 'mining',
      description: 'Refined gold bars ready for investment and export.',
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2940&auto=format&fit=crop",
      title: 'Sapphire Pendant',
      category: 'jewelry',
      description: 'Handcrafted necklace featuring a rare blue sapphire.',
    },
    {
      id: 7,
      image: "/j1.jpg",
      title: 'Diamond Rough',
      category: 'mining',
      description: 'Kimberlite diamonds in their natural, unpolished state.',
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2815&auto=format&fit=crop",
      title: 'Custom Gold Set',
      category: 'jewelry',
      description: 'Bespoke 18k gold jewelry set commissioned for a client.',
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2940&auto=format&fit=crop",
      title: 'Quartz Specimens',
      category: 'mining',
      description: 'Museum-grade quartz crystal formations.',
    },
  ];

  const categories = [
    { id: 'all', label: 'View All', icon: FaFilter },
    { id: 'mining', label: 'Mining', icon: FaMountain },
    { id: 'jewelry', label: 'Jewelry', icon: IoDiamondSharp },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
             <img 
                src={heroBg} 
                alt="Gallery Hero" 
                className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border-b border-[#D4AF37] pb-2 mb-6">
                 <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold">
                    Curated Excellence
                 </span>
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-4 text-white">
              The <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD954] to-[#B8941F] bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="font-['Cormorant_Garamond'] text-xl text-gray-300 max-w-2xl mx-auto">
              A visual journey through Zimbabwe's mineral wealth and our artisanal craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== 2. FILTER BAR ==================== */}
      <section className="py-10 sticky top-[80px] z-30 bg-[#050505]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat.id)}
                className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition-all duration-300 border ${
                  filter === cat.id
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-transparent text-gray-400 border-gray-800 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
              >
                <cat.icon />
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3. GALLERY GRID ==================== */}
      <section className="py-20 min-h-screen">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer relative aspect-[4/3] rounded-sm overflow-hidden border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient (Hidden by default, reveals on hover) */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {item.category}
                    </span>
                    <h3 className="font-['Playfair_Display'] text-2xl text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        {item.title}
                    </h3>
                    <div className="w-10 h-1 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150"></div>
                    <p className="mt-4 text-sm text-gray-300 font-['Cormorant_Garamond'] max-w-[80%] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                        Click to expand view
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ==================== 4. LIGHTBOX MODAL ==================== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-[#D4AF37] hover:text-white transition-colors z-50"
            >
              <FaTimes size={40} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full grid md:grid-cols-2 gap-0 bg-[#111] rounded-sm overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Image Side */}
              <div className="relative h-[400px] md:h-[600px] bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                 <div className="flex items-center gap-2 mb-4 text-[#D4AF37] text-sm font-bold uppercase tracking-widest">
                    {selectedImage.category === 'mining' ? <FaMountain /> : <IoDiamondSharp />}
                    <span>{selectedImage.category} Collection</span>
                 </div>
                 
                 <h2 className="font-['Playfair_Display'] text-4xl text-white mb-6">
                    {selectedImage.title}
                 </h2>
                 
                 <p className="font-['Cormorant_Garamond'] text-xl text-gray-400 leading-relaxed mb-8">
                    {selectedImage.description}
                 </p>
                 
                 <div className="pt-8 border-t border-white/10">
                    <a href="mailto:munasheharrison@gmail.com" className="inline-flex items-center gap-3 text-white hover:text-[#D4AF37] transition-colors font-bold uppercase tracking-widest text-sm">
                        Inquire About This Piece <FaArrowRight />
                    </a>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================== 5. CTA ==================== */}
      <section className="py-24 bg-gradient-to-r from-[#D4AF37] via-[#FFD954] to-[#B8941F] text-black text-center">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">Inspired by our Collection?</h2>
            <p className="font-['Cormorant_Garamond'] text-xl mb-8 font-medium">Get in touch to request our full wholesale catalog.</p>
            <button className="px-10 py-4 bg-black text-[#D4AF37] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                Contact Us
            </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;