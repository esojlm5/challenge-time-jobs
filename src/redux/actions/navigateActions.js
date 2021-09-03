import { actionTypes } from './actionsTypes';

export const TotalPrice = total => {
  return { type: actionTypes.TOTAL_PRICE, total };
};

export const AddToCart = add => {
  return { type: actionTypes.ADD_TO_CART, add };
};
