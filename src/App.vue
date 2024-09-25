<template>
  <div>
    <header class="page-header">
      <div class="logo">LOGO</div>
      <button class="cart" @click="toggleCart">Basket ({{ cartProducts.length }})</button>
    </header>
    <ShoppingCart v-show="showCart" @close-cart="closeCart" />
    <div class="action-bar">
      <Filter />
      <div>
        <select @change="sortByPrice" class="sort-select">
          <option value="" selected disabled>Please select option</option>
          <option value="low">Price(Low to high)</option>
          <option value="high">Price(High to low)</option>
        </select>
      </div>
    </div>
    <ProductList />
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'

  import Filter from './components/Filter.vue';
  import ProductList from './components/ProductList.vue';
  import ShoppingCart from './components/ShoppingCart.vue';

  export default {
    components: {
      Filter,
      ProductList,
      ShoppingCart,
    },
    data: function() {
      return {
        showCart: false,
      }
    },
    computed: {
      ...mapGetters(['cartProducts']),
      ...mapGetters(['getProducts']),
    },
    methods: {
      toggleCart: function() {
        this.showCart = !this.showCart;
      },
      closeCart: function() {
        this.showCart = false;
      },
      sortByPrice: function(e) {
        const type = e.target.value;
        this.getProducts.length && this.getProducts.sort((a, b) => {
          if(type === 'low') {
            return a.price - b.price;
          }
          return b.price - a.price;
        });
      }
    }
  }
</script>

<style scoped>
  .page-header {
    height: 60px;
    /* top: 0;
    position: sticky; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
  }
  .action-bar {
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 24px;
  }
  .sort-select {
    height: 40px;
    border-radius: 4px;
  }
  .cart {
    padding: 8px;
    color: #fff;
    font-weight: 800;
    border-radius: 8px;
    background-color: blue;
  }
</style>
