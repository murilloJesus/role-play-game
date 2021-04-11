/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import { createApp } from 'vue'
import router from './router/index.js'
import store from './store/index.js'

import HomeTemplate from './components/HomeTemplate.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(HomeTemplate)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");
