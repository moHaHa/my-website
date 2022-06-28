import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../app"),
    children: [
      {
        path: "dev",
        component: () => import("../components/router-view"),
        children: [
          
        ],
      },
      {
        path: "",
        alias: ['/production', 'main'],
        component: () => import("../components/router-view"),
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
