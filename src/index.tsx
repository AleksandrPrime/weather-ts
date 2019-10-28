import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error_boundry/error-boundry'

ReactDOM.render(
    <ErrorBoundry>
        <Router>
            <App/>
        </Router>
    </ErrorBoundry>,
    document.getElementById('root'));

