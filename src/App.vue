<script>

import { store } from './data/store';
import axios from 'axios';
import Main from './components/Main.vue';
import Header from './components/Header.vue';

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
    created () {
      this.startApi();
    },

    methods: {

        startApi () {
          axios.get(store.apiPopularUrl,
            {
            params: {
              api_key: store.apiKey,
            }
            })
            .then ( res => {
            store.popularList = res.data.results;
            console.log(res.data.results);
            })
            .catch ( err => {
            console.log( err);
            });

        },

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
            });
          
          axios.get(store.apiSeriesUrl,
            {
            params: {
              api_key: store.apiKey,
              query: store.movieSearch
            }
            })
            .then ( res => {
            store.seriesList = res.data.results;
            console.log(res.data.results);
            })
            .catch ( err => {
            console.log( err);
            });  
        },
        mounted () {
          this.startApi();
        }
    }
}
</script>

<template>
  
  <Header @pushSearch="getApi" />

  <Main />
  

</template>

<style lang="scss">
@use './scss/Main.scss'


</style>