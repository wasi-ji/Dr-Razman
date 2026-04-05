import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-xl text-gray-600">Have questions? We're here to help. Reach out to us via any of the channels below.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Phone, title: 'Phone', detail: '+92 21 3456 7890', sub: 'Mon - Sat, 10am - 8pm', color: 'blue' },
            { icon: Mail, title: 'Email', detail: 'info@drramzanclinic.com', sub: 'We reply within 24 hours', color: 'indigo' },
            { icon: MessageCircle, title: 'WhatsApp', detail: '+92 300 1234567', sub: 'Instant support', color: 'green' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 text-center space-y-4 hover:shadow-md transition-shadow"
            >
              <div className={`mx-auto w-16 h-16 bg-${item.color}-50 text-${item.color}-600 rounded-2xl flex items-center justify-center`}>
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-lg font-semibold text-blue-600">{item.detail}</p>
              <p className="text-sm text-gray-500">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Name</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email</label>
                  <input type="email" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Subject</label>
                <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea rows={5} className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Your message..."></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Map & Location */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
              <div className="aspect-video bg-gray-200 rounded-2xl mb-6 flex items-center justify-center text-gray-500 italic">
                {/* Google Maps Embed Placeholder */}
                <div className="text-center p-8">
                  <MapPin size={48} className="mx-auto mb-4 text-blue-600" />
                  <p>Google Maps Integration Placeholder</p>
                  <p className="text-sm">Suite 101, Medical Plaza, North Nazimabad, Karachi</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg h-fit">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Clinic Hours</h4>
                    <p className="text-sm text-gray-600">Monday - Saturday: 10:00 AM - 08:00 PM</p>
                    <p className="text-sm text-gray-600">Sunday: Closed (Emergency only)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
