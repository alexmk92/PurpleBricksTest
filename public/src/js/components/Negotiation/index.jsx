import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Negotiator from './Negotiator'
import Button from '../Button'
import Helpers from '../../lib/helpers'
import Dropify from '../../lib/Dropify'

class Negotiation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            offer: 0,
            dropify: null,
            isPanelVisible: true,
        }
    }

    componentWillMount() {
        if(this.state.dropify === null) {
            this.setState({ dropify: new Dropify(80, 380) })
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

    handleChange(event) {
        const value = event.target.value.replace(',', '')
        const offer = event.target.validity.valid ? value : this.state.offer

        this.setState({ offer })
    }

    submitOffer() {
        console.log("You would accept an offer of: ", this.state.offer)
    }

    renderPriceSection() {
        let formattedNumber = Helpers.commafy(this.state.offer)

        return (
            <div id='negotiator'>
                <h2>Enter an offer you would be willing to accept:</h2>

                <div className='form-area'>
                    <label className='currency'>£</label>
                    <input type='text' pattern='[0-9,]+' onChange={this.handleChange.bind(this)} value={formattedNumber} />

                    <div style={{ marginTop: '15px' }} className='pull right'>
                        <Button action={this.submitOffer.bind(this)} label='SUBMIT OFFER' color='blue' />
                    </div>
                </div>

                <br/>

                <Button label='ADD COMMENTS' color='purple' />
            </div>
        )
    }

    render() {
        return (

            <section className='collapsable widget gr-12 purple'>

                <div className='row title'>
                        <h1>Re-open negotiations</h1>
                        { this.renderShowHideButton() }
                        <hr />
                </div>

                <Negotiator negotiatorName='Robert White' />

                { this.renderPriceSection() }

                
            </section>

        )
    }
}

module.exports = Negotiation