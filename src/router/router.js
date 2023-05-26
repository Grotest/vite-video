import Films from "../pages/Films.vue"

import { createWebHistory, createRouter } from "vue-router";


// const routes = [{
//     path:'/',
//     comments: Films
// }]

const routes = [

    {
      path: "/Films",
      name: "Films",
      component: Films,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;