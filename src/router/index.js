import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inscription from '../views/Inscription.vue'
import Map from '../views/Map.vue'
import Personnalisation from '../views/Personnalisation.vue'
import Accueil from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: Inscription
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/personnalisation',
      name: 'personnalisation',
      component: Personnalisation
    },
    {
      path: '/accueil',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
