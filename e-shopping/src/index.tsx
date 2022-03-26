import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import ArticleList from './components/articlelist';
import './index.css';
import './index.js';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Article from './models/article';

ReactDOM.render(

  <React.StrictMode>
    <Navbar />
    <ArticleList articles={
      [
        new Article("Mechanical keyboard", 5, 49.99, 79.99),
        new Article("Blender", 1, 109.99, 239.99),
        new Article("Graphics Card", 5, 4339.99, 0)
      ]
    } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
