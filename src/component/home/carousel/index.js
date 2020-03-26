import React, { Component } from 'react'
import { connect } from "react-redux";
import CarouselItem from './carouselItem';
// import "react-flex-slider/assets/index.css";
// import Slider from "react-flex-slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {

    renderCarousel = () => {
        return this.props.listImgCarousel.map((item, index) => {
            return (
                <CarouselItem item={item} key={index} />
            )
        })

    }
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        };
        return (
            <section id="carousel">
                <Slider {...settings} className="my-carousel">
                    {this.renderCarousel()}
                </Slider>
            </section >

        )
    }
}

const mapStateToProps = state => {
    return {
        listImgCarousel: state.homeReducers.listImgCarousel
    }
}

export default connect(mapStateToProps, null)(Carousel);