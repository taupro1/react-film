import React, { Component } from 'react'
import { connect } from "react-redux";
import * as callApi from "../../redux/action/action-api/index"

class DetailMovie extends Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getDetailFilm(id)
    }
    render() {
        console.log(this.props.detailFilm);
        const { detailFilm } = this.props;
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
                                    <div className="mo-ta">
                                        Nội dung: <span>{detailFilm.moTa}</span>
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

const mapDispatchToProps = dispatch => {
    return {
        getDetailFilm: (id) => {
            dispatch(callApi.actGetDetailFilm(id))
        }
    }
}

const mapStateToProps = state => {
    return {
        detailFilm: state.homeReducers.listDetailFilm
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);