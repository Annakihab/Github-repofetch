import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'

import './global.css';
import App from './App';
import registerServiceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
