const products =  {
    state: () => ({
        products: {
            all: [],
        },
        filteredProducts: [],
    }),
    getters: {
        getProducts: (state) => {
            const { filteredProducts, products } = state;
            return filteredProducts.length ? filteredProducts : products.all;
        }
    },
    actions: {
        async fetchProducts ({ commit }) {
            const response = await fetch('https://dummyjson.com/products');
            const jsonResponse = await response.json();
            console.log('products ', jsonResponse.products);
            commit('setProducts', jsonResponse.products);
        }
    },
    mutations: {
        setProducts (state, products) {
            state.products.all = products;
        },
        filterBy (state, selectedCategories) {
            console.log('selectedCategories ', selectedCategories);
            const filteredProducts = state.products.all.filter(product => {
                return selectedCategories.includes(product.category);
            });
            state.filteredProducts = filteredProducts;
        },
        decrementProductInventory (state, { id }) {
            const product = state.products.all.find(product => product.id === id)
            product.inventory--;
        }
    }
}

export default products;