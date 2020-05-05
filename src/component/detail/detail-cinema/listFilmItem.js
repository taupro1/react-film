import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from "react-notifications"
import { Typography } from "@material-ui/core"


class ListFilmItemDetail extends Component {
    duyetMangPhim = (maPhim) => {
        let img = "";
        this.props.listFilm.map((item) => {
            if (item.maPhim === maPhim) {
                img = item.hinhAnh
            }
        })
        return img
    }

    kiemTraLogin = (data, maLichChieu) => {
        if (this.props.statusLogin || localStorage.getItem("login")) {
            return (
                <Link to={`/booking/${maLichChieu}`}>
                    {data}
                </Link>
            )
        }
        else {
            return (
                <a href onClick={() => NotificationManager.warning("Vui lòng đăng nhập")}>
                    {data}
                </a>
            )
        }


    }
    renderSuatChieu = () => {
        if (this.props.dateFilm !== "") {
            if (this.props.listDetailFilm.heThongRapChieu) {
                return this.props.listDetailFilm.heThongRapChieu.map((item, index) => {
                    if (item.maHeThongRap === this.props.maHeThongRap) {
                        return item.cumRapChieu.map((list, index) => {
                            if (list.maCumRap === this.props.maCumRap || index === 0) {
                                return list.lichChieuPhim.map((item, index) => {
                                    if ((new Date(item.ngayChieuGioChieu).toLocaleDateString()) === this.props.dateFilm) {
                                        return (
                                            <div className="col-lg-3 time-name-detail-col" key={index}>
                                                <Typography variant="subtitle2">
                                                    {this.kiemTraLogin(new Date(item.ngayChieuGioChieu).toLocaleTimeString(), item.maLichChieu)}
                                                </Typography>
                                            </div>
                                        )
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }
    }

    renderHtml = () => {
        if (this.props.listDetailFilm) {
            const { listDetailFilm } = this.props;
            return (
                <div className="list">
                    <a href className="film">
                        <img alt="film" src={listDetailFilm.hinhAnh} />
                        <div className="date-film">
                            <ul>
                                <li className="time-name-detail">
                                    <div className="name-time">
                                        <Typography variant="h5">
                                            {listDetailFilm.tenPhim}
                                        </Typography>
                                        <div className="row time-name-detail-div">
                                            {this.renderSuatChieu()}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </a>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderHtml()}
                <NotificationContainer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listDetailFilm: state.detailReducers.listDetailFilm,
        dateFilm: state.detailReducers.dateFilm,
        statusLogin: state.homeReducers.statusLogin,
        maCumRap: state.detailReducers.maCumRapDetail,
        maHeThongRap: state.detailReducers.maHeThongRap,
    }
}
export default connect(mapStateToProps, null)(ListFilmItemDetail);