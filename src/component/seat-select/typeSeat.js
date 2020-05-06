import React, { Component } from 'react'

export default class TypeSeat extends Component {
    render() {
        return (
            <div className="col-sm-12 col-12 col-lg-3">
                <div className="row note">
                    <div className="col-sm-6 col-md-3 col-lg-12 seat">
                        <span className="seat-trong" />
                        <span className="phan-loai">Ghế trống thường</span>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-12 seat">
                        <span className="seat-disable" />
                        <span className="phan-loai">Ghế trống vip</span>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-12 seat">
                        <span className="seat-da-dat" />
                        <span className="phan-loai"> Ghế đã đặt</span>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-12 seat">
                        <span className="seat-dang-chon" />
                        <span className="phan-loai"> Ghế đang chọn</span>
                    </div>
                </div>
            </div>
        )
    }
}
