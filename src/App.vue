<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-9">
            <h1>Shop</h1>
          </div>
          <div class="col col-sm-3">
            <div class="alert alert-default">
              <div>In Cart: ...</div>
              <div>Total: ...</div>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
            </ul>
          </div>
          <div class="col col-sm-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';

  export default {
    data: () => ({
        menu: [
          { route: 'catalog', title: 'Products' },
          { route: 'cart', title: 'Cart' },
          { route: 'checkout', title: 'Checkout' }
        ]
      }),
  }
</script>

<style>
.menu{
  border-right: 1px solid #ddd;
}

.list-group-item{
  transition: background 0.3s, color 0.3s;
}

.list-group-item a{
  text-decoration: none;
}

.list-group-item.active a{
  color: inherit;
}
</style>