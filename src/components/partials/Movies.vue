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
    },
    computed: {
        movieResult(){
            if(store.movieList.length > 0) {
                return 'Found ' + store.movieList.length + ' Movies';
            }
            return 'Movies Not Found';
        }
    }
    
}
</script>

<template>

<h2>MOVIES</h2>
<span>{{ movieResult }}</span>
  
  <div class="row">
    <Card v-for="card in store.movieList"
      :key="card.id"
      :title="card.title"
      :originalTitle="card.original_title"
      :language="card.original_language"
      :image="card.backdrop_path"
      :vote="card.vote_average"
      :bio="card.overview"
      :relase="card.release_date"
    />
  </div>
  

</template>

<style lang="scss" scoped>

span {
  color: red;
}

</style>