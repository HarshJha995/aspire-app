import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '../store'

router.beforeEach((to) => {
    if (to.path == "/login") {
        let user = localStorage.getItem("authenticatedUser");
        let userData = JSON.stringify(store.getters.getUserData);
        localStorage.setItem(user, userData)
        localStorage.setItem("authenticatedUser", "")
        store.dispatch('setLoanStatus', false);
        store.dispatch('setUserData', {});
    }
})

createApp(App).use(router).use(store).mount('#app')
