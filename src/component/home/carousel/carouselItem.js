import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import variable from "../../../scss/_variable.scss"

const ContentTrailer = styled.div`
    position: absolute;
    top: 0;
    width: 50%;
    height: 70%;
    margin-left: ${props => props.margin ? "-60%" : "25%"};
    margin-top: 5%;
    transition: margin .5s;
    z-index:${props => props.margin ? "-1" : "1"};
`
const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
`
const PlayVideo = styled.a`
    cursor: pointer;    
`
const CloseBtn = styled(Button)`
    float:right;
    background:${variable.colorThree} !important;
    outline: none !important;
    color:white !important;
`

export default class CarouselItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isValid: true
        }
    }

    render() {
        const { item } = this.props;
        return (
            <div className="content-film">
                <img src={item.img} />
                <div className="content-play">
                    <PlayVideo className="play-video" onClick={() => this.setState({ isValid: false })}>
                        <FontAwesomeIcon icon="play" className="i-play" />
                    </PlayVideo>
                </div>
                <ContentTrailer margin={this.state.isValid}>
                    <CloseBtn variant="contained" onClick={() => this.setState({ isValid: true })}>Close</CloseBtn>
                    <Iframe src={item.href} frameborder="0" allowfullscreen></Iframe>
                </ContentTrailer>
            </div>
        )
    }
}
