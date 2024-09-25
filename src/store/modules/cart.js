const cart = {
    state: () => ({
        items: [],
    }),

    getters: {
        cartProducts: (state) => {
          return state.items;
        },
        cartTotalPrice: (state) => {
          return state.items.reduce((total, product) => {
                return total + product.price * product.quantity
            }, 0)
        }
    },
    actions: {
        addProductToCart ({ commit, state }, product) {
          const cartItem = state.items.find(item => item.id === product.id)
          if (!cartItem) {
              product.quantity = 1;
              state.items.push(product);
          } else {
              commit('incrementItemQuantity', cartItem);
          }
        },
    },
    mutations: {
        incrementItemQuantity (state, { id }) {
          const cartItem = state.items.find(item => item.id === id)
          cartItem.quantity++
        },
        removeCartItem(state, id) {
          let cartItem = state.items.filter(item => item.id !== id);
          state.items = cartItem;
        }
    }
}

export default cart;