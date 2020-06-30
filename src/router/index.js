// core
import Vue from "vue";
import VueRouter from "vue-router";

// routes
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/planets",
    name: "Planets",
    component: () => import("../views/Planets.vue")
  },
  {
    path: "/people",
    name: "People",
    component: () => import("../views/People.vue")
  },
  {
    path: "/starships",
    name: "Starships",
    component: () => import("../views/Starships.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
