<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const script = document.createElement('script')
    script.src = './logic.js'
    document.body.appendChild(script)
})
</script>

<template>
    <div class="game">
        <h2 class="title">Snake Game</h2>
        <div class="gamecontents">
            <div class="gamecontent">
                <div class="geeks">贪吃蛇时间!</div>
                <canvas id="board"></canvas>
                <div class="game-controls">
                    <button id="restartBtn" class="game-btn">开始游戏</button>
                    <button id="pauseBtn" class="game-btn">暂停游戏</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.game {
    padding-bottom: 20px;
}

.gamecontents {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0, 30px, 20px, 30px;
}

.gamecontent {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.game h2 {
    margin-top: 25px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    margin-top: 25px;
    font-family: 'Arial', 'Segoe UI', 'New Times Roman';
}

.geeks {
    font-size: 30px;
    font-weight: bold;
    color: rgb(0, 63, 136);
}


.game-controls {
    margin-top: 20px;
    text-align: center;
}

.game-btn {
    font-size: 18px;
    padding: 10px 20px;
    margin: 0 10px;
    background: rgb(0,63,136);
    color: white;

    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-width: 1px;
    border-color: rgb(0,63,136);
}

.game-btn:hover {
    background: #fff;
    color: rgb(0,63,136);
    font-weight: bold;
}
</style>
