<script>
export default {
    name: 'Card',
    props: {
      title: String,
      originalTitle: String,
      language: String,
      vote: String,
      image: String
    }
}
</script>

<template>
  
  <div class="col-3">
    <div class="card-bt">

      <div class="cover">
        
        <img v-if="image == null" src="../../assets/notimage.png" alt="">
        <img v-else :src="'https://image.tmdb.org/t/p/w342/' + image"  :alt=" title ">

      </div>
      
      <div class="bio">
        
        <h5>{{ title }}</h5>
        <h5>{{ originalTitle }}</h5>
        <h5>{{ language }}</h5>

      </div>
    </div>
  </div>

</template>

<style lang="scss">

.card-bt{
  text-align: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 180px;
  }
}


</style>