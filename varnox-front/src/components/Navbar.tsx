"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  return (
    <>
      <nav role="navigation" className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700 shadow-2xl">
        <div className="absolute top-3 left-6 text-xs font-jetbrains text-green-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full shadow-green-400 shadow-lg"></div>
            <span className="font-medium tracking-wider">VARNOX.ONLINE</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500"></div>
        <div className="px-4 sm:px-6 md:px-12 py-4 md:py-5 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <div className="relative">
                <Image src="/logo.png" alt="VARNOX Logo" width={48} height={48} className="rounded-lg shadow-lg" />
              </div>
              <div className="font-orbitron">
                <div className="text-xs text-green-400 tracking-widest font-mono mb-1 animate-pulse">.active</div>
                <div className="text-lg md:text-xl font-bold tracking-widest text-white">VARNOX</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              <a href="#hero" className="nav-link text-gray-300 hover:text-indigo-400 transition-all duration-300 font-poppins text-sm font-medium tracking-wide relative group"><span className="relative z-10">Inicio</span><div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></div></a>
              <a href="#servicios" className="nav-link text-gray-300 hover:text-purple-400 transition-all duration-300 font-poppins text-sm font-medium tracking-wide relative group"><span className="relative z-10">Servicios</span><div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 group-hover:w-full transition-all duration-300"></div></a>
              <a href="#nosotros" className="nav-link text-gray-300 hover:text-amber-400 transition-all duration-300 font-poppins text-sm font-medium tracking-wide relative group"><span className="relative z-10">Proyectos</span><div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-purple-400 group-hover:w-full transition-all duration-300"></div></a>
              <a href="#proceso" className="nav-link text-gray-300 hover:text-purple-400 transition-all duration-300 font-poppins text-sm font-medium tracking-wide relative group"><span className="relative z-10">Proceso</span><div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-amber-400 group-hover:w-full transition-all duration-300"></div></a>
              <a href="#contacto" className="nav-link text-gray-300 hover:text-amber-400 transition-all duration-300 font-poppins text-sm font-medium tracking-wide relative group"><span className="relative z-10">Contacto</span><div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-indigo-400 group-hover:w-full transition-all duration-300"></div></a>
            </div>

            <button onClick={() => setIsOpen(v => !v)} className="md:hidden text-gray-300 focus:outline-none hover:text-indigo-400 transition-colors duration-300" aria-label="Toggle menu">
              <div className="flex flex-col gap-1.5">
                <div className={`w-7 h-0.5 bg-current transition-all duration-300 rounded-full ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-7 h-0.5 bg-current transition-all duration-300 rounded-full ${isOpen ? 'display-none' : ''}`}></div>
                <div className={`w-7 h-0.5 bg-current transition-all duration-300 rounded-full ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 flex flex-col items-center justify-center space-y-8 md:hidden overflow-y-auto overscroll-none">
          <a onClick={() => setIsOpen(false)} href="#hero" className="text-lg text-white font-poppins font-semibold hover:text-indigo-400">Inicio</a>
          <a onClick={() => setIsOpen(false)} href="#servicios" className="text-lg text-white font-poppins font-semibold hover:text-purple-400">Servicios</a>
          <a onClick={() => setIsOpen(false)} href="#nosotros" className="text-lg text-white font-poppins font-semibold hover:text-amber-400">Proyectos</a>
          <a onClick={() => setIsOpen(false)} href="#proceso" className="text-lg text-white font-poppins font-semibold hover:text-purple-400">Proceso</a>
          <a onClick={() => setIsOpen(false)} href="#contacto" className="text-lg text-white font-poppins font-semibold hover:text-amber-400">Contacto</a>
        </div>
      )}
    </>
  )
}
