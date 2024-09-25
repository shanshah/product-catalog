<template>
    <div class="filter-container">
        <button class="filter-button" @click="toggleFilter">Filter</button>
        <div v-show="showFilter" class="filter">
            <button class="close-filter" @click="showFilter = false">x</button>
            <div v-for="category in categories">
                <input type="checkbox" :id="category" :value="category" v-model="selectedCategories" @change="filterByCategory(category)" />
                <label :for="category">{{ category }}</label>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Filter',
    data: function() {
        return {
            showFilter: false,
            selectedCategories: [],
        }
    },
    computed: {
        ...mapState({
            products: state => state.products.products.all,
        }),
        categories() {
            return ['beauty', 'fragrances', 'furniture', 'groceries'];
        },
    },
    methods: {
        ...mapMutations(['filterBy']),
        filterByCategory: function() {
            const { selectedCategories } = this;
            this.$store.commit('filterBy', selectedCategories);
        },
        toggleFilter: function() {
            this.showFilter = !this.showFilter;
        }
    }
}
</script>

<style scoped>
    .filter-container {
        position: relative;
    }
    .filter {
        width: 200px;
        top: 40px;
        left: 0;
        position: absolute;
        padding: 8px;
        text-align: left;
        border: 1px solid #ddd;
        background-color: #fff;
    }
    .filter-button {
        color: #fff;
        font-weight: 800;
        background-color: blue;
    }
    .close-filter {
        top: 4px;
        right: 4px;
        position: absolute;
        padding: 4px 8px;
        font-size: 16px;
        background-color: none;
    }
</style>