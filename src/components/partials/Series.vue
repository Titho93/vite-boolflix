<script>

import Card from './Card.vue'
import { store } from '../../data/store';

export default {
    name: 'Series',
    components: {
      Card
    },
    data(){
        return{
            store
        }
    },
    mounted(){
        console.log(store.seriesList);
    },
    computed: {
        seriesResult(){
            if(store.seriesList.length > 0) {
                return 'Found ' + store.seriesList.length + ' Series';
            }
            return 'Series Not Found';
        }
    }
}
</script>

<template>

<h2>SERIES</h2>
<span>{{ seriesResult }}</span>
  
  <div class="row">
    <Card v-for="card in store.seriesList"
      :key="card.id"
      :title="card.name"
      :originalTitle="card.original_name"
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