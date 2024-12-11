import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ProfileImage } from './ProfileImage';
import { DeveloperAnimation } from './DeveloperAnimation';
import { TechStack } from './TechStack';

export function Hero() {
  return (
    <section className="min-h-screen py-12 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ProfileImage />
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            Sabelo Sanele Mthembu
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer | Data Engineer | Microsoft Certified
          </p>
          <DeveloperAnimation />
          <div className="flex justify-center gap-6 mb-12">
            <motion.a 
              href="https://github.com/Mthembu21" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#4B9CD3' }}
              className="transition-colors"
            >
              <Github size={28} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/sabelo-mthembu-b25a6518a" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#4B9CD3' }}
              className="transition-colors"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a 
              href="mailto:tembesabelo7@gmail.com"
              whileHover={{ scale: 1.2, color: '#4B9CD3' }}
              className="transition-colors"
            >
              <Mail size={28} />
            </motion.a>
          </div>
          <TechStack />
        </motion.div>
      </div>
    </section>
  );
}