import React from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaRing, FaStar, FaCrown, FaHeart, FaArrowRight } from 'react-icons/fa';
import { IoDiamondSharp } from "react-icons/io5";

// Import your local image
import garnetRing from '../assets/images/garnet-ring.jpg';

// Unsplash placeholder for Hero (Replace if you have a specific banner)
const heroImage = "/j4.jpg";

const Jewelry = () => {
  const collections = [
    {
      icon: FaRing,
      title: 'Bridal & Engagement',
      description: 'Timeless symbols of eternal love.',
      features: ['Custom Designs', 'GIA Certified', 'Lifetime Warranty'],
    },
    {
      icon: FaCrown,
      title: 'Royal Collection',
      description: 'Statement pieces for the extraordinary.',
      features: ['Rare Gemstones', 'Heirloom Quality', 'Exclusive Designs'],
    },
    {
      icon: IoDiamondSharp,
      title: 'Loose Diamonds',
      description: 'Investment grade stones of exceptional clarity.',
      features: ['Certified Cuts', 'Wholesale Rates', 'Ethical Sourcing'],
    },
    {
      icon: FaHeart,
      title: 'Fine Fashion',
      description: 'Contemporary elegance for every occasion.',
      features: ['Modern Styling', 'Versatile Sets', 'Gold & Silver'],
    },
  ];

  // Refined gradients to look like polished stones
  const gemstones = [
    { name: 'Garnet', gradient: 'bg-gradient-to-br from-red-700 via-red-600 to-black', shadow: 'shadow-red-900/50' },
    { name: 'Emerald', gradient: 'bg-gradient-to-br from-green-600 via-green-500 to-black', shadow: 'shadow-green-900/50' },
    { name: 'Sapphire', gradient: 'bg-gradient-to-br from-blue-700 via-blue-600 to-black', shadow: 'shadow-blue-900/50' },
    { name: 'Amethyst', gradient: 'bg-gradient-to-br from-purple-600 via-purple-500 to-black', shadow: 'shadow-purple-900/50' },
    { name: 'Diamond', gradient: 'bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500', shadow: 'shadow-white/30' },
    { name: 'Gold', gradient: 'bg-gradient-to-br from-[#FFD954] via-[#D4AF37] to-[#8B7016]', shadow: 'shadow-[#D4AF37]/40' },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
             <img 
                src={heroImage} 
                alt="Luxury Jewelry" 
                className="w-full h-full object-cover opacity-60 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border-b border-[#D4AF37] pb-2 mb-6">
                 <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs md:text-sm font-bold">
                    Wholesale & Custom Designs
                 </span>
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              Adorn Yourself in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD954] to-[#B8941F]">Excellence</span>
            </h1>
            <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              From the mines of Zimbabwe to the finest settings. Experience jewelry designed for a unique lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== 2. FEATURED PRODUCT (Glassmorphism) ==================== */}
      <section className="py-24 bg-[#0a0a0a] relative">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group order-2 lg:order-1"
            >
              {/* Glow Effect behind image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37] to-[#8B7016] rounded-lg opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-700" />
              
              <div className="relative overflow-hidden rounded-sm">
                <img
                    src={garnetRing}
                    alt="Red Garnets Ring"
                    className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating Tag */}
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 text-sm font-bold uppercase tracking-widest">
                    Signature Series
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white">
                Red Garnet <span className="text-[#D4AF37] italic">Collection</span>
              </h2>
              <p className="font-['Cormorant_Garamond'] text-xl text-gray-400 leading-relaxed">
                Experience the deep, captivating beauty of our premium red garnet rings. 
                Sourced directly from our mines in Zimbabwe, these stones are cut to maximize brilliance and set in high-grade silver or gold.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  'Premium AAA Grade Zimbabwean Garnets',
                  'Hand-finished Sterling Silver & Gold Settings',
                  'Certificate of Authenticity Included',
                  'Available for Wholesale Bulk Orders',
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] group-hover:scale-150 transition-transform" />
                    <span className="text-gray-300 font-['Cormorant_Garamond'] text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8">
                <a href="tel:+263777684929">
                    <button className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center gap-3">
                        Inquire Price <FaArrowRight />
                    </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== 3. COLLECTIONS GRID (Dark Mode) ==================== */}
      <section className="py-24 bg-zinc-900 relative">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4 text-white">Our Collections</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-black border border-white/10 p-10 hover:border-[#D4AF37] transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Hover Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-0 group-hover:opacity-5 blur-[100px] transition-opacity duration-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>

                <div className="flex items-start gap-6 relative z-10">
                  <div className="p-4 bg-white/5 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                    <collection.icon className="text-3xl" />
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-2 text-white group-hover:text-[#D4AF37] transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-gray-400 font-['Cormorant_Garamond'] text-lg mb-4">
                      {collection.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {collection.features.map((f, i) => (
                            <span key={i} className="text-xs uppercase tracking-wider text-gray-500 border border-gray-800 px-2 py-1">
                                {f}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. GEMSTONE PALETTE (Polished Look) ==================== */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">Gemstone Palette</h2>
            <p className="text-gray-400 font-['Cormorant_Garamond'] text-xl">Nature's finest colors, sourced responsibly.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {gemstones.map((gem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                {/* The Gem Circle - CSS polished effect */}
                <div className={`w-24 h-24 rounded-full ${gem.gradient} shadow-2xl ${gem.shadow} relative overflow-hidden ring-2 ring-white/5 group-hover:ring-[#D4AF37]/50 transition-all duration-300`}>
                    {/* Light reflection gloss */}
                    <div className="absolute top-2 left-4 w-8 h-4 bg-white opacity-20 blur-sm rounded-full transform -rotate-45"></div>
                    <div className="absolute bottom-2 right-4 w-6 h-6 bg-black opacity-30 blur-md rounded-full"></div>
                </div>
                
                <h4 className="font-['Playfair_Display'] text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                  {gem.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. WHOLESALE CTA ==================== */}
      <section className="py-24 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <FaStar className="text-5xl mx-auto mb-6 opacity-75" />
            <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold mb-6">
              Partner With Us
            </h2>
            <p className="font-['Cormorant_Garamond'] text-2xl font-medium mb-10 max-w-2xl mx-auto">
              We offer competitive wholesale pricing for retailers and bulk orders. Get our full catalog today.
            </p>
            <div className="flex justify-center">
                <a href="mailto:munasheharrison@gmail.com">
                    <button className="px-12 py-5 bg-black text-[#FFD954] font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:scale-105 transition-all shadow-2xl rounded-sm">
                        Request Catalog
                    </button>
                </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Jewelry;