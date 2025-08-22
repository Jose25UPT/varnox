
<template>
  <nav role="navigation" class="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700 shadow-2xl">
    <!-- Status Panel Elegante -->
    <div class="absolute top-3 left-6 text-xs font-jetbrains text-green-400">
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 bg-green-400 rounded-full shadow-green-400 shadow-lg"></div>
        <span class="font-medium tracking-wider">VARNOX.ONLINE</span>
      </div>
    </div>
    <!-- Gradiente Sutil de Fondo -->
    <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
    <!-- Línea de Acento -->
    <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500"></div>
    <div class="px-4 sm:px-6 md:px-12 py-4 md:py-5 relative z-10">
      <div class="flex items-center justify-between">
        <!-- Logo y nombre -->
        <div class="flex items-center gap-x-4">
          <div class="relative">
            <img src="/src/assets/logo.png" alt="VARNOX Logo" class="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-lg" />
          </div>
          <div class="font-orbitron">
            <div class="text-xs text-green-400 tracking-widest font-mono mb-1 animate-pulse">.active</div>
            <div class="text-lg md:text-xl font-bold tracking-widest text-white">VARNOX</div>
          </div>
        </div>
        <!-- Menú Desktop -->
        <div class="hidden md:flex items-center space-x-6 lg:space-x-10">
          <a href="#hero" class="nav-link text-gray-300 hover:text-indigo-400 transition-all duration-300 font-poppins text-sm font-medium tracking-wide relative group"><span class="relative z-10">Inicio</span><div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></div></a>
          <a href="#servicios" class="nav-link text-gray-300 hover:text-purple-400 transition-all duration-300 font-poppins text-sm font-medium tracking-wide relative group"><span class="relative z-10">Servicios</span><div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 group-hover:w-full transition-all duration-300"></div></a>
          <a href="#nosotros" class="nav-link text-gray-300 hover:text-amber-400 transition-all duration-300 font-poppins text-sm font-medium tracking-wide relative group"><span class="relative z-10">Proyectos</span><div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-purple-400 group-hover:w-full transition-all duration-300"></div></a>
          <a href="#proceso" class="nav-link text-gray-300 hover:text-purple-400 transition-all duration-300 font-poppins text-sm font-medium tracking-wide relative group"><span class="relative z-10">Proceso</span><div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-amber-400 group-hover:w-full transition-all duration-300"></div></a>
          <a href="#contacto" class="nav-link text-gray-300 hover:text-amber-400 transition-all duration-300 font-poppins text-sm font-medium tracking-wide relative group"><span class="relative z-10">Contacto</span><div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-indigo-400 group-hover:w-full transition-all duration-300"></div></a>
        </div>
        <!-- Botón Hamburguesa Elegante -->
        <button @click="toggleMobileMenu" class="md:hidden text-gray-300 focus:outline-none hover:text-indigo-400 transition-colors duration-300" aria-label="Toggle menu">
          <div class="flex flex-col gap-1.5">
            <div class="w-7 h-0.5 bg-current transition-all duration-300 rounded-full" :class="{ 'rotate-45 translate-y-2': isOpen }"></div>
            <div class="w-7 h-0.5 bg-current transition-all duration-300 rounded-full" :class="{ 'display-none': isOpen }"></div>
            <div class="w-7 h-0.5 bg-current transition-all duration-300 rounded-full" :class="{ '-rotate-45 -translate-y-2': isOpen }"></div>
          </div>
        </button>
        <!-- Botón de cambio de idioma compacto -->
      </div>
    </div>
  </nav>
  <!-- Overlay Menú móvil fuera del nav para cubrir toda la pantalla -->
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-50 bg-slate-900/95 flex flex-col items-center justify-center space-y-8 md:hidden overflow-y-auto overscroll-none">
      <a @click="toggleMobileMenu" href="#hero" class="text-lg text-white font-poppins font-semibold hover:text-indigo-400">Inicio</a>
      <a @click="toggleMobileMenu" href="#servicios" class="text-lg text-white font-poppins font-semibold hover:text-purple-400">Servicios</a>
      <a @click="toggleMobileMenu" href="#nosotros" class="text-lg text-white font-poppins font-semibold hover:text-amber-400">Proyectos</a>
      <a @click="toggleMobileMenu" href="#proceso" class="text-lg text-white font-poppins font-semibold hover:text-purple-400">Proceso</a>
      <a @click="toggleMobileMenu" href="#contacto" class="text-lg text-white font-poppins font-semibold hover:text-amber-400">Contacto</a>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue';

const isOpen = ref(false);

function lockBodyScroll() {
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
}
function unlockBodyScroll() {
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
}

watch(isOpen, (val) => {
  if (val) {
    lockBodyScroll();
  } else {
    unlockBodyScroll();
  }
});

onBeforeUnmount(() => {
  unlockBodyScroll();
});

function toggleMobileMenu() {
  isOpen.value = !isOpen.value;
}

</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.font-jetbrains {
  font-family: 'JetBrains Mono', monospace;
}

/* Efectos de Hover */
.nav-link {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover {
  transform: translateY(-2px);
}

/* Botón CTA con efecto de hover */
.cta-btn:hover {
  transform: translateY(-3px) scale(1.02);
}

/* Animaciones suaves */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}



.backdrop-blur-xl {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
</style>
