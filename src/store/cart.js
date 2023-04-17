export default {
    namespaced: true, // used in order to give unic names for all actions, mutations, getters: 'cart/name'
    state: {
        products: []
    },
    getters: {
        length: state => state.products.length,
        has: state => id => state.products.some(pr => pr.id === id),
        product(state, getters, rootState, rootGetters) {
            return state.products.map(pr => {
                let item = rootGetters["products/item"](pr.id) // get items in "store/products.js" by id's
                return {...pr, ...item}
            })
        },
        total: (state, getters) => getters.product.reduce((total, pr) => total + +pr.price, 0)
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