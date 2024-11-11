<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { ArrowRightEndOnRectangleIcon, GiftIcon, CircleStackIcon } from '@heroicons/vue/16/solid'

const store = useCounterStore()
</script>
<template>
  <div v-if="store.isbarmenu" class="bg-white px-4 py-4 rounded-lg mt-2 ml-[560px] opacity-100">
    <h1 @click="store.closemodals" class="text-black text-end cursor-pointer">X</h1>
    <div class="flex items-center gap-2">
      <ArrowRightEndOnRectangleIcon class="h-6 w-6 text-black" />
      <h1 class="text-black">Login</h1>
    </div>
    <div class="flex items-center gap-2 mt-2">
      <GiftIcon class="h-6 w-6 text-black" />
      <h1 class="text-black">Premium</h1>
    </div>
    <div class="flex items-center gap-2 mt-2">
      <CircleStackIcon class="h-6 w-6 text-black" />
      <h1 class="text-black">SHortcuts</h1>
    </div>
  </div>
</template>
<style scoped></style>
