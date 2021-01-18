import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin, TablePlugin, PaginationPlugin  } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router/router'
import store from './store/store'
import moment from 'moment'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Table Bootstrap Vue
Vue.use(TablePlugin)
// Page
Vue.use(PaginationPlugin)
//moment
Vue.use(require('vue-moment'))

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  moment,
  render: h => h(App)
}).$mount('#app')
