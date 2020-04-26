import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./lang/i18n";
import store from './store'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';


import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
// eslint-disable-next-line no-unused-vars
let Bootstrap = require('bootstrap')
window['jQuery'] = jQuery;

/* eslint-disable */
import './plugins/js/jquery-2.1.4.min'
import './plugins/js/owl.carousel'
import './plugins/js/move-top'
import './plugins/js/easing'
import './plugins/js/common'
import './plugins/js/jquery.slidey'
import './plugins/js/jquery.dotdotdot.min'
import './plugins/js/jquery.flexslider'
import './plugins/js/jquery.magnific-popup'
import './plugins/js/bootstrap.min'
import './plugins/js/simplePlayer'


Vue.use(VueToast);

Vue.config.productionTip = false;

new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount("#app");
