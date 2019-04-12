import Vue from 'vue'
import App from './components/App'
import axios from 'axios'

import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faCoffee
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

Vue.prototype.$http = axios

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)


import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
