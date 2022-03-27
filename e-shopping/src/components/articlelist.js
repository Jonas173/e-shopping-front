import React, { Component } from 'react';
import {useSelector} from 'react-redux';
import ArticleItem from './articleitem';
import './articlelist.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectArticle } from '../actions/add-cart';

class ArticleList extends React.Component {

    render() {
        return <div>
            <h1>New arrivals</h1>
            <ul className="grid">
                {this.props.articles?.map(a => (
                    <ArticleItem key={a.id} article={a} onClick={() => this.props.selectArticle(a)} />
                ))}
            </ul>
        </div>
    }
}

function mapStateToProps(state) {    
    return {
        articles: state.articles
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectArticle: selectArticle }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ArticleList);