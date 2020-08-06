/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
// import CART_TYPES from './types';

const axios = require('axios');

export const addToCart = (movieId, quantity) => async (dispatch) => {
  await axios.post('/api/cart/addtocart', { movieId, quantity })
    .then((response) => {
      console.log(response);
    });
};
