import React, { Component } from 'react'
import ShowMovie from "./show-movie"

export default class HomeMovie extends Component {
    render() {
        return (
            <section id="home-movie">
                <div className="container-fluid">
                    <div className="tiltle-detail">
                        Phim hay trong tuần
                    </div>
                    <div className="content-phim container-fluid">
                        <ShowMovie />
                    </div>
                </div>
            </section>
        )
    }
}