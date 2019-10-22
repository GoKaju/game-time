import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// disable touchmove
document.body.addEventListener('touchmove', function(event) {
  event.preventDefault();
}, false); 

new Vue({
  render: h => h(App),
}).$mount('#app')
