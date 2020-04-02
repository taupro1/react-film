import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom';

class ListFilmItem extends Component {

    // Duyệt mảng danh sách phim kiếm hình ảnh tương ứng với mã phim (img của renderHtml)
    duyetMangPhim = (maPhim) => {
        let img = "";
        this.props.listFilm.map((item) => {
            if (item.maPhim === maPhim) {
                img = item.hinhAnh
            }
        })
        return img
    }

    renderHtml = () => {
        let cinema = this.props.listDetailCinema[0];
        let content = [];
        for (let item in cinema) {
            if (item === "lstCumRap") {
                let listContent = [];
                cinema[item].map((list) => {
                    let listContentFilm = []
                    if (list.maCumRap === this.props.maCumRap || (list.maCumRap === this.props.maCumRapFirst && this.props.isValid)) {
                        list.danhSachPhim.map(item => {
                            listContentFilm.push(
                                <Link className="film" to={`/detail/${item.maPhim}`}>
                                    <img src={this.duyetMangPhim(item.maPhim)} />
                                    <div className="date-film">
                                        <ul>
                                            <li>
                                                <div className="type">
                                                    <p className="classify">2D SUB</p>
                                                    <p className="rating">C16</p>
                                                </div>
                                            </li>
                                            <li className="time-name">
                                                <div className="name-time">
                                                    <div className="name-film">
                                                        {item.tenPhim}
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href>
                                                                12:00
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href>
                                                                10:00
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    listContent.push(listContentFilm)
                })
                content.push(listContent)
            }
        }
        return content;
    }

    render() {
        return (
            <div className="list">
                {this.renderHtml()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listDetailCinema: state.cinemaReducers.listDetailCinema,
        maCumRap: state.cinemaReducers.maCumRap,
        maCumRapFirst: state.cinemaReducers.maCumRapFirst,
        isValid: state.cinemaReducers.isValid,
        listFilm: state.homeReducers.listHomeMovie
    }
}
export default connect(mapStateToProps, null)(ListFilmItem);
