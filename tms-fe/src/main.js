import { createApp } from 'vue'
import './index.css'
import router from './routers'
import store from './store'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';

createApp(App)
    .use(Antd)
    .use(router)
    .use(store)
    .mount('#app')
 