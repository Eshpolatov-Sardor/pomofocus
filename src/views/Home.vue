<script setup lang="ts">
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <header class="w-[45%] border-b border-black">
    <Header />
  </header>
  <main>
    <section>
      <Main />
    </section>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped></style>
