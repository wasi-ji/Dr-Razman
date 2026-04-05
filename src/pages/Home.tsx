import React from 'react';
import { motion } from 'motion/react';
import { Eye, Stethoscope, ArrowRight, ShieldCheck, Users, Award, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase">
                <ShieldCheck size={16} />
                Trusted Eye & General Care
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1]">
                Your Vision, <br />
                <span className="text-blue-600">Our Mission.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Expert eye specialist and general medicine services led by Dr. Ramzan. 
                Advanced diagnostics and compassionate care for your entire family.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/appointment"
                  className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:shadow-blue-300 active:scale-95 flex items-center gap-2"
                >
                  Book Appointment <ArrowRight size={20} />
                </Link>
                <Link
                  to="/services"
                  className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all active:scale-95"
                >
                  Our Services
                </Link>
              </div>
              
              <div className="flex items-center gap-6 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">10,000+ Happy Patients</p>
                  <p className="text-xs text-gray-500">Trusted by families across Karachi</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://picsum.photos/seed/clinic/800/1000" 
                  alt="Modern Clinic" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-gray-50"
              >
                <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold">Experience</p>
                  <p className="text-lg font-extrabold text-gray-900">20+ Years</p>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-gray-50"
              >
                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold">Available</p>
                  <p className="text-lg font-extrabold text-gray-900">Mon - Sat</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 transform origin-top" />
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <motion.h2 {...fadeInUp} className="text-4xl font-bold text-gray-900">Comprehensive Healthcare</motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-lg text-gray-600">
              We specialize in advanced ophthalmology and comprehensive general medicine to keep you and your family healthy.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Eye Care */}
            <motion.div 
              {...fadeInUp}
              className="group p-8 rounded-[2rem] bg-blue-50 border border-blue-100 hover:bg-blue-600 transition-all duration-500"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Eye className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">Eye Specialist Services</h3>
              <ul className="space-y-3 text-gray-600 group-hover:text-blue-50 transition-colors mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Cataract Surgery & Lens Implants
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Glaucoma Management
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Pediatric Eye Care
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Refractive Error Correction
                </li>
              </ul>
              <Link to="/services" className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:text-white transition-colors">
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* General Medicine */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="group p-8 rounded-[2rem] bg-indigo-50 border border-indigo-100 hover:bg-indigo-600 transition-all duration-500"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Stethoscope className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">General Medicine</h3>
              <ul className="space-y-3 text-gray-600 group-hover:text-indigo-50 transition-colors mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Routine Health Checkups
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Diabetes & Hypertension Care
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Vaccinations & Immunizations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Acute Illness Management
                </li>
              </ul>
              <Link to="/services" className="inline-flex items-center gap-2 font-bold text-indigo-600 group-hover:text-white transition-colors">
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Why Patients Trust Dr. Ramzan's Clinic</h2>
              <div className="space-y-6">
                {[
                  { title: 'Expert Care', desc: 'Over 20 years of clinical excellence in ophthalmology and general medicine.', icon: Award },
                  { title: 'Modern Technology', desc: 'Equipped with the latest diagnostic tools for precise eye examinations.', icon: ShieldCheck },
                  { title: 'Patient Centric', desc: 'We believe in personalized care and taking time to listen to our patients.', icon: Users },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                  >
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shrink-0 h-fit">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/doctor/800/600" 
                alt="Dr. Ramzan" 
                className="rounded-[2rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-[2rem] shadow-xl max-w-xs">
                <p className="text-lg font-medium italic mb-4">"Our goal is to provide the highest quality medical care with a personal touch."</p>
                <p className="font-bold">— Dr. Ramzan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">Ready to prioritize your health?</h2>
              <p className="text-xl text-blue-100">Book your appointment today and experience the difference at Dr. Ramzan's Clinic.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/appointment"
                  className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg active:scale-95"
                >
                  Schedule Now
                </Link>
                <a
                  href="tel:+922134567890"
                  className="bg-blue-700 text-white border border-blue-500 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all active:scale-95 flex items-center gap-2"
                >
                  <Phone size={20} /> Call Us
                </a>
              </div>
            </div>
            
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
