import Vue from "vue";
import Router from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import Home from "../views/Home.vue";

Vue.use(Router);
Vue.use(Vuetify, {
  iconfont: "md"
});

export const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dfinder",
      name: "dfinder",
      component: () => import("../views/DFinder.vue")
    },
    {
      path: "/schecker",
      name: "schecker",
      component: () => import("../views/SChecker.vue")
    }
  ]
});
