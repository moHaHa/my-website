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
          {
            path: 'contact',
            component: ()=> import('../modules/contact/section-contact.vue')
           },
          {
            path: 'hero',
            component: ()=> import('../modules/hero/section-hero.vue')
           }
        ],
      },
      {
        path: "",
        alias: ['/production', 'main'],
        component: () => import("../components/router-view/router-view.vue"),
        children: [
          {
            path: '',
            component: ()=> import('../views/home/home-view.vue')
           }
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
