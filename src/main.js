import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./lang/i18n";
import store from './store'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import VueLazyload from 'vue-lazyload'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import TextareaAutosize from 'vue-textarea-autosize'
import VModal from 'vue-js-modal'




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

Vue.use(VueVideoPlayer)

Vue.use(TextareaAutosize)

Vue.use(VModal)

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'https://www.teknozeka.com/wp-content/uploads/2020/03/wp-header-logo-21.png',
    loading: 'https://i.pinimg.com/originals/a2/de/bf/a2debfb85547f48c3a699423ba75f321.gif',
    attempt: 1
})

new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount("#app");
