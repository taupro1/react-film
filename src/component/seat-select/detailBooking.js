import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import styled from "styled-components"
import { NotificationContainer, NotificationManager } from "react-notifications"
import ModalBooking from './.modalBooking'
import { Button } from '@material-ui/core'
import variable from "../../scss/_variable.scss"

const WidthImg = styled.img`
    width:30%
`
const ContentDiv = styled.div`
    display:flex;
    align-items:center;
    padding-bottom: 4%;
    border-bottom: 2px solid;
    margin-bottom: 4%;
`
const TenPhimDiv = styled.div`
    margin-left: 4%;
    font-size: 23px;
    font-weight: 600;
`
const DetailRap = styled.div`
    line-height: 33px;
`
const SeatSpan = styled.span`
    margin-right:5px
`
const ButtonChiTiet = styled(Button)`
    font-weight: 600 !important;
    color: white !important;
    background: ${variable.colorThree} !important;
    outline:none !important;
`
const ButtonClose = styled(ButtonChiTiet)`
    float: right !important;
    margin: 2% !important;
`
const ButtonThemBot = styled(Button)`
    padding: 0 !important;
    outline:none !important;
`
const ContentCombo = styled.div`
    position: absolute;
    left: ${props => props.left ? "0" : "-100%"};
    width: 100%;
    z-index: 2;
    background: black;
    padding: 2%;
    margin-top: 70%;
    transition:left .5s;
`


class DetailBooking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            left: true
        }
    }

    renderHtml = () => {
        if (Object.keys(this.props.listDetailBooking).length !== 0) {
            const { listDetailBooking } = this.props
            let item = listDetailBooking.thongTinPhim
            return (
                <Fragment>
                    <ContentDiv>
                        <WidthImg src={item.hinhAnh}></WidthImg>
                        <TenPhimDiv>{item.tenPhim}</TenPhimDiv>
                    </ContentDiv>
                    <DetailRap>
                        <div>{item.tenCumRap}</div>
                        <div>{item.diaChi}</div>
                        <div>Ngày chiếu: <span>{item.ngayChieu}</span></div>
                        <div>Giờ chiếu: <span>{item.gioChieu}</span></div>
                    </DetailRap>
                </Fragment>
            )
        }

    }

    renderSearSelect = () => {
        if (this.props.seatSelect.length !== 0) {
            return this.props.seatSelect.map((item, index) => {
                return (
                    <SeatSpan key={index}>{item.tenGhe}</SeatSpan>
                )
            })
        }
    }

    renderTienGhe = () => {
        if (this.props.seatSelect.length !== 0) {
            let sum = 0;
            this.props.seatSelect.map((item, index) => {
                sum += item.giaVe
            })
            return sum
        }
        return 0
    }

    renderTongTien = () => {
        return this.renderTienGhe()
    }
    render() {
        return (
            <Fragment>
                <div className="thong-tin">
                    <div className="tong-tien">{this.renderTongTien()}<span>đ</span></div>
                    <div className="detail-film">
                        {this.renderHtml()}
                    </div>
                    <div className="seat-select">
                        <div><span>Ghế:</span> {this.renderSearSelect()}</div>
                        <div className="gia-tien"> {this.renderTienGhe()} <span>đ</span></div>
                    </div>
                    <div className="combo">
                        <div className="chon-combo" onClick={() => this.setState({ left: false })}>Chọn Combo</div>
                        <div className="gia-tien-combo"><span>đ</span></div>
                    </div>
                    <div className="btn-dat-ve">
                        <button>
                            <a data-toggle="modal" data-target="#myModal">Đặt vé</a>
                        </button>
                    </div>
                    <NotificationContainer />
                    <ModalBooking />
                </div>
                <ContentCombo left={this.state.left} className="listCombo">
                    <h3>Combo</h3>
                    <div className="content-combo">
                        <div className="chi-tiet-combo">
                            <span>Nước coca</span>
                            <div className="them-bot">
                                <ButtonThemBot variant="contained"><span>+</span></ButtonThemBot>
                                <ButtonThemBot variant="contained"><span>-</span></ButtonThemBot>
                            </div>
                        </div>
                        <div className="chi-tiet-combo">
                            <span>Bắp rang</span>
                            <div className="them-bot">
                                <ButtonThemBot variant="contained"><span>+</span></ButtonThemBot>
                                <ButtonThemBot variant="contained"><span>-</span></ButtonThemBot>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ButtonClose onClick={() => this.setState({ left: true })} variant="contained">Close</ButtonClose>
                    </div>
                </ContentCombo>
            </Fragment>
        )
    }

    componentWillUnmount() {
        this.props.getSeatSelect([])
    }
}

const mapStateToProps = state => {
    return {
        listDetailBooking: state.seatBookingReducers.listDetailBooking,
        seatSelect: state.seatBookingReducers.seatSelect
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSeatSelect: data => {
            let action = {
                type: "GET-SEAT-SELECT",
                data
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailBooking);
