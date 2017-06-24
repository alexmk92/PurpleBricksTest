require('../sass/index.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// page imports
import NegotiationCentre from './containers/NegotiationCentre'
import Header from './components/Header'
import Footer from './components/Footer'

// with more time id like to fetch the current title from the router and pass it
// as a dynamic prop to Header, opposed to having it statically typed

ReactDOM.render(
    <Router>
        <div id='app'>
            <Header title='Secure negotiation centre' />

            <Route exact path="/" component={NegotiationCentre} />

            <Footer />
        </div>
    </Router>
, document.querySelector('.app'))