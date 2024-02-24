<script setup>
import { ref, onMounted } from 'vue'

const hits = ref('?')

onMounted(() => {
  (async () => {
    const res = await fetch('/api/hits')
    const body = await res.json()
    hits.value = body.hits
  })()
})
</script>

<template>
  <div class="section">
    <div class="hero">
      Hello World!
      <br />
      <small>
        Hit Count #{{ hits }}
      </small>
    </div>
    
  </div>
</template>

<style>
.section {
  font-family: Menlo, Arial;
  font-size: 8rem;
  text-align: center;
  display: grid;
  justify-content: center;
  align-content: center;
  margin-top: 4rem;
}

.hero {
  padding: 12px;
  display: inline-block;
}

.hero small {
  font-size: 2rem;
}
</style>