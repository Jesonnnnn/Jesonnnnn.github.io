<script setup>
import { ref, onMounted, h } from 'vue'  
import { SyncOutlined } from '@ant-design/icons-vue'  
import MainHeader from '@/components/MainHeader.vue'
import { useAppStore } from '@/stores/appStore'
import { FloatButton } from 'ant-design-vue'
import { useRouter } from 'vue-router'  
import { FloatButtonGroup } from 'ant-design-vue'  

const appStore = useAppStore()
const router = useRouter() 

const handleClick = () => {
  router.push('/')  
}

onMounted(() => {
  appStore.fetchAppData()
})

const handleRefresh = () => {
  window.location.reload()  
}
</script>

<template>
  <div class="container">
    <MainHeader :nav-items="appStore.navItems" :profile-image="appStore.profileImage" />
    <router-view></router-view>
    <a-float-button-group shape="circle" :style="{ right: '24px', bottom: '100px' }">
      <a-float-button @click="handleRefresh" tooltip="刷新页面">
        <template #icon>
          <SyncOutlined />
        </template>
      </a-float-button>
      <a-float-button @click="handleClick" tooltip="返回首页" />
    </a-float-button-group>
  </div>
  <BottomNav :nav-items="appStore.navItems" :current-route="appStore.currentRoute" />
</template>

<style>
/* 一些全局样式~~~ (提醒自己不要忘了)*/
* {
    margin: auto;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, 'Geneva', Verdana, sans-serif;
    max-width: 1200px;
}

body {
    font-family:'Arial','Segoe UI','New Times Roman';
    line-height:1.8;
    color:#333;
    background-color:#fff;
    padding-bottom: 100px;
}
</style>
