import Image from 'next/image'

export default function FooterSection() {
  return (
    <footer id="footer" className="py-16 bg-background-dark relative overflow-hidden border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-10 left-1/3 w-12 h-12 border border-primary/20 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo y Descripción */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <div className="w-16 h-16 bg-gradient-to-br from-primary via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center p-3 shadow-xl">
                <Image src="/logo.png" alt="VARNOX Logo" width={48} height={48} className="brightness-125" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent font-orbitron">VARNOX</h3>
                <p className="text-sm text-primary font-medium">Tech Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed max-w-sm">
              Transformamos ideas innovadoras en soluciones tecnológicas excepcionales.
              Creamos software personalizado que impulsa el crecimiento de tu negocio.
            </p>
          </div>

          {/* Servicios Rápidos */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-6 text-white">Servicios</h4>
            <div className="space-y-3">
              <div className="text-gray-300 hover:text-primary transition-colors cursor-pointer text-base">Desarrollo Web</div>
              <div className="text-gray-300 hover:text-primary transition-colors cursor-pointer text-base">Aplicaciones Móviles</div>
              <div className="text-gray-300 hover:text-primary transition-colors cursor-pointer text-base">Consultoría Tech</div>
              <div className="text-gray-300 hover:text-primary transition-colors cursor-pointer text-base">Sistemas Empresariales</div>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold mb-6 text-white">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-center md:justify-end">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <span className="text-gray-300 text-base">jjarropersonal@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-end">
                <span className="material-symbols-outlined text-primary text-xl">phone</span>
                <span className="text-gray-300 text-base">+51 983 307 173</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-end">
                <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                <span className="text-gray-300 text-base">Lun - Vie: 9:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="w-12 h-12 bg-black/30 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110">
            <span className="material-symbols-outlined text-gray-400 hover:text-primary text-xl">public</span>
          </a>
          <a href="#" className="w-12 h-12 bg-black/30 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110">
            <span className="material-symbols-outlined text-gray-400 hover:text-primary text-xl">groups</span>
          </a>
          <a href="https://wa.me/51983307173" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black/30 border border-white/10 rounded-xl flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6 text-gray-400 hover:text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-base mb-1">
            Varnox Tech.
          </p>
          <p className="text-gray-400 text-base">
            © 2025 Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-cyan-400"></div>
    </footer>
  )
}
