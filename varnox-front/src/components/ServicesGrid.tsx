export default function ServicesGrid() {
  const services = [
    {
      name: "Cyber Security",
      description: "Protección avanzada contra amenazas digitales",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop"
    },
    {
      name: "Data Analytics",
      description: "Análisis inteligente de datos para insights estratégicos",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      name: "AI Solutions",
      description: "Implementación de inteligencia artificial personalizada",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
    },
    {
      name: "Cloud Infrastructure",
      description: "Arquitecturas cloud escalables y seguras",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
    },
    {
      name: "DevOps",
      description: "Automatización y optimización de procesos de desarrollo",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=300&fit=crop"
    },
    {
      name: "Consulting",
      description: "Asesoría estratégica en transformación digital",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    }
  ]

  return (
    <div className="mb-16">
      <h2 className="text-white text-3xl font-bold leading-tight tracking-tighter px-4 pb-6 pt-5">Explore our services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {services.map((service, index) => (
          <div key={index} className="group relative bg-white/5 bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-6 aspect-square transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-white/10 hover:border-primary/50" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 100%), url("${service.image}")` }}>
            <p className="text-white text-xl font-bold leading-tight">{service.name}</p>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}