import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function Certifications() {
  const certifications = [
    'Machine Learning by SmartInternz',
    'Google Android Developer Virtual Internship',
    'Salesforce Developer Internship',
    'Joy of Computing using Python (NPTEL)',
    'Operating System Fundamentals (NPTEL)',
    'CodeTantra on C Language'
  ];

  return (
    <section id="certifications" className="mb-16 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert} className="card">
              <div className="flex items-center">
                <Award className="mr-3 text-purple-500" size={20} />
                <span>{cert}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}