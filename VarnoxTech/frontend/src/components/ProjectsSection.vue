<template>
  <section id="proyectos" class="bg-white py-20 lg:py-32 relative overflow-hidden hexagonal-grid-pattern">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="text-indigo-600 text-sm mb-4 tracking-wider uppercase font-semibold">
          Proyectos Desplegados
        </div>
        
        <h2 class="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">Nuestros</span> Proyectos
        </h2>
        
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="relative group bg-white rounded-xl border border-gray-200 shadow-md transition-all duration-500 overflow-hidden hover:shadow-xl hover:scale-105 min-h-[210px]"
        >
          <!-- Overlay enigmático compacto -->
          <div class="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-indigo-900/80 to-purple-900/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none px-4 py-6">
            <div class="text-green-400 font-mono text-xs mb-1 animate-scan">{{ project.secret || 'Access Code: SIGMA-' + project.id }}</div>
            <div class="text-white text-base font-bold mb-1">{{ project.title }}</div>
            <div class="text-indigo-300 text-xs mb-2">{{ project.category }}</div>
            <div class="flex flex-wrap gap-1 mb-2 justify-center">
              <span v-for="tech in project.tech" :key="tech" class="px-2 py-0.5 text-[10px] font-medium bg-indigo-800/60 text-indigo-100 rounded">
                {{ tech }}
              </span>
            </div>
            <!-- Badges de métricas -->
            <div class="flex gap-2 mb-2">
              <span class="bg-indigo-700/80 text-white text-[10px] px-2 py-0.5 rounded font-mono">Perf: {{ project.metrics.performance }}</span>
              <span class="bg-purple-700/80 text-white text-[10px] px-2 py-0.5 rounded font-mono">Sat: {{ project.metrics.satisfaction }}</span>
              <span class="bg-amber-700/80 text-white text-[10px] px-2 py-0.5 rounded font-mono">Mej: {{ project.metrics.improvement }}</span>
            </div>
            <div class="text-gray-300 text-[10px] italic tracking-widest opacity-70">{{ project.hiddenMsg || 'COORD: 19.43°N 99.13°W' }}</div>
          </div>
          <!-- Project Header compacto -->
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xl">{{ project.icon }}</span>
              <span class="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-green-100 text-green-800">
                {{ project.status }}
              </span>
            </div>
            <h3 class="text-base font-bold text-gray-900 mb-1">{{ project.title }}</h3>
            <p class="text-indigo-600 text-xs font-medium mb-1">{{ project.category }}</p>
            <p class="text-gray-600 text-xs leading-snug line-clamp-3">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: "VARNOX Corporativo",
    category: "Desarrollo Empresarial",
    description: "Plataforma integral de gestión empresarial con módulos avanzados de analítica y automatización de procesos críticos.",
    tech: ["Vue.js", "TypeScript", "Node.js", "PostgreSQL"],
    metrics: {
      performance: "98%",
      satisfaction: "96%",
      improvement: "45%"
    },
    status: "Activo",
    icon: "🏢",
    secret: "Access Code: ALPHA-1",
    hiddenMsg: "COORD: 19.43°N 99.13°W"
  },
  {
    id: 2,
    title: "VARNOX Asistente",
    category: "Inteligencia Artificial",
    description: "Sistema de asistencia inteligente con capacidades de procesamiento de lenguaje natural y aprendizaje automático.",
    tech: ["Python", "TensorFlow", "FastAPI", "Docker"],
    metrics: {
      performance: "94%",
      satisfaction: "92%",
      improvement: "67%"
    },
    status: "Activo",
    icon: "🤖",
    secret: "Access Code: BETA-2",
    hiddenMsg: "SIGMA PROTOCOL ACTIVE"
  },
  {
    id: 3,
    title: "VARNOX Mobile",
    category: "Aplicación Móvil",
    description: "Aplicación móvil multiplataforma con funcionalidades avanzadas de sincronización y experiencia de usuario optimizada.",
    tech: ["React Native", "TypeScript", "GraphQL", "MongoDB"],
    metrics: {
      performance: "91%",
      satisfaction: "89%",
      improvement: "38%"
    },
    status: "Desarrollo",
    icon: "📱",
    secret: "Access Code: GAMMA-3",
    hiddenMsg: "RESTRICTED AREA"
  }
])
</script>

<style scoped>
.hexagonal-grid-pattern {
  background-image: 
    radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.45) 1px, transparent 0),
    radial-gradient(circle at 8px 8px, rgba(99, 102, 241, 0.42) 1px, transparent 0),
    radial-gradient(circle at 15px 15px, rgba(255, 255, 255, 0.38) 1px, transparent 0);
  background-size: 16px 16px, 24px 24px, 32px 32px;
  background-position: 0 0, 8px 8px, 16px 16px;
}

/* Animación tipo scan/glitch para overlay */
@keyframes scan {
  0% { opacity: 0.7; filter: blur(0.5px); }
  20% { opacity: 1; filter: blur(0); }
  40% { opacity: 0.8; filter: blur(1px); }
  60% { opacity: 1; filter: blur(0); }
  80% { opacity: 0.7; filter: blur(0.5px); }
  100% { opacity: 0.7; filter: blur(0.5px); }
}
.animate-scan {
  animation: scan 2.5s infinite linear alternate;
}
</style>
