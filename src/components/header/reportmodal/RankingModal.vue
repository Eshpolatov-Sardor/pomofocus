<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid'

const store = useCounterStore()
</script>

<template>
  <div class="flex flex-col p-4 text-gray-700">
    <h2 class="text-lg font-semibold mb-4">Focus Time This Week</h2>
    <div class="w-full max-w-md flex justify-between border-b border-gray-400 px-8">
      <p class="text-xs text-gray-400">USER</p>
      <p class="text-xs text-gray-400">TIME(HH:MM)</p>
    </div>
    <div class="w-full max-w-md mt-1">
      <div class="flex flex-col space-y-2">
        <div
          v-for="(user, index) in store.paginatedUsers"
          :key="user.id"
          class="flex items-center justify-between py-2 px-4 bg-gray-100 rounded shadow-sm"
        >
          <div class="flex items-center space-x-4">
            <span class="text-sm font-semibold">{{
              index + 1 + (store.page - 1) * store.itemsPerPage
            }}</span>
            <img :src="user.avatar" alt="User Avatar" class="w-8 h-8 rounded-full" />
            <span>{{ user.name }}</span>
          </div>
          <span class="text-sm font-semibold">{{ user.time }}</span>
        </div>
      </div>

      <div class="flex items-center justify-center mt-4 space-x-4">
        <button
          @click="store.prevPage"
          :disabled="store.page === 1"
          class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
        <ChevronLeftIcon class="h-6 w-6 text-gray-500" />
        </button>
        <span class="font-semibold">{{ store.page }}</span>
        <button
          @click="store.nextPage"
          :disabled="store.page * store.itemsPerPage >= store.users.length"
          class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
        <ChevronRightIcon class="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
