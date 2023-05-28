import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './../node_modules/react-scroll/package.json'
import reportWebVitals from './reportWebVitals';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './../node_modules/owl.carousel/dist/assets/owl.carousel.min.css'
import './../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css'

import './../node_modules/jquery/dist/jquery.min'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <App />
 
 </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
