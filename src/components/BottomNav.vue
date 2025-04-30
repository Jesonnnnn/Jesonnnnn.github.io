<template>
  <div class="bottom-nav">
    <a-space>
      <a-button 
        v-for="nav in navItems" 
        :key="nav.id"
        @click="router.push(nav.id)"
        :type="currentRoute === nav.id ? 'primary' : 'default'"
      >
        {{ nav.text }}
      </a-button>
    </a-space>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navItems = ref([
  { id: '/', text: 'Home' },
  { id: '/books', text: 'BookList' },
  { id: '/wordcloud', text: 'Word Cloud' },
  { id: '/llm-wordcloud', text: 'LLM Word Cloud' },
  { id: '/snake', text: 'Snake Game' }
])

const currentRoute = computed(() => route.path)
</script>

<style scoped>
.bottom-nav {
  display: flex;
  justify-content: center;
  margin: 10px 0 20px; /* 减小外边距 */
  padding: 10px; /* 减小内边距 */
  width: auto; /* 改为自动宽度 */
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); /* 水平居中 */
  background: white;
  z-index: 100;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px; /* 添加圆角 */
}


.bottom-nav .ant-space {
  gap: 8px !important;
}
</style>