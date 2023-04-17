<template>
  <div>
    <h1>Cart</h1>
    <hr>
    <p>products</p>
    <router-link :to="{name: 'Checkout'}">
      <button type="button" class="btn btn-primary">Order now</button>
    </router-link>
  </div>
</template>

<script>

  export default {
    name: "Cart"
  }

</script>

<style scoped>

</style>