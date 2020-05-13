import React, { Component } from 'react'
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as callApi from "../../../redux/action/action-api/index"
import { Link } from "react-router-dom";
import { Typography, Box } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ModalTrailer from '../../../shared/Modal/modalTrailer';
import * as action from "../../../redux/action/action-redux/index"
import AOS from "aos"
import "aos/dist/aos.css"


class ShowMovie extends Component {
    componentDidMount() {
        this.props.getListShowMovie()
    }

    renderHtml = () => {
        return this.props.listShowMovie.map((item, index) => {
            return (
                <div className="movie" key={index}>
                    <div className="film-item">
                        <a href>
                            <img src={item.hinhAnh} alt="film" />
                        </a>
                        <a href className="name-movie">
                            <Typography variant="subtitle1">
                                <Box fontWeight="fontWeightBold">
                                    {item.tenPhim}
                                </Box>
                            </Typography>
                        </a>
                    </div>
                    <div className="overplay-movies">
                        <div className="icon-overplay">
                            <div data-toggle="modal" data-target="#modalTrailer" onClick={() => this.props.getTrailer(item.trailer)}>
                                <FontAwesomeIcon className="icon" icon={['fab', 'youtube']} />
                            </div>
                            <Link to={`/detail/${item.maPhim}`}>
                                <FontAwesomeIcon className="icon" icon="info-circle" />
                            </Link>
                        </div>
                    </div>
                </div>
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
                <ModalTrailer />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListShowMovie: () => {
            dispatch(callApi.actGetListFilmApi())
        },
        getTrailer: data => {
            dispatch(action.actGetUser("GET-LINK-TRAILER", data))
        }
    }
}

const mapStateToProps = state => {
    return {
        listShowMovie: state.homeReducers.listHomeMovie,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovie);
