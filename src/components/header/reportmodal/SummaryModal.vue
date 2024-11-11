<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto';
import { useCounterStore } from '@/stores/counter'
import { ClockIcon, CalendarDaysIcon, FireIcon } from '@heroicons/vue/16/solid'

const store = useCounterStore()
const chartData = ref([0.2, 0.4, 0.3, 0.5, 0.7, 0.6, 0.8]);
let focusChart;

onMounted(() => {
  const ctx = document.getElementById('focusChart').getContext('2d');
  focusChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
        label: 'Focus Time (hrs)',
        data: chartData.value,
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});
</script>
<template>
  <div>
    <h2 class="text-gray-700 font-semibold mb-2">Activity Summary</h2>
    <p class="text-gray-400 mb-4 text-sm">* This report will be available when you are logged in</p>
    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="bg-red-50 p-4 rounded-lg text-center">
        <ClockIcon class="h-6 w-6 text-red-500" />
        <span class="text-2xl text-red-400 text-end">--</span>
        <p class="text-red-500 text-sm mt-1">hours focused</p>
      </div>
      <div class="bg-red-50 p-4 rounded-lg text-center">
        <CalendarDaysIcon class="h-6 w-6 text-red-500" />
        <span class="text-2xl text-red-400 text-end">--</span>
        <p class="text-red-500 text-sm mt-1">days accessed</p>
      </div>
      <div class="bg-red-50 p-4 rounded-lg text-center">
        <FireIcon class="h-6 w-6 text-red-500" />
        <span class="text-2xl text-red-400 text-end">--</span>
        <p class="text-red-500 text-sm mt-1">day streak</p>
      </div>
    </div>

    <h2 class="text-gray-700 font-semibold mb-2">Focus Hours</h2>
    <div class="flex items-center justify-end space-x-4 mb-4">
      <button
        class="px-4 py-2 border rounded-lg"
        :class="
          store.focusTab === 'week'
            ? 'bg-red-100 text-red-500 border-red-300'
            : 'text-gray-400 border-gray-300'
        "
        @click="store.focusTab = 'week'"
      >
        Week
      </button>
      <button
        class="px-4 py-2 border rounded-lg"
        :class="
          store.focusTab === 'month'
            ? 'bg-red-100 text-red-500 border-red-300'
            : 'text-gray-400 border-gray-300'
        "
        @click="store.focusTab = 'month'"
      >
        Month
      </button>
      <button
        class="px-4 py-2 border rounded-lg flex items-center"
        :class="
          store.focusTab === 'year'
            ? 'bg-red-100 text-red-500 border-red-300'
            : 'text-gray-400 border-gray-300'
        "
        @click="store.focusTab = 'year'"
      >
        Year <span class="ml-1 text-gray-400">🔒</span>
      </button>
    </div>

    <div class="flex items-center justify-end mb-4 space-x-4">
      <button class="text-red-400">&lt;</button>
      <span class="text-gray-500">This Week</span>
      <button class="text-red-400">&gt;</button>
    </div>

    <p class="text-gray-400 text-sm">* This report will be available when you are logged in</p>
    <div class="p-6">
    <h2 class="text-xl font-semibold mb-4 text-gray-700">Weekly Focus Time</h2>

    <!-- Grafik -->
    <div class="w-full h-64 mb-4 bg-gray-50 rounded shadow p-4">
      <canvas id="focusChart"></canvas>
    </div>

    <!-- Hisobot -->
    <div class="flex justify-between mt-4">
      <span class="font-semibold text-gray-500">PROJECT</span>
      <span class="font-semibold text-gray-500">TIME(HH:MM)</span>
    </div>
    <div class="flex justify-between py-2 mt-2 border-t">
      <span class="text-gray-600">Total</span>
      <span class="text-gray-600">05:00</span>
    </div>
  </div>
  </div>
</template>
<style scoped></style>
