<template>
  <div v-if="hasProduct">
    <h1>{{ product.title }}</h1>
    <hr>
    <div class="alert alert-primary">
      <h2>Price: {{ product.price }}</h2>
      <h5>Color: {{ product.color }}</h5>
      <h5 v-if="product.size">Size: {{ product.size }}</h5>
      <h5 v-if="product.storage">Storage: {{ product.storage }}</h5>
      <h5 v-if="product.ram">Ram: {{ product.ram }}</h5>
    </div>
  </div>
  <app-E404 v-else title="Product not found"></app-E404>
</template>

<script>
import appE404 from "@/components/E404";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "Product",
  components: {
    appE404
  },
  computed: {
    ...mapGetters('products', { productProxy: 'item' }),
    ...mapGetters('cart', { inCart: 'has' }),
    id(){
      return this.$route.params.id; // get id by URL
    },
    product(){
      return this.productProxy(this.id);
    },
    hasProduct(){
      return this.product !== undefined;
    }
  },
  methods: {
    ...mapActions('cart', { addToCart: "add", removeFromCart: "remove" })
  }
}
</script>

<style scoped>

</style>