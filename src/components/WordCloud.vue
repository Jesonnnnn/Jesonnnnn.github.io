<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const checkDependencies = () => {
        if (window.d3?.layout?.cloud) {
            initWordCloud();
        } else {
            setTimeout(checkDependencies, 100);
        }
    }

    const initWordCloud = () => {
        const container = document.getElementById("wordcloud-container");
        if (!container) {
            console.error('容器元素不存在');
            return;
        }
        
        // 确保容器有明确尺寸
        container.style.width = '1000px';
        container.style.height = '400px';
        
        // 动态加载脚本
        const script = document.createElement('script');
        script.src = '/cloud.js';
        script.onload = () => {
            console.log('cloud.js加载完成');
        };
        script.onerror = () => {
            console.error('加载cloud.js失败');
        };
        document.body.appendChild(script);
    }

    checkDependencies();
})
</script>

<template>
    <div class="word_cloud" id="Research">
        <h2 class="title">Research Focus</h2>
        <div class="gamecontents">
            <div class="word_cloudcontent">
                <div id="wordcloud-container" style="background:#f5f5f5;"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.word_cloud {
    margin-top: 25px;
}

.word_cloud h2 {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    font-family: 'Arial', 'Segoe UI', 'New Times Roman';
}

#wordcloud-container {
    width: 1000px;
    height: 400px;
    margin: 20px auto;

}
</style>
