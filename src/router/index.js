import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    views: Home,
  },
  {
    path: "/home/:postcode",
    name: "Home",
    views: Home,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;