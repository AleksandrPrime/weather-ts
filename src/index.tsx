import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry'

ReactDOM.render(
    <ErrorBoundry>
        <Router>
            <App/>
        </Router>
    </ErrorBoundry>,
    document.getElementById('root'));

