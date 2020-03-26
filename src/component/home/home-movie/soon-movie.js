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
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
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