import React, { Component } from 'react';
import './navbar.css';

export class Navbar extends React.Component {

    render(): React.ReactNode {
        return <div className="flex-container">
            <a className="flex-item" href="home">Home</a>
            <a className="flex-item" href="explore">Explore</a>
            <a className="flex-item" href="cart">Cart</a>
            <a className="flex-item" href="orders">Recent purchases</a>
        </div>
    }

    handleClick() {
        alert("Click!");
    }
}

export default Navbar