<template>
    <div
          :key="product.id"
          class="product-card"
      >
          <div class="product-image">
            <img :src="product.thumbnail" :alt="product.title" />
          </div>
          <div class="product-info">
            <div>{{product.title}}</div>
            <div>${{product.price}}</div>
            <div>{{product.description}}</div>
            <button
                class="add-product-button"
                @click="$store.dispatch('addProductToCart', product)"
            >
                Add to Basket
            </button>
          </div>
    </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex'

export default {
    props: {
        product: {
            typeof: Object,
            default: {}
        }
    },
    name: 'ProductCard',
    computed: mapState({
        products: state => state.products.all
    }),
    methods: {
        ...mapActions(['addProductToCart']),
    }
}
</script>

<style scoped>
    .product-card {
        width: 100%;
        background-color: #fff;
        border-radius: 8px;
        border: 1px solid #ddd;
    }

    .product-image img {
        object-fit: cover;
    }
    .product-info {
        padding: 12px;
        gap: 8px;
        display: flex;
        flex-direction: column;
        
    }
    .add-product-button {
        width: 100%;
        color: #fff;
        font-weight: 700;
        background-color: blue;
        border-radius: 100px;
    }

</style>