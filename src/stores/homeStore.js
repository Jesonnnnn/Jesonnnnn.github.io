import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHomeStore = defineStore('home', () => {
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
  const slogan = ref('')

  const fetchData = async () => {
    try {
      const [infoRes, expRes, sloganRes] = await Promise.all([
        fetch('/info.json'),
        fetch('/experience.json'),
        fetch('/slogan.json')
      ])
      
      personalInfo.value = await infoRes.json()
      experiences.value = (await expRes.json()).experiences
      slogan.value = (await sloganRes.json()).slogan
    } catch (error) {
      console.error('加载数据失败:', error)
    }
  }

  return { personalInfo, experiences, slogan, fetchData }
})
