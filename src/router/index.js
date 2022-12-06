import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import About from '../views/Abouts/About.vue'
import Contact from '../views/Contacts/Contact.vue'
import Article from '../views/Articles/ArticleList.vue'
import ShowArticle from '../views/Articles/ShowArticle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/articles',
    name: 'Article',
    component: Article
  },
  {
    path: '/articles/:slug',
    name: 'ShowArticle',
    component: ShowArticle
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
