import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.css';
import 'devicon/devicon.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



createApp(App).use(store).use(router).mount('#app')
AOS.init();
