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
  
  <div class="bt-container pt-3 pb-3">
    <div class="logo">
      <img src="/public/logo-boolflix.png" alt="logo">
    </div>

    <input @keyup="$emit('pushSearch')"  v-model.trim="store.movieSearch" type="text" placeholder="Search">
    
  </div>

</template>

<style lang="scss">

.bt-container{
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

   .logo{
    width: 10vw;

     img{
       max-width: 100%;
     }
    }

  input {
    border-radius: 5px;
  }
}


</style>