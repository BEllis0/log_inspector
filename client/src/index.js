import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.jsx';

_logger.config({
    environment: "production",
    siteName: "Log Inspector",
    channel: "app",
    apiEndpoint: "http://localhost:8080/api/v1/messages/new",
    apiKey: "VFMFQCQ-EYA4JW2-KE5TE6Q-1G5CYCH"
    //websocket: "wss://www.example.com/socketserver"
});

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    ), document.getElementById('app'));