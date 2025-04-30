<script setup>
import { onMounted } from 'vue'

const refreshPage = () => {
  window.location.reload()
}

onMounted(() => {
  const script = document.createElement('script')
  script.src = './llm_cloud.js'
  document.body.appendChild(script)
})

const refreshWordCloud = () => {
  // 调用词云初始化函数
  if (window.initLLMCloud) {
    window.initLLMCloud()
  }
}
</script>

<template>
  <div class="llm_cloud">
    <h2 class="title">实时词云展示</h2>
    <button @click="refreshPage" class="refresh-btn">点击生成</button>
    <div class="gamecontents">
      <div id="llm-container"></div>
    </div>
  </div>
</template>

<style scoped>
.llm_cloud {
  margin-top: 20px;

}

.refresh-btn {
  padding: 12px 24px;
  background-color: rgb(0,63,136);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px; 
  margin: 15px auto; 
  transition: background-color 0.3s;
  display: inline-block; 
  min-width: 150px; 
  text-align: center; 
}

.refresh-btn:hover {
  background-color: #0056b3;
}

.llm_cloud h2 {
    margin-top: 25px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    font-family:'Arial','Segoe UI','New Times Roman';
}

#llm-container {
    width: 1200px;
    height: 800px;
    margin: 20px auto;
}
</style>
