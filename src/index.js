import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import config from './config';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

firebase.initializeApp(config.firebase);
