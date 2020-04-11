import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class DetailFilm extends Component {
    render() {
        let { detailFilm } = this.props
        return (
            <section id="film">
                <div className="container">
                    <div className="row content-film">
                        <div className="col-sm-5 content-left">
                            <div>
                                <img src={detailFilm.hinhAnh} alt />
                            </div>
                        </div>
                        <div className="col-sm-7 content-right">
                            <div>
                                <h3>{detailFilm.tenPhim}</h3>
                                <div className="chi-tiet">
                                    <div className="thoi-luong">
                                        Thời lượng: <span>110 phút</span>
                                    </div>
                                    <div className="mo-ta">
                                        Nội dung: <span>{detailFilm.moTa}</span>
                                    </div>
                                    <div className="danh-gia-sao">
                                        Đánh giá: <span>{detailFilm.danhGia}<FontAwesomeIcon icon="star" className="i-star" /></span>
                                    </div>
                                </div>
                                <div className="btn-trailer">
                                    <button>
                                        <a href={detailFilm.trailer} className="venobox vbox-item" data-vbtype="video">Xem Trailer</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

