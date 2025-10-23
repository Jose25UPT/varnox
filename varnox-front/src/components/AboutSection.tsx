export default function AboutSection() {
  const stats = [
    { number: "50+", label: "Proyectos Completados", icon: "work" },
    { number: "10+", label: "Años de Experiencia", icon: "schedule" },
    { number: "98%", label: "Clientes Satisfechos", icon: "sentiment_satisfied" },
    { number: "24/7", label: "Soporte Técnico", icon: "support_agent" }
  ]

  const values = [
    {
      icon: "precision_manufacturing",
      title: "Calidad Garantizada",
      description: "Cada línea de código es revisada y optimizada para asegurar el mejor rendimiento."
    },
    {
      icon: "security",
      title: "Seguridad Primero",
      description: "Implementamos las mejores prácticas de ciberseguridad en todos nuestros proyectos."
    },
    {
      icon: "rocket_launch",
      title: "Innovación Constante",
      description: "Utilizamos las últimas tecnologías y metodologías para mantenernos a la vanguardia."
    },
    {
      icon: "handshake",
      title: "Compromiso Total",
      description: "Trabajamos codo a codo con nuestros clientes hasta lograr el éxito del proyecto."
    }
  ]

  const achievements = [
    "Certificación en Desarrollo Ágil",
    "Especialistas en Cloud Computing",
    "Expertos en Inteligencia Artificial",
    "Partners Tecnológicos Certificados"
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-background-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-primary text-sm mb-4 tracking-wider uppercase font-semibold">Sobre VARNOX</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">Excelencia</span> Tecnológica
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Somos una empresa de desarrollo de software especializada en crear soluciones tecnológicas
            innovadoras que transforman negocios y generan resultados excepcionales.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-black/20 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-black/30 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Our Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Nuestra Historia</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Fundada con la visión de revolucionar el desarrollo de software en Latinoamérica,
                  VARNOX ha crecido de ser un pequeño equipo de desarrolladores apasionados a convertirse
                  en una empresa líder en soluciones tecnológicas innovadoras.
                </p>
                <p>
                  Durante más de una década, hemos acompañado a empresas de todos los tamaños en su
                  transformación digital, creando software personalizado que no solo cumple con las
                  expectativas, sino que las supera.
                </p>
                <p>
                  Nuestro compromiso con la excelencia, la innovación constante y el servicio al cliente
                  nos ha permitido construir relaciones duraderas y lograr resultados excepcionales
                  en cada proyecto que emprendemos.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Reconocimientos</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <span className="material-symbols-outlined text-primary mr-3 text-lg">verified</span>
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Our Values */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Nuestros Valores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="group bg-black/20 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-black/30 hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-primary text-xl">{value.icon}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-black/30 to-black/20 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl mr-3">workspace_premium</span>
              <h3 className="text-2xl font-bold text-white">¿Por qué elegir VARNOX?</h3>
            </div>
            <p className="text-gray-300 text-lg mb-8 max-w-4xl mx-auto">
              Combinamos experiencia técnica de vanguardia con un enfoque centrado en el cliente,
              asegurando que cada proyecto no solo cumpla con los requisitos técnicos, sino que también
              genere un impacto positivo real en tu negocio.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <span className="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span>
                <span className="text-white font-medium">Garantía de Calidad</span>
              </div>
              <div className="flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <span className="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span>
                <span className="text-white font-medium">Entrega Puntual</span>
              </div>
              <div className="flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <span className="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span>
                <span className="text-white font-medium">Soporte Continuo</span>
              </div>
              <div className="flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <span className="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span>
                <span className="text-white font-medium">Innovación Constante</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
