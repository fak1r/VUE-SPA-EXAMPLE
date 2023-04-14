import products from "@/store/products";

export default {
    namespaced: true, // used in order to give unic names for all actions, mutations, getters: 'cart/name'
    state: {
        products: []
    },
    getters: {
        length: state => state.products.length,
        has: state => id => state.products.some(pr => pr.id === id)
    },
    mutations:{
        add(state, id){
            state.products.push({ id, cnt: 1 })
        },
        remove(state, id){
            state.products = state.products.filter(pr => pr.id !== id)
        }
    },
    actions:{
        add(store, id){
            if (!store.getters.has(id)){
                store.commit('add', id)
            }
        },
        remove(store, id){
            if (store.getters.has(id)){
                store.commit('remove', id)
            }
        }
    }
}