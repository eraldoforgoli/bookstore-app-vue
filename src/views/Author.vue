<template>
  <div class="container">
    <p>Name: {{ author.name }}</p>
    <p>Age: {{ author.age }}</p>
    <p>Rating: {{ author.rating }}</p>
    <p>Birthday: {{ author.birthday }}</p>
    <p>{{ author.biography }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      authorName: "",
      author: Object
    };
  },
  beforeMount() {
    this.authorName = this.$route.query.author;
    this.getAuthorInfo();
  },
  methods: {
    getAuthorInfo() {
      axios
        .get(
          process.env.VUE_APP_ROOT_API +
            "/authors/authorinfo/" +
            this.authorName
        )
        .then(response => {
          console.log(response);
          this.author = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
