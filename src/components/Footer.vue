<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { EllipsisVerticalIcon, PlusCircleIcon } from '@heroicons/vue/24/solid'
import AddTaskModal from '../components/footer/AddTaskModal.vue'

const store = useCounterStore()
</script>
<template>
  <div class="text-white py-4 rounded-lg w-[425px] pb-20">
    <h1 class="text-xl font-bold text-center">Time to focus!</h1>
    <div class="mt-4 w-full">
      <span class="flex justify-between border-b border-white pb-2">
        <p class="text-mono text-xl">Tasks</p>
        <EllipsisVerticalIcon class="size-6 bg-red cursor-pointer" />
      </span>
      <button
        @click="store.addtask"
        class="mt-12 rounded text-white text-2xl border-dashed border-2 border-white w-full py-4 flex items-center justify-center gap-2"
      >
        <PlusCircleIcon class="h-6 w-6 text-white" />
        Add Task
      </button>
      <AddTaskModal />
    </div>
  </div>
</template>

<style scoped></style>
