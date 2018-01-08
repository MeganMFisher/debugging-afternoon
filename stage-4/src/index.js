import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// npm install react-redux and redux
import { Provider } from 'react-redux';
import store from './redux/store';
// import HashRouter and add it below
import { HashRouter } from 'react-router-dom';

ReactDOM.render(

    <Provider store={store}>  
        <HashRouter>
           <App />
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
