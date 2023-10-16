<script>

import { store } from '../data/store'

export default {
    name: 'Header',
    data () {
      return {
        store
      }
    }
}
</script>

<template>
  
  <input @keyup.enter="$emit('pushSearch')"  v-model.trim="store.movieSearch" type="text" placeholder="Search">


</template>

<style lang="scss">

</style>