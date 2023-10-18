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

<div class="container-bt">

  <h2>MOST POPULAR</h2>
    
    <div class="row plus">
      <Card v-for="card in store.popularList"
        :key="card.id"
        :title="card.title"
        :originalTitle="card.original_title"
        :language="card.original_language"
        :image="card.poster_path"
        :vote="card.vote_average"
        :bio="card.overview"
        :relase="card.release_date"
      />
    </div>

</div>

  

</template>

<style lang="scss">

</style>