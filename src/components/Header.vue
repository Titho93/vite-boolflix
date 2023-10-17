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
    <div class="profile">
      <img src="../assets/bt.webp" alt="">
    </div>
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
    flex-grow: 2;

     img{
       max-width: 160px;
     }
    }

  input {
    border-radius: 5px;
    background-color: black;
    color: white;
    padding-left: 10px;
  }

  .profile {
    margin-left: 20px;
    img {
      width: 60px;
    }
  }
}


</style>