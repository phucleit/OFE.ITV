import Vue from 'vue';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)
// Vue.use(Antd);


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, {locale});


import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(VueLoading);

Vue.use(require('vue-moment'));

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

import Artplayer from 'artplayer';

import money from 'v-money'
 
// register directive v-money and component <money>
Vue.use(money, {
    decimal: ',',
    thousands: '.',
    prefix: '',
    suffix: ' vnd',
    precision: 0,
    masked: true
})
Vue.component('Money', money)


import 'flowbite';
import 'boxicons'