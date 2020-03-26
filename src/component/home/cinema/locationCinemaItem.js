import React, { Component } from 'react'

export default class LocationCinemaItem extends Component {
    render() {
        return (
            <div className="cinema">
                <img src="./img/cinema/img-item-cinema/bhd/bhd-star-vincom-thao-dien-15379553942188.jpg" alt />
                <div className="info-cinema">
                    <div className="info">
                        <span className="bhd">BHD STAR</span>
                        <span>- Vincom Thảo Điền</span>
                    </div>
                    <span>L5-Megamall, 159 XL Hà Nội , Q.2</span>
                </div>
            </div>
        )
    }
}
