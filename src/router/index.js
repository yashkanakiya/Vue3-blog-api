import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import create from '../views/create.vue'
import manage from '../views/manage.vue'
import form from '../views/form.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "create",
    component: create,
  },
  {
    path: "/manage/:id",
    name: "manage",
    component: manage,
  },
  {
    path: "/form",
    name: "form",
    component: form,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
