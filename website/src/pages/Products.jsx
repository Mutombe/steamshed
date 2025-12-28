import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Icons
import { 
  GiMining, 
  GiDiamondRing, 
  GiGoldBar,
  GiCutDiamond,
  GiCrystalShine,
  GiGoldNuggets,
  GiMineralHeart,
  GiGemNecklace
} from 'react-icons/gi';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

// Placeholder Images (Replace with your actual imports)
// import mineralImg from '../assets/minerals.jpg'; 
// import jewelryImg from '../assets/jewelry-ad.jpg';
const mineralImg = "https://images.unsplash.com/photo-1576495655519-75c6020c22d7?q=80&w=2940&auto=format&fit=crop";
const jewelryImg = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2940&auto=format&fit=crop";
const heroBg = "https://images.unsplash.com/photo-1617038220319-88af1199b1e1?q=80&w=2940&auto=format&fit=crop";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const categories = [
    { id: 'all', name: 'All Collections', icon: <GiCrystalShine /> },
    { id: 'mining', name: 'Raw Minerals', icon: <GiMining /> },
    { id: 'jewelry', name: 'Fine Jewelry', icon: <GiDiamondRing /> }
  ];

  const products = [
    {
      id: 1,
      category: 'jewelry',
      name: 'Red Garnet Ring',
      description: 'Exquisite deep red garnet set in sterling silver.',
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2940&auto=format&fit=crop", 
      features: ['AAA Grade Garnet', 'Handcrafted', 'Signature Cut']
    },
    {
      id: 2,
      category: 'mining',
      name: 'Raw Emerald Ore',
      description: 'Ethically sourced emerald specimens from Sandawana.',
      image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2787&auto=format&fit=crop",
      features: ['High Purity', 'Certified Origin', 'Bulk Available']
    },
    {
      id: 3,
      category: 'mining',
      name: 'Gold Nuggets',
      description: 'Premium alluvial gold from our mining operations.',
      icon: <GiGoldNuggets />,
      features: ['High Concentration', 'Responsibly Sourced', 'Assay Certified']
    },
    {
      id: 4,
      category: 'jewelry',
      name: 'Diamond Solitaire',
      description: 'Brilliant cut diamond ring, timeless elegance.',
      icon: <GiCutDiamond />,
      features: ['GIA Certified', 'Custom Settings', 'Lifetime Warranty']
    },
    {
      id: 5,
      category: 'mining',
      name: 'Bullion Bars',
      description: 'Investment grade gold and silver bullion.',
      icon: <GiGoldBar />,
      features: ['99.9% Purity', 'Secure Storage', 'Investment Grade']
    },
    {
      id: 6,
      category: 'jewelry',
      name: 'Sapphire Pendant',
      description: 'Royal blue sapphire necklace with diamond halo.',
      icon: <GiMineralHeart />,
      features: ['Rare Stones', 'Artisan Crafted', 'Unique Piece']
    },
    {
      id: 7,
      category: 'jewelry',
      name: 'Gold Chain Collection',
      description: 'Heavy 18k gold chains for sophisticated style.',
      icon: <GiGemNecklace />,
      features: ['Solid 18k Gold', 'Custom Lengths', 'Italian Design']
    },
    {
      id: 8,
      category: 'mining',
      name: 'Crystal Specimens',
      description: 'Museum-quality mineral specimens for collectors.',
      icon: <GiCrystalShine />,
      features: ['Display Ready', 'Rare Formations', 'Documented']
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={heroBg}
            alt="Products Hero"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6"
          >
            Our <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD954] to-[#B8941F] bg-clip-text text-transparent">Collection</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-gray-300"
          >
            From the depths of the earth to the pinnacle of elegance.
          </motion.p>
        </div>
      </section>

      {/* ==================== 2. FILTER & GRID ==================== */}
      <section className="py-20 bg-[#050505] relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Filter Controls */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 border border-[#D4AF37] ${
                  activeCategory === category.id
                    ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                    : 'bg-transparent text-[#D4AF37] hover:bg-[#D4AF37]/10'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="group bg-[#111] border border-white/5 hover:border-[#D4AF37]/50 overflow-hidden rounded-sm transition-all duration-500"
                >
                  {/* Product Image Area */}
                  <div className="relative h-64 overflow-hidden bg-[#1a1a1a]">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#D4AF37]/20 group-hover:text-[#D4AF37] transition-colors duration-500">
                        <div className="text-8xl">{product.icon}</div>
                      </div>
                    )}
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="font-['Playfair_Display'] text-xl font-bold mb-2 text-white group-hover:text-[#D4AF37] transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-['Cormorant_Garamond'] text-gray-400 text-lg mb-6 leading-snug min-h-[3.5rem]">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-wider">
                          <FaCheck className="text-[#D4AF37]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link to="/contact">
                      <button className="w-full py-3 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                        Inquire Now <FaArrowRight />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ==================== 3. DEEP DIVE: MINING ==================== */}
      <section className="py-24 bg-zinc-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-6">
                  <GiMining className="text-5xl text-[#D4AF37]" />
                  <div className="h-px bg-white/20 flex-grow"></div>
              </div>
              <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6 text-white">
                Mining <span className="text-[#D4AF37]">Operations</span>
              </h2>
              <p className="font-['Cormorant_Garamond'] text-xl text-gray-400 leading-relaxed mb-8">
                Our state-of-the-art mining operations combine traditional expertise with 
                modern technology. We extract raw potential from the earth, focusing on sustainability 
                and ethical labor practices.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                      'Sustainable Practices',
                      'Advanced Extraction',
                      'Certified Origin',
                      'Environmental Protection'
                  ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-black border border-white/5 rounded-sm">
                          <div className="w-1 h-8 bg-[#D4AF37]"></div>
                          <span className="text-sm font-bold uppercase tracking-wider text-gray-300">{item}</span>
                      </div>
                  ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative rounded-sm overflow-hidden border border-white/10">
                <img 
                  src={mineralImg} 
                  alt="Mining Operations" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== 4. DEEP DIVE: JEWELRY ==================== */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 md:order-1 relative"
            >
              <div className="relative rounded-sm overflow-hidden border border-white/10">
                <img 
                  src={jewelryImg} 
                  alt="Jewelry Collection" 
                  className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-1 md:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-white/20 flex-grow"></div>
                  <GiDiamondRing className="text-5xl text-[#D4AF37]" />
              </div>
              <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6 text-right">
                Wholesale <span className="text-[#D4AF37]">Jewelry</span>
              </h2>
              <p className="font-['Cormorant_Garamond'] text-xl text-gray-400 leading-relaxed mb-8 text-right">
                Master craftsmen transform our raw materials into stunning heirlooms. 
                Whether you are a retailer needing bulk inventory or an individual looking for a bespoke piece, 
                our wholesale division delivers unmatched value.
              </p>
              
              <ul className="space-y-4 text-right">
                {['Master Artisan Craftsmanship', 'Bespoke Design Services', 'Premium Metal Settings', 'Quality Certification'].map((item, i) => (
                    <li key={i} className="flex items-center justify-end gap-3 text-gray-300">
                         <span className="text-sm font-bold uppercase tracking-wider">{item}</span>
                         <FaCheck className="text-[#D4AF37]" />
                    </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== 5. CTA SECTION ==================== */}
      <section className="py-24 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
            Ready to Place an Order?
          </h2>
          <p className="font-['Cormorant_Garamond'] text-2xl mb-10 font-medium">
            Contact us today to receive our full wholesale catalog or discuss custom requirements.
          </p>
          <Link to="/contact">
            <button className="px-12 py-5 bg-black text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Products;