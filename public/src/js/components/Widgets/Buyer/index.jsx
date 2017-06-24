import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dropify from '../../../lib/Dropify'

class BuyerWidget extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            dropify: null,
            isPanelVisible: true,
        }
    }

    componentWillMount() {
        if(this.state.dropify === null) {
            this.setState({ dropify: new Dropify(40, 160) })
        }
    }

    renderBuyerDetails() {

        return (
            <div id="buyer-details" className='row gr-12'>

                <div className='show'>
                    <label>Name: </label>
                    <span>{ this.props.name }</span>
                    <br />

                    <label>Buying position: </label>
                    <span>{ this.props.buyingPosition }</span>
                    <br />

                    <label>Financial position: </label>
                    <span>{ this.props.financialPosition }</span>
                    <br />

                    <label>Timescale: </label>
                    <span>{ this.props.timescale }</span>
                    <br />
                </div>
            </div>
        )

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

    render() {

        return (
            <section className='widget collapsable'>

                <div className='row title'>
                    <h1>Buyer's details</h1>
                    { this.renderShowHideButton() }
                    <hr />
                </div>

                <div className='row'>
                    
                    { this.renderBuyerDetails() }

                </div>

            </section>
        )

    }

}

BuyerWidget.propTypes = {
    name: PropTypes.string.isRequired,
    buyingPosition: PropTypes.string.isRequired,
    financialPosition: PropTypes.string.isRequired,
    timescale: PropTypes.string.isRequired,
}

module.exports = BuyerWidget