"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function ResumePage() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-10 lg:px-20 bg-white text-black print:p-0 print:m-0 selection:bg-black selection:text-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 print:block">
        
        {/* Navigation & Actions (Hidden on Print) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-10 print:hidden border-b border-black/10 pb-6"
        >
          <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:underline hover-target">
            ← Back to Portfolio
          </Link>
          <button 
            onClick={() => window.print()}
            className="px-6 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-black/80 transition-colors hover-target"
          >
            Save as PDF
          </button>
        </motion.div>

        {/* Resume Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-10"
        >
          
          {/* Header */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-black mb-2">Purujeet Kumar</h1>
            <p className="text-sm md:text-base opacity-80 mb-2">
              Jalandhar, India | +91 7004759761 | purujeetkr2005@gmail.com
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <a href="https://www.linkedin.com/in/purujeet-kumar-2b9bb6321" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <span>|</span>
              <a href="https://portfolio-zeta-nine-56.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>
            </div>
          </div>

          {/* Objective */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-1">Objective</h2>
            <p className="text-sm md:text-base leading-relaxed mt-2">
              Passionate Full-Stack Web Developer focused on building scalable, production-ready web applications using Next.js, React, Node.js, and MongoDB. Seeking a Frontend / Full-Stack Internship to contribute to real product development, ship impactful features, and grow through hands-on engineering experience.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-1">Technical Skills</h2>
            <ul className="flex flex-col gap-2 mt-2 text-sm md:text-base">
              <li><strong>Frontend:</strong> React.js, Next.js (App Router), JavaScript (ES6+), HTML5, CSS3, Tailwind CSS.</li>
              <li><strong>Backend:</strong> Node.js, Express.js, REST API Development, Authentication (NextAuth / JWT).</li>
              <li><strong>Database & Cloud:</strong> MongoDB, Mongoose, Vercel Deployment, Vercel Blob Storage.</li>
              <li><strong>Core CS & Tools:</strong> Data Structures & Algorithms, Git, GitHub.</li>
            </ul>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-1">Projects</h2>

            <div className="flex flex-col gap-2 mt-2">
              <div className="flex justify-between items-end">
                <h3 className="font-bold text-lg">Traderos – Tax Tracking Platform for Traders</h3>
              </div>
              <a href="https://traderos-zeta.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 text-sm hover:underline">https://traderos-zeta.vercel.app/</a>
              <ul className="list-disc ml-5 mt-1 text-sm md:text-base flex flex-col gap-1">
                <li>Developed a specialized tax-tracking application designed for traders to manage financial records and tax liabilities.</li>
                <li>Architected a responsive frontend using Next.js and Tailwind CSS to ensure a seamless user experience across devices.</li>
                <li>Implemented logic to handle financial data visualization and organized data structures for high-performance tracking.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <div className="flex justify-between items-end">
                <h3 className="font-bold text-lg">DSA Quiz Platform</h3>
              </div>
              <a href="https://dsaquiz.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 text-sm hover:underline">https://dsaquiz.vercel.app/</a>
              <ul className="list-disc ml-5 mt-1 text-sm md:text-base flex flex-col gap-1">
                <li>Created an interactive platform to help users practice DSA questions topic-wise.</li>
                <li>Structured questions by difficulty level (Easy / Medium / Hard) to improve problem-solving experience and UI clarity.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-1">Education</h2>
            <div className="flex flex-col mt-2">
              <p className="font-bold">Bachelor&apos;s Degree (Pursuing) <span className="font-normal opacity-80">| Lovely Professional University</span></p>
              <p className="text-sm opacity-80 mt-1">Expected Graduation: 2028</p>
            </div>
          </div>

          {/* Strengths & Achievements */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-1">Strengths & Achievements</h2>
            <ul className="flex flex-col gap-3 mt-2 text-sm md:text-base">
              <li><strong>Practical Mindset:</strong> Focused on building real systems, not just tutorials.</li>
              <li><strong>Learning Focus:</strong> Continuously practicing DSA for product-based company interviews and exploring AI integration in modern web apps.</li>
              <li><strong>Collaboration:</strong> Strong communication skills and a consistent project execution attitude.</li>
            </ul>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
