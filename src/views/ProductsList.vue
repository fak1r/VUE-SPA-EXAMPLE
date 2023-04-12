<template>
  {{ all }}
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "ProductsList",
    computed: {
      ...mapGetters('products', ["all"])
    }
  }

</script>

<style scoped>

</style>