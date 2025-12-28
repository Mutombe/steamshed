import React from 'react';
import { motion } from 'framer-motion';
import { FaMountain, FaGem, FaCog, FaCheckCircle, FaLeaf, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { GiMining, GiGoldBar, GiStoneBlock, GiPickOfDestiny } from 'react-icons/gi';

// Unsplash Placeholders
const heroBg = "/mine.jpg"; // Dark texture/Mine
const featureImg = "/minerals.jpg"; // Gold/Ore

const Mining = () => {
  const minerals = [
    {
      name: 'Gold',
      description: 'Alluvial and reef gold sourced from Zimbabwe\'s rich greenstone belts.',
      purity: '22-24 Karat',
      icon: GiGoldBar
    },
    {
      name: 'Diamonds',
      description: 'Ethically sourced Kimberlite stones of exceptional clarity and brilliance.',
      purity: 'VVS - SI Grades',
      icon: FaGem
    },
    {
      name: 'Emeralds',
      description: 'Vibrant green Sandawana emeralds known for their rich color.',
      purity: 'Premium Grade',
      icon: FaGem
    },
    {
      name: 'Lithium',
      description: 'High-grade lithium ore for the modern energy sector.',
      purity: 'Industrial Grade',
      icon: GiStoneBlock
    },
    {
      name: 'Platinum',
      description: 'Rare precious metal from the Great Dyke complex.',
      purity: 'High Grade',
      icon: GiMining
    },
    {
      name: 'Chrome',
      description: 'Essential industrial mineral with high durability applications.',
      purity: 'Metallurgical',
      icon: FaMountain
    },
  ];

  const processes = [
    {
      icon: GiPickOfDestiny,
      title: 'Exploration',
      description: 'Advanced geological surveys and mapping to identify high-yield mineral deposits.',
    },
    {
      icon: GiMining,
      title: 'Extraction',
      description: 'Sustainable heavy-machinery extraction ensuring maximum safety and yield.',
    },
    {
      icon: FaCog,
      title: 'Processing',
      description: 'Crushing, milling, and chemical separation to isolate the pure elements.',
    },
    {
      icon: FaCheckCircle,
      title: 'Certification',
      description: 'Rigorous assay testing and government certification for export.',
    },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Mining Operations"
            className="w-full h-full object-cover opacity-40 grayscale scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#050505]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border-b border-[#D4AF37] pb-2 mb-6">
                 <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold">
                    Industrial Operations
                 </span>
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              Mining <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD954] to-[#B8941F] bg-clip-text text-transparent">Excellence</span>
            </h1>
            <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Extracting Zimbabwe's finest minerals with precision, sustainability, and absolute integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== 2. INTRO / FEATURE SECTION ==================== */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white">
                Unearthing <span className="text-[#D4AF37]">Wealth</span>
              </h2>
              <div className="w-20 h-1 bg-[#D4AF37]"></div>
              
              <div className="font-['Cormorant_Garamond'] text-xl text-gray-400 leading-relaxed space-y-6">
                <p>
                  Zimbabwe is blessed with some of the world's most valuable mineral deposits. 
                  At Stream Shed, we leverage local expertise and modern technology to extract 
                  these resources efficiently.
                </p>
                <p>
                  Our operations are vertically integrated. From the initial survey to the final export, 
                  we control the chain of custody, ensuring that every ounce of gold and every carat 
                  of gemstone is traceable and ethically sourced.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  'Govt. Certified',
                  'Conflict-Free',
                  'Export Ready',
                  'Eco-Conscious',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-white font-bold text-sm uppercase tracking-wider"
                  >
                    <FaCheckCircle className="text-[#D4AF37]" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-[#D4AF37] opacity-20 blur-lg rounded-sm group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative rounded-sm overflow-hidden border border-white/10">
                <img
                  src={featureImg}
                  alt="Gold Ore"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                    <p className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold">Raw Material</p>
                    <p className="text-white font-['Playfair_Display'] text-xl">High-Grade Ore</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== 3. MINERALS GRID (Dark Mode) ==================== */}
      <section className="py-24 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4 text-white">Our Resources</h2>
            <p className="font-['Cormorant_Garamond'] text-xl text-gray-400 max-w-2xl mx-auto">
              A diverse portfolio of premium minerals extracted from our claims.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {minerals.map((mineral, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#050505] border border-white/5 p-8 rounded-sm hover:border-[#D4AF37] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gold Glow on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-500"></div>

                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1a1a1a] text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  <mineral.icon className="text-2xl" />
                </div>
                
                <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-3 text-white group-hover:text-[#D4AF37] transition-colors">
                  {mineral.name}
                </h3>
                
                <p className="text-gray-400 font-['Cormorant_Garamond'] text-lg mb-6 leading-relaxed">
                  {mineral.description}
                </p>
                
                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Purity</span>
                  <span className="text-sm font-bold text-[#D4AF37]">
                    {mineral.purity}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. PROCESS FLOW ==================== */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
              The Extraction Cycle
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37] to-[#D4AF37]/10 z-0"></div>

            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 group"
              >
                <div className="bg-[#111] border border-white/10 p-8 text-center h-full hover:border-[#D4AF37] transition-all duration-300 rounded-sm">
                  
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#050505] border-2 border-[#D4AF37] mb-6 z-10 group-hover:scale-110 transition-transform">
                    <process.icon className="text-3xl text-[#D4AF37]" />
                  </div>

                  <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4 text-white">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 font-['Cormorant_Garamond'] text-lg leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. SUSTAINABILITY CTA ==================== */}
      <section className="py-24 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                 <div className="flex items-center gap-3 mb-4">
                     <FaLeaf className="text-2xl" />
                     <span className="font-bold uppercase tracking-widest text-sm">Responsible Mining</span>
                 </div>
                 <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
                    Sustainability at Core
                 </h2>
                 <p className="font-['Cormorant_Garamond'] text-xl font-medium mb-8 max-w-md">
                    We are committed to minimizing ecological impact and empowering the communities we operate in.
                 </p>
                 <div className="space-y-4">
                     <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                             <FaShieldAlt className="text-xl" />
                         </div>
                         <div>
                             <h4 className="font-bold">Ethical Labor</h4>
                             <p className="text-sm opacity-80">Fair wages and safe conditions.</p>
                         </div>
                     </div>
                     <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                             <FaLeaf className="text-xl" />
                         </div>
                         <div>
                             <h4 className="font-bold">Land Rehabilitation</h4>
                             <p className="text-sm opacity-80">Restoring nature after extraction.</p>
                         </div>
                     </div>
                 </div>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-black/90 p-10 rounded-sm text-white text-center border border-black/50 shadow-2xl"
             >
                 <h3 className="font-['Playfair_Display'] text-3xl font-bold mb-4 text-[#D4AF37]">Invest in Mining</h3>
                 <p className="font-['Cormorant_Garamond'] text-gray-300 mb-8">
                     Interested in bulk ore purchase or investment opportunities in our claims?
                 </p>
                 <a href="mailto:munasheharrison@gmail.com">
                    <button className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors">
                        Contact Mining Division
                    </button>
                 </a>
             </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Mining;