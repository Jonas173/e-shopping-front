import React, { Component } from 'react';
import '../index.css';
import './navbar.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
        this.loginOrOut = this.loginOrOut.bind(this);
        this.submit = this.submit.bind(this);
    }

    loginOrOut() {
        if (this.state.loggedIn)
            this.setState({ loggedIn: false});
        else
            this.openModal();
    }

    openModal() {
        const modal = document.querySelector("#modal");
        modal.showModal();
    }

    closeModal() {
        const modal = document.querySelector("#modal");
        const form = document.querySelector("#form");
        form.reset();
        modal.close();
    }

    submit(e) {
        e.preventDefault();
        const emailInput = document.querySelector("#email");
        const passwordInput = document.querySelector("#password");
        const small = document.querySelector("#small");

        if (!emailInput.value) {
            small.textContent = "Email must not be empty";
            e.preventDefault();
            return false;
        }

        if (!passwordInput.value) {
            small.textContent = "Password must not be empty";
            e.preventDefault();
            return false;
        }

        this.setState({ loggedIn: true});
        this.closeModal();
    }

    render() {
        let strCart = this.props?.cart?.length > 0 ? `Cart (${this.props.cart.length})` : `Cart`;
        let strLogin = this.state.loggedIn ? "Log out" : "Log in";

        return <nav>
            <ul className="flex-container">
                <li className="flex-item" ><Link to='/' className="nav-link">Home</Link></li>
                <li className="flex-item" ><Link to='/explore' className="nav-link">Explore</Link></li>
                <li className="flex-item" ><Link to='/cart' className="nav-link">{strCart}</Link></li>
                <li className="flex-item" ><Link to='/orders' className="nav-link">Recent purchases</Link></li>
                <li className="flex-item" onClick={this.loginOrOut}><Link className="nav-link">{strLogin}</Link></li>
            </ul>
            <dialog className="modal" id="modal">
                <h2>Login</h2>
                <p>Please enter your email and password to log in</p>
                <form className="form" id="form" onSubmit={(e) => { return this.submit(e); }}>
                    <input placeholder="Email" type="text" id="email"></input>
                    <input placeholder="Password" type="password" id="password"></input>
                    <small id="small"></small>
                    <div className="space-between">
                        <input className="button" type="submit" value="Login"></input>
                        <input className="button" type="button" value="Close"
                            onClick={this.closeModal}></input>
                    </div>
                </form>
            </dialog>
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