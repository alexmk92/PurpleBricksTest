import React, { Component } from 'react'

import Status from '../../components/Status'

// PLEASE NOTE: Normally the props being passed to Status would be the result of some
// dynamic API call and would not be statically passed as 'Withdrawn' directly to the
// child component (this is based on the assumption that the Status widget is a dynamic component
// that reacts to a state change.)

class NeogtiationCentre extends Component {

    render() {
        return (

            <div className="container">
                <Status label={ 'Withdrawn' } color={ 'red' } />
            </div>

        );
    }
}

module.exports = NeogtiationCentre