import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import styled from "styled-components"
import { NotificationContainer } from "react-notifications"
import ModalBooking from './modalBooking'
import { Button } from '@material-ui/core'
import variable from "../../scss/_variable.scss"
import * as action from "../../redux/action/action-redux/index"
import { Typography } from "@material-ui/core"

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
            left: true,
            giaNuoc: 0,
            giaBaprang: 0
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
                        <TenPhimDiv>
                            <Typography variant="h5">
                                {item.tenPhim}
                            </Typography>
                        </TenPhimDiv>
                    </ContentDiv>
                    <DetailRap>
                        <div className="detail-film-div">
                            <Typography className="detail-film-subtitle1" variant="subtitle1">Rạp:</Typography>
                            <Typography className="" variant="body2">{item.tenCumRap}</Typography>
                        </div>
                        <div className="detail-film-div">
                            <Typography className="detail-film-subtitle1" variant="subtitle1">Địa chỉ:</Typography>
                            <Typography variant="body2">{item.diaChi}</Typography>
                        </div>
                        <div className="detail-film-div">
                            <Typography className="detail-film-subtitle1" variant="subtitle1">Ngày chiếu:</Typography>
                            <Typography variant="body2">{item.ngayChieu}</Typography>
                        </div>
                        <div className="detail-film-div">
                            <Typography className="detail-film-subtitle1" variant="subtitle1">Giờ chiếu:</Typography>
                            <Typography variant="body2">{item.gioChieu}</Typography>
                        </div>
                    </DetailRap>
                </Fragment >
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
    renderTienCombo = () => {
        let { giaBaprang, giaNuoc } = this.state
        if (giaNuoc !== 0 || giaBaprang !== 0) {
            return giaBaprang + giaNuoc
        }
        return 0
    }
    handleOnclickButton = (status, data) => {
        if (data === "nuoc") {
            let giaNuoc = this.state.giaNuoc
            if (status) {
                this.setState({
                    giaNuoc: giaNuoc + 10000
                })
            }
            if (!status && giaNuoc !== 0) {
                this.setState({
                    giaNuoc: giaNuoc - 10000
                })
            }
        }
        if (data === "baprang") {
            let giaBaprang = this.state.giaBaprang
            if (status) {
                this.setState({
                    giaBaprang: giaBaprang + 20000
                })
            }
            if (!status && giaBaprang !== 0) {
                this.setState({
                    giaBaprang: giaBaprang - 20000
                })
            }
        }
    }

    renderTongTien = () => {
        let tongTien = this.renderTienGhe() + this.renderTienCombo()
        this.props.getTongtien(tongTien)
        return tongTien
    }
    render() {
        return (
            <Fragment>
                <div className="thong-tin">
                    <div className="tong-tien">
                        <Typography variant="h4" style={{ display: "inline-block" }}>
                            {this.renderTongTien()}
                        </Typography>
                        <span>đ</span>
                    </div>
                    <div className="detail-film">
                        {this.renderHtml()}
                    </div>
                    <div className="seat-select">
                        <Typography variant="subtitle1">Ghế:</Typography>
                        <Typography variant="body2">{this.renderSearSelect()}</Typography>
                        <Typography variant="subtitle2" className="gia-tien"> {this.renderTienGhe()} <span>đ</span></Typography>
                    </div>
                    <div className="combo">
                        <Typography variant="subtitle1" className="chon-combo" onClick={() => this.setState({ left: false })}>Chọn Combo</Typography>
                        <Typography variant="body2" className="gia-tien-combo">{this.renderTienCombo()}<span>đ</span></Typography>
                    </div>
                    <div className="btn-dat-ve">
                        <button data-toggle="modal" data-target="#myModal">
                            <Typography variant="button" className="btn-dat-ve-button" >Đặt vé</Typography>
                        </button>
                    </div>
                    <NotificationContainer />
                </div>
                <ContentCombo left={this.state.left} className="listCombo">
                    <Typography variant="h5">
                        Combo
                    </Typography>
                    <div className="content-combo">
                        <div className="chi-tiet-combo">
                            <Typography variant="subtitle1">Nước coca (10k)</Typography>
                            <div className="them-bot">
                                <Button variant="contained" color="primary" className="" onClick={() => this.handleOnclickButton(true, "nuoc")}><span>+</span></Button>
                                <Button variant="contained" color="secondary" className="" onClick={() => this.handleOnclickButton(false, "nuoc")}><span>-</span></Button>
                            </div>
                        </div>
                        <div className="chi-tiet-combo">
                            <Typography variant="subtitle1">Bắp rang (20k)</Typography>
                            <div className="them-bot">
                                <Button variant="contained" color="primary" className="" onClick={() => this.handleOnclickButton(true, "baprang")}><span>+</span></Button>
                                <Button variant="contained" color="secondary" className="" onClick={() => this.handleOnclickButton(false, "baprang")}><span>-</span></Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button style={{ float: "right" }} variant="contained" color="default" onClick={() => this.setState({ left: true })}>Close</Button>
                    </div>
                </ContentCombo>
                <ModalBooking />
            </Fragment>
        )
    }
    // hanleWindowClickClose = () => {
    //     this.setState({
    //         left: true
    //     })
    // }
    // componentDidUpdate() {
    //     window.addEventListener('click', this.hanleWindowClickClose)
    // }

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
        },
        getTongtien: data => {
            dispatch(action.actGetListDetailBooking(data, "GET-TONG-TIEN"))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailBooking);
