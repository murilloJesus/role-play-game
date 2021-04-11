import { createRouter, createWebHistory } from 'vue-router'
import Player from './../components/Player/PlayerComponent.vue'
import Skill from './../components/Skill/SkillGroupComponent.vue'

const routes = [
  {
    path: '/player',
    name: 'Home',
    component: Player
  },
  {
    path: '/skills',
    name: 'Habilidades',
    component: Skill
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
