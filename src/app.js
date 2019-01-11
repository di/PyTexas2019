import Vue from 'vue';

import { image, resize } from "./filters";

export default Vue.component('pytx-app', {
  data() {
    return {RELEASE, YEAR};
  },
  methods: {image},
  template: `
<v-app>
  <v-toolbar color="primary">
    <img :src="image('img/icon.svg')" alt="" style="height: 32px;">
    <v-toolbar-title>PyTexas {{ YEAR }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">

    </v-toolbar-items>
  </v-toolbar>
  <v-content>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app>
    <v-flex text-xs-center>
      {{ RELEASE }}
    </v-flex>
  </v-footer>
</v-app>
`});
