<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import Pomodoro from './main/Pomodoro.vue'
import Shortbreak from './main/Shortbreak.vue'
import Longbreak from './main/Longbreak.vue'

const activeTab = ref('pomodoro')
const store = useCounterStore()

function setActiveTab(tab: string) {
  activeTab.value = tab

  // Store ichidagi tegishli funksiya chaqiriladi
  if (tab === 'pomodoro') store.pomodoro()
  else if (tab === 'shortbreak') store.shortbreak()
  else if (tab === 'longbreak') store.longbreak()
}
</script>

<template>
  <div class="relative flex flex-col justify-center items-center pl-10 pr-10 pb-8 pt-5 mt-5">
    <div class="absolute inset-0 bg-black opacity-10 z-[10] rounded-lg"></div>
    <div class="relative z-20 w-full flex justify-center gap-10">
      <div
        @click="setActiveTab('pomodoro')"
        :class="{ 'bg-opacity-50 bg-gray-300': activeTab === 'pomodoro' }"
        class="cursor-pointer text-lg font-semibold p-2 rounded"
      >
        Pomodoro
      </div>
      <div
        @click="setActiveTab('shortbreak')"
        :class="{ 'bg-opacity-50 bg-gray-300': activeTab === 'shortbreak' }"
        class="cursor-pointer text-lg font-semibold p-2 rounded"
      >
        Short Break
      </div>
      <div
        @click="setActiveTab('longbreak')"
        :class="{ 'bg-opacity-50 bg-gray-300': activeTab === 'longbreak' }"
        class="cursor-pointer text-lg font-semibold p-2 rounded"
      >
        Long Break
      </div>
    </div>

    <div class="relative z-20 flex flex-col items-center">
      <div v-if="activeTab === 'pomodoro'">
        <Pomodoro />
      </div>
      <div v-if="activeTab === 'shortbreak'">
        <Shortbreak />
      </div>
      <div v-if="activeTab === 'longbreak'">
        <Longbreak />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
