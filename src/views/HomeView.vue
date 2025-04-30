<script setup>
import SelfIntroduction from '@/components/SelfIntroduction.vue'
import ExperienceContent from '@/components/ExperienceContent.vue'
import MySlogan from '@/components/MySlogan.vue'
import { useHomeStore } from '@/stores/homeStore'
import { onMounted } from 'vue'

const homeStore = useHomeStore()

onMounted(() => {
  homeStore.fetchData()
})
</script>

<template>
  <SelfIntroduction :personal-info="homeStore.personalInfo" />
  <ExperienceContent :experiences="homeStore.experiences" />
  <MySlogan :text="homeStore.slogan"/>
</template>
