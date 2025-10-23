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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl h-[80vh] bg-background-dark rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{selectedProject.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-primary text-sm">{selectedProject.category}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-white">close</span>
              </button>
            </div>

            {/* Modal Content - Iframe */}
            <div className="flex-1 p-6">
              <iframe
                src={selectedProject.link}
                className="w-full h-full rounded-xl border border-white/10"
                title={`Vista previa de ${selectedProject.title}`}
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-white/10 bg-black/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>Estado: <span className="text-green-400">{selectedProject.status}</span></span>
                  <span>Tecnologías: {selectedProject.tech.join(', ')}</span>
                </div>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors text-sm font-medium"
                >
                  Abrir en nueva pestaña
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
