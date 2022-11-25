import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/discover" },
  {
    path: "/discover",
    name: "Discover",
    component: () => import("../views/discover/Discover"),
  },
  {
    path: "/collection",
    name: "Collection",
    component: () => import("../views/collection/Collection"),
  },
  {
    path: "/recommend",
    name: "Recommend",
    component: () => import("../views/recommend/Recommend"),
  },
  {
    path: "/video",
    name: "Video",
    component: () => import("../views/video/Video"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
