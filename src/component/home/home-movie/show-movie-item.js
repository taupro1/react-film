import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ShowMovieItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="movie">
                <div className="film-item">
                    <Link to={`/detail/${item.maPhim}`}>
                        <img src={item.hinhAnh} alt />
                    </Link>
                    <Link to={`/detail/${item.maPhim}`} className="name-movie">
                        <span>{item.tenPhim}</span>
                    </Link>
                    <div className="mua-ve">
                        <Link to={`/detail/${item.maPhim}`}>
                            <span>MUA VÉ</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
