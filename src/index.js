import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Component2 from './Componetns/Component2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
    <Component2/>
  </React.StrictMode>
);

