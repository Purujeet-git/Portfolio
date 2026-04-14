"use client";
import React from 'react'

export default function TechMarquee() {
  const skills = [
    "NEXT.JS APP ROUTER", 
    "TYPESCRIPT", 
    "REACT", 
    "NODE.JS", 
    "MONGODB", 
    "TAILWIND CSS", 
    "API DEVELOPMENT", 
    "DATA STRUCTURES & ALGORITHMS"
  ];

  return (
    <div className="w-full bg-[#0D0D0D] text-[#E6E1D3] dark:bg-[#E6E1D3] dark:text-[#0D0D0D] py-4 overflow-hidden flex whitespace-nowrap border-y border-black/10 dark:border-white/10">
      <div className="animate-marquee flex gap-10 items-center">
        {skills.map((skill, index) => (
          <span key={index} className="text-xl md:text-2xl font-black uppercase tracking-widest flex items-center gap-10">
            {skill}
            <span className="text-sm">✦</span>
          </span>
        ))}
      </div>
      {/* Duplicate for infinite loop */}
      <div className="animate-marquee flex gap-10 items-center aria-hidden absolute top-0">
        {skills.map((skill, index) => (
          <span key={index} className="text-xl md:text-2xl font-black uppercase tracking-widest flex items-center gap-10">
            {skill}
            <span className="text-sm">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
