import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaInstagram } from 'react-icons/fa';
import { IoDiamondSharp } from "react-icons/io5";

// Placeholder for a dark office/contact background
const heroBg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:munasheharrison@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Call Us',
      details: '+263 77 768 4929',
      sub: 'Mon-Sun Support',
      link: 'tel:+263777684929',
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: 'munasheharrison@gmail.com',
      sub: 'Wholesale Inquiries',
      link: 'mailto:munasheharrison@gmail.com',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit HQ',
      details: '62 Birmingham Rd, Southerton',
      sub: 'Harare, Zimbabwe',
      link: 'https://goo.gl/maps/PLACEHOLDER', // Replace with real map link
    },
    {
      icon: FaClock,
      title: 'Hours',
      details: 'Open 24/7',
      sub: 'Always Available',
      link: null,
    },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
             <img 
                src={heroBg} 
                alt="Contact Hero" 
                className="w-full h-full object-cover opacity-30 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border-b border-[#D4AF37] pb-2 mb-6">
                 <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold">
                    24/7 Support
                 </span>
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-4 text-white">
              Get in <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD954] to-[#B8941F] bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="font-['Cormorant_Garamond'] text-xl text-gray-300 max-w-2xl mx-auto">
              We are here to assist with your wholesale orders, mining inquiries, and custom jewelry requests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== 2. INFO CARDS ==================== */}
      <section className="py-12 -mt-20 relative z-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#111] border border-white/10 p-8 rounded-sm text-center hover:border-[#D4AF37] transition-all duration-300 group shadow-2xl"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  <info.icon className="text-2xl" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-1 text-white">{info.title}</h3>
                <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">{info.sub}</p>
                
                {info.link ? (
                    <a href={info.link} className="font-['Cormorant_Garamond'] text-lg text-gray-400 hover:text-white transition-colors">
                        {info.details}
                    </a>
                ) : (
                    <p className="font-['Cormorant_Garamond'] text-lg text-gray-400">{info.details}</p>
                )}
              </motion.div>
            ))}
        </div>
      </section>

      {/* ==================== 3. FORM & MAP ==================== */}
      <section className="py-24 bg-white text-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-2">Send a Message</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mb-6"></div>
              <p className="font-['Cormorant_Garamond'] text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                            placeholder="+263..."
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        placeholder="email@example.com"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        placeholder="Wholesale Inquiry"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Message</label>
                    <textarea
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        placeholder="How can we help you?"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white font-bold uppercase tracking-widest py-4 hover:bg-[#D4AF37] hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl"
                >
                    <FaPaperPlane /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
               {/* Map Container */}
               <div className="w-full h-[300px] border border-[#D4AF37]/30 p-2 shadow-2xl">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.771965824987!2d31.0267713!3d-17.8490455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e1d102e3b1%3A0x6a0c5c5c0c0c0c0c!2s62%20Birmingham%20Rd%2C%20Harare!5e0!3m2!1sen!2szw!4v1625680000000!5m2!1sen!2szw" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, filter: 'grayscale(100%)' }} // Grayscale map for luxury feel
                        allowFullScreen="" 
                        loading="lazy"
                        title="Stream Shed HQ"
                    ></iframe>
               </div>

               <div className="bg-[#111] text-white p-8 border-l-4 border-[#D4AF37]">
                    <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4">Visit Our HQ</h3>
                    <p className="font-['Cormorant_Garamond'] text-gray-400 mb-6">
                        We welcome serious buyers and partners to visit our headquarters in Harare. 
                        Please schedule an appointment for the best experience.
                    </p>
                    <div className="flex items-center gap-4 text-[#D4AF37]">
                        <IoDiamondSharp />
                        <span className="uppercase tracking-widest text-xs font-bold">By Appointment Only</span>
                    </div>
               </div>

               {/* Social CTA */}
               <a href="https://instagram.com/stream_shed" target="_blank" rel="noreferrer" className="block group">
                   <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] p-8 text-black flex items-center justify-between">
                        <div>
                            <h3 className="font-bold uppercase tracking-widest text-sm mb-1">Follow Us</h3>
                            <p className="font-['Playfair_Display'] text-2xl font-bold">@stream_shed</p>
                        </div>
                        <div className="w-12 h-12 bg-black text-[#D4AF37] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaInstagram size={24} />
                        </div>
                   </div>
               </a>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;