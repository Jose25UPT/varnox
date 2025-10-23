"use client"

export default function ProjectsSection() {
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
              onClick={() => p.link && window.open(p.link, '_blank')}
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
                    Click para ver el proyecto →
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
