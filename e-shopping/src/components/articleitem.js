import React, { Component } from 'react';
import Rating from './rating';
import logo from '../resources/logo192.png';

import './articleItem.css';

export class ArticleItem extends React.Component {

    render() {
        let reduced;
        if (this.props.article.reducedFrom > 0 && this.props.article.reducedFrom > this.props.article.priceInEuro)
            reduced = <h2 className="reduced">{this.props.article.reducedFrom}€</h2>

        return <div className="article" onClick={this.props.onClick}>
            <div className="centerHorizontal">
                <img className="image" src={this.props.article.logo} />
            </div>
            <h3>{this.props.article.name}</h3>
            <Rating stars={this.props.article.rating} />
            <span>
                <h2>{this.props.article.priceInEuro}€</h2>
                {reduced}
            </span>
        </div>
    }
}

export default ArticleItem