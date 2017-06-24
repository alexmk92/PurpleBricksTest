import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dropify from '../../../lib/Dropify'

class PropertyWidget extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            dropify: null,
            isPanelVisible: true,
        }
    }

    componentWillMount() {
        let dropify = null;

        if(this.state.dropify === null) {
            dropify = new Dropify(40, 140)
        }

        this.setState({ 
            listingName: this.getFormattedListingName(),
            dropify: dropify,
        })
    }

     collapsePanel(event) {
        this.state.dropify.SlidePanel(event, this.state.isPanelVisible, () => {
            this.setState({ isPanelVisible: !this.state.isPanelVisible })
        })
    }
   

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.forceUpdate()
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || this.state !== nextState
    }

    getFormattedListingName() {
        const name = (this.props.name + ', ') || ''
        const number = String(this.props.number) || ''
        const road = this.props.road
        const town = this.props.town
        const postCode = this.props.postCode

        return `${name}${number} ${road}, ${town}, ${postCode}`
    }

    renderPropertyDetails() {

        return (
            <div className='gr-8 gr-12@mobile'>
                <div className='row'>
                    <div className='gr-3 gr-4@tablet gr-12@mobile'>
                        <img src={this.props.image} alt={'A picture of ' + this.state.listingName } />
                    </div>
                    <div className='gr-9 gr-8@tablet gr-12@mobile details'>
                        <span className='v-align top pull-text left'>{this.state.listingName}</span>
                    </div>
                </div>
            </div>        
        )

    }

    // could adapt this to do currency conversion. :)
    renderPrice() {
        const formattedPrice = Number(this.props.askingPrice).toLocaleString()

        switch(this.props.currency.toUpperCase()) {
            case 'USD': return '$' + formattedPrice;
            case 'GBP': return '£' + formattedPrice;
        }
    }

    renderPropertyPrice() {
    
        return (
            <div className='gr-4 gr-12@mobile'>
                <div className='pull-text right'>
                    <p className='text dull'>Asking price:</p>
                    <p className='number purple'>{this.renderPrice()}</p>

                    <button>VIEW EXTRAS INCLUDED</button>
                </div>
            </div>
        )
        
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
            <section className='collapsable widget purple'>

                <div className='row title'>
                    <h1>The property</h1>
                    { this.renderShowHideButton() }
                    <hr />
                </div>

                <div className='row'>
                    
                    { this.renderPropertyDetails() }

                    { this.renderPropertyPrice() }

                </div>

            </section>
        )

    }

}

PropertyWidget.propTypes = {
    image: PropTypes.string,
    postCode: PropTypes.string.isRequired,
    town: PropTypes.string.isRequired,
    number: PropTypes.number,
    name: PropTypes.string,
    road: PropTypes.string.isRequired,
    askingPrice: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}

module.exports = PropertyWidget