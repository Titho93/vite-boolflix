<script>

import Movies from './partials/Movies.vue'
import Series from './partials/Series.vue'
import Popular from './partials/Popular.vue'
import { store } from '../data/store';

export default {
    name: 'Main',
    components: {
        Movies,
        Series,
        Popular
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

    <Popular v-if="(store.movieList.length <= 0) || (store.seriesList.length <= 0)" />

    <div v-else class="list">
      <Movies />
    
      
      <Series />

    </div>
    
  </div>


</template>

<style lang="scss">

.container-bt {
  width: 70%;
  margin: 50px auto;

}

</style>