export default function ServicesSection() {
  const services = [
    { icon: 'fas fa-shield-alt', title: 'Ciberseguridad' },
    { icon: 'fas fa-satellite-dish', title: 'Comunicaciones' },
    { icon: 'fas fa-server', title: 'Infraestructura' },
    { icon: 'fas fa-search', title: 'Forense Digital' },
    { icon: 'fas fa-eye', title: 'Vigilancia' },
    { icon: 'fas fa-lock', title: 'Cifrado' },
    { icon: 'fas fa-bug', title: 'Pentesting' },
    { icon: 'fas fa-network-wired', title: 'Redes' },
    { icon: 'fas fa-user-secret', title: 'Inteligencia' },
    { icon: 'fas fa-database', title: 'Datos' },
  ]
  return (
  <section id="servicios" className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-2 font-mono tracking-widest">Servicios</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {services.map((s, i) => (
            <div key={i}>
              <div className="card-uiverse">
                <div className="tools-uiverse">
                  <div className="circle-uiverse"><span className="red-uiverse box-uiverse"></span></div>
                  <div className="circle-uiverse"><span className="yellow-uiverse box-uiverse"></span></div>
                  <div className="circle-uiverse"><span className="green-uiverse box-uiverse"></span></div>
                </div>
                <div className="card__content-uiverse">
                  <i className={`icon-uiverse ${s.icon}`}></i>
                  <p className="title-uiverse">{s.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
