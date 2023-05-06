import Vue from 'vue'
import VueRouter from 'vue-router'
import ListPro from '../views/ListPro.vue'
// import Home from '../views/Home.vue'
import AddPro from '../views/AddPro.vue'
import ListUser from '../views/user/List.vue'
import EditPro from '../views/EditPro.vue'
import Login from "../views/user/Login.vue"
import EditUser from "../views/user/EditUser.vue";
import AddUser from "../views/user/AddUser.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/list-pro',
    name: 'list',
    component: ListPro
  },
  {
    path: '/add-pro',
    name: 'add',
    component: AddPro
  },
 
  {
    path: '/edit-pro',
    name: 'edit-pro',
    component: EditPro
  },
  {
    path: '/list-user',
    name: 'listuser',
    component: ListUser
  },
  {
    path: '/add-user',
    name: 'add-user',
    component: AddUser
  },
  {
    path: '/edit-user/:id',
    name: 'edit-user',
    component: EditUser
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
