<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid'
const page = ref(1)
function prevPage() {
  if (page.value > 1) {
    page.value -= 1
  }
}

function nextPage() {
  page.value += 1
}
const store = useCounterStore()
</script>
<template>
  <div class="flex flex-col p-4 text-gray-700">
    <h2 class="text-lg font-semibold mb-2">Focus Time Detail</h2>
    <p class="text-sm mb-4">* This report will be available when you are logged in</p>

    <div class="w-full max-w-md">
      <div class="flex justify-between font-semibold text-gray-500 border-b pb-2">
        <span>DATE</span>
        <span>PROJECT / TASK</span>
        <span>MINUTES</span>
      </div>

      <div class="flex items-center justify-center mt-8 space-x-4">
        <button
          @click="prevPage"
          :disabled="page === 1"
          class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeftIcon class="h-6 w-6 text-gray-500" />
        </button>
        <span class="font-semibold">{{ page }}</span>
        <button @click="nextPage" class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          <ChevronRightIcon class="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
