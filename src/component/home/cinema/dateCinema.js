import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class DateCinema extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 1,
        }
        return (
            <div className="date-cinema">
                <Slider {...settings} className="date">
                    <div className="date-item">
                        <p>Thứ 4</p>
                        <p>18-03</p>
                    </div>
                    <div className="date-item">
                        <p>Thứ 5</p>
                        <p>19-03</p>
                    </div>
                    <div className="date-item">
                        <p>Thứ 6</p>
                        <p>20-03</p>
                    </div>
                    <div className="date-item">
                        <p>Thứ 4</p>
                        <p>18-03</p>
                    </div>
                    <div className="date-item">
                        <p>Thứ 4</p>
                        <p>18-03</p>
                    </div>
                    <div className="date-item">
                        <p>Thứ 4</p>
                        <p>18-03</p>
                    </div>
                    <div className="date-item">
                        <p>Thứ 4</p>
                        <p>18-03</p>
                    </div>
                    <div className="date-item">
                        <p>Thứ 4</p>
                        <p>18-03</p>
                    </div>
                </Slider>
            </div>
        )
    }
}
