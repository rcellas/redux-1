import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import App from './App';

const Root = ({store})=>(
    <Provider store={store}>
        <Router>
            <Router path="/" component={App}/>
            <Router path="/(:filter)" component={App}/>
        </Router>
    </Provider>
)

Root.propTypes={
    store: PropTypes.object.isRequired
}

export default Root;