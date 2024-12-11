import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Brain } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    items: ['React.js', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS'],
    icon: Code2,
    color: 'from-blue-500 to-blue-600'
  },
  {
    category: 'Backend Development',
    items: ['PHP', 'MongoDB', 'SQL', 'Firebase', 'MQTT'],
    icon: Database,
    color: 'from-green-500 to-green-600'
  },
  {
    category: 'Data Engineering',
    items: ['Data Analytics', 'Data Engineering', 'Microsoft Certified', 'Predictive Analysis'],
    icon: Brain,
    color: 'from-purple-500 to-purple-600'
  }
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-800" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-lg p-6 text-white transform transition-all duration-300 hover:shadow-xl"
            >
              <div className={`bg-gradient-to-r ${skill.color} p-4 rounded-lg mb-6 inline-block`}>
                <skill.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <motion.li 
                    key={item} 
                    className="flex items-center gap-2"
                    whileHover={{ x: 10 }}
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}