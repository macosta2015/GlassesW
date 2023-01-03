import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WWD from './WWD';
import Card from './Card';
import Input from './Input';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    <WWD />
    <Card />
    <Input />

  </React.StrictMode>
);

reportWebVitals();
