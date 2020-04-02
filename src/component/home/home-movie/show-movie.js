import React, { Component } from 'react'
import { connect } from "react-redux";
import ShowMovieItem from './show-movie-item';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as callApi from "../../../redux/action/action-api/index"


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
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        }
        return (
            <div className="show-movie">
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
