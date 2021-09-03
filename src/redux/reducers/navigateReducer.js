import { actionTypes } from '@/redux/actions/actionsTypes';

const initialState = {
  cartItems: [],
  totalPrice: 0
};

export const totalPrice = (state = initialState.totalPrice, action) => {
  switch (action.type) {
    case actionTypes.TOTAL_PRICE:
      return action.total;
    default:
      return state;
  }
};

export const cartItems = (state = initialState.cartItems, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return action.add;
    default:
      return state;
  }
};
