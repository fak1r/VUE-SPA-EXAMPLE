<template>
  <div v-if="!buy">
    <h1>Order now</h1>
    <hr>
    <table class="table table-striped">
      <thead class="table-dark">
      <tr>
        <td>Title</td>
        <td>Price</td>
        <td>Cnt</td>
        <td>Total</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in productsInCart" :key="product.id">
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.cnt }}</td>
        <td>{{ product.price * product.cnt }}</td>
      </tr>
      </tbody>
    </table>
    <div align="right">
      <h2>Total: {{ total }}</h2>
      <button type="button" class="btn btn-primary" @click="order">Buy</button>
    </div>
  </div>
  <div v-else>
    <h1>Thanks for buying</h1>
  </div>
  <router-view></router-view>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Checkout",
  data: () => ({
    buy: false
  }),
  computed:{
    ...mapGetters('cart', ['productsInCart', 'total']),
  },
  methods:{
    order(){
      return this.buy = true;
    }
  }
}
</script>

<style scoped>

</style>