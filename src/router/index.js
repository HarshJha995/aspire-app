import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import LoginPage from "../components/LoginHandler/LoginPage.vue"
import SignupPage from "../components/LoginHandler/SignupPage.vue"
import StaticPage from '../static/StaticPage.vue'
import Dashboard from '../components/Dashboard/Dashboard.vue'
import ApplyLoan from "../components/ApplyLoan/ApplyLoan.vue"
import ManageLoan from "../components/ManageLoan/ManageLoan.vue"

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/applyloan',
    name: 'Apply Loan',
    component: ApplyLoan,
    props: true
  },
  {
    path: '/manageloan',
    name: 'Manage Loan',
    component: ManageLoan
  },
  {
    path: '/static',
    name: 'StaticPage',
    component: StaticPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
