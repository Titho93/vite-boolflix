<script>

import Card from './Card.vue'
import { store } from '../../data/store';

export default {
    name: 'Popular',
    components: {
      Card
    },
    data(){
        return{
            store
        }
    },
    mounted(){
        console.log(store.popularList)
    }
}
</script>

<template>

<h2>Most Popular</h2>
  
  <div class="row">
    <Card v-for="card in store.popularList"
      :key="card.id"
      :title="card.title"
      :originalTitle="card.original_title"
      :language="card.original_language"
      :image="card.backdrop_path"
      :vote="card.vote_average"
      :bio="card.overview"
    />
  </div>
  

</template>

<style lang="scss">

</style>