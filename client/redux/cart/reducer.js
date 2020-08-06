import CART_TYPES from './types';

const initialState = {
  orders: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_TYPES.ADD_TO_CART:
      return {
        ...state,
        movies: action.movies,
      };
    default: return state;
  }
};

export default cartReducer;
