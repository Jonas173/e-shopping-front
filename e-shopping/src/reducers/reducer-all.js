import {combineReducers} from 'redux';
import ArticleReducer from './reducer-articles';
import CartReducer from './reducer-cart';

const allReducers = combineReducers({
    articles: ArticleReducer,
    cart: CartReducer,
});

export default allReducers;