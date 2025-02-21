import { createRouter,createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import SignupPage from './pages/SignupPage.vue'
import LoginPage from './pages/LoginPage.vue'
import ChatPage from './pages/ChatPage.vue'


const routes = [
    {path: '/',name:'home',component:HomePage},
    {path: '/login',name:'login',component:LoginPage},
    {path: '/signup',name:'signup',component:SignupPage},
    {path: '/chat',name:'chat',component:ChatPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

  
export default router