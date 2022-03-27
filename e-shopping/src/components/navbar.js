import React, { Component } from 'react';
import '../index.css';
import './navbar.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {

    render() {
        let strCart = this.props?.cart?.length > 0 ? `Cart (${this.props.cart.length})` : `Cart`;

        return <nav>
            <ul className="flex-container">
                <li className="flex-item" ><Link to='/' className="nav-link">Home</Link></li>
                <li className="flex-item" ><Link to='/explore' className="nav-link">Explore</Link></li>
                <li className="flex-item" ><Link to='/cart' className="nav-link">{strCart}</Link></li>
                <li className="flex-item" ><Link to='/orders' className="nav-link">Recent purchases</Link></li>
            </ul>
        </nav>
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles,
        cart: state.cart
    };
}

export default connect(mapStateToProps)(Navbar)