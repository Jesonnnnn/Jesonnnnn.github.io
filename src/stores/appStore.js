import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const navItems = ref([
    { id: '/', text: 'Home' },
    { id: '/books', text: 'BookList' },
    { id: '/wordcloud', text: 'Word Cloud' },
    { id: '/llm-wordcloud', text: 'LLM Word Cloud' },
    { id: '/snake', text: 'Snake Game' }
  ])

  const personalInfo = ref({
    contact: {
      email: '',
      github: '',
      wechatImg: ''
    },
    name: '',
    departmentUrl: '',
    department: '',
    courses: []
  })

  const experiences = ref([])
  const profileImage = ref('/images/me/xijiaxun.jpg')

  const fetchAppData = async () => {
    try {
      const [infoRes, expRes] = await Promise.all([
        fetch('/info.json'),
        fetch('/experience.json')
      ])
      
      personalInfo.value = await infoRes.json()
      experiences.value = (await expRes.json()).experiences
    } catch (error) {
      console.error('加载数据失败:', error)
    }
  }

  return { navItems, personalInfo, experiences, profileImage, fetchAppData }
})
