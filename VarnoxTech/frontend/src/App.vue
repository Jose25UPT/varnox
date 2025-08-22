<template>
  <div id="app" class="min-h-screen w-full bg-slate-900 flex flex-col">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('VARNOX App Initialized')
})
</script>

<style>
#app {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--varnox-bg-primary);
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}
</style>

