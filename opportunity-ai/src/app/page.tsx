'use client'

import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import { FaChevronDown } from 'react-icons/fa'

export default function Home() {
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const scrollPercentage = (scrollPosition / totalScroll) * 100
      
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${scrollPercentage}%`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar progressBarRef={progressBarRef} />
      
      <main className="container">
        <section id="welcome" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8">Building Your Child&apos;s Future</h1>
            
            <p className="text-xl md:text-2xl font-semibold mb-12">
              A friendly guide to creating opportunities for your family!
            </p>
            
            <div className="space-y-5 mb-16 text-lg">
              <p>Discover the bests places to live</p>
              <p>Search for the best schools</p>
              <p>Find local resources and community programs</p>
            </div>
            
            <div className="mt-8 mb-12 space-y-2">
              <p className="text-xl font-semibold">Let&apos;s take this journey together</p>
              <p className="text-xl font-semibold">one step at a time</p>
            </div>
            
            <div className="text-primary text-4xl mt-6 animate-bounce">
              <FaChevronDown className="mx-auto" />
            </div>
          </div>
        </section>
        
        {/* Add additional sections here */}
      </main>
    </>
  )
}