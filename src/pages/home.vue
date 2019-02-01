<template>
<div class="home-page">
  <v-card class="main padding iconbg">
    <div class="tc">
      <h1>PyTexas 2019</h1>
      <h2>
        April 13th &amp; 14th
        <br>
        Austin, Texas
        <br>
        at the <a href="http://library.austintexas.gov/central-library" target="_blank">Central Austin Public Library</a>
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
  </v-card>
  <v-card class="main padding venue">
    <div class="tc">
      <h2>The Venue: Austin Public Library</h2>
      <div class="images">
        <a :href="image('img/apl/library1.png')">
          <img :src="resize(image('img/apl/library1.png'), 300, 300, 'fit=crop')" alt="Library photo 1">
        </a>
        <a :href="image('img/apl/library2.png')">
          <img :src="resize(image('img/apl/library2.png'), 300, 300, 'fit=crop')" alt="Library photo 2">
        </a>
      </div>
      <div class="map">
        <v-btn to="page/venue" color="primary">
          Map and More Info
        </v-btn>
      </div>
    </div>
  </v-card>
</div>
</template>
<script>
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
  methods: { image, resize }
};
</script>
<style lang="less">
  .home-page {
    .venue {
      img {
        width: 300px;
        padding: 0 10px;
      }

      .images {
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>

