import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import styled from "styled-components"
import { NotificationContainer, NotificationManager } from "react-notifications"
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom"

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

class DetailBooking extends Component {
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

    handleOnlick = () => {
        NotificationManager.success("Đặt vé thành công");
        // <Redirect to="/" />
    }

    renderTongTien = () => {
        return this.renderTienGhe()
    }
    render() {
        return (
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
                    <div>Chọn Combo</div>
                    <div className="gia-tien-combo"><span>đ</span></div>
                </div>
                <div className="btn-dat-ve">
                    <button>
                        <a onClick={this.handleOnlick}>Đặt vé</a>
                    </button>
                </div>
                <NotificationContainer />
            </div>
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
