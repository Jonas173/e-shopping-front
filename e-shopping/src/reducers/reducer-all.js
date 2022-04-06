import {combineReducers} from 'redux';
import ArticleReducer from './reducer-articles';
import CartReducer from './reducer-cart';
import UserReducer from './reducer-user';
import OrderReducer from './reducer-orders';

const allReducers = combineReducers({
    articles: ArticleReducer,
    cart: CartReducer,
    user: UserReducer,
    orders: OrderReducer
});

export default allReducers;