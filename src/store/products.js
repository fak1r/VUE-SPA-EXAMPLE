export default {
    namespaced: true, // used in order to give unic names for all actions, mutations, getters: 'products/name'
    state: {
        items: GetProducts()
    },
    getters: {
        all: state => state.items,
        // item: state => id => state.items.find(pr => pr.id === id),
        itemsMap(state) { // we can use a cache map of a large list of products so as not to loop through it every time
            let map = {};
            state.items.forEach((pr) => {
                map[pr.id] = pr;
            })
            return map;
        },
        item: (state, getters) => id => getters.itemsMap[id]
    }
}

function GetProducts(){
    return [
        {"id":55, "title": "T-Shirt", "price": "10", "color": "Black, White", "size": "M, L"},
        {"id":56, "title": "Pants", "price": "16", "color": "Brown", "size": "M, L, XL"},
        {"id":61, "title": "Panama", "price": "8", "color": "Blue, Red, White", "size": "L" },
        {"id":62, "title": "Shoes", "price": "30", "color": "Black", "size": "XL, XXL" },
        {"id":71, "title": "Smartphone", "price": "200", "color": "Black, Blue", "storage": "32GB", "ram": "2GB" },
        {"id":72, "title": "Notebook", "price": "500", "color": "White, Grey", "storage": "512GB", "ram": "8GB" },
    ]
}