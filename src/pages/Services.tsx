import React from 'react';
import { motion } from 'motion/react';
import { Eye, Stethoscope, Heart, Activity, Shield, Zap } from 'lucide-react';

const services = [
  {
    category: 'Eye Specialist Services',
    icon: Eye,
    color: 'blue',
    items: [
      { title: 'Comprehensive Eye Exams', desc: 'Detailed assessment of vision and eye health using advanced diagnostics.' },
      { title: 'Cataract Surgery', desc: 'Modern micro-incision surgery with premium intraocular lens implants.' },
      { title: 'Glaucoma Management', desc: 'Early detection and treatment to prevent vision loss from eye pressure.' },
      { title: 'Pediatric Ophthalmology', desc: 'Specialized eye care for children, including squint and lazy eye treatment.' },
      { title: 'Diabetic Retinopathy', desc: 'Monitoring and treatment for eye complications related to diabetes.' },
      { title: 'Refractive Surgery', desc: 'Consultation and procedures for vision correction (LASIK/PRK).' }
    ]
  },
  {
    category: 'General Medicine',
    icon: Stethoscope,
    color: 'indigo',
    items: [
      { title: 'Primary Care', desc: 'Management of common illnesses, infections, and general health concerns.' },
      { title: 'Chronic Disease Management', desc: 'Expert care for hypertension, diabetes, and cholesterol issues.' },
      { title: 'Preventive Screenings', desc: 'Regular health checks and cancer screenings for early detection.' },
      { title: 'Vaccinations', desc: 'Complete immunization schedules for children and adults.' },
      { title: 'Lab Services', desc: 'On-site sample collection for a wide range of diagnostic tests.' },
      { title: 'Wellness Counseling', desc: 'Guidance on nutrition, exercise, and lifestyle for optimal health.' }
    ]
  }
];

export default function Services() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Our Services</h1>
          <p className="text-xl text-gray-600">
            We provide a wide range of medical services with a focus on precision, 
            care, and the latest medical advancements.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((section, idx) => (
            <div key={idx} className="space-y-12">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                <div className={`p-4 rounded-2xl bg-${section.color}-100 text-${section.color}-600`}>
                  <section.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{section.category}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mt-32 grid md:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: 'Safe & Sterile', desc: 'Highest hygiene standards' },
            { icon: Zap, title: 'Modern Tech', desc: 'Latest medical equipment' },
            { icon: Activity, title: 'Quick Results', desc: 'Efficient diagnostic process' },
            { icon: Heart, title: 'Caring Staff', desc: 'Empathetic patient support' },
          ].map((feature, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <feature.icon size={24} />
              </div>
              <h4 className="font-bold text-gray-900">{feature.title}</h4>
              <p className="text-xs text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
