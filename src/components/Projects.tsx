import { Code } from 'lucide-react';
import { motion } from 'framer-motion';

export function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Projects</h2>
        <div className="card">
          <div className="flex items-start">
            <Code className="mr-4 text-purple-500" size={24} />
            <div>
              <h3 className="text-xl font-semibold mb-2">SMS Spam Detection</h3>
              <p className="text-gray-300">
                Designed and developed a website for safer digital communication using Machine Learning 
                Algorithms like Multinomial Naive Bayes Classifier and Natural Language Processing (NLP).
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}