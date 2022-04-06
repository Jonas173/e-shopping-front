import { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartItem from './cartitem';

import { placeOrder } from '../actions/place-order';
import { clearCart } from '../actions/clear-cart';

class CartList extends Component {
    render() {
        if (!this.props.cart?.length > 0)
            return <div><h1>Your cart is empty</h1></div>

        let idx = 0;
        let checkoutArea = this.props.user ?
            <div>
                <p>Total ({this.props.cart.length} articles): {this.props.cart.map(c => c.priceInEuro).reduce((a, b) => { return a + b; }).toFixed(2)}€</p>
                <input className="button" type="button" onClick={() => { this.props.placeOrder(this.props.cart); this.props.clearCart(); }} value="Proceed to checkout"></input>
            </div>
            :
            <div>
                <h3>Please log in to check out</h3>
            </div>
            ;

        const counter = {};
        this.props.cart.forEach(function (obj) {
            var key = JSON.stringify(obj)
            counter[key] = (counter[key] || 0) + 1
        })

        return <div>
            <h2>{this.props.cart.length} items in your cart</h2>
            <ul>
                {Object.keys(counter).map(function (key) {
                    return <CartItem key={idx++} article={JSON.parse(key)} count={counter[key]} />
                })}
            </ul>
            {checkoutArea}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        user: state.user
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ placeOrder: placeOrder, clearCart: clearCart }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CartList);