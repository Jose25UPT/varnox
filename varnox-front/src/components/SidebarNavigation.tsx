"use client"

import Image from 'next/image'

export default function SidebarNavigation() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="group fixed left-0 top-0 z-50 flex h-screen w-20 flex-col bg-black/30 backdrop-blur-lg border-r border-white/10 transition-all duration-300 ease-in-out hover:w-56">
      <div className="flex h-20 items-center justify-center border-b border-white/10">
        <div className="size-8 text-white">
          <Image src="/logo.png" alt="VARNOX Logo" width={32} height={32} className="brightness-125" />
        </div>
      </div>
      <nav className="flex flex-col flex-1 p-2 space-y-2">
        <button onClick={() => scrollTo('hero')} className="flex items-center h-16 px-6 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
          <span className="material-symbols-outlined text-2xl">home</span>
          <span className="ml-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Home</span>
        </button>
        <button onClick={() => scrollTo('services')} className="flex items-center h-16 px-6 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
          <span className="material-symbols-outlined text-2xl">build</span>
          <span className="ml-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Services</span>
        </button>
        <button onClick={() => scrollTo('webpages')} className="flex items-center h-16 px-6 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
          <span className="material-symbols-outlined text-2xl">web</span>
          <span className="ml-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Web Pages</span>
        </button>
        <button onClick={() => scrollTo('projects')} className="flex items-center h-16 px-6 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
          <span className="material-symbols-outlined text-2xl">work</span>
          <span className="ml-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Projects</span>
        </button>
        <button onClick={() => scrollTo('about')} className="flex items-center h-16 px-6 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
          <span className="material-symbols-outlined text-2xl">info</span>
          <span className="ml-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">About</span>
        </button>
        <button onClick={() => scrollTo('mission-vision')} className="flex items-center h-16 px-6 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
          <span className="material-symbols-outlined text-2xl">flag</span>
          <span className="ml-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mission</span>
        </button>
        <button onClick={() => scrollTo('team')} className="flex items-center h-16 px-6 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
          <span className="material-symbols-outlined text-2xl">group</span>
          <span className="ml-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Team</span>
        </button>
        <button onClick={() => scrollTo('process')} className="flex items-center h-16 px-6 text-gray-300 bg-primary/30 text-white rounded-lg transition-colors">
          <span className="material-symbols-outlined text-2xl">engineering</span>
          <span className="ml-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Process</span>
        </button>
      </nav>
      <div className="p-2 border-t border-white/10">
        <button onClick={() => scrollTo('footer')} className="flex items-center h-16 px-6 text-gray-300 hover:bg-primary/20 hover:text-white rounded-lg transition-colors">
          <span className="material-symbols-outlined text-2xl">help</span>
          <span className="ml-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Support</span>
        </button>
      </div>
    </aside>
  )
}