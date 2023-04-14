<template>
  <div>
    <h1>Products</h1>
    <div class="row">
      <div class="col col-sm-4 mb-3 mt-3"
           v-for="product in products"
           :key="product.id">
        <div class="card">
          <div class="card-body">
            <h3>{{ product.title }}</h3>
            <div>Price: {{ product.price }}</div>
            <router-link :to="`/product/${product.id}`">Read more</router-link>
            <hr>
            <button v-if="inCart(product.id)" type="button" class="btn btn-dark"
                    @click="removeFromCart(product.id)">Remove from cart
            </button>
            <button v-else type="button" class="btn btn-primary"
                    @click="addToCart(product.id)">Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: "ProductsList",
    computed: {
      ...mapGetters('products', { products: "all" }),
      ...mapGetters('cart', { inCart: 'has' })
    },
    methods: {
      ...mapActions('cart', { addToCart: "add", removeFromCart: "remove" })
    }
  }

</script>

<style scoped>
.btn{
  margin-top: 2px;
}
</style>