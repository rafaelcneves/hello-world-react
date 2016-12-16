import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hello from './modules/Hello';
import './index.css';

ReactDOM.render(
  <div>
    <App />
    <Hello />
  </div>,
  document.getElementById('root')
);
