<script setup>
defineProps({
  navItems: {
    type: Array,
    required: true,
    validator: (value) => value.every(item => 'id' in item && 'text' in item)
  },
  profileImage: {
    type: String,
    default: './images/me/xijiaxun.jpg'
  }
})
</script>

<template>
  <div class="header" id="top">
    <div class="navbar-name">Jason Xi @ ZJU</div>
    <div class="navbar-blank"></div>
    <ul class="nav-list">
      <li v-for="(nav, index) in navItems" :key="index" class="nav-item">
        <router-link :to="nav.id" class="nav-link">{{ nav.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.header {
  color: white;
  padding: 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(0,63,136);
  background-color: rgb(0,63,136);
}

/* 导航框 */
.header {
    color: white;
    padding: 10px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgb(0,63,136);
    background-color: rgb(0,63,136);
}   

.navbar-name{
    display: flex;
    color: #fff;
    font:bold 25px "Avenir","Helvetica","Arial","sans-serif";
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    text-decoration: none;
}
.navbar-blank{
    display: flex;
    margin:10px, 100px;
}


.nav-list {
    display: flex;
    margin:10px,20px,10px,110px;
    list-style: none;
    gap:20px;
    color: #fff;
    font:15px "Avenir","Helvetica","Arial","sans-serif";
}

.nav-item .nav-link {
    padding:10px;
    text-decoration: none;
    color: #fff;
    font:20px "Avenir","Helvetica","Arial","sans-serif";
}

.nav-item .nav-link:hover {
    background-color: #fff;
    color: rgb(0,63,136);
}

</style>
