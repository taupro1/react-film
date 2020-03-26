import React, { Component } from 'react'
import ContentLeft from './contentLeft'
import ContentCenter from './contentCenter'
import ContentRight from './contentRight'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="background">
                </div>
                <footer>
                    <div className="container">
                        <div className="row footer-content">
                            <ContentLeft />
                            <ContentCenter />
                            <ContentRight />
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
