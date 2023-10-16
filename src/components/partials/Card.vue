<script>
export default {
    name: 'Card',
    props: {
      title: String,
      name: String,
      originalTitle: String,
      language: String,
      vote: String
    }
}
</script>

<template>
  
  <div class="col">
    <div>
      <h5>{{ title }}</h5>
      <h5>{{ originalTitle }}</h5>
      <h5>{{ language }}</h5>
    </div>
  </div>

</template>

<style lang="scss">

</style>