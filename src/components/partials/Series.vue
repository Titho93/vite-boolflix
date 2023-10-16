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
    }
}
</script>

<template>
  
  <div class="row">
    <Card v-for="card in store.seriesList"
      :key="card.id"
      :title="card.name"
      :originalTitle="card.original_name"
      :language="card.original_language"
    />
  </div>
  
</template>

<style lang="scss">

</style>