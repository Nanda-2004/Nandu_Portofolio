import { MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="card">
          <p className="text-gray-300 leading-relaxed">
            Enthusiastic Computer Science student with a keen interest in exploring technology and innovation. 
            Strong problem-solving abilities and a proactive approach to learning and teamwork. 
            Eager to apply my skills and academic knowledge in a dynamic environment to contribute effectively and grow professionally.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center text-gray-400">
              <MapPin className="mr-2" size={18} />
              <span>Guntur, Andhra Pradesh</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Phone className="mr-2" size={18} />
              <span>+91 6301206530</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}