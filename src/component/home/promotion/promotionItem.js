import React, { Component } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class PromotionItem extends Component {
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
            <Slider {...settings} className="promotion-item">
                <div className="item-promotion">
                    <a href>
                        <img src="./img/promotion-event/BHD-Star-45k-Hue-710x320.jpg" alt />
                    </a>
                </div>
                <div className="item-promotion">
                    <a href>
                        <img src="./img/promotion-event/BHD-Star-SuatSom-710x320.jpg" alt />
                    </a>
                </div>
                <div className="item-promotion">
                    <a href>
                        <img src="./img/promotion-event/BHD-Star_MEMBERDAY_710x320.jpg" alt />
                    </a>
                </div>
                <div className="item-promotion">
                    <a href>
                        <img src="./img/promotion-event/bhd.jpg" alt />
                    </a>
                </div>
                <div className="item-promotion">
                    <a href>
                        <img src="./img/promotion-event/cgv.jpg" alt />
                    </a>
                </div>
                <div className="item-promotion">
                    <a href>
                        <img src="./img/promotion-event/BHD-Star-SuatSom-710x320.jpg" alt />
                    </a>
                </div>
            </Slider>
        )
    }
}
