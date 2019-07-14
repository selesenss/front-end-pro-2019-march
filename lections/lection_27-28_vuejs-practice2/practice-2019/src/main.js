import Vue from 'vue'
import App from './App.vue'
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
    store,
    data: {
        exampleX: 200
    },
    render: h => h(App),
}).$mount('#app');