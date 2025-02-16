import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export function Education() {
  return (
    <section id="education" className="mb-16 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Education</h2>
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-start">
              <BookOpen className="mr-4 text-purple-500" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">B.Tech in Computer Science and Engineering</h3>
                <p className="text-gray-400">Kallam Haranadhareddy Institute of Technology</p>
                <p className="text-purple-400 mt-2">Score: 80%</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-start">
              <BookOpen className="mr-4 text-purple-500" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Intermediate Education (12th Grade)</h3>
                <p className="text-gray-400">Sri Chaitanya Junior College</p>
                <p className="text-purple-400 mt-2">Score: 95%</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}