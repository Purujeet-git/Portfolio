"use client";
import React from 'react'
import { projects } from '@/data'
import { motion } from 'motion/react'
import Link from 'next/link'

const RecentProject = () => {
  return (
    <div className='py-32 px-4 md:px-10 lg:px-20' id='projects'>
      <div className='mb-20 overflow-hidden'>
        <motion.h2 
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className='text-5xl md:text-7xl font-black uppercase tracking-tighter'
        >
          Selected Works
        </motion.h2>
      </div>

      <div className='flex flex-col gap-24'>
        {projects.map(({id, title, des, img, iconLists, link, tags}, index) => (
          <div key={id} className={`flex flex-col gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
            
            {/* Image Container */}
            <Link href={link} className="flex-1 w-full overflow-hidden relative group hover-target block">
              <div className="w-full aspect-video bg-[#13162d] dark:bg-zinc-900 border border-black/10 dark:border-white/10 overflow-hidden relative">
                {img ? (
                  <img 
                    src={img} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-black opacity-10">
                    {title}
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
            </Link>

            {/* Content Container */}
            <div className="flex-1 w-full flex flex-col justify-center">
              <span className="text-sm font-medium tracking-widest uppercase mb-4 opacity-70">
                0{index + 1}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                {title}
              </h3>
              <p className="text-lg md:text-xl opacity-70 mb-8 max-w-xl">
                {des}
              </p>
              
              <div className="flex flex-col gap-4 border-t border-black/10 dark:border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm uppercase tracking-widest">Tech Stack:</span>
                  <div className="flex gap-2">
                    {iconLists && iconLists.map((icon, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border border-black/20 dark:border-white/20 p-1.5 flex items-center justify-center bg-black/5 dark:bg-white/5">
                        <img src={icon} alt="tech-icon" className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
                
                {tags && tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-xs font-bold px-3 py-1 bg-black/10 dark:bg-white/10 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProject
