require('../sass/index.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// page imports
import NegotiationCentre from './containers/NegotiationCentre'
import Header from './components/Header'

ReactDOM.render(
    <Router>
        <div id='app'>
            <Header />
            <Route exact path="/" component={NegotiationCentre} />
        </div>
    </Router>
, document.querySelector('.container'))