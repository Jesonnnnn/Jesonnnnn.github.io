<script setup>
import SelfIntroductionContent from './SelfIntroductionProfile.vue';
import ProfileSection from './SelfIntroductionProfile.vue'
import SelfIntroductionProfile from './SelfIntroductionContent.vue';
import MainContent from './SelfIntroductionContent.vue'

defineProps({
  profileImage: {
    type: String,
    default: './images/me/xijiaxun.jpg'
  },
  personalInfo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="self-introduction">
    <SelfIntroductionContent :personal-info="personalInfo" />
    <SelfIntroductionProfile :profile-image="profileImage" :personal-info="personalInfo" />

   
  </div>
</template>

<style scoped>
.self-introduction {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
</style>
