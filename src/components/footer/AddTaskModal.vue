<script setup lang="ts">
import { onMounted } from 'vue'
import { tasktitleStore } from '@/stores/tasktitle'
import { useCounterStore } from '@/stores/counter'

const tasktitle = tasktitleStore()
const store = useCounterStore()
</script>

<template>
  <div>
    <div v-if="store.isaddtask" class="bg-white text-black rounded-lg mt-10">
      <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
        <h2 class="text-gray-400 text-lg italic mb-4">
          <input
            v-model="tasktitle.taskTitle"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="What are you working on?"
          />
        </h2>

        <span class="text-gray-700">Est Pomodoros</span>
        <div class="flex items-center space-x-4 mb-4">
          <div class="flex items-center border border-gray-300 rounded-lg px-2 py-1">
            <input
              type="number"
              v-model="tasktitle.pomodoroCount"
              step="1"
              min="0"
              class="w-24 text-center outline-none"
            />
            <div class="flex flex-col ml-2">
              <button @click="tasktitle.increment" class="text-gray-500 hover:text-gray-700">
                ▲
              </button>
              <button @click="tasktitle.decrement" class="text-gray-500 hover:text-gray-700">
                ▼
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-4 text-gray-500 mb-4">
          <button class="underline">+ Add Note</button>
          <button class="underline flex items-center">
            + Add Project <span class="ml-1 text-gray-400">🔒</span>
          </button>
        </div>

        <div class="flex justify-end space-x-4 border-t pt-4">
          <button @click="store.closemodals" class="text-gray-500">Cancel</button>
          <button @click="tasktitle.savebuttons" class="bg-gray-800 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
