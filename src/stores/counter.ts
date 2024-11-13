import { ref, computed, onMounted, watch } from 'vue'
import { defineStore } from 'pinia'
import sound from '../assets/audio/shortbreak.mp3'
import pomodorosound from '../assets/audio/pomodoro tugadi ilti (1).mp3'
import longsound from '../assets/audio/Long break tugadi il.mp3'

export const useCounterStore = defineStore('counter', () => {
  const isreportmodal = ref(false)
  const issettingmodal = ref(false)
  const isbarmenu = ref(false)
  const ispomodoro = ref(true)
  const isshortbreak = ref(false)
  const islongbreak = ref(false)
  const timeLeft = ref(1500)
  const timeLeftsh = ref(300)
  const timeLeftl = ref(900)
  const timerInterval = ref<ReturnType<typeof setInterval> | null>(null)
  const timerIntervalsh = ref<ReturnType<typeof setInterval> | null>(null)
  const timerIntervall = ref<ReturnType<typeof setInterval> | null>(null)
  const isActive = ref(false)
  const isPaused = ref(false)
  const isActivesh = ref(false)
  const isPausedsh = ref(false)
  const isActivel = ref(false)
  const isPausedl = ref(false)
  const isaddtask = ref(false)
  const tab = ref<'summary' | 'detail' | 'ranking'>('summary')
  const focusTab = ref<'week' | 'month' | 'year'>('week')
  const page = ref(1)
  const itemsPerPage = 10
  const users = ref([])
  const pomodorominutts = ref([])
  const shortbreakminutts = ref([])
  const longbreakminutts = ref([])

  const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60)
      .toString()
      .padStart(2, '0')
    const seconds = (timeLeft.value % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  })

  watch(timeLeft, async (newTime) => {
    console.log(timeLeft.value)

    if (newTime === 0) {
      const audioElement = document.createElement('audio')
      audioElement.src = pomodorosound
      audioElement.load()
      audioElement.play()
    }
  })

  const formattedTimeShort = computed(() => {
    const minutes = Math.floor(timeLeftsh.value / 60)
      .toString()
      .padStart(2, '0')
    const seconds = (timeLeftsh.value % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  })

  watch(timeLeftsh, async (newTime) => {
    if (newTime === 0) {
      const audioElement = document.createElement('audio')
      audioElement.src = sound
      audioElement.load()
      audioElement.play()
    }
  })

  const formattedTimeLong = computed(() => {
    const minutes = Math.floor(timeLeftl.value / 60)
      .toString()
      .padStart(2, '0')
    const seconds = (timeLeftl.value % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  })

  watch(timeLeftl, async (newTime) => {
    if (newTime === 0) {
      const audioElement = document.createElement('audio')
      audioElement.src = longsound
      audioElement.load()
      audioElement.play()
    }
  })

  const paginatedUsers = computed(() => {
    const start = (page.value - 1) * itemsPerPage
    return users.value.slice(start, start + itemsPerPage)
  })
  function reportmodal() {
    isreportmodal.value = true
    issettingmodal.value = false
    isbarmenu.value = false
  }

  function settingmodal() {
    isreportmodal.value = false
    issettingmodal.value = true
    isbarmenu.value = false
  }

  function barmenu() {
    isreportmodal.value = false
    issettingmodal.value = false
    isbarmenu.value = true
  }

  function pomodoro() {
    ispomodoro.value = true
    isshortbreak.value = false
    islongbreak.value = false
    timeLeft.value = 1500
  }

  function shortbreak() {
    ispomodoro.value = false
    isshortbreak.value = true
    islongbreak.value = false
    timeLeft.value = 300
  }

  function longbreak() {
    ispomodoro.value = false
    isshortbreak.value = false
    islongbreak.value = true
    timeLeft.value = 600
  }

  function closemodals() {
    isreportmodal.value = false
    issettingmodal.value = false
    isbarmenu.value = false
    isaddtask.value = false
  }

  function startPomodoroTimer() {
    if (!isActive.value || isPaused.value) {
      isActive.value = true
      isPaused.value = false
      timerInterval.value = setInterval(() => {
        if (timeLeft.value > 0) {
          timeLeft.value--
        } else {
          stopPomodoroTimer()
        }
      }, 1000)
    }
  }

  function pausePomodoroTimer() {
    if (isActive.value && !isPaused.value) {
      clearInterval(timerInterval.value!)
      isPaused.value = true
    }
  }

  function stopPomodoroTimer() {
    if (timerInterval.value) {
      clearInterval(timerInterval.value)
    }
    isActive.value = false
    isPaused.value = false
  }

  function startShortBreakTimer() {
    if (!isActivesh.value || isPausedsh.value) {
      isActivesh.value = true
      isPausedsh.value = false
      timerIntervalsh.value = setInterval(() => {
        if (timeLeftsh.value > 0) {
          timeLeftsh.value--
        } else {
          stopShortBreakTimer()
        }
      }, 1000)
    }
  }

  function pauseShortBreakTimer() {
    if (isActivesh.value && !isPausedsh.value) {
      clearInterval(timerIntervalsh.value!)
      isPausedsh.value = true
    }
  }

  function stopShortBreakTimer() {
    if (timerIntervalsh.value) {
      clearInterval(timerIntervalsh.value)
    }
    isActivesh.value = false
    isPausedsh.value = false
  }

  function startLongBreakTimer() {
    if (!isActivel.value || isPausedl.value) {
      isActivel.value = true
      isPausedl.value = false
      timerIntervall.value = setInterval(() => {
        if (timeLeftl.value > 0) {
          timeLeftl.value--
        } else {
          stopLongBreakTimer()
        }
      }, 1000)
    }
  }

  function pauseLongBreakTimer() {
    if (isActivel.value && !isPausedl.value) {
      clearInterval(timerIntervall.value!)
      isPausedl.value = true
    }
  }

  function stopLongBreakTimer() {
    if (timerIntervall.value) {
      clearInterval(timerIntervall.value)
    }
    isActivel.value = false
    isPausedl.value = false
  }

  function resetTimer() {
    timeLeft.value = 1500
    stopPomodoroTimer()
  }

  function addtask() {
    isaddtask.value = true
  }

  async function fetchPosts() {
    try {
      const response = await fetch('http://localhost:3000/users')
      if (response.ok) {
        const data = await response.json()
        users.value = data
      } else {
        console.error('Failed to fetch posts')
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  function prevPage() {
    if (page.value > 1) {
      page.value -= 1
    }
  }

  function nextPage() {
    if (page.value * itemsPerPage < users.value.length) {
      page.value += 1
    }
  }
  
  onMounted(() => {
    fetchPosts()
  })

  return {
    isreportmodal,
    issettingmodal,
    isbarmenu,
    ispomodoro,
    isshortbreak,
    islongbreak,
    timeLeft,
    timeLeftsh,
    timeLeftl,
    isActive,
    isActivesh,
    isActivel,
    formattedTime,
    formattedTimeShort,
    formattedTimeLong,
    isPaused,
    isPausedsh,
    isPausedl,
    isaddtask,
    tab,
    focusTab,
    users,
    page,
    itemsPerPage,
    paginatedUsers,
    reportmodal,
    settingmodal,
    barmenu,
    pomodoro,
    shortbreak,
    longbreak,
    closemodals,
    startPomodoroTimer,
    pausePomodoroTimer,
    stopPomodoroTimer,
    startShortBreakTimer,
    pauseShortBreakTimer,
    stopShortBreakTimer,
    startLongBreakTimer,
    pauseLongBreakTimer,
    stopLongBreakTimer,
    resetTimer,
    addtask,
    prevPage,
    nextPage,
  }
})
