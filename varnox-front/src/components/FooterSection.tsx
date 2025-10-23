import Image from 'next/image'

export default function FooterSection() {
  return (
    <footer className="py-8 bg-slate-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 items-center justify-items-center">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-2 justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center p-2 shadow-lg">
                <Image src="/logo.png" alt="VARNOX Logo" width={40} height={40} className="brightness-125" />
              </div>
              <h3 className="text-base font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-orbitron">VARNOX</h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">Transformamos ideas en soluciones tecnológicas innovadoras.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="text-sm font-orbitron font-bold mb-2 text-white">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center text-xs text-gray-400">jjarropersonal@gmail.com</div>
              <div className="flex items-center gap-2 justify-center text-xs text-gray-400">+51 983307173</div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-3 text-center">
          <p className="text-gray-400 text-xs">© 2025 <span className="text-indigo-400 font-semibold">VARNOX Tech</span>. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
