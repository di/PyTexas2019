<template>
<div class="md-page">
  <v-card class="padding">
    <h1>
      {{ title }}
    </h1>
    <div v-html="html"></div>
  </v-card>
</div>
</template>
<script>
import Vue from "vue";
import showdown from "showdown";
import axios from 'axios';

import { image } from "../filters";

export default {
  props: ["slug"],
  data() {
    return {
      title: "",
      html: "",
      current_dialog: null
    };
  },
  computed: {

  },
  created() {
    this.init();
  },
  watch: { $route: "init" },
  methods: {
    init() {
      console.log(this.slug);
      axios
        .get(URLS.md[this.slug + ".md"])
        .then(response => {
          var converter = new showdown.Converter({ tables: true });

          var text = response.data;
          this.title = text.match(/^# (.*)\n/)[1];
          this.$router.set_title(this.title);
          text = text.replace(/^# .*\n/, "");
          this.html = converter.makeHtml(text);
        })
        .catch(error => {
          console.error(error);
          alert("Error getting page.");
        });
    }
  }
};
</script>