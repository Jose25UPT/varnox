"use client"

import { useState } from 'react'

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    { id: 1, title: 'VARNOX Corporativo', category: 'Desarrollo Empresarial', description: 'Plataforma integral de gestión empresarial.', tech: ['Next.js','TypeScript'], status: 'Activo', icon: '🏢' },
    { id: 2, title: 'VARNOX Asistente', category: 'Inteligencia Artificial', description: 'Asistente inteligente con PLN.', tech: ['Python','FastAPI'], status: 'Activo', icon: '🤖' },
    { id: 3, title: 'VARNOX Mobile', category: 'Aplicación Móvil', description: 'App móvil multiplataforma.', tech: ['React Native','GraphQL'], status: 'Desarrollo', icon: '📱' },
    { id: 4, title: 'Motos Sur Tacna', category: 'E-commerce', description: 'Tienda online especializada en motocicletas.', tech: ['Next.js','Vercel'], status: 'Activo', icon: '🏍️', link: 'https://motos-sur-tacna.vercel.app/' },
    { id: 5, title: 'VARNOX Ochre', category: 'Landing Page', description: 'Página web corporativa moderna.', tech: ['Next.js','Vercel'], status: 'Activo', icon: '🌐', link: 'https://varnox-ochre.vercel.app/' },
  ]
  return (
    <section id="projects" className="bg-background-dark py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-primary text-sm mb-4 tracking-wider uppercase font-semibold">Proyectos Desplegados</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white"><span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">Nuestros</span> Proyectos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => (
            <div
              key={p.id}
              onClick={() => p.link && setSelectedProject(p)}
              className={`relative group bg-black/20 rounded-xl border border-white/10 shadow-lg shadow-black/20 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 min-h-[210px] backdrop-blur-sm ${p.link ? 'cursor-pointer' : ''}`}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">{p.icon}</span>
                  <div className="flex items-center gap-2">
                    {p.link && <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>}
                    <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-green-100 text-green-800">{p.status}</span>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{p.title}</h3>
                <p className="text-primary text-xs font-medium mb-1">{p.category}</p>
                <p className="text-gray-400 text-xs leading-snug">{p.description}</p>
                {p.link && (
                  <div className="mt-2 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Click para previsualizar →
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Preview Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-7xl h-[90vh] bg-gray-100 rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-300">
            {/* Browser Window Header */}
            <div className="bg-gray-200 px-4 py-3 flex items-center justify-between border-b border-gray-300">
              {/* Browser Controls */}
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* Browser Title */}
              <div className="flex-1 text-center">
                <span className="text-sm text-gray-600 font-medium">{selectedProject.title} - VARNOX Preview</span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-gray-700 text-sm">close</span>
              </button>
            </div>

            {/* Address Bar */}
            <div className="bg-white px-4 py-3 border-b border-gray-200 flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <button className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                  <span className="material-symbols-outlined text-gray-600 text-xs">arrow_back</span>
                </button>
                <button className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                  <span className="material-symbols-outlined text-gray-600 text-xs">arrow_forward</span>
                </button>
                <button className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                  <span className="material-symbols-outlined text-gray-600 text-xs">refresh</span>
                </button>
              </div>

              {/* URL Bar */}
              <div className="flex-1 flex items-center bg-gray-100 rounded-lg px-3 py-1 border border-gray-300">
                <span className="material-symbols-outlined text-gray-500 text-sm mr-2">lock</span>
                <span className="text-sm text-gray-700 font-mono flex-1 truncate">{selectedProject.link}</span>
                <span className="material-symbols-outlined text-gray-500 text-sm ml-2">star</span>
              </div>
            </div>

            {/* Browser Content - Iframe */}
            <div className="flex-1 bg-white relative">
              <iframe
                src={selectedProject.link}
                className="w-full h-full border-0"
                title={`Vista previa de ${selectedProject.title}`}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />

              {/* Loading Overlay (optional) */}
              <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 pointer-events-none transition-opacity">
                <div className="text-center">
                  <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p className="text-gray-600 text-sm">Cargando previsualización...</p>
                </div>
              </div>
            </div>

            {/* Browser Footer */}
            <div className="bg-gray-100 px-4 py-2 border-t border-gray-300 flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center space-x-4">
                <span>🔒 Seguro</span>
                <span>📄 {selectedProject.title}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-xs">zoom_in</span>
                <span className="material-symbols-outlined text-xs">zoom_out</span>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 px-3 py-1 bg-primary text-white rounded hover:bg-primary/80 transition-colors text-xs"
                >
                  Abrir sitio →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
