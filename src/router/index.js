import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../app/App.vue"),
    children: [
      {
        path: "dev",
        component: () => import("../components/router-view/router-view"),
        children: [
          
        ],
      },
      {
        path: "",
        alias: ['/production', 'main'],
        component: () => import("../components/router-view/router-view.vue"),
        children: [
          
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
