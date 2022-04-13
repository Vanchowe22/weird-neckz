import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(

  <MoralisProvider serverUrl='https://7g9iwcewtosg.usemoralis.com:2053/server' appId='Ln2VhKmBgzH52SokFXr0srqfmU4tiBniKqBaWHsB'>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
