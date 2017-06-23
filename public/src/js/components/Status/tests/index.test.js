import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Status from '../index'

const renderComponent = (props = {}) => shallow(
    <Status label='Withdrawn' color='red' />
)

const children = (<span><strong>Status:</strong> Withdrawn</span>)

describe('<Status />', () => {
    it('should render a div tag', () => {
        const component = renderComponent() 
        expect(component.type()).equal('div')
    })

    it('should have children', () => {
        const component = renderComponent() 
        expect(component.contains(children)).equal(true)
    })

    it('should have a className attribute of "status red"', () => {
        const component = renderComponent() 
        expect(component.find('div').hasClass('status red')).equal(true)
    })

    it('should render a span tag', () => {
        const component = renderComponent()
        expect(component.find('span')).to.not.equal(null)
    })

    it('should render a strong tag', () => {
        const component = renderComponent()
        expect(component.find('strong')).to.not.equal(null)
    })
})