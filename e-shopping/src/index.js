import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';


import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import allReducers from './reducers/reducer-all';
// import { Navbar } from './components/navbar';
// import { ArticleList } from './components/articlelist';

const store = createStore(allReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>, 
  document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Navbar />
//       <ArticleList />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
