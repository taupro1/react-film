import React, { Component } from 'react'
import Particles from "react-particles-js"
import SnowStorm from 'react-snowstorm';

export default class TicketAdmin extends Component {
    render() {
        return (
            <div id="ticket-admin" className='bg-dark'>
                <SnowStorm />
                {/* <div className="bg-top-account">
                    <Particles className="bg-top-particles">
                        <div className="overplay">
                        <h1>Quang</h1>
                        </div>
                    </Particles>
                </div> */}
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-9'><h1>quang</h1></div>
                </div>
                    
            </div>
        )
    }
}
