import React, { Component } from 'react'

export default class DetailMovie extends Component {
    render() {
        return (
            <section id="film">
                <div className="container">
                    <div className="row content-film">
                        <div className="col-sm-5 content-left">
                            <div>
                                <img src="./img/home-movie/show-movie/HO00001895.jfif" alt />
                            </div>
                        </div>
                        <div className="col-sm-7 content-right">
                            <div>
                                <h3>Nắng 3: Lời hứa của cha</h3>
                                <div className="chi-tiet">
                                    <div className="thoi-luong">
                                        Thời lượng: <span>110 phút</span>
                                    </div>
                                    <div className="khoi-chieu">
                                        Khởi chiếu: <span>06/03/2020</span>
                                    </div>
                                    <div className="the-loai">
                                        Thể loại: <span>Tình cảm</span>
                                    </div>
                                    <div className="dao-dien">
                                        Đạo diễn: <span>Đồng Đăng Giao</span>
                                    </div>
                                    <div className="dien-vien">
                                        Diễn viên: <span>Kiều Minh Tuấn, Khả Như, Oanh Kiều, Ngân Chi, Hữu Châu</span>
                                    </div>
                                    <div className="do-tuoi">
                                        Độ tuổi: <span>C13 - PHIM CẤM PHỔ BIẾN ĐẾN KHÁN GIẢ DƯỚI 13 TUỔI</span>
                                    </div>
                                </div>
                                <div className="btn-trailer">
                                    <button>
                                        <a href="https://www.youtube.com/watch?v=DymKqNH_m8w&t=19s" className="venobox vbox-item" data-vbtype="video">Xem Trailer</a>
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
