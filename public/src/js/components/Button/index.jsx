import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {

    render() {
        
        var className = ''
        this.props.color ? className += this.props.color : null
        this.props.justify ? className += (' pull ' + this.props.justify) : null

        return (
            <button onClick={this.props.action ? this.props.action.bind(this) : null} 
                    className={className}
            >
                { this.props.label }
            </button>
        )
    }
}

Button.propTypes = {
    color: PropTypes.string, 
    label: PropTypes.string.isRequired,
    action: PropTypes.func,
}

module.exports = Button