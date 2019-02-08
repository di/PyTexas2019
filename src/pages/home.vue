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
        at the <a href="http://library.austintexas.gov/central-library" target="_blank">
          Austin Central Public Library
        </a>
      </h2>
      <div class="tc">
        <br>
        <v-btn color="primary" href="https://www.papercall.io/pytexas-2019
" target="_blank">
          Submit a Talk Proposal&nbsp;<img class="ext" :src="image('img/icons/external-white.svg')" alt="">
        </v-btn>
        <v-btn color="primary" to="/page/sponsors/prospectus">
          Become A Sponsor
        </v-btn>
        <v-btn color="primary" href="https://ti.to/pytexas/pytexas-2019" target="_blank">
          Register&nbsp;<img class="ext" :src="image('img/icons/external-white.svg')" alt="">
        </v-btn>
        <br><br>
        <h2>Stay Updated</h2>
        <ul>
          <li>
            Twitter: <a href="https://twitter.com/pytexas" target="_blank">
              @PyTexas
            </a>
          </li>
          <li>
            Slack: <a href="https://pytexas.slack.com" target="_blank">
              PyTexas Slack
            </a> - <a href="https://pytexas-slack.herokuapp.com/" target="_blank">
              Request an Invite
            </a>
          </li>
          <li>
            Mailing List: <router-link to="/page/community/mailing-list">Sign Up</router-link>
          </li>
        </ul>
      </div>
    </div>
  </v-card>
  <v-card class="main padding venue">
    <div class="tc">
      <h2>The Venue: Austin Central Public Library</h2>
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
    ul {
      list-style-type: none;
    }
    
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

