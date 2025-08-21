<template>
	<div class="container mx-auto py-8">
		<h1 class="text-2xl font-bold mb-4">Bandeja de Entrada Varnox</h1>
		<div v-if="loading" class="text-gray-500">Cargando mensajes...</div>
		<div v-else-if="contacts.length === 0" class="text-gray-500">No hay mensajes.</div>
		<div v-else>
			<table class="min-w-full bg-white border border-gray-200">
				<thead>
					<tr>
						<th class="px-4 py-2 border">Nombre</th>
						<th class="px-4 py-2 border">Email</th>
						<th class="px-4 py-2 border">Teléfono</th>
						<th class="px-4 py-2 border">Mensaje</th>
						<th class="px-4 py-2 border">Fecha</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="contact in contacts" :key="contact.id">
						<td class="px-4 py-2 border">{{ contact.name }}</td>
						<td class="px-4 py-2 border">{{ contact.email }}</td>
						<td class="px-4 py-2 border">{{ contact.phone }}</td>
						<td class="px-4 py-2 border">{{ contact.message }}</td>
						<td class="px-4 py-2 border">{{ formatDate(contact.created_at) }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const contacts = ref([])
const loading = ref(true)

function formatDate(dateStr) {
	if (!dateStr) return ''
	return new Date(dateStr).toLocaleString()
}

onMounted(async () => {
	try {
		const res = await fetch('http://localhost:8000/bandeja_entrada_varnox')
		const data = await res.json()
		contacts.value = data.contacts || []
	} catch (e) {
		contacts.value = []
	} finally {
		loading.value = false
	}
})
</script>

<style scoped>
table { border-collapse: collapse; width: 100%; }
th, td { text-align: left; }
</style>
