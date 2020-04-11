import React, { Component } from 'react'
import ShowMovie from "./show-movie"
import SoonMovie from './soon-movie'
import variable from "../../../scss/_variable.scss";
import { slideInDown, slideInUp } from "react-animations"
import styled, { keyframes } from "styled-components"

const slideInDownAnimation = keyframes`${slideInDown}`
const SlideInDownDiv = styled.li`
    animation:7s ${slideInDownAnimation}
`
const slideInUpAnimation = keyframes`${slideInUp}`
const SlideInUpDiv = styled.li`
    animation:7s ${slideInUpAnimation}
`

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
                        <SlideInDownDiv className="movie-play" style={{ backgroundColor: this.renderTiltleShowMovie() }} onClick={() => { this.setState({ isValid: true }) }}>
                            <a href>
                                <span>Phim đang chiếu</span>
                            </a>
                        </SlideInDownDiv>
                        <SlideInUpDiv className="movie-soon" style={{ backgroundColor: this.renderTiletleSoonMovie() }} onClick={() => { this.setState({ isValid: false }) }}>
                            <a href>
                                <span>Phim sắp chiếu</span>
                            </a>
                        </SlideInUpDiv>
                    </ul>
                    <div className="content-phim container-fluid">
                        {this.renderHtml()}
                    </div>
                </div>
            </section>
        )
    }
}

