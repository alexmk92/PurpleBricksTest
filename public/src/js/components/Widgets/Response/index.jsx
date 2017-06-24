import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button'
import Helpers from '../../../lib/helpers'
import Dropify from '../../../lib/Dropify'

// Could abstract this and the "your response" widgets
// into a shared component as they share most of the same
// render cycle - for now they will be separate!
class Response extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dropify: null,
            isPanelVisible: true,
        }
    }

    componentWillMount() {
        if(this.state.dropify === null) {
            this.setState({ dropify: new Dropify(80) })
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

    render() {

        let formattedDate = Helpers.getFormattedDate(this.props.offerDate)

        return (
            
            <div className={'spacer ' + this.props.spacerSide || 'right' }>
                <section className={'collapsable widget gr-12 ' + (this.props.responseType.toLowerCase() === 'withdrawn' ? 'withdrawn' : '')}>

                    <div className='row title'>
                        <h1>Your response</h1>
                        { this.renderShowHideButton() }
                        <hr />
                    </div>

                    <div>
                        <p className='text large'>{this.props.message}</p>
                        <br />

                        <footer>
                            <Button label='VIEW COMMENTS' />
                            <span className='text purple anchor bottom right'>Date {formattedDate.date} Time: {formattedDate.time}</span>
                        </footer>
                    </div>
                    

                </section>
            </div>
        )

    }
}

Response.propTypes = {
    responseType: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    offerDate: PropTypes.object.isRequired,
}

module.exports = Response