<template>
  <div class="container mt-3">
    <img class="cover" src="..\assets\demoImage.png">
    <p>Author: {{book.author}}</p>
    <p>Date: {{book.date}}</p>
    <p>Genre: {{book.genre}}</p>
    <p>Price: {{book.price}} $</p>
    <p>Rating: {{book.rating}}</p>
    <p>{{book.description}}</p>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      description: "",
      book: Object,
      bookId: ""
    };
  },
  beforeMount() {
    this.bookId = this.$route.query.bookId;
    console.log(this.bookId);
    this.getBookDescription();
  },

  methods: {
    getBookDescription() {
      axios
        .get(process.env.VUE_APP_ROOT_API + "/books/bookinfo/" + this.bookId)
        .then(response => {
          this.book = response.data;
          console.log(response.data);
        })
        .catch(e => console.log(e));
    }
  }
};
</script>
