import React, { Component } from 'react';
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SoonMovieItem from './soon-movie-item';

class SoonMovie extends Component {

    renderHtml = () => {
        return this.props.listSoonMovie.map((item, index) => {
            return (
                <SoonMovieItem key={index} item={item} />
            )
        })
    }
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        return (
            <div className="soon-movie">
                <Slider {...settings} className="my-movie">
                    {this.renderHtml()}
                </Slider>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listSoonMovie: state.homeReducers.listSoonMovie
    }
}

export default connect(mapStateToProps, null)(SoonMovie);