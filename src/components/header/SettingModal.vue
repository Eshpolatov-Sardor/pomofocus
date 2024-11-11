<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>
<template>
  <div v-if="store.issettingmodal" class="modal-content ml-[120px] mt-5">
    <div class="w-[450px] flex flex-col p-4 bg-gray-50 rounded-lg shadow-md">
      <h1 @click="store.closemodals" class="text-black text-end cursor-pointer">X</h1>
      <h2 class="text-sm font-bold mb-2 text-gray-600">⏲ TIMER</h2>
      <div class="mb-4">
        <label class="block text-xs font-medium text-gray-500">Time (minutes)</label>
        <div class="flex justify-between mt-2 text-black">
          <div>
            <h1>Pomodoro</h1>
            <input type="number" class="w-20 p-1 text-center border rounded-md" value="25" />
          </div>
          <div>
            <h1>Short Break</h1>
            <input type="number" class="w-20 p-1 text-center border rounded-md" value="5" />
          </div>
          <div>
            <h1>Long Break</h1>
            <input type="number" class="w-20 p-1 text-center border rounded-md" value="15" />
          </div>
        </div>
        <div class="flex items-center mt-3">
          <span class="font-medium text-gray-500">Auto Start Breaks</span>
          <input type="checkbox" class="ml-auto toggle-checkbox" />
        </div>
        <div class="flex items-center mt-3">
          <span class="font-medium text-gray-500">Auto Start Pomodoros</span>
          <input type="checkbox" class="ml-auto toggle-checkbox" />
        </div>
        <div class="flex items-center mt-3">
          <span class="font-medium text-gray-500">Long Break Interval</span>
          <input
            type="number"
            class="ml-auto w-16 p-1 text-center border rounded-md text-black"
            value="4"
          />
        </div>
      </div>

      <h2 class="text- font-bold mb-2 text-gray-600">☑ TASK</h2>
      <div class="mb-4">
        <div class="flex items-center">
          <span class="text-lg font-medium text-gray-500">Auto Check Tasks</span>
          <input type="checkbox" class="ml-auto toggle-checkbox" />
        </div>
        <div class="flex items-center mt-3">
          <span class="text-lg font-medium text-gray-500">Auto Switch Tasks</span>
          <input type="checkbox" checked class="ml-auto toggle-checkbox" />
        </div>
      </div>

      <h2 class="text-sm font-bold mb-2 text-gray-600">🔊 SOUND</h2>
      <div class="mb-4 flex flex-col justify-end">
        <label class="block text-xs font-medium text-gray-500">Alarm Sound</label>
        <select class="w-32 p-1 mt-1 border rounded-md text-black">
          <option>Kitchen</option>
          <option>Bell</option>
          <option>Digital</option>
        </select>
        <input type="range" min="0" max="100" class="w-full mt-3" />
      </div>
      <div class="mb-4 flex flex-col justify-end">
        <label class="block text-xs font-medium text-gray-500 mt-2">Ticking Sound</label>
        <select class="w-32 p-1 mt-1 border rounded-md text-black">
          <option>None</option>
          <option>Clock</option>
          <option>Beep</option>
        </select>
        <input type="range" min="0" max="100" class="w-full mt-3" />
      </div>

      <h2 class="text-sm font-bold mb-2 text-gray-600">🎨 THEME</h2>
      <div class="mb-4">
        <div class="flex items-center space-x-2">
          <button class="w-12 h-12 bg-red-600 rounded-lg"></button>
          <button class="w-12 h-12 bg-blue-600 rounded-lg"></button>
          <button class="w-12 h-12 bg-green-600 rounded-lg"></button>
        </div>
        <div class="flex justify-between">
          <label class="block text-lg font-medium text-gray-500 mt-3">Hour Format</label>
          <select class="w-24 p-1 mt-1 border rounded-md text-black">
            <option>24-hour</option>
            <option>12-hour</option>
          </select>
        </div>
        <div class="flex items-center mt-3">
          <span class="text-xs font-medium text-gray-500">Dark Mode when running</span>
          <input type="checkbox" class="ml-auto toggle-checkbox" />
        </div>
        <div class="flex items-center mt-3">
          <span class="text-xs font-medium text-gray-500">Small Window</span>
          <button class="ml-auto border p-1 rounded-md text-sm text-black">Open</button>
        </div>
      </div>

      <!-- Notification Section -->
      <h2 class="text-sm font-bold mb-2 text-gray-600">🔔 NOTIFICATION</h2>
      <div class="mb-4">
        <div class="flex items-center">
          <label class="text-xs font-medium text-gray-500">Reminder</label>
          <input
            type="number"
            placeholder="min"
            class="ml-auto w-12 p-1 text-center border rounded-md"
          />
        </div>
        <div class="flex items-center mt-3 text-black">
          <span class="text-xs font-medium text-gray-500">Mobile Alarm</span>
          <button class="ml-auto border p-1 rounded-md text-sm">Add this device</button>
        </div>
      </div>

      <!-- Integration Section -->
      <h2 class="text-sm font-bold mb-2 text-gray-600">🔗 INTEGRATION</h2>
      <div class="mb-4 text-black">
        <div class="flex items-center">
          <span class="text-xs font-medium text-gray-500">Todoist</span>
          <button class="ml-auto border p-1 rounded-md text-sm">Connect</button>
        </div>
        <div class="flex items-center mt-3">
          <span class="text-xs font-medium text-gray-500">Webhook</span>
          <button class="ml-auto border p-1 rounded-md text-sm">Add</button>
        </div>
      </div>

      <!-- OK Button -->
      <button class="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600">
        OK
      </button>
    </div>
  </div>
</template>
<style scoped>
.toggle-checkbox {
  width: 1.25rem;
  height: 1.25rem;
  background-color: #e2e8f0; /* Tailwind's gray-300 */
  border-radius: 9999px;
  transition: background-color 0.3s;
}

.toggle-checkbox:checked {
  background-color: #4ade80; /* Tailwind's green-400 */
}
</style>
