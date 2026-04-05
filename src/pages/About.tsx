import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Heart, ShieldCheck, Users, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold uppercase tracking-wider">
              Meet Dr. Ramzan
            </div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Dedicated to Your <br />
              <span className="text-blue-600">Vision and Vitality.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dr. Ramzan is a highly respected Eye Specialist and General Physician with over 20 years of experience 
              serving the community in Karachi. His dual expertise allows him to provide a unique, holistic approach 
              to patient care.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-4xl font-bold text-blue-600">20+</p>
                <p className="text-sm text-gray-500 font-medium">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">10k+</p>
                <p className="text-sm text-gray-500 font-medium">Successful Surgeries</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/drprofile/800/1000" 
              alt="Dr. Ramzan" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 max-w-xs">
              <GraduationCap className="text-blue-600 mb-4" size={32} />
              <h4 className="font-bold text-gray-900 mb-2">Education</h4>
              <p className="text-sm text-gray-600">MBBS, FCPS (Ophthalmology), MCPS (General Medicine)</p>
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-white mb-32">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-bold">Our Philosophy of Care</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart size={32} />
                </div>
                <h4 className="text-xl font-bold">Compassion</h4>
                <p className="text-gray-400 text-sm">We treat every patient with the same care and respect we would give our own family.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-xl font-bold">Integrity</h4>
                <p className="text-gray-400 text-sm">Honest advice and ethical medical practices are the foundation of our clinic.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto">
                  <Award size={32} />
                </div>
                <h4 className="text-xl font-bold">Excellence</h4>
                <p className="text-gray-400 text-sm">We continuously update our skills and technology to provide the best outcomes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline/Achievements */}
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center">Professional Journey</h2>
          <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:w-px before:h-full before:bg-gray-200">
            {[
              { year: '2005', title: 'Medical Graduation', desc: 'Completed MBBS from Dow Medical College, Karachi.' },
              { year: '2010', title: 'Specialization', desc: 'Achieved FCPS in Ophthalmology with honors.' },
              { year: '2015', title: 'Clinic Foundation', desc: 'Established Dr. Ramzan\'s Eye & General Clinic in North Nazimabad.' },
              { year: '2022', title: 'Advanced Certification', desc: 'Certified in the latest Phacoemulsification cataract surgery techniques.' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 flex flex-col items-start md:items-end">
                  <div className={`p-6 bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-sm ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-blue-600 font-bold text-lg">{item.year}</span>
                    <h4 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white -translate-x-1/2 shadow-lg" />
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
