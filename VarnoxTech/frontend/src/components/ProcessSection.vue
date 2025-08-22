<template>
  <section id="proceso" class="py-8 bg-white relative overflow-hidden hexagonal-grid-pattern">
    <div class="max-w-5xl mx-auto px-4 lg:px-8 relative z-10">
      <div class="text-center mb-10">
        <div class="text-indigo-600 font-semibold text-xs mb-2 tracking-wider uppercase">[ METODOLOGÍA VARNOX ]</div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Nuestro <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">Proceso</span></h2>
        <p class="text-gray-600 text-sm max-w-xl mx-auto">4 pasos claros para transformar tu idea en resultados reales.</p>
      </div>
      <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
        <div class="flex flex-col items-center text-center flex-1 min-w-[120px]">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl mb-2 shadow-lg">🔍</div>
          <div class="font-bold text-gray-800 text-base mb-1">Análisis</div>
          <div class="text-xs text-gray-500">Investigamos y definimos objetivos.</div>
        </div>
        <div class="hidden md:block w-8 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400 rounded-full"></div>
        <div class="flex flex-col items-center text-center flex-1 min-w-[120px]">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-2xl mb-2 shadow-lg">🎨</div>
          <div class="font-bold text-gray-800 text-base mb-1">Diseño</div>
          <div class="text-xs text-gray-500">Planificamos y prototipamos tu solución.</div>
        </div>
        <div class="hidden md:block w-8 h-1 bg-gradient-to-r from-purple-400 via-amber-400 to-green-400 rounded-full"></div>
        <div class="flex flex-col items-center text-center flex-1 min-w-[120px]">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-purple-600 text-white text-2xl mb-2 shadow-lg">⚡</div>
          <div class="font-bold text-gray-800 text-base mb-1">Desarrollo</div>
          <div class="text-xs text-gray-500">Construimos y testeamos tu proyecto.</div>
        </div>
        <div class="hidden md:block w-8 h-1 bg-gradient-to-r from-green-400 via-indigo-400 to-purple-400 rounded-full"></div>
        <div class="flex flex-col items-center text-center flex-1 min-w-[120px]">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-indigo-600 text-white text-2xl mb-2 shadow-lg">🚀</div>
          <div class="font-bold text-gray-800 text-base mb-1">Lanzamiento</div>
          <div class="text-xs text-gray-500">Publicamos y damos soporte continuo.</div>
        </div>
      </div>
    </div>
      <!-- CTA Section -->
      <div class="text-center mt-20">
        <div class="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">¿Listo para comenzar?</h3>
          <p class="text-gray-600 mb-6">Transformemos tu idea en una solución tecnológica exitosa.</p>
          <button class="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Iniciar Proyecto
          </button>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
// Proceso de trabajo de VARNOX
</script>

<style scoped>
.hexagonal-grid-pattern {
  background-image: url('data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 1L39 11V29L20 39L1 29V11L20 1Z" stroke="%23E5E7EB" stroke-width="1"/></svg>');
  background-size: 40px 40px;
}
</style>
