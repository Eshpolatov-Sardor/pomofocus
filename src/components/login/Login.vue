<script lang="ts" setup>
import { loginStore } from '@/stores/loginstores'
import { ref } from 'vue'

const store = loginStore()
</script>

<template>
  <div
    @submit.prevent="store.submit"
    class="flex items-center justify-center min-h-screen bg-[#ba4949]"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
      <div class="flex flex-col items-center">
        <RouterLink to="/">
          <div class="text-6xl text-white mb-4">✔️</div>
          <h1 class="text-3xl font-bold text-gray-800 mb-2">Pomofocus</h1>
        </RouterLink>
      </div>
      <button
        class="flex items-center justify-center mt-6 w-full px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
          alt="Google"
          class="h-5 w-5 mr-2 text-gray-800"
        />
        <p class="text-gray-800">Signup with Google</p>
      </button>
      <div class="my-4 flex items-center">
        <div class="flex-grow border-t border-gray-300"></div>
        <span class="mx-2 text-gray-800">or</span>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>
      <div class="text-left mb-4">
        <label class="text-gray-600 text-sm font-semibold">Email</label>
        <input
          v-model="store.email"
          type="email"
          placeholder="example@mail.com"
          class="w-full mt-2 px-4 py-2 border rounded-md bg-gray-100 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        @click="store.submit"
        class="w-full px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
      >
        Sign up with Email
      </button>
      <p class="mt-6 text-gray-600">
        Already have an account?
        <RouterLink to="register">
          <a href="#" class="text-blue-500 hover:underline">Register</a>
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
