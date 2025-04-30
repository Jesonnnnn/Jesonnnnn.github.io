<script setup>
import { ref, onMounted } from 'vue'

const books = ref([])

onMounted(async () => {
  try {
    const response = await fetch('./books.json')
    const data = await response.json()
    books.value = data.books
    console.log('Books data loaded:', books.value)
  } catch (error) {
    console.error('Failed to load books:', error)
    books.value = [] // Fallback empty array
  }
})
</script>

<template>
  <div class="books" id="books">
    <h2 class="b-title">最近读过/在读</h2>
    <ol class="books-list">
      <li v-for="(book, index) in books" :key="index" class="book-item">
        <img :src="book.image" :alt="book.title"/>
        <div class="book-info">
          <p class="bookname">{{ book.title }}</p>
          <p class="author">Author: {{ book.author }}</p>
          <p class="readdate">阅读日期：{{ book.readDate }}</p>
          <a :href="book.link" target="_blank">点击跳转</a>
        </div>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.books h2 {
    font-size: 22px;
    margin-top: 25px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    margin-top: 25px;
}

.book-item{
    margin-left: 40px;
    margin-top: 10px;
    margin-bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1200px;
    height: 200px;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    margin-left: 40px;
    background-color: #ffffff;
    border-color : #555;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);

}

.book-item img {
    width: 170px;
    height:170px;;
    margin-left:0;
    margin-right: 30px;
    padding: 0;
}
.book-info{
    margin-left: 0px;
    margin-right: auto;
    padding: 0;
}

.bookname {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
}

.readdate {
    margin-bottom: 10px;
}

.book-info a{
    font-size: 12px;
    color: #777;
    text-decoration: none;
    border-radius: 5px;
    border: 1px solid #777;
    padding: 5px 5px 5px 5px;
    margin-top: 20px;

}

.book-info a:hover {
    background-color: #777;
    color: #fff;
    transition: 0.3s ease-in-out;
}
.books{
    margin-bottom: 40px;
}

</style>
