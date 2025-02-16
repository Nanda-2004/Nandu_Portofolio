import { motion } from 'framer-motion';

export function Skills() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {['C', 'C++', 'Java', 'Python'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Web Development</h3>
            <div className="flex flex-wrap gap-3">
              {['HTML', 'CSS'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}