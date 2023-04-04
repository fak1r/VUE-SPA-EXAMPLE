import { createStore } from 'vuex'

import products from './products';
import cart from './cart';

export default createStore({
  modules: {
    products,
    cart
  },
  strict: process.env.NODE_ENV !== 'production', // prevent child elements from changing global variables

});
