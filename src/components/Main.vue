<script>

import Movies from './partials/Movies.vue'
import Series from './partials/Series.vue'
import { store } from '../data/store';

export default {
    name: 'Main',
    components: {
        Movies,
        Series
    }
}
</script>

<template>
  
  <Movies />

  <Series />
  

</template>

<style lang="scss">

</style>