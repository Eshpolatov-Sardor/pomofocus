<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/counter'
import Home from './Home.vue'
import FooterHelp from '../components/footer/FooterHelp.vue'

const store = useCounterStore()

const backgroundClass = computed(() => {
  if (store.ispomodoro) return 'bg-red-500'
  if (store.isshortbreak) return 'bg-blue-500'
  if (store.islongbreak) return 'bg-green-500'
  return ''
})
</script>

<template>
  <div :class="['flex justify-center items-center flex-col', backgroundClass]">
    <Home />
  </div>
  <div>
    <FooterHelp />
  </div>
</template>

<style scoped>
.bg-red-500 {
  background-color: #ba4949;
  color: #fff;
}

.bg-blue-500 {
  background-color: #38858a;
  color: #fff;
}

.bg-green-500 {
  background-color: #397097;
  color: #fff;
}
</style>
