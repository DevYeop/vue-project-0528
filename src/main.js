// import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/main_todo.css';
import { createApp } from 'vue';
import App from './App.vue';
// import AppTodo from './AppTodo.vue';
// import CheckboxItem from '@/components/CheckboxItem.vue';
import mitt from 'mitt';

const emitter = mitt();
const star2 = mitt();
emitter.on('*', (type, e) => console.log(`## 이벤트 로그: ${type} ->`, e));
star2.on('*', (type, e) => console.log(`## 이벤트 로그: ${type} ->`, e));

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.star2 = star2;
app.mount('#app');

// createApp(AppTodo).mount('#app');

// createApp(App).mount('#app');
// createApp(App).component('CheckboxItem', CheckboxItem).mount('#app');
