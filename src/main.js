<<<<<<< HEAD
import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import "vuesax/dist/vuesax.css"
import 'material-icons/iconfont/material-icons.css';


Vue.config.productionTip = false
Vue.use(Vuesax)

new Vue({
  render: h => h(App),
=======
import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Step 1 -- Import and use VueRouter
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

//Step 3 - Register Routes
const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router:myRouter
>>>>>>> a5c899038d220c31ce0c0516eca19707106c882b
}).$mount('#app')
