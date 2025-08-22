<template>
  <section id="servicios" class="py-8 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-orange-900 mb-2 font-mono tracking-widest">
          Servicios 
        </h2>
        <p class="text-orange-700 text-base md:text-lg font-mono">
        
        </p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
        <div v-for="(service, i) in services3d" :key="i">
          <div class="card-uiverse">
            <div class="tools-uiverse">
              <div class="circle-uiverse"><span class="red-uiverse box-uiverse"></span></div>
              <div class="circle-uiverse"><span class="yellow-uiverse box-uiverse"></span></div>
              <div class="circle-uiverse"><span class="green-uiverse box-uiverse"></span></div>
            </div>
            <div class="card__content-uiverse">
              <i :class="service.icon" class="icon-uiverse"></i>
              <p class="title-uiverse">{{ service.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const services3d = [
  { icon: 'fas fa-shield-alt', title: 'Ciberseguridad', color: '#b6e94e' },
  { icon: 'fas fa-satellite-dish', title: 'Comunicaciones', color: '#ffb347' },
  { icon: 'fas fa-server', title: 'Infraestructura', color: '#a084e8' },
  { icon: 'fas fa-search', title: 'Forense Digital', color: '#ff6f61' },
  { icon: 'fas fa-eye', title: 'Vigilancia', color: '#6ec1e4' },
  { icon: 'fas fa-lock', title: 'Cifrado', color: '#ffe156' },
  { icon: 'fas fa-bug', title: 'Pentesting', color: '#f7b2b7' },
  { icon: 'fas fa-network-wired', title: 'Redes', color: '#b2f7ef' },
  { icon: 'fas fa-user-secret', title: 'Inteligencia', color: '#f7e6b2' },
  { icon: 'fas fa-database', title: 'Datos', color: '#b2b7f7' },
]
</script>

<style scoped>


  /* --- Uiverse.io Card Style --- */
  .card-uiverse {
    width: 120px;
    height: 160px;
    margin: 0 auto;
    background-color: #f4f4f3;
    border-radius: 12px;
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 16px 0 rgba(31, 38, 135, 0.11);
    border: none;
    overflow: hidden;
    transition: box-shadow 0.22s, transform 0.18s;
  }
  .card-uiverse:hover {
    box-shadow: 0 8px 24px 0 rgba(31, 38, 135, 0.16);
    transform: translateY(-4px) scale(1.03);
  }
  .card-uiverse::after {
    position: absolute;
    content: '';
    background-color: #454a50;
    width: 36px;
    height: 70px;
    z-index: -1;
    border-radius: 8px;
    top: 28px;
    left: -12px;
    opacity: 0.13;
  }
  .tools-uiverse {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 7px 10px 6px 10px;
    border-radius: 10px 10px 0 0;
    background: #454a50;
    margin-top: 0;
    margin-bottom: 7px;
    height: 28px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06);
  }
  .circle-uiverse {
    padding: 0 3px;
  }
  .box-uiverse {
    display: inline-block;
    align-items: center;
    width: 8px;
    height: 8px;
    padding: 1px;
    border-radius: 50%;
  }
  .red-uiverse {
    background-color: #ff605c;
  }
  .yellow-uiverse {
    background-color: #ffbd44;
  }
  .green-uiverse {
    background-color: #00ca4e;
  }
  .card__content-uiverse {
    flex: 1;
    width: 100%;
    margin: 0;
    border-radius: 0 0 12px 12px;
    background: #f4f4f3;
    padding: 0 10px 8px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }
  .icon-uiverse {
    color: #232a47;
    font-size: 1.45rem;
    margin-bottom: 0.1rem;
    margin-top: 0.05rem;
    text-shadow: 0 2px 8px rgba(0,0,0,0.10);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .title-uiverse {
    font-size: 0.98rem;
    font-weight: 700;
    color: #232a47;
    text-align: center;
    margin: 0;
    letter-spacing: 0.3px;
    line-height: 1.15;
    max-width: 100%;
    white-space: normal;
    word-break: break-word;
    display: block;
  }
  @keyframes autoRun3d {
    from {
      transform: perspective(800px) rotateY(-360deg);
    }
    to {
      transform: perspective(800px) rotateY(0deg);
    }
  }
  .ticket-green {
    background: #b6e94e;
    border-color: #4eae3a;
    color: #1a2e05;
  }
  .ticket-orange {
    background: #ffb347;
    border-color: #ff7f11;
    color: #4a2c06;
  }
  .ticket-purple {
    background: #a084e8;
    border-color: #5e3ea1;
    color: #2d1a4a;
  }
  .ticket-red {
    background: #ff6f61;
    border-color: #c0392b;
    color: #4a1a1a;
  }
  .ticket-blue {
    background: #6ec1e4;
    border-color: #2176ae;
    color: #0a2239;
  }
  .ticket-yellow {
    background: #ffe156;
    border-color: #ffb100;
    color: #4a3a06;
  }
</style>
