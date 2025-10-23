"use client"
import { useEffect } from 'react'

export default function HeroSection() {
  useEffect(() => {
    const startTime = new Date('2024-01-01T00:00:00Z').getTime()
    const timerEl = document.getElementById('mission-timer')
    function update() {
      const now = Date.now()
      const elapsed = now - startTime
      const hours = Math.floor(elapsed / (1000 * 60 * 60))
      const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((elapsed % (1000 * 60)) / 1000)
      const formatted = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
      if (timerEl) timerEl.textContent = formatted
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <div className="absolute inset-0 tactical-grid-bg pointer-events-none opacity-30"></div>
      <div className="absolute inset-0 circuit-pattern pointer-events-none opacity-10">
        <div className="circuit c-1"></div>
        <div className="circuit c-2"></div>
        <div className="circuit c-3"></div>
        <div className="circuit c-4"></div>
      </div>

      <div className="absolute right-1 left-1 top-24 md:top-20 md:right-6 md:left-auto bg-gray-800/80 backdrop-blur-lg border border-blue-400 rounded-xl p-2 md:p-4 font-mono text-xs md:text-sm shadow-2xl w-auto max-w-xs md:max-w-sm">
        <div className="text-blue-400 mb-2 md:mb-3 font-bold text-xs tracking-wider">MISSION TIMER</div>
        <div className="text-blue-300 text-base md:text-lg font-bold" id="mission-timer">00:00:00</div>
        <div className="text-blue-300/60 text-xs mt-1">UPTIME SINCE DEPLOYMENT</div>
      </div>

      <div className="relative z-10 text-center px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-6 font-mono text-green-400 text-sm tracking-wider">
          <span className="text-green-400">[</span>
          <span className="text-green-300">ACCESS LEVEL: Ξ CLASSIFIED</span>
          <span className="text-green-400">]</span>
          <span className="text-green-400 animate-pulse ml-2">█</span>
        </div>
        <div className="mb-8 lg:mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-extrabold font-sans text-gray-800 drop-shadow-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-500 to-gray-900">
              Varnox <span className="font-black text-blue-500">Tech</span>
            </span>
          </h1>
          <div className="text-gray-600 text-base md:text-lg font-sans mt-4 font-semibold tracking-wide max-w-2xl mx-auto">
            Operaciones discretas. Resultados extraordinarios.
            <br />
            <span className="opacity-60">Protocol: <span className="font-mono tracking-widest">SIGMA-7</span></span>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl mb-8 font-mono font-bold text-white drop-shadow-2xl">
          CYBER <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">WARFARE</span> DIVISION
        </h2>

        <div className="bg-gray-800/80 backdrop-blur-lg border border-green-500/30 rounded-xl p-6 font-mono text-lg md:text-xl mb-12 lg:mb-16 max-w-4xl mx-auto shadow-2xl">
          <div className="text-slate-200 leading-relaxed">
            <span className="text-green-400 font-semibold">&gt;</span> SIGNAL ENCRYPTED
            <br />
            <span className="text-orange-400 font-semibold">&gt;</span> COORDINATES: <span className="tracking-widest">19.43°N 99.13°W</span>
            <br />
            <span className="text-blue-400 font-semibold">&gt;</span> STATUS: <span className="tracking-widest">ACTIVE</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button onClick={() => scrollTo('contacto')} className="group relative overflow-hidden bg-gradient-to-r from-green-600 via-orange-600 to-red-600 text-white px-8 py-4 rounded-none font-mono font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-green-500/30 transform hover:scale-105 border border-green-500/50">
            <span className="relative z-10">ENGAGE OPERATIONS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button onClick={() => scrollTo('servicios')} className="group relative overflow-hidden bg-gray-900/80 border-2 border-green-500 text-green-300 px-8 py-4 rounded font-mono font-bold text-lg transition-all duration-300 backdrop-blur-lg shadow-2xl hover:bg-green-500 hover:text-black transform hover:scale-105">
            <span className="relative z-10">INTEL BRIEFING</span>
          </button>
        </div>
      </div>
    </section>
  )
}
