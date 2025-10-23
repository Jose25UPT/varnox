"use client"

import Image from 'next/image'

export default function SidebarNavigation() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="flex items-center justify-between h-20 px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center p-2 shadow-lg">
            <Image src="/logo.png" alt="VARNOX Logo" width={40} height={40} className="brightness-125" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white leading-tight">VARNOX</span>
            <span className="text-sm text-primary font-medium">Tech.</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-2">
          <button onClick={() => scrollTo('presentation')} className="flex items-center h-12 px-4 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
            <span className="material-symbols-outlined text-xl mr-2">home</span>
            <span className="font-medium">Home</span>
          </button>
          <button onClick={() => scrollTo('services')} className="flex items-center h-12 px-4 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
            <span className="material-symbols-outlined text-xl mr-2">build</span>
            <span className="font-medium">Services</span>
          </button>
          <button onClick={() => scrollTo('webpages')} className="flex items-center h-12 px-4 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
            <span className="material-symbols-outlined text-xl mr-2">web</span>
            <span className="font-medium">Web Pages</span>
          </button>
          <button onClick={() => scrollTo('projects')} className="flex items-center h-12 px-4 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
            <span className="material-symbols-outlined text-xl mr-2">work</span>
            <span className="font-medium">Projects</span>
          </button>
          <button onClick={() => scrollTo('about')} className="flex items-center h-12 px-4 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
            <span className="material-symbols-outlined text-xl mr-2">info</span>
            <span className="font-medium">About</span>
          </button>
          <button onClick={() => scrollTo('mission-vision')} className="flex items-center h-12 px-4 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
            <span className="material-symbols-outlined text-xl mr-2">flag</span>
            <span className="font-medium">Mission</span>
          </button>
          <button onClick={() => scrollTo('team')} className="flex items-center h-12 px-4 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
            <span className="material-symbols-outlined text-xl mr-2">group</span>
            <span className="font-medium">Team</span>
          </button>
          <button onClick={() => scrollTo('process')} className="flex items-center h-12 px-4 text-gray-300 bg-primary/30 text-white rounded-lg transition-colors">
            <span className="material-symbols-outlined text-xl mr-2">engineering</span>
            <span className="font-medium">Process</span>
          </button>
          <button onClick={() => scrollTo('footer')} className="flex items-center h-12 px-4 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
            <span className="material-symbols-outlined text-xl mr-2">help</span>
            <span className="font-medium">Support</span>
          </button>
        </nav>
      </div>
    </header>
  )
}