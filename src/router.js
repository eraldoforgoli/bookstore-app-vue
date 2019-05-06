import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Book from "./views/Book.vue";
import PageNotFound from "./views/PageNotFound.vue";
import Author from "./views/Author.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/book",
      name: "book",
      component: Book
    },
    {
      path: "/author",
      name: "author",
      component: Author
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
});
