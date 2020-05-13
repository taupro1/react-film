import React, { Component } from 'react'
import Particles from "react-particles-js"
import SnowStorm from 'react-snowstorm';

export default class TicketAdmin extends Component {
    render() {
        return (
            <div id="ticket-admin">
                <SnowStorm />
                <div className="bg-top-account">
                    <Particles className="bg-top-particles">
                        <div className="overplay">
                        </div>
                    </Particles>
                </div>
            </div>
        )
    }
}
