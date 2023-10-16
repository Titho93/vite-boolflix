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
  
  <div class="col">
    <div>
      <img :src="'https://image.tmdb.org/t/p/w342/' + image"  alt="">
      <h5>{{ title }}</h5>
      <h5>{{ originalTitle }}</h5>
      <h5>{{ language }}</h5>
    </div>
  </div>

</template>

<style lang="scss">

</style>