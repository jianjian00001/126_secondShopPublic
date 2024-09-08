import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/layout/Layout.vue"

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: "/login",
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import("@/views/Index")
      },
      {
        path: 'user',
        name: 'User',
        component: () => import("@/views/User")
      },
      {
        path: 'userinfo',
        name: 'UserInfo',
        component: () => import("@/views/UserInfo")
      },
      {
        path: 'collection',
        name: 'collection',
        component: () => import("@/views/Collection")
      },

      {
        path: 'collections',
        name: 'collections',
        component: () => import("@/views/Collections")
      },
      {
        path: 'feedback',
        name: 'feedback',
        component: () => import("@/views/Feedback")
      },
      {
        path: 'brand',
        name: 'Brand',
        component: () => import("@/views/Brand")
      },

      {
        path: 'address',
        name: 'Address',
        component: () => import("@/views/Address")
      },

      {
        path: 'wantbuyInfor',
        name: 'wantbuyInfor',
        component: () => import("@/views/WantbuyInfor")
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import("@/views/Notice")
      },
      {
        path: 'order',
        name: 'order',
        component: () => import("@/views/Order")
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import("@/views/Product")
      },
      {
        path: 'useraddr',
        name: 'Useraddr',
        component: () => import("@/views/Useraddr")
      },
      {
        path: 'record',
        name: 'Record',
        component: () => import("@/views/Record")
      },
      {
        path: 'userwallet',
        name: 'Userwallet',
        component: () => import("@/views/Userwallet")
      },
      {
        path: 'comment',
        name: 'Comment',
        component: () => import("@/views/Comment")
      },
      {
        path: 'category',
        name: 'Category',
        component: () => import("@/views/Category")
      },
      {
        path: 'refund',
        name: 'Refund',
        component: () => import("@/views/Refund")
      },
      {
        path: 'footprints',
        name: 'Footprints',
        component: () => import("@/views/Footprints")
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/Login")
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("@/views/Register")
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
