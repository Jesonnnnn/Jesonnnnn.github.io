<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="slogan-container">
    <h1>{{ text }}</h1>
  </div>
</template>

<style scoped>
.slogan-container {
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  border-radius: 8px;
}

.slogan-container h1 {
  background: linear-gradient(45deg, #5ee7df, #b490ca);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 50px;
}
</style>
