"use client";
import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { TiLocationArrowOutline } from "react-icons/ti";

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center px-4 md:px-10 lg:px-20 pt-20 relative overflow-hidden'>
      <div className='flex flex-col z-10 space-y-6'>
        <div className='overflow-hidden uppercase'>
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className='text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]'
          >
            Digital Web
          </motion.h1>
        </div>
        <div className='overflow-hidden uppercase flex justify-start md:justify-end md:pr-20'>
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className='text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]'
          >
            Experience
          </motion.h1>
        </div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='max-w-md mt-10 text-lg md:text-xl font-medium tracking-wide'
        >
          Hi, I am Purujeet, a Next.js Developer based in India crafting premium digital experiences.
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 right-10 flex flex-col md:flex-row gap-6 items-end md:items-center"
      >
        <Link href="/resume" className="flex bg-red-900 p-5 rounded-full dark:bg-red-100 items-center gap-2 text-sm uppercase tracking-widest font-bold border-b-2 border-transparent hover:border-black dark:hover:border-white transition-all hover-target">
          <span>View Resume</span>
        </Link>
        <Link href="#projects" className="flex items-center gap-2 text-sm uppercase tracking-widest hover-target">
          <span>Scroll to explore</span>
          <TiLocationArrowOutline className="transform rotate-45 text-xl" />
        </Link>
      </motion.div>
    </div>
  )
}

export default Hero
