export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-background-dark relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-primary text-sm mb-4 tracking-wider uppercase font-semibold">Metodología de Desarrollo</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white"><span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">Kanban</span> Acelerado</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Más rápido que Scrum, nuestro enfoque Lean-Kanban elimina reuniones innecesarias y acelera el flujo de valor.
            Entregamos software funcional en semanas, no meses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-black/20 border border-white/10 rounded-xl p-6 text-center shadow-lg shadow-black/20 backdrop-blur-sm">
            <div className="text-3xl mb-4 text-primary">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">Descubrimiento</h3>
            <p className="text-gray-400">Análisis rápido y definición de MVP en 48 horas.</p>
          </div>
          <div className="bg-black/20 border border-white/10 rounded-xl p-6 text-center shadow-lg shadow-black/20 backdrop-blur-sm">
            <div className="text-3xl mb-4 text-primary">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Desarrollo</h3>
            <p className="text-gray-400">Iteraciones semanales con entregas continuas.</p>
          </div>
          <div className="bg-black/20 border border-white/10 rounded-xl p-6 text-center shadow-lg shadow-black/20 backdrop-blur-sm">
            <div className="text-3xl mb-4 text-primary">🎯</div>
            <h3 className="text-xl font-bold text-white mb-2">Testing</h3>
            <p className="text-gray-400">QA integrado y pruebas automatizadas.</p>
          </div>
          <div className="bg-black/20 border border-white/10 rounded-xl p-6 text-center shadow-lg shadow-black/20 backdrop-blur-sm">
            <div className="text-3xl mb-4 text-primary">🏆</div>
            <h3 className="text-xl font-bold text-white mb-2">Despliegue</h3>
            <p className="text-gray-400">Entrega continua con monitoreo 24/7.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black/30 border border-white/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">¿Por qué Kanban Acelerado?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="text-primary font-semibold mb-2">Sin Sprints Fijos</h4>
                <p className="text-gray-400">Flujo continuo elimina bloqueos y acelera entregas.</p>
              </div>
              <div>
                <h4 className="text-primary font-semibold mb-2">Menos Reuniones</h4>
                <p className="text-gray-400">Enfoque en trabajo real, no en ceremonias.</p>
              </div>
              <div>
                <h4 className="text-primary font-semibold mb-2">Métricas Reales</h4>
                <p className="text-gray-400">Lead time y throughput para optimización continua.</p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Contact Button */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/51983307173"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="material-symbols-outlined mr-3 text-xl">chat</span>
            ¡Hablemos de tu proyecto!
            <span className="material-symbols-outlined ml-3 text-xl">arrow_forward</span>
          </a>
          <p className="text-sm text-gray-400 mt-3">Respuesta inmediata • Consulta gratuita</p>
        </div>
      </div>
    </section>
  )
}
