import { createApp } from 'vue';
import App from './App.vue';
import router from './route';
import './styles/app.css';
import MockUpData from './mockup';

localStorage.setItem('contacts', JSON.stringify(MockUpData));

createApp(App).use(router).mount('#app')
