// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css';
import theme from 'muse-ui/lib/theme';
import '../static/css/theme.css';
import '../static/css/css.css';
// import Html2canvas from '../static/js/html2canvas';
import '../static/js/jquery.min.js';



Vue.config.productionTip = false

Vue.use(MuseUI);
/* eslint-disable no-new */




theme.use('light');
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// new Vue({
//   el: '#app',
//   render (h) {
//     return h('mu-button', {}, '');
//   }
// })
