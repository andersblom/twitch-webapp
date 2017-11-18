import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

import store from './lib/store';
import { Provider } from 'react-redux';

import Routes from './Routes';

import './index.css';

require('dotenv').config();

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
