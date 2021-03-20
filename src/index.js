import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Header from './Header';
import Footer from './Footer';
import Greetings from './Greetings';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
import Todo from './Todo';

import App from './Route';
import Api from './Api';
import Array from './Array';
import Hooks from './Hooks';


ReactDOM.render(
  <React.StrictMode>
    {/* <Header/>
    <Greetings name="eliza"/>
    <App />
    <Greetings name="kripa"/>
    <Footer/>
    <Counter/> */}
    {/* <Todo/> */}
    {/* <App/> */}
    {/* <Api/> */}
    {/* <Array/>     */}
    <Hooks/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
