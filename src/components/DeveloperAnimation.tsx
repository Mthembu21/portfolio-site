import { motion } from 'framer-motion';

const codeSnippet = `
function HelloWorld() {
  return "Hello, I'm Sabelo!";
}
`.trim();

export function DeveloperAnimation() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full max-w-md mx-auto bg-gray-800 rounded-lg p-4 my-8 overflow-hidden"
    >
      <pre className="text-sm md:text-base font-mono">
        <code className="text-green-400">
          {codeSnippet.split('\n').map((line, i) => (
            <motion.div
              key={i}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              {line}
            </motion.div>
          ))}
        </code>
      </pre>
    </motion.div>
  );
}