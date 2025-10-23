export default function MissionVisionSection() {
  return (
    <section id="mission-vision" className="py-20 bg-background-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-primary/20 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="text-primary text-sm mb-4 tracking-wider uppercase font-semibold">Nuestra Identidad</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">Misión</span> y Visión
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Los principios que nos guían en cada proyecto y nos impulsan hacia el futuro
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Misión */}
          <div className="group bg-gradient-to-br from-black/30 to-black/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-3xl">target</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Nuestra Misión</h3>
                <div className="w-12 h-1 bg-primary rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              En VARNOX, nos dedicamos a crear soluciones de software personalizadas que se adaptan perfectamente
              a las necesidades únicas de cada cliente. Desarrollamos aplicaciones innovadoras, sistemas web y
              plataformas digitales que impulsan el crecimiento, optimizan procesos y transforman ideas en
              realidades tecnológicas excepcionales.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                <span className="font-medium">Software a medida para cada negocio</span>
              </div>
              <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                <span className="font-medium">Innovación tecnológica constante</span>
              </div>
              <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                <span className="font-medium">Compromiso con la calidad y eficiencia</span>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div className="group bg-gradient-to-br from-black/30 to-black/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Nuestra Visión</h3>
                <div className="w-12 h-1 bg-primary rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Ser la empresa líder en desarrollo de software personalizado en América Latina, reconocida por
              nuestra capacidad de transformar desafíos complejos en soluciones digitales elegantes y efectivas.
              Aspiramos a ser el socio tecnológico de confianza para empresas de todos los tamaños, desde
              startups innovadoras hasta corporaciones establecidas.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                <span className="material-symbols-outlined text-primary mr-3 text-lg">rocket_launch</span>
                <span className="font-medium">Liderazgo en innovación tecnológica</span>
              </div>
              <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                <span className="material-symbols-outlined text-primary mr-3 text-lg">groups</span>
                <span className="font-medium">Socio estratégico para el crecimiento</span>
              </div>
              <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                <span className="material-symbols-outlined text-primary mr-3 text-lg">workspace_premium</span>
                <span className="font-medium">Excelencia y reconocimiento internacional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-gradient-to-r from-black/20 via-black/10 to-black/20 border border-white/5 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Nuestros Valores</h3>
            <p className="text-gray-400 text-lg">Los principios que guían nuestro trabajo diario</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-6 rounded-xl bg-black/10 border border-white/5 hover:bg-black/20 hover:border-primary/20 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-4xl">precision_manufacturing</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Innovación</h4>
              <p className="text-gray-400 leading-relaxed">Buscamos constantemente nuevas formas de resolver problemas tecnológicos complejos</p>
            </div>

            <div className="group text-center p-6 rounded-xl bg-black/10 border border-white/5 hover:bg-black/20 hover:border-primary/20 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-4xl">verified</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Calidad</h4>
              <p className="text-gray-400 leading-relaxed">Cada línea de código cumple con los más altos estándares de calidad y seguridad</p>
            </div>

            <div className="group text-center p-6 rounded-xl bg-black/10 border border-white/5 hover:bg-black/20 hover:border-primary/20 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-4xl">handshake</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Confianza</h4>
              <p className="text-gray-400 leading-relaxed">Construimos relaciones duraderas basadas en la integridad y transparencia</p>
            </div>

            <div className="group text-center p-6 rounded-xl bg-black/10 border border-white/5 hover:bg-black/20 hover:border-primary/20 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-4xl">timeline</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Agilidad</h4>
              <p className="text-gray-400 leading-relaxed">Entregamos resultados rápidos sin comprometer la calidad del producto final</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}