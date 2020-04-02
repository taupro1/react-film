import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom';

class ListFilmItemDetail extends Component {
    duyetMangPhim = (maPhim) => {
        console.log(maPhim);
        console.log(this.props.listFilm);
        let img = "";
        this.props.listFilm.map((item) => {
            if (item.maPhim === maPhim) {
                img = item.hinhAnh
            }
        })
        return img
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
                                        <p className="classify">2D SUB</p>
                                        <p className="rating">C16</p>
                                    </div>
                                </li>
                                <li className="time-name">
                                    <div className="name-time">
                                        <div className="name-film">
                                            {listDetailFilm.tenPhim}
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
                    </a>
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
        // listDetailCinema: state.cinemaReducers.listDetailCinema,
        // maCumRap: state.cinemaReducers.maCumRap,
        // maCumRapFirst: state.cinemaReducers.maCumRapFirst,
        // isValid: state.cinemaReducers.isValid,

        listDetailFilm: state.detailReducers.listDetailFilm,
        listFilm: state.homeReducers.listHomeMovie
    }
}
export default connect(mapStateToProps, null)(ListFilmItemDetail);