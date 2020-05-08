import React, { Component } from 'react'
import Particles from "react-particles-js"

export default class Dashboard extends Component {
    render() {
        return (
            <div id="dashboard-admin">
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
