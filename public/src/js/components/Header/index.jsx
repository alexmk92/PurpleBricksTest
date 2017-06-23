import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {

    render() 
    {
        return (
 
            <header className="shadow" id="header">

                <div className='container'>

                    <div className="gr-4">
                        logo
                    </div>

                    <div className="gr-8 alignee">
                        <div className='aligner pull-text right bottom'>
                            <h1>{ this.props.title }</h1>
                        </div>
                    </div>

                </div>

            </header>

        )
    }
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

module.exports = Header