/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import { createApp } from 'vue'

import Player from './components/PlayerComponent.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(Player)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");
