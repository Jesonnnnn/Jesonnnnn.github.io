<script setup>
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
  <div class="self-bar">
    <div class="profile-image-container">
      <img :src="profileImage" alt="Jiaxun Xi" class="profile-image"/>
    </div>
    <div class="contact-links">
      <a v-for="(contact, key) in personalInfo?.contact" 
         :key="key"
         :href="key === 'email' ? 'mailto:' + contact : contact || '#'"
         class="contact-link">
        <i :class="{
          'fas fa-envelope': key === 'email',
          'fab fa-github': key === 'github',
          'fab fa-weixin': key === 'wechatImg'
        }"></i>
        {{ key === 'email' ? contact : key === 'github' ? 'GitHub' : 'WeChat' }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.self-introduction {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}

.self-bar{
    display: flex;
    flex:0,1,300px;
    flex-direction: column;
    align-items: center;
    flex: 0 0 300px;
    margin-bottom: 20px;
    margin-top: 0px;
    margin-left: 30px;
}

.self-bar{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:0,30px,20px,30px;

}

.profile-image-container {
    flex: 0 0 250px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:20px;
    margin-top: 0px;
}

.profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid rgb(0,63,136);
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    margin-bottom: 0px;
}

.contact-links {
    font-family: 'Segoe UI', Tahoma, 'Geneva', Verdana, sans-serif;
    font-size: 15px;
    margin-top: 0px;
    width: 80%;
    margin-bottom: 0px;
    margin-left: 30px;
    padding-left: 20px;
}

.contact-links a {
    display: block;
    margin-bottom: 0px;
    color: #555;
    text-decoration: none;
    font-size: 16px;
    padding-left: 10px;
}

.contact-links a:hover {
   background-color: #f0f0f0; 
}
.contact-links li {
    width: 20px;
    display: inline-block;
    color: #555;
    margin-right: 5px;
}

</style>
