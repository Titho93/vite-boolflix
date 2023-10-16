<script>

import Movies from './partials/Movies.vue'
import Series from './partials/Series.vue'
import { store } from '../data/store';

export default {
    name: 'Main',
    components: {
        Movies,
        Series
    },
    data () {
      return {
        store
      }
    },
    mounted () {
    }
}
</script>

<template>
  
  <div class="container-bt">

    <h2>Movies</h2>
    <Movies />
  
    <h2>Series</h2>
    <Series />
    
  </div>


</template>

<style lang="scss">

.container-bt {
  width: 70%;
  margin: 50px auto;

  h2 {
    text-align: center;
    padding: 50px 0px;
  }
}

</style>