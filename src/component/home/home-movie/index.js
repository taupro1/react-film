import React, { Component } from 'react'
import ShowMovie from "./show-movie"
import SoonMovie from './soon-movie'
import variable from "../../../scss/_variable.scss";

export default class HomeMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isValid: true
        }
    }
    renderTiltleShowMovie = () => {
        return this.state.isValid ? `${variable.colorOne}` : `${variable.colorThree}`
    }
    renderTiletleSoonMovie = () => {
        return this.state.isValid ? `${variable.colorThree}` : `${variable.colorOne}`
    }
    renderHtml = () => {
        return this.state.isValid ? <ShowMovie /> : <SoonMovie />
    }
    render() {
        return (
            <section id="home-movie">
                <div className="container-fluid">
                    <ul className="title">
                        <li className="movie-play" style={{ backgroundColor: this.renderTiltleShowMovie() }} onClick={() => { this.setState({ isValid: true }) }}>
                            <a href>
                                <span>Phim đang chiếu</span>
                            </a>
                        </li>
                        <li className="movie-soon" style={{ backgroundColor: this.renderTiletleSoonMovie() }} onClick={() => { this.setState({ isValid: false }) }}>
                            <a href>
                                <span>Phim sắp chiếu</span>
                            </a>
                        </li>
                    </ul>
                    <div className="content-phim container-fluid">
                        {this.renderHtml()}
                    </div>
                </div>
            </section>
        )
    }
}

