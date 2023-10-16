<script>

import Card from './Card.vue'
import { store } from '../../data/store';

export default {
    name: 'Movies',
    components: {
      Card
    },
    data(){
        return{
            store
        }
    },
    mounted(){
        console.log(store.movieList);
    }
}
</script>

<template>
  
  <div class="row">
            <Card v-for="card in store.movieList"
            :title="card.title"
            :originalTitle="card.original_title"
            :language="card.original_language"
            :vote="card.vote_average"
            />
        </div>
  

</template>

<style lang="scss">

</style>