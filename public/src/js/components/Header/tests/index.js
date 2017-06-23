import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Header from '../index'

const renderComponent = (props = {}) => shallow(
    <Header title='Secure negotiation centre' />
)

describe('<Header />', () => {
    it('should render a header tag', () => {
        const component = renderComponent() 
        expect(component.type()).equal('header')
    })
})