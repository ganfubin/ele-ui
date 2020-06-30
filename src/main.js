import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui';
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.less';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
