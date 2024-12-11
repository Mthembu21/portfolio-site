import { motion } from 'framer-motion';
import profile from "../assets/profile.jpeg"; // Change to default import

export function ProfileImage() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <img
        src={profile} // Use the imported profile image here
        alt="Sabelo Mthembu"
        className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white"
      />
      <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
    </motion.div>
  );
}