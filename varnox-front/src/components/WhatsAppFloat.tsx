import Image from 'next/image'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/51983307173"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Pulsating background effect */}
        <div className="absolute inset-0 bg-green-500 rounded-2xl animate-ping opacity-20"></div>

        {/* Main button with VARNOX logo and text */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 flex items-center gap-3">
          {/* VARNOX Logo */}
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Image
              src="/logo.png"
              alt="VARNOX Logo"
              width={32}
              height={32}
              className="brightness-125"
            />
          </div>

          {/* VARNOX Text */}
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight">VARNOX</span>
            <span className="text-xs opacity-90">WhatsApp</span>
          </div>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10">
          ¡Hablemos por WhatsApp!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
        </div>

        {/* Notification badge (optional) */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">1</span>
        </div>
      </div>
    </a>
  )
}