<template>
  <h2>{{ title }}</h2>
  <hr>
  <router-link :to="{name: 'Catalog'}">Main page</router-link>
</template>

<script>
export default {
  name: "E404",
  props:{
    title:{
      type: String,
      default: 'Page not found'
    }
  }
}
</script>

<style scoped>

</style>