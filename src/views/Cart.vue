<template>
  <div>
    <h1>Cart</h1>
    <hr>
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <td>Title</td>
          <td>Price</td>
          <td>Cnt</td>
          <td>Total</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productsInCart" :key="product.id">
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.cnt }}</td>
          <td>{{ product.price * product.cnt }}</td>
          <td>
            <button class="btn btn-primary"
                    @click="setCnt({ id: product.id, cnt: product.cnt + 1 })"
            >+</button>
            <button class="btn btn-dark"
                    @click="setCnt({ id: product.id, cnt: product.cnt - 1 })"
            >-</button>
            <button class="btn btn-danger"
                    @click="remove(product.id)"
            >x</button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link :to="{name: 'Checkout'}">
      <button type="button" class="btn btn-primary">Order now</button>
    </router-link>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

  export default {
    name: "Cart",
    computed:{
      ...mapGetters('cart', ["productsInCart"])
    },
    methods:{
      ...mapActions('cart', ['setCnt', 'remove'])
    }
  }

</script>

<style scoped>
.btn{
  margin-left: 2px;
}
</style>