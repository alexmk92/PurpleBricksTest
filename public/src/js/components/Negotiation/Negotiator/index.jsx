import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button'

class Negotiator extends PureComponent {

    render() {

        return (

            <section id='negotiator-panel' className='widget row'>
                <div style={{ padding : '0 25px' }}>
                    <p className='gr-8 gr-12@tablet text purple medium arial bold'>Would you like your Expert, { this.props.negotiatorName }, to negotiate on your behalf? It's completely free!</p>
                    <Button label='NEGOTIATE FOR ME' color='purple' justify='right' />
                </div>
            </section>

        )

    }
}

Negotiator.propTypes = {
    negotiatorName: PropTypes.string.isRequired,
}

module.exports = Negotiator