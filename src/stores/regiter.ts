import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const registerStore = defineStore('register', () => {
  interface User {
    id: number
    email: string
    password: string
  }

  const email = ref<string>('')
  const password = ref<string>('')
  const users = ref<User[]>([])

  onMounted(() => {
    const storedUsers = localStorage.getItem('users')
    if (storedUsers) {
      users.value = JSON.parse(storedUsers)
    }
  })

  function saveToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users.value))
  }

  function submit() {
    if (email.value && password.value) {
      const newUser: User = {
        id: Date.now(),
        email: email.value,
        password: password.value,
      }
      users.value.push(newUser)
      saveToLocalStorage()
      email.value = ''
      password.value = ''
    }
  }

  function removeUser(id: number) {
    users.value = users.value.filter((user) => user.id !== id)
    saveToLocalStorage()
  }

  return { email, password, users, submit, removeUser }
})
