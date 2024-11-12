<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { EllipsisVerticalIcon, PlusCircleIcon, TrashIcon } from '@heroicons/vue/24/solid'
import AddTaskModal from '../components/footer/AddTaskModal.vue'
import { tasktitleStore } from '@/stores/tasktitle'

onMounted(() => {
  tasktitle.fetchTasks()
})
const tasktitle = tasktitleStore()
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
      <ul>
        <li
          v-for="(task, index) in tasktitle.tasks"
          :key="task.id"
          class="text-gray-700 flex justify-between items-center px-4 py-2 bg-slate-300 rounded-lg mt-2"
        >
          <span>{{ task.title }}</span>
          <button @click="tasktitle.deleteTask(task.id)" class="text-red-500 hover:text-red-700">
            <TrashIcon class="size-6 bg-red cursor-pointer" />
          </button>
        </li>
      </ul>
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
