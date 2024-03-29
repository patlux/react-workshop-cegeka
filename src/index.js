import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var mountNode = document.getElementById('root');
ReactDOM.render(
  <App apiUrl={process.env.REACT_APP_API_URL || '/api'} />,
  mountNode,
);
