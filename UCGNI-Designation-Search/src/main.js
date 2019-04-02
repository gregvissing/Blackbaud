import Vue from 'vue'
import App from './components/App'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faCoffee
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)


import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
