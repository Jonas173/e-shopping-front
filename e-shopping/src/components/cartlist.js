import { timingSafeEqual } from 'crypto';
import { Component } from 'react';

import { connect } from 'react-redux';
import CartItem from './cartitem';

class CartList extends Component {
    render() {
        let idx = 0;
        let heading = this.props.cart?.length > 0 ? `${this.props.cart.length} items in your cart` : 'Your cart is empty';

        const counter = {};
        this.props.cart.forEach(function (obj) {
            var key = JSON.stringify(obj)
            counter[key] = (counter[key] || 0) + 1
        })
        console.log(counter);

        return <div>
            <h1>{heading}</h1>
            <ul>
                {Object.keys(counter).map(function (key, index) {
                    return <CartItem key={idx++} article={JSON.parse(key)} count={counter[key]} renderParent={() => { this.render(); }} />
                })}
            </ul>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

export default connect(mapStateToProps)(CartList);