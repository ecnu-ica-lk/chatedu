import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import Layout from "../components/HelloWorld.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
