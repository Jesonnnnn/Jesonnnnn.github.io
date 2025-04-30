<script setup>
defineProps({
  personalInfo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="main-content">
    <div class="major-info">
      <p class="name">{{ personalInfo?.name }}</p>
      <template v-for="(desc, index) in personalInfo?.descriptions" :key="index">
        <p class="major">
          <span v-html="desc.text"></span>
          <span v-if="desc.courses"><strong>{{ desc.courses.join(index === 0 ? '、' : ', ') }}</strong></span>
        </p>
      </template>
    </div>
    <p class="final">{{ personalInfo?.finalMessage }}</p>
  </div>
</template>

<style scoped>


.main-content {
    gap: 20px;
    font-family:'Arial','New Times Roman';
    text-align: left;

}


.name {
    font-size: 30px;
    font-weight: bold;
    color: rgb(0,63,136);
}
.main-content :deep(a) {  
    text-decoration: none;
    color: rgb(0,63,136);

}

.major-info{
    margin-bottom: 25px;
}


.main-content :deep(a:hover) {

    text-decoration: underline;
}
.final {
    font-size: 20px;
    color: rgb(0,63,136);
    font-weight: bold;
}
.major strong {
  font-weight: bold;
}
</style>
