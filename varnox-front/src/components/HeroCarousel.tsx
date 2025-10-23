"use client"

import { useState } from 'react'

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Cyber Warfare Division",
      description: "Operaciones discretas. Resultados extraordinarios.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
    },
    {
      title: "Advanced Analytics",
      description: "Inteligencia artificial y análisis de datos para decisiones estratégicas.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
    },
    {
      title: "Secure Solutions",
      description: "Protección cibernética de nivel militar para tu negocio.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full overflow-hidden mb-16">
        <div className="flex items-center justify-between pb-4">
        <h1 className="text-4xl font-bold text-white tracking-tighter">Latest Operations</h1>
        <div className="flex items-center space-x-2">
          <button onClick={prevSlide} className="flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button onClick={nextSlide} className="flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-6">
          {slides.map((slide, index) => (
            <div key={index} className={`flex snap-center h-full flex-1 flex-col gap-4 rounded-xl bg-black/20 border border-white/10 shadow-lg shadow-black/20 min-w-80 backdrop-blur-sm ${index === currentSlide ? 'opacity-100' : 'opacity-70'}`}>
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl" style={{ backgroundImage: `url("${slide.image}")` }}></div>
              <div className="flex flex-col flex-1 justify-between p-6 pt-0 gap-4">
                <div>
                  <p className="text-white text-xl font-bold">{slide.title}</p>
                  <p className="text-gray-400 text-base font-normal leading-normal">{slide.description}</p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary/80 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
                  <span className="truncate">Learn More</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}