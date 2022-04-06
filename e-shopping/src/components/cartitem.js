import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions/remove-cart-item';
import './cartitem.css';

class CartItem extends Component {
    render() {
        return (
            <div className="orderitem">
                <div className="tricol">
                    <div className="centerVertical">
                        <img className="image" src={this.props.article.logo}></img>
                    </div>
                    <div>
                        <h3>{this.props.article.name}</h3>
                        <p>Items: {this.props.count}</p>
                        <p>Ready to ship by {(new Date(2023, 2)).toLocaleDateString()}</p>
                        <input className="button" type="button" onClick={() => { this.props.deleteArticle(this.props.article); }} value="Remove"></input>
                    </div>
                    <h4>{(this.props.count * this.props.article.priceInEuro).toFixed(2)}€</h4></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ deleteArticle: deleteArticle }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CartItem);