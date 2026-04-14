"use client";
import React from 'react'
import { motion } from 'motion/react'

export default function About() {
  return (
    <div className='py-32 px-4 md:px-10 lg:px-20 border-t border-black/10 dark:border-white/10' id='about'>
      
      <div className='mb-10 overflow-hidden'>
        <motion.h2 
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className='text-3xl md:text-5xl font-black uppercase tracking-tighter'
        >
          My Philosophy
        </motion.h2>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-4xl"
      >
        <p className="text-xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight">
          I am a web developer specializing in Next.js, and I am actively looking for an opportunity.
        </p>
        
        <p className="mt-10 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed opacity-80 max-w-3xl">
          This is a minimal website because it doesn't need to be anything else. It exists to show what I do, what I have done, and why I build things.
        </p>

        <p className="mt-10 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed opacity-80 max-w-3xl border-l-2 border-black dark:border-white pl-6">
          I know I am not where I want to be yet, but it is precisely where I would like to grow from.
        </p>
      </motion.div>

    </div>
  )
}
