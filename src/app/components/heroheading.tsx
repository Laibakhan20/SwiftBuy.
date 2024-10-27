"use client"; // Ensure this component is treated as a client component

import { motion } from 'framer-motion';

export default function HeroHeading() {
  return (
    <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
      <motion.h1
        className="mb-4 text-4xl font-bold text-black sm:pt-24 sm:text-5xl md:mb-8 md:text-6xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        SwiftBuy! <span><br/>Because Fast Is The New Normal</span>
      </motion.h1>
      <motion.p
        className="max-w-md leading-relaxed text-gray-800 xl:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        Shop now and discover style essentials for every wardrobe.
      </motion.p>
    </div>
  );
}