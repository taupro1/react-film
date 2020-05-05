import React, { Component } from 'react'
import ShowMovie from "./show-movie"
import SoonMovie from './soon-movie'
import variable from "../../../scss/_variable.scss";
// import { slideInDown, slideInUp } from "react-animations"
// import styled, { keyframes } from "styled-components"
import AOS from "aos"
import "aos/dist/aos.css"
import { Typography } from "@material-ui/core"

// const slideInDownAnimation = keyframes`${slideInDown}`
// const SlideInDownDiv = styled.li`
//     animation:7s ${slideInDownAnimation}
// `
// const slideInUpAnimation = keyframes`${slideInUp}`
// const SlideInUpDiv = styled.li`
//     animation:7s ${slideInUpAnimation}
// `

export default class HomeMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isValid: true
        }
    }
    renderTiltleShowMovie = () => {
        return this.state.isValid ? `${variable.colorOne}` : "white"
    }
    renderTiletleSoonMovie = () => {
        return this.state.isValid ? "white" : `${variable.colorOne}`
    }
    renderHtml = () => {
        return this.state.isValid ? <ShowMovie /> : <SoonMovie />
    }
    render() {
        AOS.init()
        return (
            <section id="home-movie">
                <div className="container-fluid">
                    <ul className="title">
                        <li data-aos="fade-right" data-aos-duration="600" className="movie-play" style={{ color: this.renderTiltleShowMovie() }} onClick={() => { this.setState({ isValid: true }) }}>
                            <Typography variant="h4">
                                Phim đang chiếu
                            </Typography>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="600" className="movie-soon" style={{ color: this.renderTiletleSoonMovie() }} onClick={() => { this.setState({ isValid: false }) }}>
                            <Typography variant="h4">
                                Phim sắp chiếu
                            </Typography>
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

