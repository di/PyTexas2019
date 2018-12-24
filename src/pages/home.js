import Vue from "vue";

import { image, resize } from "../filters";

var Home = Vue.component("home-page", {
  template: "#tpl-pages-home",
  data() {
    return {
      sponsors: [],
      keynotes: []
    };
  },
  created() {

  },
  methods: { image }
});

export default Home;
