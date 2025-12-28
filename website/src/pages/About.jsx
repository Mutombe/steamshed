import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaShieldAlt, FaHeart, FaStar, FaAward } from 'react-icons/fa';
import { IoDiamondSharp } from "react-icons/io5";

// Placeholder Images from Unsplash representing Mining/Raw Gems
// NOTE: Replace these with your actual high-quality brand images later.
const heroBgImage = "/about.jpg"; // Moody mine entrance
const storyImage = "/j6.jpg"; // Raw diamond crystal

// Shared Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const About = () => {
  const values = [
    {
      icon: FaHandshake,
      title: 'Integrity',
      description: 'We build lasting relationships through honesty, transparency, and ethical business practices.',
    },
    {
      icon: FaStar,
      title: 'Excellence',
      description: 'We pursue perfection in every facet of our work, from raw mining to the final polished product.',
    },
    {
      icon: FaShieldAlt,
      title: 'Quality',
      description: 'Every gemstone and mineral meets our rigorous standards for authenticity and brilliance.',
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Our deep love for Zimbabwe\'s precious stones drives us to deliver the very best to the world.',
    },
  ];

  const milestones = [
    { year: 'Inception', title: 'Stream Shed Established', description: 'Beginning our journey in Masvingo, tapping into Zimbabwe\'s rich mineral veins.' },
    { year: 'Expansion', title: 'Wholesale Operations', description: 'Broadened our reach to supply retailers across Southern Africa.' },
    { year: 'Recognition', title: 'Certified Excellence', description: 'Achieved industry recognition for ethical sourcing and quality control.' },
    { year: 'Today', title: 'Global Reach', description: 'Trusted partner for premium gems and minerals worldwide.' },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      
      {/* ==================== 1. HERO SECTION WITH IMAGE ==================== */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image with Heavy Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src={heroBgImage} 
                alt="Inside a mine" 
                className="w-full h-full object-cover grayscale scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#050505]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="inline-block mb-4 border-b border-[#D4AF37] pb-1">
                <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold">Our Identity</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white">
              Crafting <span className="text-[#D4AF37] italic">Legacy</span> <br/>
              from the Earth.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Where integrity meets excellence. We are the bridge between Zimbabwe's mineral wealth and the world's most exquisite jewelry.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ==================== 2. OUR STORY (Redesigned with Image Split) ==================== */}
      <section className="py-24 bg-white text-black relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT COLUMN: Text Content & Stats */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={stagger}
              className="space-y-12"
            >
              <div className="space-y-8">
                <motion.h2 variants={fadeInUp} className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold">
                    The <span className="text-[#D4AF37]">Stream Shed</span> Story
                </motion.h2>
                
                <motion.div variants={fadeInUp} className="font-['Cormorant_Garamond'] text-xl text-gray-600 leading-relaxed space-y-6">
                    <p>
                    Stream Shed was born from a passion for Zimbabwe's rich mineral heritage. We recognized the untapped potential in our nation's earth and set out to create a bridge between raw natural beauty and refined elegance.
                    </p>
                    <p>
                    What sets us apart is not just our access to some of the world's finest gemstones, but our unwavering commitment to <strong>integrity</strong>. We believe that true value comes from transparency, quality, and the trust we build with every client.
                    </p>
                    <div className="border-l-4 border-[#D4AF37] pl-6 py-2 my-8">
                        <p className="text-2xl italic text-black font-semibold">
                            "We don't just sell stones; we curate earth's masterpieces."
                        </p>
                    </div>
                </motion.div>
              </div>

               {/* Stats Grid (Moved here) */}
               <motion.div 
                  variants={fadeInUp}
                  className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100"
                >
                  {[
                    { number: '50+', label: 'Mineral Types' },
                    { number: '100%', label: 'Certified' },
                  ].map((stat, index) => (
                    <div key={index} className="text-left">
                      <div className="font-['Playfair_Display'] text-4xl font-bold text-[#D4AF37] mb-1">
                        {stat.number}
                      </div>
                      <div className="font-['Cormorant_Garamond'] text-gray-500 uppercase tracking-widest text-xs font-bold">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: Tall Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] lg:h-[700px] w-full"
            >
               <div className="absolute inset-0 border-2 border-[#D4AF37]/20 translate-x-4 translate-y-4 z-0"></div>
               <div className="absolute inset-0 z-10 overflow-hidden shadow-2xl">
                  <img 
                      src={storyImage} 
                      alt="Raw Diamond" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                  />
                   {/* Subtle gradient to make it look premium */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== 3. CORE VALUES ==================== */}
      <section className="py-24 bg-[#0a0a0a] relative">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4 text-white">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-[#111] p-8 border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 rounded-sm"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <value.icon className="text-6xl text-[#D4AF37]" />
                </div>
                
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  <value.icon className="text-2xl" />
                </div>
                
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-4 text-white group-hover:text-[#D4AF37] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 font-['Cormorant_Garamond'] text-lg leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. TIMELINE (Dark Mode) ==================== */}
      <section className="py-24 bg-zinc-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20"
          >
            <h2 className="font-['Playfair_Display'] text-4xl text-[#D4AF37]">The Journey</h2>
          </motion.div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent opacity-30" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Box */}
                  <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-black border border-white/10 p-6 rounded-sm hover:border-[#D4AF37] transition-colors duration-300">
                      <span className="block text-[#D4AF37] font-bold tracking-widest text-xs uppercase mb-2">{milestone.year}</span>
                      <h3 className="font-['Playfair_Display'] text-xl font-semibold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="font-['Cormorant_Garamond'] text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-[11px] md:left-1/2 md:relative md:w-2/12 flex justify-center transform md:-translate-x-0">
                    <div className="w-5 h-5 rounded-full bg-[#050505] border-2 border-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. COMMITMENT CTA ==================== */}
      <section className="py-24 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <IoDiamondSharp className="text-6xl mx-auto mb-6 opacity-80" />
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
            Our Commitment to You
          </h2>
          <p className="font-['Cormorant_Garamond'] text-2xl font-medium mb-10 max-w-2xl mx-auto">
            At Stream Shed, we promise an experience built on trust, quality, and unwavering dedication to your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             {['Authentic Products', 'Ethical Sourcing', 'Expert Guidance', 'Fair Pricing'].map((tag, i) => (
                 <span key={i} className="bg-black/10 border border-black/20 px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest backdrop-blur-sm">
                    {tag}
                 </span>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;