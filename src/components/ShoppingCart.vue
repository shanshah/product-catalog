<template>
    <div class="cart-container">
        <h2>Your Cart</h2>
        <button class="close-cart-button" @click="$emit('close-cart')">x</button>
        <p v-show="!products.length">
            <i>Please add some products to cart.</i>
        </p>
        <div class="item-container" v-if="products.length">
          <div v-for="product in products" :key="product.id" class="cart-item">
            <div>{{ product.title }}</div>
            <div>Quantity: {{ product.quantity }}</div>
            <div>Total Price: ${{ product.price }} x {{ product.quantity }}</div>
            <button @click="deleteCardItem(product.id)">Remove</button>
          </div>
        </div>
        <div class="total-amount" v-if="total">
          <h2>Total: ${{ total }}</h2>
        </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'ShoppingCart',
    computed: {
      ...mapGetters({
        products: 'cartProducts',
        total: 'cartTotalPrice',
      })
    },
    methods: {
      deleteCardItem: function(id) {
        this.$store.commit('removeCartItem', id);
      }
    }
  }
  </script>

<style scoped>
    .cart-container {
        width: 100%;
        top: 75px;
        right: 0;
        z-index: 1;
        position: absolute;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #fff;
    }
    .close-cart-button {
        position: absolute;
        top: 0;
        right: 0;
    }

    .cart-item-container {
      display: flex;
    }
    .item-container {
      max-height: 200px;
      overflow-y: scroll;
    }
    .cart-item {
      padding-top: 8px;
      padding-bottom: 8px;
      border-top: 1px solid #ddd;
    }
    .total-amount {
      border-top: 2px solid #ddd;
    }

    @media screen and (min-width: 1200px) {
        .cart-container {
            right: 80px;
            width: 60%;
        }
    }
</style>