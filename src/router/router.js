import Films from "../pages/FilmsPage.vue"
import Serials from "../pages/SerialsPage.vue"
import HomePage from "../pages/HomePage.vue"
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/Films",
      name: "Films",
      component: Films,
    },
    {
      path: "/Serials",
      name: "Serials",
      component: Serials,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;