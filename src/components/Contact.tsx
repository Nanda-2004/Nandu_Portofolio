import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <div className="flex flex-col items-center text-center">
              <Phone className="text-purple-500 mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+916301206530" className="text-gray-400 hover:text-purple-400 transition-colors">
                +91 6301206530
              </a>
            </div>
          </div>
          
          <div className="card">
            <div className="flex flex-col items-center text-center">
              <Mail className="text-purple-500 mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:dnandakrishna2004@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                dnandakrishna2004@gmail.com
              </a>
            </div>
          </div>
          
          <div className="card">
            <div className="flex flex-col items-center text-center">
              <MapPin className="text-purple-500 mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-400">
                Guntur, Andhra Pradesh
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}