import { Component } from 'react';
import { connect } from 'react-redux';

import OrderItem from './orderitem';

class OrderList extends Component {

    render() {
        let idx = 0;

        return (
            <ul>
                {this.props.orders.map(
                    (o) => {
                        return <OrderItem key={idx++} orders={o}></OrderItem>
                    })}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        orders: state.orders
    };
}

export default connect(mapStateToProps)(OrderList);