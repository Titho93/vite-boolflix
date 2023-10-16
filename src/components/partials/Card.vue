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
  position: relative;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5); 
  margin: 20px 10px;
  border: 1px solid white;
  z-index: 2;

  img {
    width: 100%;
    height: 180px;
  }
  
  .bio {
    width: 100%;
    height: 100%;
    position: absolute; 
    top: 0px;
    display: none;
    
  }

}

.card-bt:hover {
  .cover {
    opacity: 0.3;
  }

  .bio {
    display: block;
    opacity: 1;
    z-index: 3;
    color: white;
  }
}

</style>