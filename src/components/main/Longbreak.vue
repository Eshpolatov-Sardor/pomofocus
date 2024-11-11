<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <div :class="['flex justify-center items-center flex-col', , 'text-white']">
      <div class="text-[130px] font-bold mb-4">{{ store.formattedTimeLong }}</div>
    </div>
    <button
      @click="
        store.isActivel && !store.isPausedl
          ? store.pauseLongBreakTimer()
          : store.startLongBreakTimer()
      "
      class="w-44 px-16 py-4 bg-white text-red-500 font-semibold text-2xl rounded shadow"
    >
      {{ store.isActivel && !store.isPausedl ? 'Pause' : 'Start' }}
    </button>
  </div>
</template>
<style scoped></style>
