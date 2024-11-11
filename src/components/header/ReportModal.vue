<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/counter'
import SummaryModal from '../header/reportmodal/SummaryModal.vue'
import DetailModal from '../header/reportmodal/DetailModal.vue'
import RankingModal from '../header/reportmodal/RankingModal.vue'

const store = useCounterStore()
</script>
<template>
  <div v-if="store.isreportmodal" class="modal-content">
    <div class="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 @click="store.closemodals" class="text-black text-end cursor-pointer">X</h1>
      <div class="flex border-b mb-4">
        <button
          class="flex-1 py-2 text-center border-b-2"
          :class="
            store.tab === 'summary'
              ? 'border-red-300 text-red-500'
              : 'border-transparent text-gray-400'
          "
          @click="store.tab = 'summary'"
        >
          Summary
        </button>
        <button
          class="flex-1 py-2 text-center border-b-2"
          :class="
            store.tab === 'detail'
              ? 'border-red-300 text-red-500'
              : 'border-transparent text-gray-400'
          "
          @click="store.tab = 'detail'"
        >
          Detail
        </button>
        <button
          class="flex-1 py-2 text-center border-b-2"
          :class="
            store.tab === 'ranking'
              ? 'border-red-300 text-red-500'
              : 'border-transparent text-gray-400'
          "
          @click="store.tab = 'ranking'"
        >
          Ranking
        </button>
      </div>
      <div>
        <div v-if="store.tab === 'summary'">
          <SummaryModal />
        </div>
        <div v-if="store.tab === 'detail'">
          <DetailModal />
        </div>
        <div v-if="store.tab === 'ranking'">
          <RankingModal />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
