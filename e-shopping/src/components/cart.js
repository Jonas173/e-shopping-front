// Cart.js
import React, { Component } from 'react';
import CartList from './cartlist';

class Cart extends Component {
  render() {
    return (
      <div className="componentWrapper">
        <CartList />
      </div>
    );
  }
}

export default Cart