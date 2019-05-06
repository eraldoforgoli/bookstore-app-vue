 <template>
  <div class="mt-5 row justify-content-center align-items-center">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" v-if="showPreviousLink()">
          <a class="page-link" @click="updatePage(currentPage -1)" tabindex="-1">Previous</a>
        </li>
        <li
          class="page-item"
          v-if="pageExists(currentPage + 1)"
          v-bind:class="{active  : isCurrentPage(currentPage )}"
        >
          <a class="page-link" @click="updatePage(currentPage )">{{currentPage + 1 }}</a>
        </li>
        <li
          class="page-item"
          v-if="pageExists(currentPage + 2)"
          v-bind:class="{active  : isCurrentPage(currentPage + 1)}"
        >
          <a class="page-link" @click="updatePage(currentPage + 1)">{{currentPage + 2}}</a>
        </li>
        <li
          class="page-item"
          v-if="pageExists(currentPage + 3)"
          v-bind:class="{active  : isCurrentPage(currentPage + 2)}"
        >
          <a class="page-link" @click="updatePage(currentPage + 2)">{{currentPage + 3}}</a>
        </li>
        <li class="page-item" v-if="showNextLink()">
          <a class="page-link" @click="updatePage(currentPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
  
  <script>
export default {
  name: "pagination",
  props: ["books", "currentPage", "pageSize"],
  data() {
    return {};
  },
  methods: {
    updatePage(pageNumber) {
      this.$emit("page:update", pageNumber);
    },
    totalPages() {
      return Math.ceil(this.books.length / this.pageSize);
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == this.totalPages() - 1 ? false : true;
    },
    pageExists(pageNumber) {
      return (
        (Math.ceil(this.books.length / this.pageSize) >= pageNumber
          ? true
          : false) && pageNumber != this.currentPage
      );
    },
    isCurrentPage(pageNumber) {
      return this.currentPage == pageNumber;
    }
  }
};
</script>

<style>
.pagination-btn {
  cursor: pointer;
}
</style>


