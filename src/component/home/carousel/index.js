import React, { Component } from 'react'
import { connect } from "react-redux";
// import "react-flex-slider/assets/index.css";
// import Slider from "react-flex-slider";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import ModalTrailer from '../../../shared/Modal/modalTrailer'
import * as action from "../../../redux/action/action-redux/index"

class Carousel extends Component {

    renderCarousel = () => {
        return this.props.listImgCarousel.map((item, index) => {
            return (
                <figure onClick={() => this.props.getTrailer("https://www.youtube.com/embed/j8U06veqxdU")} data-toggle="modal" data-target="#modalTrailer" className="shadow">
                    <img alt="" src={item.img} />
                </figure>
            )
        })

    }
    render() {
        return (
            <section id="carousel">
                <div className="content-carousel">
                    <div className="bunshopp-carrousel">
                        {this.renderCarousel()}
                    </div>
                </div>
                <ModalTrailer />
            </section >

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTrailer: data => dispatch(action.actGetUser("GET-LINK-TRAILER", data))
    }
}

const mapStateToProps = state => {
    return {
        listImgCarousel: state.homeReducers.listImgCarousel
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);