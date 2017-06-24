import React, { PureComponent } from 'react'

class Footer extends PureComponent {

    render() {
        return (
            <footer id='footer'>
                <div className='container'>
                    <div className='pull left'>
                        <ul>
                            <li><a href='#'>CONTACT US</a></li>
                            <li><a href='#'>FAQ</a></li>
                            <li><a href='#'>JOIN THE TEAM</a></li>
                            <li><a href='#'>ABOUT US</a></li>
                            <li><a href='#'>LIVE HELP</a></li>
                        </ul>
                    </div>

                    <div className='pull right'>
                        <ul className='social'>
                            <li><a href='#'><i className='fa fa-twitter' aria-hidden='true'></i></a></li>
                            <li><a href='#'><i className='fa fa-facebook' aria-hidden='true'></i></a></li>
                            <li><a href='#'><i className='fa fa-youtube' aria-hidden='true'></i></a></li>
                            <li><a href='#'><i className='fa fa-pinterest' aria-hidden='true'></i></a></li>
                            <li><a href='#'><i className='fa fa-google' aria-hidden='true'></i></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }

}

module.exports = Footer