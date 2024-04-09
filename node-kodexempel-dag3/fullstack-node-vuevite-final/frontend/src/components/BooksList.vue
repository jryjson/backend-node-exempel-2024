
<script>
export default {
  created() {
    fetch('http://localhost:3000/api/books')
        .then((response) => response.json())
        .then((books) => {
          this.books = books
        })
  },
  data() {
    return {
      books: null
    }
  }
}
</script>

<template>
  <ol>
    <li :key="book.id" v-for="book in books">{{ book.bokTitel }} {{ book.bokForfattare }}</li>
  </ol>
</template>

<style scoped>

</style>