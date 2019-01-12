import Vue from 'vue';

import { image, resize } from "./filters";

export default Vue.component('pytx-app', {
  data() {
    return {
      RELEASE, YEAR,
      drawer: null
    };
  },
  methods: {
    image,
    icon(i) {
      return i + '_svg';
    }
  },
  template: "#tpl-app"
});
