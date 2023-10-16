<script>
export default {
    name: 'Card',
    props: {
      title: String,
      originalTitle: String,
      language: String,
      vote: String
    }
}
</script>

<template>
  
  <div class="col-2">
    <div class="bt-card">
       <h5>{{ title }}</h5>
       <h5>{{ originalTitle }}</h5>
       <h5>{{ language }}</h5>
       <h5>{{ vote }}</h5>
    </div>
  </div>

</template>

<style lang="scss">

</style>