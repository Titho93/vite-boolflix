<script>

import { store } from './data/store';
import axios from 'axios'
import Main from './components/Main.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Main,
    Header
  },
  data () {
        return {
            store
        }
    },
    methods: {
        getApi () {
          axios.get(store.apiMoviesUrl,
          {
            params: {
              api_key: store.apiKey,
              query: store.movieSearch
            }
          })
          .then ( res => {
            store.movieList = res.data.results;
            console.log(res.data.results);
          })
          .catch ( err => {
            console.log( err);
          })
        }
    },
}
</script>

<template>
  
  <Header @pushSearch="getApi" />

  <Main />

</template>

<style>

</style>