import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import variable from "../../scss/_variable.scss"

const CloseBtn = styled(Button)`
    float:right;
    background:${variable.colorThree} !important;
    outline: none !important;
    color:white !important;
`
const ContentTrailer = styled.div`
    position: absolute;
    top: 0;
    width: 80%;
    height: 110%;
    transition: margin .5s;
    margin-left: ${props => props.margin ? "130%" : "0"};
`
const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
`

export default class DetailFilm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isValid: true
        }
    }

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
                                    <button onClick={() => this.setState({ isValid: false })}>
                                        <a>Xem Trailer</a>
                                    </button>
                                </div>
                                <ContentTrailer margin={this.state.isValid}>
                                    <CloseBtn variant="contained" onClick={() => this.setState({ isValid: true })}>Close</CloseBtn>
                                    <Iframe src={detailFilm.trailer} frameborder="0" allowfullscreen></Iframe>
                                </ContentTrailer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

