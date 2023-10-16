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

    <Movies />
  
    
    <Series />
    
  </div>


</template>

<style lang="scss">

.container-bt {
  width: 70%;
  margin: 50px auto;

}

</style>