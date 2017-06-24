import React, { Component } from 'react'

import Status from '../../components/Status'
import PropertyWidget from '../../components/Widgets/Property'
import BuyerWidget from '../../components/Widgets/Buyer'
import OfferWidget from '../../components/Widgets/Offer'
import ResponseWidget from '../../components/Widgets/Response'
import NegotiationWidget from '../../components/Negotiation'

const seedData = require('../../seedData.js')

class NeogtiationCentre extends Component {

    render() {
        return (

            <div className="clear-top container">
                <Status label={ 'Withdrawn' } color={ 'red' } />

                <PropertyWidget {...seedData.propertyData} />
                <BuyerWidget {...seedData.buyerData} />
                <OfferWidget spacerSide='right' {...seedData.offerData} />
                <ResponseWidget spacerSide='left' {...seedData.responseData} />
                <NegotiationWidget />
            </div>

        );
    }
}

module.exports = NeogtiationCentre