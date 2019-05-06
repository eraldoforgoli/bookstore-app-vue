<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div
        v-for="book  in visibleBooks"
        v-bind:visibleBooks="visibleBooks"
        v-bind:currentPage="currentPage"
        class="col-md-3 bookContainer my-3 mx-1"
      >
        <div class="row">
          <div class="col-md-12 pt-4 imageDiv">
            <a @click="goToBook(book.bookId)">
              <img class="cover" src="..\assets\demoImage.png">
            </a>
          </div>
        </div>
        <div class="row pl-5">
          <span>{{book.name}}</span>
        </div>
        <div class="row pl-5">
          <a @click="goToAuthor(book.author)">{{book.author}}</a>
        </div>
        <div class="row pl-5">
          <span>{{book.date}}</span>
        </div>
        <div class="row pl-5">
          <span>{{book.genre}}</span>
        </div>
      </div>
    </div>
    <pagination
      v-bind:books="books"
      v-on:page:update="updatePage"
      v-bind:currentPage="currentPage"
      v-bind:pageSize="pageSize"
    ></pagination>
  </div>
</template>

<script>
import axios from "axios";
import pagination from "../components/Pagination.vue";

export default {
  components: { pagination },
  data() {
    return {
      imgSrc1: "C:GIT PROJECTS\bookstore-appsrcassetsdemoImage.png",
      imgSrc2:
        "https://www.filma24.cc/wp-content/uploads/rsz_avokzfgbzybgjsrar2wqowzk978.png",
      books: [],
      visibleBooks: [],
      pageSize: 9,
      currentPage: 0
    };
  },
  async beforeMount() {
    await this.getBooks();
    console.log("Root API: " + process.env.VUE_APP_ROOT_API);
    this.updateVisibleBooks();
  },

  methods: {
    async getBooks() {
      await axios
        .get(process.env.VUE_APP_ROOT_API + "/books/allbooks")
        .then(response => {
          this.books = response.data;
          console.log(response.data);
        })
        .then(result => {
          return Promise.resolve();
        })
        .catch(e => console.log(e));
    },
    goToBook(book) {
      this.$router.push("/book?bookId=" + book);
    },
    goToAuthor(author) {
      this.$router.push("/author?author=" + author);
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleBooks();
    },
    updateVisibleBooks() {
      this.visibleBooks = this.books.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      );
      //if we have 0 visible todo, go back a page
      if (this.visibleBooks.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    }
  }
};
</script>

<style>
.bookContainer {
  height: 400px;
}

.cover {
  opacity: 0.5;
  filter: alpha(opacity=50); /* For IE8 and earlier */
}

.cover:hover {
  opacity: 1;
  filter: alpha(opacity=100); /* For IE8 and earlier */
}

.imageDiv {
  height: 340px;
}

a:hover {
  color: blue !important;
  cursor: pointer;
}
</style>

