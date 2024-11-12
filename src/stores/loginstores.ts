import { ref } from 'vue'
import { defineStore } from 'pinia'

export const loginStore = defineStore('login', () => {
  const email = ref<string>('')
  const savedEmail = ref<string>(localStorage.getItem('loginemail') || '')

  function submit() {
    if (savedEmail.value !== '') {
      localStorage.setItem('loginemail', email.value)
      savedEmail.value = email.value
      email.value = ''
      alert('Login successful!')
    } else {
      alert('register failed!')
    }
  }

  return { email, savedEmail, submit }
})
