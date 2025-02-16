import { Languages as LanguagesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function Languages() {
  const languages = [
    { name: 'English', level: 'Professional Proficiency' },
    { name: 'Hindi', level: 'Conversational' },
    { name: 'Telugu', level: 'Native' }
  ];

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Languages</h2>
        <div className="card">
          <div className="flex items-center">
            <LanguagesIcon className="mr-4 text-purple-500" size={24} />
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {languages.map((lang) => (
                  <div key={lang.name} className="text-center">
                    <h3 className="font-semibold text-lg mb-2">{lang.name}</h3>
                    <p className="text-gray-400">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}