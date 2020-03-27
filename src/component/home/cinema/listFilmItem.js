import React, { Component } from 'react'
import { connect } from "react-redux"

class ListFilmItem extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    renderHtml = () => {
        let cinema = this.props.listDetailCinema[0];
        let content = [];
        for (let item in cinema) {
            if (item === "lstCumRap") {
                let listContent = [];
                cinema[item].map((list, index) => {
                    let listContentFilm = []
                    if (list.maCumRap === this.props.maCumRap) {
                        list.danhSachPhim.map(item => {
                            listContentFilm.push(
                                <div className="film">
                                    <img src="./img/home-movie/show-movie/HO00001895.jfif" alt />
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
                                                                11:45
    </a>
                                                        </li>
                                                        <li><a href>
                                                            11:45
    </a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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
    }
}
export default connect(mapStateToProps, null)(ListFilmItem);
