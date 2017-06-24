import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button'
import Helpers from '../../../lib/helpers'
import Dropify from '../../../lib/Dropify'

// Could abstract this and the "your response" widgets
// into a shared component as they share most of the same
// render cycle - for now they will be separate!
class Offer extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            dropify: null,
            isPanelVisible: true,
        }
    }

    componentWillMount() {
        if(this.state.dropify === null) {
            this.setState({ dropify: new Dropify() })
        }
    }

    collapsePanel(event) {
        this.state.dropify.SlidePanel(event, this.state.isPanelVisible, () => {
            this.setState({ isPanelVisible: !this.state.isPanelVisible })
        })
    }

    renderShowHideButton() {
        if(this.state.isPanelVisible) {
            return (
                <span onClick={this.collapsePanel.bind(this)} className='hide-button right'>HIDE <i className='fa fa-chevron-up' aria-hidden='true'></i></span>
            )
        } else {
            return (
                <span onClick={this.collapsePanel.bind(this)} className='hide-button right'>SHOW <i className='fa fa-chevron-down' aria-hidden='true'></i></span>
            )
        }
    }

    renderOfferDetails() {

         let formattedDate = Helpers.getFormattedDate(this.props.offerDate)

        return (
            <div className='row'>
                <p className='number'>{this.renderPrice()}</p>
                <p className='text dull small'>Subject to offer qualification by Purplebricks</p>
                <br />

                <footer>
                    <Button label='VIEW COMMENTS' />
                    <span className='text purple anchor bottom right'>Date {formattedDate.date} Time: {formattedDate.time}</span>
                </footer>
            </div>
        )
    }

    // could adapt this to do currency conversion. :)
    renderPrice() {
        const formattedPrice = Number(this.props.offerPrice).toLocaleString()

        switch(this.props.currency.toUpperCase()) {
            case 'USD': return '$' + formattedPrice;
            case 'GBP': return '£' + formattedPrice;
        }
    }

    render() {

        return (

            <div className={'spacer ' + this.props.spacerSide || 'right' }>
                <section className='widget gr-12 collapsable'>

                    <div className='row title'>
                        <h1>Buyer's offer</h1>
                        { this.renderShowHideButton() }
                        <hr />
                    </div>

                    { this.renderOfferDetails() }

                </section>
            </div>
        )

    }
}

Offer.propTypes = {
    offerPrice: PropTypes.number.isRequired,
    offerDate: PropTypes.object.isRequired,
    currency: PropTypes.string.isRequired,
}

module.exports = Offer