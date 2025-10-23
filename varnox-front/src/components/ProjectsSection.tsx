export default function ProjectsSection() {
  const projects = [
    { id: 1, title: 'VARNOX Corporativo', category: 'Desarrollo Empresarial', description: 'Plataforma integral de gestión empresarial.', tech: ['Next.js','TypeScript'], status: 'Activo', icon: '🏢' },
    { id: 2, title: 'VARNOX Asistente', category: 'Inteligencia Artificial', description: 'Asistente inteligente con PLN.', tech: ['Python','FastAPI'], status: 'Activo', icon: '🤖' },
    { id: 3, title: 'VARNOX Mobile', category: 'Aplicación Móvil', description: 'App móvil multiplataforma.', tech: ['React Native','GraphQL'], status: 'Desarrollo', icon: '📱' },
  ]
  return (
    <section id="nosotros" className="bg-white py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-indigo-600 text-sm mb-4 tracking-wider uppercase font-semibold">Proyectos Desplegados</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"><span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">Nuestros</span> Proyectos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => (
            <div key={p.id} className="relative group bg-white rounded-xl border border-gray-200 shadow-md transition-all duration-500 overflow-hidden hover:shadow-xl hover:scale-105 min-h-[210px]">
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">{p.icon}</span>
                  <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-green-100 text-green-800">{p.status}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-indigo-600 text-xs font-medium mb-1">{p.category}</p>
                <p className="text-gray-600 text-xs leading-snug">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
