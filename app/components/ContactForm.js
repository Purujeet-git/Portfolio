"use client"
import React, { useState } from 'react'
import { motion } from 'motion/react'

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Honeypot check
    if (formData.get('bot-field')) {
      setStatus("success"); // fake success
      return;
    }

    setStatus("loading");
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className='py-32 px-4 md:px-10 lg:px-20 text-white' id='contact'>
      <div className='mb-20 overflow-hidden'>
        <motion.h2 
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className='text-5xl md:text-7xl text-white font-black uppercase tracking-tighter'
        >
          Let's Talk
        </motion.h2>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <form onSubmit={handleSubmit} className="flex flex-col text-white gap-10">
          {/* Honeypot field - hidden from real users */}
          <input type="text" name="bot-field" className="hidden text-white" tabIndex="-1" autoComplete="off" />

          <div className="flex flex-col md:flex-row text-white gap-10">
            <div className="flex-1 border-b border-white text-white dark:border-white/20 pb-4">
              <input 
                type="text" 
                name="name"
                required 
                placeholder="What's your name?" 
                className="w-full bg-transparent outline-none text-white text-xl md:text-2xl font-bold placeholder-white dark:placeholder-white/30 hover-target" 
              />
            </div>
            <div className="flex-1 border-b border-white text-white dark:border-white/20 pb-4">
              <input 
                type="email" 
                name="email"
                required 
                placeholder="What's your email?" 
                className="w-full bg-transparent outline-none text-white text-xl md:text-2xl font-bold placeholder-white dark:placeholder-white/30 hover-target" 
              />
            </div>
          </div>
          
          <div className="border-b border-white text-white dark:border-white/20 pb-4">
            <textarea 
              name="message"
              required 
              rows={4}
              placeholder="Tell me about my project..." 
              className="w-full bg-transparent outline-none text-xl md:text-2xl font-bold placeholder-white dark:placeholder-white/30 hover-target resize-none" 
            />
          </div>

          <div>
            <button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              className="text-xl md:text-2xl font-black uppercase tracking-tighter flex items-center gap-4 hover-target disabled:opacity-50"
            >
              {status === "idle" && "Send Message"}
              {status === "loading" && "Sending..."}
              {status === "success" && "Message Sent!"}
              {status === "error" && "Error. Try Again."}
              {status !== "success" && status !== "loading" && <span className="text-3xl">→</span>}
            </button>
          </div>

        </form>
      </motion.div>
    </div>
  )
}
