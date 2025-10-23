export default function TeamSection() {
  const teamMembers = [
    {
      name: "José Antonio",
      role: "CEO & Fundador",
      description: "Líder visionario con más de 10 años de experiencia en desarrollo de software y transformación digital.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Carlos Rodríguez",
      role: "Lead Frontend",
      description: "Experto en React, Vue.js y diseño de interfaces de usuario intuitivas y modernas.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Ana Martínez",
      role: "Backend Developer",
      description: "Especialista en Node.js, Python y bases de datos, apasionada por la optimización de rendimiento.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      github: "#"
    }
  ]

  return (
    <section id="team" className="py-20 bg-background-dark">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-primary text-sm mb-4 tracking-wider uppercase font-semibold">Nuestro Equipo</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertos</span> Detrás del Código
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Un equipo multidisciplinario de profesionales apasionados por la tecnología y la innovación.
            Cada miembro aporta experiencia única para crear soluciones excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-black/20 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <div className="text-center mb-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
              </div>

              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} className="w-10 h-10 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <span className="material-symbols-outlined text-gray-400 hover:text-primary text-lg">work</span>
                </a>
                <a href={member.github} className="w-10 h-10 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <span className="material-symbols-outlined text-gray-400 hover:text-primary text-lg">code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}