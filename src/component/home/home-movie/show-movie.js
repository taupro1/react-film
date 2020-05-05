import React, { Component } from 'react'
import { connect } from "react-redux";
import ShowMovieItem from './show-movie-item';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as callApi from "../../../redux/action/action-api/index"
import AOS from "aos"
import "aos/dist/aos.css"


class ShowMovie extends Component {
    componentDidMount() {
        this.props.getListShowMovie()
    }

    renderHtml = () => {
        return this.props.listShowMovie.map((item, index) => {
            return (
                <ShowMovieItem key={index} item={item} />
            )
        })
    }
    render() {
        AOS.init()
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
            <div data-aos="fade-up" data-aos-duration="600" className="show-movie">
                <Slider {...settings} className="my-movie">
                    {this.renderHtml()}
                </Slider>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListShowMovie: () => {
            dispatch(callApi.actGetListFilmApi())
        }
    }
}

const mapStateToProps = state => {
    return {
        listShowMovie: state.homeReducers.listHomeMovie,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovie);
