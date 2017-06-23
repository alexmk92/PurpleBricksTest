import React, { Component } from 'react'


class Navigation extends Component {


    renderLinks() 
    {

    }

    render() 
    {
        return (

            <header className='navigation'>
                Hi
                <div className='container'>

                </div>

                <nav>
                    { this.renderLinks() }
                 </nav>

            </header>

        )
    }
    
}

module.exports = Navigation