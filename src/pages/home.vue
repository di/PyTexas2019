<template>
<div class="home-page">
  <v-card class="padding iconbg">
    <div class="tc">
      <h1>PyTexas 2019</h1>
      <h2>
        April 13th &amp; 14th
        <br>
        Austin, Texas
        <br>
        at the <a href="http://austinlibrary.org/" target="_blank">Austin Public Library</a>
        <!--at the-->
        <!--<a href="https://www.stgdesign.com/the-bill-melinda-gates-computer-science-complex-and-dell-computer-science-hall/" target="_blank">Gates Dell Complex</a>-->
        <!--at UT Austin-->
      </h2>
      <div class="tc">
        <br>
        <v-btn color="primary" href="https://www.papercall.io/pytexas-2019
" target="_blank">
          Submit a Talk Proposal
        </v-btn>
        <v-btn color="primary" to="/page/sponsors/prospectus">
          Become A Sponsor
        </v-btn>
        <!--<v-btn color="primary" href="" target="_blank">-->
        <!--  Register-->
        <!--</v-btn>-->
        <br><br>
        <em>
          More annoucements to come soon.
          <a href="https://twitter.com/pytexas" target="_blank">Follow PyTexas</a>
          on Twitter or join our
          <router-link to="/page/community/mailing-list">mailing list</router-link> to stay updated.
        </em>
      </div>
    </div>
    <!--<br>-->
    <!--<v-divider></v-divider>-->
    <!--<br>-->
    <!--<div class="tc">-->
    <!--  <h3 class="normal">-->
    <!--    The Venue: Gates Dell Complex, UT Austin-->
    <!--  </h3>-->
    <!--  <p>-->
    <!--    <a href="https://www.stgdesign.com/the-bill-melinda-gates-computer-science-complex-and-dell-computer-science-hall/ic5gxzhjh5nn4zh6hw42nwuo4cr9th">-->
    <!--      <img :src="image('img/ut-complex/dell-gates-exterior.jpg')" alt="Gates Dell Complex">-->
    <!--    </a>-->
    <!--  </p>-->
    <!--</div>-->
  </v-card>
</div>
</template>
<script>
import Vue from "vue";

import { image, resize } from "../filters";

export default {
  data() {
    return {
      sponsors: [],
      keynotes: []
    };
  },
  created() {

  },
  methods: { image }
};
</script>

