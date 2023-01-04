import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WWD from './WWD';
import Card from './Card';
import Input from './Input';
import Book from './Book';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    <br>
    </br>
    <br>
    </br>
    <WWD />
    <Book />
    <br>
    </br>
    <Card />
    <Input />

  </React.StrictMode>
);

reportWebVitals();
