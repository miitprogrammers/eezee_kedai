<template>
  <div>
    <h1>OpenAPI Viewer</h1>
    <div v-if="error">Error: {{ error }}</div>
    <div v-else-if="loading">Loading...</div>
    <div v-else>
      <h2>{{ spec.info.title }} (v{{ spec.info.version }})</h2>
      <ul>
        <li v-for="(p, idx) in paths" :key="idx">{{ p }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { getOpenApiJson } from '../api/client'

  const spec = ref(null)
  const loading = ref(true)
  const error = ref(null)
  const paths = ref([])

  onMounted(async () => {
    try {
      const j = await getOpenApiJson()
      spec.value = j
      paths.value = Object.keys(j.paths || {})
    } catch (err) {
      error.value = err && err.message ? err.message : String(err)
    } finally {
      loading.value = false
    }
  })
</script>

<style scoped>
h1 { margin-bottom: 0.5rem }
</style>
