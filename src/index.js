import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <Toaster
         position="top-right"
         reverseOrder={false}

        toastOptions={{
          success: {
            style: {
              fontFamily: 'Lucida Console',
              padding: '16px',
              color: 'white',
              background: 'green',
            },
            iconTheme: {
              primary: '#4aa822',
              secondary: '#ffff',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}/>
        < App />
      </BrowserRouter>
   </React.StrictMode>
  </Provider>
  
);
//testing
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
