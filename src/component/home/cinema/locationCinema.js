import React, { Component } from 'react'

export default class LocationCinema extends Component {
    render() {
        return (
            <div className="col-sm-5 location-cinema">
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
                <div className="cinema">
                    <img src="./img/cinema/img-item-cinema/bhd/bhd-star-vincom-le-van-viet-15379553262189.jpg" alt />
                    <div className="info-cinema">
                        <div className="info">
                            <span className="bhd">BHD STAR</span>
                            <span>- Vincom Lê Văn Việt</span>
                        </div>
                        <span>L4-Vincom Plaza, 50 Lê Văn Việt, Q.9</span>
                    </div>
                </div>
                <div className="cinema">
                    <img src="./img/cinema/img-item-cinema/bhd/bhd-star-vincom-quang-trung-15379536724871.jpg" alt />
                    <div className="info-cinema">
                        <div className="info">
                            <span className="bhd">BHD STAR</span>
                            <span>- Vincom Quang Trung</span>
                        </div>
                        <span>B1-Vincom QT, 190 Quang Trung, Gò Vấp</span>
                    </div>
                </div>
            </div>
        )
    }
}
