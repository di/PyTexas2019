import Vue from './vue.common.js';
import Vuetify from 'vuetify';
import VueRouter from "vue-router";

import router from "./routes";

Vue.use(VueRouter);
Vue.use(Vuetify, {
  theme: {
    primary: '#2196f3',
    secondary: '#757575',
    accent: '#ffa000',
    error: '#F44336',
    warning: '#FBC02D',
    info: '#0097A7',
    success: '#4CAF50'
  }
});

import App from './app.vue';

var app = new Vue({
  el: '#pytxapp',
  router: router,
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.unflash();
    });
  },
  methods: {
    unflash() {
      document.querySelector("#pytxapp").style.display = 'block';
      document.querySelector("#splash").style.display = 'none';
    }
  },
  components: {
    "pytx-app": App
  }
});
