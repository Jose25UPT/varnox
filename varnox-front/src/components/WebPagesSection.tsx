"use client"

import { useState } from 'react'

export default function WebPagesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [previewUrl, setPreviewUrl] = useState('')

  const openPreview = (url: string) => {
    setPreviewUrl(url)
    setIsModalOpen(true)
  }

  const closePreview = () => {
    setIsModalOpen(false)
    setPreviewUrl('')
  }

  const webProjects = [
    {
      title: "Tienda Digital Pro",
      description: "E-commerce moderno con Laravel y Vue.js",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
      url: "https://example.com"
    },
    {
      title: "SecureApp",
      description: "Aplicación móvil de seguridad y biometría",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c36?auto=format&fit=crop&w=800&q=60",
      url: "https://your-project.vercel.app"
    },
    {
      title: "Landing Page Corporativa",
      description: "Sitio web institucional con diseño moderno",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
      url: "https://corporate-landing.vercel.app"
    },
    {
      title: "Plataforma Educativa",
      description: "Sistema de gestión de aprendizaje online",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=60",
      url: "https://edu-platform.vercel.app"
    },
    {
      title: "Dashboard Analytics",
      description: "Panel de control con métricas en tiempo real",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
      url: "https://analytics-dashboard.vercel.app"
    },
    {
      title: "Blog Tecnológico",
      description: "Plataforma de contenido con CMS personalizado",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?auto=format&fit=crop&w=800&q=60",
      url: "https://tech-blog.vercel.app"
    }
  ]

  return (
    <section id="webpages" className="py-20 bg-background-dark">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-primary text-sm mb-4 tracking-wider uppercase font-semibold">Desarrollo Web</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">Páginas Web</span> Profesionales
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Creamos sitios web modernos, responsivos y optimizados para conversiones.
            Haz clic en un proyecto para ver una previsualización en vivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden hover:scale-105"
              onClick={() => openPreview(project.url)}
            >
              <img
                src={project.image}
                className="w-full h-48 object-cover"
                alt={project.title}
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40"
          onClick={closePreview}
        ></div>
      )}

      {/* Modal de previsualización */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-6xl h-[85%] shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between bg-gray-900 text-white px-4 py-2">
              <h2 className="text-sm font-semibold">🔍 Previsualización del Proyecto</h2>
              <button
                onClick={closePreview}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm font-semibold transition-colors"
              >
                Cerrar
              </button>
            </div>
            {/* Iframe */}
            <iframe
              src={previewUrl}
              className="flex-1 border-none"
              title="Project Preview"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}