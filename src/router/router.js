// Vuejs imports
import Vue from 'vue'
import VueRouter from 'vue-router'

// local imports
import Register from '../components/Register'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Register',
    component: Register
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router