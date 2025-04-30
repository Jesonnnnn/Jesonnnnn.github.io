import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import BookListView from '@/components/BookList.vue'
import WordCloudView from '@/components/WordCloud.vue'
import LLMWordCloudView from '@/components/LLMWordCloud.vue'
import SnakeGameView from '@/components/SnakeGame.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/books',
    name: 'books',
    component: BookListView
  },
  {
    path: '/wordcloud',
    name: 'wordcloud',
    component: WordCloudView
  },
  {
    path: '/llm-wordcloud',
    name: 'llm-wordcloud',
    component: LLMWordCloudView
  },
  {
    path: '/snake',
    name: 'snake',
    component: SnakeGameView
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
