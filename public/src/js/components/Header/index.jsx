import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {

    render() 
    {
        return (
 
            <header className="shadow" id="header">

                <div className='container'>

                    <div className="gr-4 hide@mobile alignee">
                        <div className='aligner left bottom'>
                            <img src={'http://' + window.location.host + '/public/assets/images/logo.jpg' } alt='eZie system logo for Secure Negotation Centre' />
                        </div>
                    </div>

                    <div className="gr-8 gr-12@mobile alignee">
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