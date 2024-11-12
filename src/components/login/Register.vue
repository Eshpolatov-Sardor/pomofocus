<script lang="ts" setup>
import { registerStore } from '@/stores/regiter';
import { useRouter } from 'vue-router';

const store = registerStore();
const router = useRouter();

function handleLogin() {
  store.submit();

  router.push('/');
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-[#ba4949]">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <div class="flex justify-center items-center mb-6">
        <RouterLink to="/" class="flex flex-col items-center cursor-pointer">
          <div class="text-6xl text-white mb-4">✔️</div>
          <h1 class="text-3xl font-bold text-gray-800 mb-2">Pomofocus</h1>
        </RouterLink>
      </div>

      <button
        class="flex items-center justify-center w-full border border-gray-300 py-2 rounded-md mb-4"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
          alt="Google"
          class="h-5 w-5 mr-2 text-gray-800"
        />
        Login with Google
      </button>

      <div class="flex items-center my-4">
        <div class="border-t border-gray-300 flex-grow"></div>
        <span class="mx-2 text-gray-400">or</span>
        <div class="border-t border-gray-300 flex-grow"></div>
      </div>
      <div class="mb-4">
        <label for="email" class="text-gray-600 text-sm">EMAIL</label>
        <input
          type="email"
          id="email"
          placeholder="example@mail.com"
          v-model="store.email"
          class="w-full border border-gray-300 px-4 py-2 rounded-md mt-1 focus:outline-none focus:border-gray-500"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="text-gray-600 text-sm">PASSWORD</label>
        <input
          type="password"
          id="password"
          placeholder="********"
          v-model="store.password"
          class="w-full border border-gray-300 px-4 py-2 rounded-md mt-1 focus:outline-none focus:border-gray-500"
        />
      </div>

      <button
        @click="handleLogin"
        class="w-full bg-gray-800 text-white py-2 rounded-md mb-4 hover:bg-gray-900"
      >
        Log in with Email
      </button>
      <div class="text-center text-sm text-gray-500 mb-4">
        <a href="#" class="hover:underline">Forgot Password</a>
      </div>
      <div class="text-center text-sm text-gray-500">
        Do not have an account?
        <RouterLink to="/register">
          <a href="#" class="text-blue-600 hover:underline">Create account</a>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
