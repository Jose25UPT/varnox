<template>
  <section id="hero" class="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
    <!-- Tactical Grid Background (más sutil) -->
    <div class="absolute inset-0 tactical-grid-bg pointer-events-none opacity-30"></div>
    <!-- Circuit Pattern Overlay (más sutil) -->
    <div class="absolute inset-0 circuit-pattern pointer-events-none opacity-10">
      <div class="circuit c-1"></div>
      <div class="circuit c-2"></div>
      <div class="circuit c-3"></div>
      <div class="circuit c-4"></div>
    </div>
    <!-- Mensaje oculto en binario (subliminal) -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-mono select-none opacity-10 tracking-widest whitespace-nowrap z-0" style="letter-spacing:0.2em;">
      01010110 01100001 01110010 01101110 01101111 01111000 00100000 01010011 01101001 01101110 00100000 01001100 01101001 01101101 01101001 01110100 01100101 01110011
    </div>
    
    <!-- Military Command Panel (responsive) -->
    <div class="absolute left-1 right-1 top-2 md:top-20 md:left-6 md:right-auto bg-gray-800/80 backdrop-blur-lg border border-green-400 rounded-xl p-2 md:p-4 font-mono text-xs md:text-sm shadow-2xl w-auto max-w-xs md:max-w-sm">
  <div class="text-green-400 mb-2 md:mb-3 font-bold text-xs tracking-wider">COMMAND CENTER</div>
      <div class="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
        <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
  <span class="text-green-300 font-medium">SYSTEMS OPERATIONAL</span>
      </div>
      <div class="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
        <div class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
  <span class="text-orange-300 font-medium">SECURITY ENHANCED</span>
      </div>
      <div class="flex items-center gap-2 md:gap-3">
        <div class="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
  <span class="text-red-300 font-medium">THREAT LEVEL: MINIMAL</span>
      </div>
    </div>
    <!-- Mission Timer (responsive) -->
    <div class="absolute right-1 left-1 top-24 md:top-20 md:right-6 md:left-auto bg-gray-800/80 backdrop-blur-lg border border-blue-400 rounded-xl p-2 md:p-4 font-mono text-xs md:text-sm shadow-2xl w-auto max-w-xs md:max-w-sm">
  <div class="text-blue-400 mb-2 md:mb-3 font-bold text-xs tracking-wider">MISSION TIMER</div>
      <div class="text-blue-300 text-base md:text-lg font-bold" id="mission-timer">00:00:00</div>
      <div class="text-blue-300/60 text-xs mt-1">UPTIME SINCE DEPLOYMENT</div>
  <div class="text-blue-300/60 text-xs mt-1">UPTIME SINCE DEPLOYMENT</div>
    </div>
    
    <!-- Main Content -->
    <div class="relative z-10 text-center px-6 lg:px-8 max-w-6xl mx-auto">
      <!-- Tactical Header con mensaje enigmático -->
      <div class="mb-6 animate-fade-in font-mono text-green-400 text-sm tracking-wider">
        <span class="text-green-400">[</span>
        <span class="text-green-300">ACCESS LEVEL: <span class="tracking-widest">Ξ</span> CLASSIFIED</span>
        <span class="text-green-400">]</span>
        <span class="text-green-400 animate-pulse ml-2">█</span>
      </div>
      
      <!-- Main Corporate Title con mensaje enigmático -->
      <div class="mb-8 lg:mb-12 animate-fade-in">
        <h1 class="text-5xl md:text-7xl lg:text-8xl tracking-tight font-extrabold font-sans text-gray-800 drop-shadow-xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-500 to-gray-900">
            Varnox <span class="font-black text-blue-500">Tech</span>
          </span>
        </h1>
        <div class="text-gray-600 text-base md:text-lg font-sans mt-4 font-semibold tracking-wide max-w-2xl mx-auto">
          Operaciones discretas. Resultados extraordinarios.<br>
          <span class="opacity-60">Protocol: <span class="font-mono tracking-widest">SIGMA-7</span></span>
        </div>
      </div>
      
      <!-- Military Headline -->
      <h2 class="text-4xl md:text-6xl lg:text-7xl mb-8 animate-fade-in-up font-mono font-bold text-white drop-shadow-2xl" style="animation-delay: 0.3s;">
        CYBER <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">WARFARE</span> DIVISION
      </h2>
      
      <!-- Military Subtitle enigmático -->
      <div class="bg-gray-800/80 backdrop-blur-lg border border-green-500/30 rounded-xl p-6 font-mono text-lg md:text-xl mb-12 lg:mb-16 max-w-4xl mx-auto animate-fade-in-up shadow-2xl" style="animation-delay: 0.6s;">
        <div class="text-slate-200 leading-relaxed">
          <span class="text-green-400 font-semibold">></span> SIGNAL ENCRYPTED<br/>
          <span class="text-orange-400 font-semibold">></span> COORDINATES: <span class="tracking-widest">19.43°N 99.13°W</span><br/>
          <span class="text-blue-400 font-semibold">></span> STATUS: <span class="tracking-widest">ACTIVE</span>
        </div>
      </div>
      
      <!-- Terminal Command Display con mensaje oculto -->
      <div class="font-mono text-sm md:text-base mb-8 animate-fade-in-up text-slate-400" style="animation-delay: 0.7s;">
        <span class="text-green-400">Ξ@varnox:~$</span> 
        <span class="text-white">RUN</span> 
        <span class="text-orange-400">SIGMA-7</span> 
        <span class="text-blue-400">ACCESS: GRANTED</span>
        <span class="text-green-400 animate-pulse">█</span>
      </div>
      
      <!-- Military CTA Buttons -->
      <div class="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center" style="animation-delay: 0.9s;">
        <button 
          @click="scrollToContact"
          class="group relative overflow-hidden bg-gradient-to-r from-green-600 via-orange-600 to-red-600 text-white px-8 py-4 rounded-none font-mono font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-green-500/30 transform hover:scale-105 border border-green-500/50"
        >
          <span class="relative z-10">[ ENGAGE OPERATIONS ]</span>
          <span class="relative z-10">ENGAGE OPERATIONS</span>
          <div class="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        <button 
          @click="scrollToServices"
          class="group relative overflow-hidden bg-gray-900/80 border-2 border-green-500 text-green-300 px-8 py-4 rounded font-mono font-bold text-lg transition-all duration-300 backdrop-blur-lg shadow-2xl hover:bg-green-500 hover:text-black transform hover:scale-105"
        >
          <span class="relative z-10">[ INTEL BRIEFING ]</span>
          <span class="relative z-10">INTEL BRIEFING</span>
        </button>
      </div>
      
      <!-- Output Terminal Militar -->
      <div class="font-mono text-xs mt-8 animate-fade-in-up text-green-400" style="animation-delay: 1.2s;">
        <div class="typing-animation">
          TERMINAL READY<br/>
          SYSTEM ONLINE<br/>
          AWAITING COMMAND
        </div>
      </div>
    </div>
    
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

let missionTimer: NodeJS.Timeout | null = null

const scrollToContact = () => {
  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToServices = () => {
  const servicesSection = document.getElementById('servicios');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const updateMissionTimer = () => {
  const startTime = new Date('2024-01-01T00:00:00Z').getTime()
  const now = new Date().getTime()
  const elapsed = now - startTime
  
  const hours = Math.floor(elapsed / (1000 * 60 * 60))
  const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((elapsed % (1000 * 60)) / 1000)
  
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  
  const timerElement = document.getElementById('mission-timer')
  if (timerElement) {
    timerElement.textContent = formattedTime
  }
}

onMounted(() => {
  updateMissionTimer()
  missionTimer = setInterval(updateMissionTimer, 1000)
})

onUnmounted(() => {
  if (missionTimer) {
    clearInterval(missionTimer)
  }
})
</script>

<style scoped>
/* VARNOX Tactical Typography */
.font-orbitron {
  font-family: 'Orbitron', monospace;
  letter-spacing: 0.1em;
}

.font-jetbrains {
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.05em;
}

/* Tactical Grid Background */
.tactical-grid-bg {
  background-image: 
    linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(255, 107, 53, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 107, 53, 0.05) 1px, transparent 1px);
  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
  background-position: 0 0, 0 0, 0 0, 0 0;
  animation: grid-scan 8s linear infinite;
}

@keyframes grid-scan {
  0% { background-position: 0 0, 0 0, 0 0, 0 0; }
  100% { background-position: 50px 50px, 50px 50px, 10px 10px, 10px 10px; }
}

/* Tactical Scanners */
.tactical-scanner {
  position: absolute;
  border: 2px solid rgba(0, 255, 65, 0.3);
  border-radius: 50%;
  animation: scanner-pulse 3s ease-in-out infinite;
}

.scanner-1 {
  top: 20%;
  left: 10%;
  width: 200px;
  height: 200px;
  animation-delay: 0s;
}

.scanner-2 {
  top: 60%;
  right: 15%;
  width: 150px;
  height: 150px;
  animation-delay: 1s;
}

.scanner-3 {
  bottom: 20%;
  left: 20%;
  width: 100px;
  height: 100px;
  animation-delay: 2s;
}

@keyframes scanner-pulse {
  0%, 100% { 
    transform: scale(1);
    border-color: rgba(0, 255, 65, 0.3);
  }
  50% { 
    transform: scale(1.2);
    border-color: rgba(0, 255, 65, 0.8);
  }
}

/* Circuit Pattern */
.circuit-pattern {
  opacity: 0.3;
}

.circuit {
  position: absolute;
  background: linear-gradient(90deg, transparent 40%, rgba(0, 255, 65, 0.5) 50%, transparent 60%);
  animation: circuit-flow 4s linear infinite;
}

.c-1 {
  top: 25%;
  left: 0;
  width: 100%;
  height: 2px;
  animation-delay: 0s;
}

.c-2 {
  top: 0;
  left: 30%;
  width: 2px;
  height: 100%;
  background: linear-gradient(0deg, transparent 40%, rgba(255, 107, 53, 0.5) 50%, transparent 60%);
  animation-delay: 1s;
}

.c-3 {
  top: 75%;
  left: 0;
  width: 100%;
  height: 2px;
  animation-delay: 2s;
}

.c-4 {
  top: 0;
  right: 20%;
  width: 2px;
  height: 100%;
  background: linear-gradient(0deg, transparent 40%, rgba(10, 132, 255, 0.5) 50%, transparent 60%);
  animation-delay: 3s;
}

@keyframes circuit-flow {
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
}

/* Tactical Animations */
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Terminal Cursor */
.terminal-cursor {
  animation: cursor-blink 1s infinite;
}

@keyframes cursor-blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* HUD Elements */
.hud-element {
  border: 1px solid rgba(0, 255, 65, 0.3);
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
}

/* Mission Timer Effect */
#mission-timer {
  text-shadow: 0 0 10px rgba(10, 132, 255, 0.8);
}

/* Tactical Button Effects */
button {
  position: relative;
  overflow: hidden;
}

button:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

button:hover:before {
  left: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .tactical-grid-bg {
    background-size: 30px 30px, 30px 30px, 5px 5px, 5px 5px;
  }
  
  .tactical-scanner {
    display: none;
  }
  
  .circuit {
    display: none;
  }
}
</style>
