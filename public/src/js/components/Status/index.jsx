import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Status extends PureComponent {

    render() {
        
        return (
            <div className={ 'status ' + this.props.color }>
                <span><strong>Status:</strong> { this.props.label }</span>
            </div>
        )

    }

}

Status.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

module.exports = Status