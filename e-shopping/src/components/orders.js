import React, { Component } from 'react';
import OrderList from './orderlist';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Orders extends Component {
  render() {
    if (!this.props.user)
      return (
        <div className="componentWrapper">
          <h2>Please log in to see your orders</h2>
        </div>
      );

    if (!this.props.orders?.length > 0)
      return (
        <div className="componentWrapper">
          <h2>You haven't placed any orders</h2>
        </div>
      );

    return (
      <div className="componentWrapper">
        <h2>Your orders</h2>
        <h3>Orders in the past three months: {this.props.orders.length}</h3>
        <OrderList></OrderList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    orders: state.orders
  };
}

export default connect(mapStateToProps)(Orders);