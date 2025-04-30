<script setup>
defineProps({
  experiences: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="experience" id="experience">
    <h2 class="title">Experience</h2>
    <div v-for="(exp, index) in experiences" :key="index" class="experience-item">
      <span class="date">{{ exp.date }} :</span> {{ exp.content }}
    </div>
  </div>
</template>

<style scoped>
.experience {
    margin-top: 25px;
}

.experience h2 {
    margin-bottom: 20px;
    margin-bottom: 1px solid #ddd;
    font-size: 22px;
}

.experience-item {
    padding-left: 40px;
    margin-bottom: 8px;
}

.date {
    font-weight: bold;
    color: #555;
}


</style>
