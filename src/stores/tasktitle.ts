import { ref } from 'vue'
import { defineStore } from 'pinia'

export const tasktitleStore = defineStore('tasktitle', () => {
  const pomodoroCount = ref<number>(1)
  const taskTitle = ref<string>('')
  const tasks = ref<any[]>([])

  function increment() {
    pomodoroCount.value += 1
  }

  function decrement() {
    if (pomodoroCount.value > 0) {
      pomodoroCount.value -= 1
    }
  }

  async function savebuttons() {
    try {
      const response = await fetch('http://localhost:3000/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: taskTitle.value,
          pomodoroCount: pomodoroCount.value,
        }),
      })
      if (response.ok) {
        console.log('Task title saved successfully')
        fetchTasks()
      } else {
        console.error('Failed to save task title')
      }
    } catch (error) {
      console.error('Error saving task title:', error)
    }
    taskTitle.value = ''
  }

  async function fetchTasks() {
    try {
      const response = await fetch('http://localhost:3000/task')
      if (response.ok) {
        const data = await response.json()
        tasks.value = data
      } else {
        alert('Failed to fetch tasks')
      }
    } catch (error) {
      alert('Error fetching tasks:')
    }
  }
  async function deleteTask(taskId: number) {
    try {
      const response = await fetch(`http://localhost:3000/task/${taskId}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        console.log('Task deleted successfully')
        fetchTasks()
      } else {
        console.error('Failed to delete task')
      }
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  return {
    decrement,
    pomodoroCount,
    taskTitle,
    tasks,
    savebuttons,
    fetchTasks,
    increment,
    deleteTask,
  }
})
