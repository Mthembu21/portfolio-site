import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Activity, Heart } from 'lucide-react';

const projects = [
  {
    title: 'Uni-Help',
    description: 'A comprehensive platform helping matriculates apply to universities through a single interface.',
    tech: ['HTML', 'CSS', 'PHP', 'SQL'],
    icon: Database,
    color: 'from-purple-500 to-blue-500',
    link: '#'
  },
  {
    title: 'Nutri-fit',
    description: 'Mobile app for weight loss guidance, featuring healthy food suggestions, workout videos, and gym locator.',
    tech: ['React Native', 'Firebase Auth'],
    icon: Heart,
    color: 'from-green-500 to-teal-500',
    link: '#'
  },
  {
    title: 'Flow-State',
    description: 'Real-time electricity monitoring system with consumption insights and smart appliance recommendations.',
    tech: ['MongoDB', 'MQTT', 'Shelly Device'],
    icon: Activity,
    color: 'from-orange-500 to-red-500',
    link: '#'
  }
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900 text-white" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className={`h-48 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                <project.icon size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all"
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}