import { Component } from 'react';

class OrderItem extends Component {

    render() {
        let idx = 0;

        const counter = {};
        this.props.orders.forEach(function (obj) {
            var key = JSON.stringify(obj)
            counter[key] = (counter[key] || 0) + 1
        });

        return (
            <div key={idx++} className="orderitem">
                {Object.keys(counter).map((key) => {
                    let obj = JSON.parse(key);

                    return (
                        <div>
                            <div className="tricol">
                                <div className="centerVertical">
                                    <img className="image" src={obj.logo}></img>
                                </div>
                                <div>
                                    <p>Order placed</p>
                                    <h4>{new Date(Date.now()).toDateString()}</h4>
                                    <h3>{obj.name}</h3>
                                    <p>Items: {counter[key]}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        orders: state.orders
    };
}

export default OrderItem;