"use client"
import Image from 'next/image'

export default function CompanyPresentation() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
              <span className="material-symbols-outlined text-lg">workspace_premium</span>
              Empresa Líder en Tecnología
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                VARNOX
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Tech Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Transformamos ideas innovadoras en soluciones tecnológicas excepcionales.
              Desarrollamos software personalizado que impulsa el crecimiento de tu negocio
              hacia el futuro digital.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              Nuestros Servicios
            </button>
            <button
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              Contactar Ahora
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-gray-400">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-gray-400">Satisfacción Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-400">Soporte Técnico</div>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg h-96 lg:h-[500px]">
            {/* Main Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="VARNOX Tech Solutions - Desarrollo de Software"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-2xl backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-primary text-3xl">code</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-2xl backdrop-blur-sm border border-blue-500/30 flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-blue-400 text-3xl">web</span>
            </div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-cyan-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-cyan-400 text-2xl">smartphone</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}