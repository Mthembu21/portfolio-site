import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', color: 'bg-blue-500' },
  { name: 'TypeScript', color: 'bg-blue-600' },
  { name: 'Node.js', color: 'bg-green-500' },
  { name: 'MongoDB', color: 'bg-green-600' },
  { name: 'PHP', color: 'bg-purple-500' },
  { name: 'SQL', color: 'bg-purple-600' },
  { name: 'Data Analytics', color: 'bg-yellow-500' },
  { name: 'MQTT', color: 'bg-red-500' },
];

export function TechStack() {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-center mb-8">Tech Stack</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className={`${tech.color} px-4 py-2 rounded-full text-white text-sm md:text-base font-semibold`}
          >
            {tech.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}