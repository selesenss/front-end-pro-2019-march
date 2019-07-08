import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  data: {
    exampleX: 200
  },
  render: h => h(App),
}).$mount('#app')
