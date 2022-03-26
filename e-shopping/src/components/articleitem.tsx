import React, { Component } from 'react';
import Rating from './rating';
import Article from '../models/article';
import logo from '../resources/logo192.png'

import './articleItem.css';


type params = {
    article: Article;
}

export class ArticleItem extends React.Component<params, {}> {

    render(): React.ReactNode {
        let reduced;
        if (this.props.article.reducedFrom > 0 && this.props.article.reducedFrom > this.props.article.priceInEuro)
            reduced = <h2 className="reduced">{this.props.article.reducedFrom}€</h2>

        return <div onClick={this.handleClick}>
            <img src={logo} />
            <h3>{this.props.article.name}</h3>
            <Rating stars={this.props.article.rating} />
            <span>
                <h2>{this.props.article.priceInEuro}€</h2>
                {reduced}
            </span>
        </div>
    }

    handleClick() {
        if(this.props.article == undefined)
        alert(`Click!`);
        else
        alert("!!!");
        
    }
}

export default ArticleItem