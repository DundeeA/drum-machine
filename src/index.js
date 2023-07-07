import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals'; 
import DrumMachine from './components/DrumMachine';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DrumMachine/> 
  </React.StrictMode>
);

 
reportWebVitals();
