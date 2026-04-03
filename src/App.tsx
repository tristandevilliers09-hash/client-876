/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Waves, 
  Menu, 
  Phone, 
  Droplets, 
  Car, 
  Wind, 
  Sparkles, 
  Zap, 
  Star, 
  MapPin, 
  Home, 
  MessageSquare,
  Users,
  BadgeDollarSign,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Exterior Car Wash",
      icon: <Car className="w-8 h-8 text-[#0050cb]" />,
      className: "bg-white p-6 rounded-3xl flex flex-col justify-between aspect-square shadow-sm"
    },
    {
      title: "Interior Cleaning",
      icon: <Wind className="w-8 h-8 text-[#0050cb]" />,
      className: "bg-[#d8e3fb] p-6 rounded-3xl flex flex-col justify-between aspect-square shadow-sm"
    },
    {
      title: "Full Car Detailing",
      subtitle: "Our premium signature service",
      icon: <Sparkles className="w-8 h-8 text-[#b3c5ff]" />,
      className: "bg-[#263143] p-6 rounded-3xl flex flex-col justify-between col-span-2 min-h-[160px] shadow-lg",
      dark: true
    },
    {
      title: "Quick Wash",
      time: "15 MIN",
      icon: <Zap className="w-8 h-8 text-[#0050cb]" />,
      className: "bg-white p-6 rounded-3xl flex items-center gap-4 col-span-2 shadow-sm"
    }
  ];

  const features = [
    { title: "Experienced team", icon: <Users className="w-6 h-6 text-[#0050cb]" /> },
    { title: "Affordable pricing", icon: <BadgeDollarSign className="w-6 h-6 text-[#0050cb]" /> },
    { title: "Quality products", icon: <CheckCircle2 className="w-6 h-6 text-[#0050cb]" /> },
    { title: "Fast service", icon: <Clock className="w-6 h-6 text-[#0050cb]" /> }
  ];

  const reviews = [
    {
      name: "John Smith",
      initials: "JS",
      text: "Absolutely the best car wash in Port Alfred. My SUV looks brand new every time!",
      rating: 5
    },
    {
      name: "Alice Meyer",
      initials: "AM",
      text: "Professional detailing at its finest. They noticed spots I didn't even see.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav h-16' : 'h-20 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Waves className={`w-8 h-8 ${scrolled ? 'text-[#0050cb]' : 'text-white'}`} />
            <span className={`font-headline font-bold text-lg ${scrolled ? 'text-[#111c2d]' : 'text-white'}`}>Coastal Car Care</span>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white md:hidden"
          >
            <Menu className={scrolled ? 'text-[#111c2d]' : 'text-white'} />
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#Hero" className={scrolled ? 'text-[#111c2d]' : 'text-white'}>Home</a>
            <a href="#About" className={scrolled ? 'text-[#111c2d]' : 'text-white'}>About</a>
            <a href="#Services" className={scrolled ? 'text-[#111c2d]' : 'text-white'}>Services</a>
            <a href="#Location" className={scrolled ? 'text-[#111c2d]' : 'text-white'}>Location</a>
            <a href="tel:0823152888" className="bg-[#0050cb] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#003fa4] transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="Hero" className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover brightness-50" 
            src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1920&auto=format&fit=crop" 
            alt="Luxury car detailing"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#f9f9ff]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#b3c5ff] mb-4 block uppercase">PORT ALFRED DETAILING</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Professional <br />Car Wash <br /><span className="text-[#b3c5ff]">Services</span>
            </h1>
            <p className="text-white/80 font-medium text-lg mb-8 max-w-md">
              The most trusted car care specialists in the Port Alfred community. Quality you can see, service you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:0823152888" 
                className="bg-[#0050cb] text-white rounded-full px-8 py-4 font-semibold flex items-center justify-center gap-2 text-lg shadow-xl shadow-blue-900/40 hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5 fill-current" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="About" className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#0050cb] font-bold uppercase tracking-widest text-xs mb-4 block">Our Legacy</span>
            <h2 className="font-headline text-4xl font-bold text-[#111c2d] leading-tight max-w-2xl">Reliable and high-quality services.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#f0f3ff] p-8 md:p-12 rounded-[2.5rem]">
              <p className="text-[#424656] text-lg leading-relaxed mb-8">
                Coastal Car Care is dedicated to providing high-quality services for the Port Alfred community. We combine precision engineering with premium products to ensure your vehicle looks as good as the day it left the showroom.
              </p>
              <div className="flex items-center gap-4 text-[#0050cb]">
                <div className="h-1 w-12 bg-[#0050cb] rounded-full"></div>
                <span className="font-headline font-semibold">Community Focused</span>
              </div>
            </div>
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop" 
                alt="Car wash process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="Services" className="px-6 py-24 bg-[#f0f3ff]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-xs">
              <span className="text-[#0050cb] font-bold uppercase tracking-widest text-xs mb-4 block">Services</span>
              <h2 className="font-headline text-3xl font-bold text-[#111c2d]">Our Precision Care</h2>
            </div>
            <Droplets className="text-[#0050cb] w-10 h-10" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className={`${service.className} transition-all duration-300`}
              >
                {service.icon}
                <div className={service.time ? 'flex-grow flex items-center' : ''}>
                  <h3 className={`font-headline font-bold ${service.dark ? 'text-white text-xl' : 'text-[#111c2d] text-base'}`}>
                    {service.title}
                  </h3>
                  {service.subtitle && <p className="text-[#d8e3fb] text-sm mt-1">{service.subtitle}</p>}
                </div>
                {service.time && <span className="ml-auto text-[#0050cb] text-xs font-bold">{service.time}</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold text-[#111c2d]">Why Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-6 p-6 bg-[#f0f3ff] rounded-2xl hover:bg-[#e7eeff] transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  {feature.icon}
                </div>
                <h4 className="font-headline font-bold text-[#111c2d]">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="Reviews" className="px-6 py-24 bg-[#f9f9ff]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#0050cb] font-bold uppercase tracking-widest text-xs mb-4 block">Testimonials</span>
            <h2 className="font-headline text-3xl font-bold text-[#111c2d]">What our clients say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#c2c6d8]/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#0050cb] fill-current" />
                  ))}
                </div>
                <p className="text-[#424656] italic mb-6 text-lg leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#d8e3fb] flex items-center justify-center font-bold text-[#0050cb]">
                    {review.initials}
                  </div>
                  <span className="font-bold text-[#111c2d]">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="Location" className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#263143] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="h-80 lg:h-auto lg:w-1/2 relative bg-[#dee8ff]">
              <img 
                className="w-full h-full object-cover opacity-60 grayscale" 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop" 
                alt="Map of Port Alfred"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#0050cb] p-4 rounded-full shadow-2xl animate-bounce">
                  <MapPin className="text-white w-8 h-8" />
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12 lg:w-1/2">
              <h2 className="font-headline text-3xl font-bold text-white mb-8">Visit Us Today</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#b3c5ff] w-6 h-6 shrink-0" />
                  <p className="text-[#d8e3fb] text-lg">2 Port Alfred St, Port Alfred, 6170</p>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-[#b3c5ff] w-6 h-6 shrink-0" />
                  <p className="text-[#d8e3fb] text-lg">082 315 2888</p>
                </div>
              </div>
              <div className="mt-12">
                <a 
                  href="tel:0823152888" 
                  className="w-full bg-[#0050cb] text-white py-5 rounded-full font-bold flex items-center justify-center gap-3 text-xl hover:bg-[#003fa4] transition-colors shadow-xl shadow-blue-900/40"
                >
                  <Phone className="w-6 h-6 fill-current" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#d8e3fb] px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 mb-8">
            <Waves className="text-[#0050cb] w-6 h-6" />
            <span className="font-headline font-bold text-[#111c2d] text-xl">Coastal Car Care</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-semibold text-[#515f74]">
            <a href="#" className="hover:text-[#0050cb]">Contact</a>
            <a href="#" className="hover:text-[#0050cb]">Privacy Policy</a>
            <a href="#" className="hover:text-[#0050cb]">Terms of Service</a>
          </nav>
          <p className="text-sm text-[#424656]/60 font-medium">© 2024 Coastal Car Care. All rights reserved.</p>
        </div>
      </footer>

      {/* Bottom Navigation (Mobile Only) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md glass-nav h-16 rounded-full flex items-center justify-around px-4 shadow-2xl z-50 border border-white/20 md:hidden">
        <a href="#Hero" className="text-[#0050cb] flex flex-col items-center">
          <Home className="w-6 h-6" />
        </a>
        <a href="#Services" className="text-[#515f74] hover:text-[#0050cb] flex flex-col items-center">
          <Car className="w-6 h-6" />
        </a>
        <a href="#Location" className="text-[#515f74] hover:text-[#0050cb] flex flex-col items-center">
          <MapPin className="w-6 h-6" />
        </a>
        <a href="#Reviews" className="text-[#515f74] hover:text-[#0050cb] flex flex-col items-center">
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
