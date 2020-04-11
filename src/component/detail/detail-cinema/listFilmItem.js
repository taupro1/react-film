import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from "react-notifications"


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
                                            <li key={index}>
                                                {this.kiemTraLogin(new Date(item.ngayChieuGioChieu).toLocaleTimeString(), item.maLichChieu)}
                                            </li>
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
                    <a className="film">
                        <img src={this.duyetMangPhim(listDetailFilm.maPhim)} />
                        <div className="date-film">
                            <ul>
                                <li>
                                    <div className="type">
                                        <p className="classify">2D</p>
                                        <p className="rating">C16</p>
                                    </div>
                                </li>
                                <li className="time-name">
                                    <div className="name-time">
                                        <div className="name-film">
                                            {listDetailFilm.tenPhim}
                                        </div>
                                        <ul>
                                            {this.renderSuatChieu()}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </a>
                    <NotificationContainer />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderHtml()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listDetailFilm: state.detailReducers.listDetailFilm,
        listFilm: state.homeReducers.listHomeMovie,
        dateFilm: state.detailReducers.dateFilm,
        statusLogin: state.homeReducers.statusLogin,
        maCumRap: state.detailReducers.maCumRapDetail,
        maHeThongRap: state.detailReducers.maHeThongRap,
    }
}
export default connect(mapStateToProps, null)(ListFilmItemDetail);