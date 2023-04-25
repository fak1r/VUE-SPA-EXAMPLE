export default {
    namespaced: true, // used in order to give unic names for all actions, mutations, getters: 'cart/name'
    state: {
        products: []
    },
    getters: {
        length: state => state.products.length,
        has: state => id => state.products.some(pr => pr.id === id),
        productsInCart(state, getters, rootState, rootGetters) {
            return state.products.map(pr => {
                let item = rootGetters["products/item"](pr.id) // get items in "store/products.js" by id's
                return {...pr, ...item}
            })
        },
        total: (state, getters) => getters.productsInCart.reduce((total, pr) => total + pr.price * pr.cnt, 0)
    },
    mutations:{
        add(state, id){
            state.products.push({ id, cnt: 1 })
        },
        remove(state, id){
            state.products = state.products.filter(pr => pr.id !== id)
        },
        setCnt(state, { id, cnt }){
            let i = state.products.findIndex(pr => pr.id === id);
            state.products[i].cnt = Math.max(1, cnt);
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
        },
        setCnt(store, payload){
            if (store.getters.has(payload.id)){
                store.commit('setCnt', payload)
            }
        }
    }
}