export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Página no encontrada</p>
        <a href="/" className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Volver al inicio</a>
      </div>
    </div>
  )
}
