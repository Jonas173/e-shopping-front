import React, { Component } from 'react';
import ArticleItem from './articleitem';
import Article from '../models/article';

type params = {
    articles: Article[];
}

export class ArticleList extends React.Component<params> {

    render(): React.ReactNode {

        return <div>
            <h1>New arrivals:</h1>
            <ul>
                {this.props.articles.map(a => (
                    <ArticleItem article={a} />
                ))}
            </ul>
        </div>
    }

    handleClick() {
        alert("Click!");
    }
}

export default ArticleList