<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
