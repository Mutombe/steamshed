import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGem, FaMountain, FaAward, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import { IoDiamondSharp } from "react-icons/io5";

// Import your images
import mineralOre from '../assets/images/mineral-ore.jpg';
import garnetRing from '/red-garnet.jpg';

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Home = () => {
  const services = [
    {
        title: 'Mining Operations',
        desc: 'Sustainable extraction of Zimbabwe\'s finest minerals.',
        icon: FaMountain,
        link: '/mining',
        theme: 'dark' // Dark card
    },
    {
        title: 'Wholesale Jewelry',
        desc: 'Handcrafted masterpieces for discerning retailers.',
        icon: FaGem,
        link: '/jewelry',
        theme: 'gold' // Gold card
    },
    {
        title: 'Quality Assurance',
        desc: 'Certified grading and authenticity verification.',
        icon: FaShieldAlt,
        link: '/about',
        theme: 'light' // White card
    },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      
{/* --- HERO SECTION --- */}
      <section className="relative min-h-[110vh] flex items-center pt-20">
        
        {/* Dark Background with Ore Texture */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40 z-10" />
            <img 
                src={mineralOre} 
                alt="Texture" 
                className="w-full h-full object-cover opacity-30 grayscale scale-110"
            />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-20 w-full">
            
            {/* Left: Typography */}
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-2xl"
            >
                <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                    <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
                    <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold">Est. Masvingo, Zimbabwe</span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-white">
                    From Earth <br/>
                    <span className="italic text-[#D4AF37]">To Elegance.</span>
                </motion.h1>

                <motion.p variants={fadeInUp} className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-lg">
                    Stream Shed bridges the gap between raw Zimbabwean minerals and exquisite artisanal jewelry. 
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
                    <Link to="/jewelry">
                        <button className="group relative px-8 py-4 bg-[#D4AF37] text-black font-semibold text-sm tracking-widest uppercase overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Shop Collection <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
                            </span>
                            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                        </button>
                    </Link>
                    <Link to="/mining">
                        <button className="px-8 py-4 border border-white/30 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-semibold text-sm tracking-widest uppercase transition-colors duration-300">
                            Mining Operations
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Right: The "Killer" Visual */}
            <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="relative hidden lg:block h-[600px] w-full"
            >
                {/* Decorative Gold Frame */}
                <div className="absolute top-10 right-10 w-full h-full border border-[#D4AF37]/30 rounded-t-[100px] z-0" />
                
                {/* Main Image Mask */}
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-t-[100px] z-10">
                    <img 
                        src={garnetRing} 
                        alt="Red Garnet Ring" 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
                    />
                    {/* Gradient Overlay at bottom for text readability */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Floating Card - Glassmorphism */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-lg max-w-xs z-20 shadow-2xl"
                >
                    <h3 className="text-[#D4AF37] font-['Playfair_Display'] text-2xl mb-2">Red Garnet</h3>
                    <p className="text-gray-300 text-sm font-['Cormorant_Garamond'] mb-4">
                        Sourced directly from our private mines. Cut to perfection.
                    </p>
                    <div className="text-white text-lg font-bold">$199.00 USD</div>
                </motion.div>
            </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
        </motion.div>
      </section>

      {/* ==================== 2. SERVICES SECTION (Redesigned) ==================== */}
      <section className="py-24 bg-white text-black relative">
        <div className="max-w-[1440px] mx-auto px-6">
            <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={stagger}
                className="text-center mb-16"
            >
                <motion.h2 variants={fadeInUp} className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">Our Expertise</motion.h2>
                <motion.div variants={fadeInUp} className="w-20 h-1 bg-[#D4AF37] mx-auto"></motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {services.map((service, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`group p-12 min-h-[400px] flex flex-col justify-center relative overflow-hidden transition-all duration-500
                            ${service.theme === 'dark' ? 'bg-[#0f0f0f] text-white' : ''}
                            ${service.theme === 'gold' ? 'bg-[#D4AF37] text-black' : ''}
                            ${service.theme === 'light' ? 'bg-gray-50 text-black border border-gray-200' : ''}
                        `}
                    >
                        {/* Hover Effect Background */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <service.icon className={`text-5xl mb-8 ${service.theme === 'dark' ? 'text-[#D4AF37]' : 'text-current'}`} />
                        
                        <h3 className="font-['Playfair_Display'] text-3xl font-bold mb-4">{service.title}</h3>
                        <p className="font-['Cormorant_Garamond'] text-xl mb-8 opacity-80 leading-relaxed">
                            {service.desc}
                        </p>
                        
                        <Link to={service.link} className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold group-hover:gap-4 transition-all">
                            Learn More <FaArrowRight />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* ==================== 3. FEATURED PRODUCT (The Garnet Ring) ==================== */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Decorative huge text in background */}
        <div className="absolute top-0 left-0 text-[20vw] font-['Playfair_Display'] text-white/[0.02] leading-none select-none pointer-events-none">
            GARNET
        </div>

        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
             <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7016] rounded-lg opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-700"></div>
                    <img src={garnetRing} alt="Garnet Ring" className="relative w-full rounded-sm shadow-2xl z-10" />
                    
                    {/* Badge */}
                    <div className="absolute top-6 left-6 z-20 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-widest">
                        Best Seller
                    </div>
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
             >
                <h3 className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold">Featured Collection</h3>
                <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl text-white">Red Garnet Ring</h2>
                <p className="font-['Cormorant_Garamond'] text-xl text-gray-400 leading-relaxed">
                    Exquisite jewels for a unique lifestyle. This ring features premium Zimbabwean garnets, cut to maximize brilliance and set in high-grade silver. A testament to our "Mine to Market" philosophy.
                </p>
                
                <ul className="space-y-4 font-['Cormorant_Garamond'] text-lg text-gray-300">
                    {['Authentic Zimbabwean Gemstones', 'Hand-finished Setting', 'Available in Wholesale Quantities'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <IoDiamondSharp className="text-[#D4AF37]" /> {item}
                        </li>
                    ))}
                </ul>

                <div className="pt-6">
                    <Link to="/jewelry">
                        <button className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-bold uppercase tracking-widest">
                            Inquire Now
                        </button>
                    </Link>
                </div>
             </motion.div>
        </div>
      </section>

      {/* ==================== 4. WHY CHOOSE US (Features) ==================== */}
      <section className="py-24 bg-zinc-900 text-white border-t border-white/5">
         <div className="max-w-[1440px] mx-auto px-6 text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl text-[#D4AF37] mb-4">The Stream Shed Standard</h2>
            <p className="text-gray-400">Integrity, Quality, and Sustainability in every interaction.</p>
         </div>

         <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { icon: FaHandshake, title: "Integrity", text: "Built on trust and transparency." },
                { icon: FaGem, title: "Quality", text: "Only the finest minerals selected." },
                { icon: FaMountain, title: "Sourcing", text: "Direct from our mines." },
                { icon: FaAward, title: "Excellence", text: "Craftsmanship you can rely on." }
            ].map((feat, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-6 border border-white/5 hover:border-[#D4AF37]/50 bg-white/[0.02] text-center transition-all duration-300"
                >
                    <feat.icon className="text-4xl text-[#D4AF37] mx-auto mb-6" />
                    <h3 className="font-['Playfair_Display'] text-xl mb-3">{feat.title}</h3>
                    <p className="font-['Cormorant_Garamond'] text-gray-400">{feat.text}</p>
                </motion.div>
            ))}
         </div>
      </section>

      {/* ==================== 5. CALL TO ACTION ==================== */}
      <section className="py-24 bg-gradient-to-r from-[#D4AF37] via-[#e5c55b] to-[#B8941F] text-black">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold mb-8"
            >
                Start Your Journey
            </motion.h2>
            <p className="font-['Cormorant_Garamond'] text-2xl mb-10 font-medium">
                Whether you need bulk minerals or bespoke jewelry, Stream Shed is your trusted partner.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact">
                    <button className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                        Contact Us
                    </button>
                </Link>
                <a href="tel:+263777684929">
                    <button className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-xl">
                        Call: 077 768 4929
                    </button>
                </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;