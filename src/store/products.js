export default {
    namespaced: true, // used in order to give unic names for all actions, mutations, getters: 'products/name'
    state: {
        items: GetProducts()
    },
    getters: {
        all: state => state.items
    }
}

function GetProducts(){
    return [
        {"id":55, "title": "T-Shirt", "price": "10"},
        {"id":56, "title": "Pants", "price": "16"},
        {"id":61, "title": "Panama", "price": "8"},
        {"id":62, "title": "Shoes", "price": "30"},
    ]
}