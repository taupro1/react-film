import React, { Component } from 'react'

export default class ShowMovieItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="movie">
                <div className="film-item">
                    <img src={item.img} alt />
                    <a className="name-movie">
                        <span>{item.nameFilm}</span>
                    </a>
                    <div className="mua-ve">
                        <a href>
                            <span>MUA VÉ</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
