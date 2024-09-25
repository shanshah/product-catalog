<template>
  <div class="products-container" v-if="getProducts.length">
    <template v-for="product in getProducts">
        <ProductCard
            :product="product"
        />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from './ProductCard.vue';

export default {
    components: {
        ProductCard,
    },
    computed: {
        ...mapGetters(['getProducts']),
    },
    created () {
        this.$store.dispatch('fetchProducts');
    }
}
</script>

<style scoped>
    .products-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 12px;
    }
    @media screen and (min-width: 768px) {
        .products-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media screen and (min-width: 1200px) {
        .products-container {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>