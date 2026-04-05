import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: '5 Tips for Maintaining Healthy Eyes in the Digital Age',
    excerpt: 'With increased screen time, our eyes are under more strain than ever. Learn how to protect your vision...',
    category: 'Eye Care',
    author: 'Dr. Ramzan',
    date: 'March 15, 2026',
    image: 'https://picsum.photos/seed/eye1/800/500'
  },
  {
    id: 2,
    title: 'Understanding Hypertension: The Silent Killer',
    excerpt: 'High blood pressure often has no symptoms but can lead to serious health issues. Here is what you need to know...',
    category: 'General Health',
    author: 'Dr. Ramzan',
    date: 'March 10, 2026',
    image: 'https://picsum.photos/seed/health1/800/500'
  },
  {
    id: 3,
    title: 'The Importance of Regular Eye Checkups for Children',
    excerpt: 'Early detection of vision problems in children is crucial for their development and academic success...',
    category: 'Pediatrics',
    author: 'Dr. Ramzan',
    date: 'March 05, 2026',
    image: 'https://picsum.photos/seed/kids1/800/500'
  },
  {
    id: 4,
    title: 'Managing Diabetes Through Diet and Lifestyle',
    excerpt: 'A comprehensive guide to controlling your blood sugar levels through simple daily habits...',
    category: 'General Health',
    author: 'Dr. Ramzan',
    date: 'February 28, 2026',
    image: 'https://picsum.photos/seed/diet1/800/500'
  }
];

export default function Blog() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">Health Blog</h1>
            <p className="text-xl text-gray-600">Expert medical advice and health tips from Dr. Ramzan and his team.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-gray-100 border-none rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-6 shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="space-y-4 px-2">
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} /> {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} /> {post.author}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:gap-4 transition-all">
                  Read More <ArrowRight size={20} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 flex justify-center gap-2">
          {[1, 2, 3].map((n) => (
            <button 
              key={n} 
              className={`w-10 h-10 rounded-xl font-bold transition-all ${n === 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
