import { combineReducers } from 'redux';
import { cartItems, totalPrice } from './navigateReducer';

const reducer = combineReducers({
  cartItems,
  totalPrice
});

export default reducer;
