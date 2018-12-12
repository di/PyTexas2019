import Vue from "vue";

import { image, resize } from "../filters";

var Home = Vue.component("home-page", {
  template: "#tpl-pages-home",
  filters: { image: image },
  data() {
    return {
      sponsors: [],
      keynotes: []
    };
  },
  created() {

  },
  methods: {

  }
});

export default Home;
