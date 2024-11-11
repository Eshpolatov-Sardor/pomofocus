<script setup lang="ts">
import { ref } from 'vue'
import {
  CheckCircleIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  EllipsisVerticalIcon,
} from '@heroicons/vue/24/solid'
import { useCounterStore } from '@/stores/counter'
import ReportModal from '../components/header/ReportModal.vue'
import SettingModal from '../components/header/SettingModal.vue'
import BarMenu from '../components/header/BarMenu.vue'

const store = useCounterStore()
</script>
<template>
  <div class="w-[100%] flex justify-between items-cente text-xxs mt-5 pb-3">
    <div class="flex items-center cursor-pointer">
      <CheckCircleIcon class="size-6 bg-red cursor-pointer" />
      <p>Pomofocus</p>
    </div>
    <div class="flex gap-5">
      <div @click="store.reportmodal" class="flex items-center gap-1 cursor-pointer">
        <ChartBarSquareIcon class="size-6 bg-red" />
        <p>Report</p>
      </div>
      <div @click="store.settingmodal" class="flex items-center gap-1 cursor-pointer">
        <Cog6ToothIcon class="size-6 bg-red" />
        <p>Setting</p>
      </div>
      <RouterLink to="/login">
        <div class="flex items-center gap-1 cursor-pointer">
          <UserCircleIcon class="size-6 bg-red" />
          <p>Sigin In</p>
        </div>
      </RouterLink>
      <div @click="store.barmenu" class="flex items-center">
        <EllipsisVerticalIcon class="size-6 bg-red cursor-pointer" />
      </div>
    </div>
  </div>
  <div class="absolute z-[100] w-[45%]">
    <ReportModal />
    <SettingModal />
    <BarMenu />
  </div>
</template>
<style scoped></style>
