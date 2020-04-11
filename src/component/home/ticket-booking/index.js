import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rotateInDownLeft, rotateInDownRight } from "react-animations"
import styled, { keyframes } from "styled-components"
import { connect } from "react-redux"
import * as callApi from "../../../redux/action/action-api/index"
import { Link } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from "react-notifications"


const rotateLeftAnimation = keyframes`${rotateInDownLeft}`;
const rotateRightAnimation = keyframes`${rotateInDownRight}`;
const RorateDivLeft = styled.div`
    animation:5s ${rotateLeftAnimation}
`
const RorateDivRight = styled.div`
    animation:5s ${rotateRightAnimation}
`


class TicketBooking extends Component {

    constructor(props) {
        super(props)
        this.state = {
            maRap: "",
            dateChieu: "",
            statusFilm: false,
            statusRap: false,
            statusDate: false,
            statusSuat: false,
            maLichChieu: "",
            statusButton: false,
        }
    }
    handleOnchangeFilm = event => {
        if (event.target.value) {
            this.props.getListDetailFilm(event.target.value)
            this.setState({
                statusFilm: true
            }, () => this.validationSubmit())
        }
    }
    handleOnchangeCinema = event => {
        let maRap = event.target.value
        if (maRap !== "") {
            this.setState({
                maRap,
                statusRap: true
            }, () => this.validationSubmit())
        }

    }
    handleOnchangeDate = event => {
        let dateChieu = event.target.value
        this.setState({
            dateChieu,
            statusDate: true
        }, () => this.validationSubmit())
    }
    handleOnchangeSuat = e => {
        let maLichChieu = e.target.value
        this.setState({
            maLichChieu,
            statusSuat: true
        }, () => this.validationSubmit())
    }
    handleSubmit = event => {
        event.preventDefault()
        NotificationManager.warning("Vui lòng đăng nhâp")
    }

    renderListFilm = () => {
        if (this.props.listFilm.length !== 0) {
            return this.props.listFilm.map((item, index) => {
                return (
                    <option value={item.maPhim} key={index}>{item.tenPhim}</option>
                )
            })
        }
    }
    renderNgay = () => {
        if (this.state.maRap !== "") {
            if (this.props.listDetailFilm.heThongRapChieu) {
                const list = this.props.listDetailFilm.heThongRapChieu
                return list.map(item => {
                    if (item.maHeThongRap === this.state.maRap) {
                        return item.cumRapChieu.map(product => {
                            let date = "";
                            return product.lichChieuPhim.map((status, index) => {
                                if ((new Date(status.ngayChieuGioChieu).toLocaleDateString()) !== date) {
                                    date = new Date(status.ngayChieuGioChieu).toLocaleDateString()
                                    return (
                                        <option key={index} value={new Date(status.ngayChieuGioChieu).toLocaleDateString()} >{new Date(status.ngayChieuGioChieu).toLocaleDateString()}</option>
                                    )
                                }
                            })
                        })
                    }
                })
            }
        }
    }
    renderRap = () => {
        if (this.props.listDetailFilm.heThongRapChieu && this.state.statusFilm) {
            return this.props.listDetailFilm.heThongRapChieu.map((item, index) => {
                return (
                    <option key={index} value={item.maHeThongRap}>{item.tenHeThongRap}</option>
                )
            })
        }
    }
    renderGio = () => {
        if (this.state.dateChieu !== "") {
            if (this.props.listDetailFilm.heThongRapChieu) {
                const list = this.props.listDetailFilm.heThongRapChieu
                return list.map(item => {
                    if (item.maHeThongRap === this.state.maRap) {
                        return item.cumRapChieu.map(product => {
                            return product.lichChieuPhim.map((status, index) => {
                                if ((new Date(status.ngayChieuGioChieu).toLocaleDateString()) === this.state.dateChieu) {
                                    return (
                                        <option key={index} value={status.maLichChieu} >{new Date(status.ngayChieuGioChieu).toLocaleTimeString()}</option>
                                    )
                                }
                            })
                        })
                    }
                })
            }
        }
    }
    renderSubmit = () => {
        if (this.state.statusButton) {
            if (localStorage.getItem("login") || this.props.isValid) {
                return (
                    <button type="submit" className="btn-dat-ve">
                        <Link to={`/booking/${this.state.maLichChieu}`}>Mua vé</Link>
                    </button>
                )
            }
            else {

                return <button onClick={this.handleSubmit} type="submit" className="btn-dat-ve">Mua vé</button >
            }
        }
        else {
            return <button disabled type="submit" className="btn-dat-ve">Mua vé</button >
        }
    }

    validationChonRap = () => {
        if (!this.state.statusFilm) {
            return (
                <option>Vui lòng chọn phim</option>
            )
        }
    }
    validationChonNgay = () => {
        if (!this.state.statusFilm && !this.state.statusRap) {
            return (
                <option>Vui lòng chọn phim và rạp</option>
            )
        }
        if (this.state.statusFilm && !this.state.statusRap) {
            return (
                <option>Vui lòng chọn rạp</option>
            )
        }
    }
    validationChonSuat = () => {
        if (!this.state.statusFilm && !this.state.statusRap && !this.state.statusDate) {
            return (
                <option>Vui lòng chọn phim, rạp và ngày chiếu</option>
            )
        }
        if (this.state.statusFilm && !this.state.statusRap && !this.state.statusDate) {
            return (
                <option>Vui lòng chọn rạp và ngày chiếu</option>
            )
        }
        if (this.state.statusFilm && this.state.statusRap && !this.state.statusDate) {
            return (
                <option>Vui lòng chọn ngày chiếu</option>
            )
        }
    }
    validationSubmit = () => {
        this.setState({
            statusButton: this.state.statusDate && this.state.statusFilm && this.state.statusRap && this.state.statusSuat
        })
    }

    render() {
        return (
            <section id="dat-ve">
                <RorateDivLeft className="content-left">
                    <h2>
                        <img src="./img/dat-ve/icon-ticket.png" alt />
                        <span>Đặt vé</span>
                    </h2>
                </RorateDivLeft>
                <RorateDivRight className="content-right">
                    <form action>
                        <div className="select-item">
                            <div className="select-tiltle">
                                <FontAwesomeIcon icon="film" />
                            </div>
                            <div className="select-group">
                                <select onChange={this.handleOnchangeFilm} className="form-control select-dat-ve">
                                    <option value="chon-phim" style={{ display: "none" }}>Chọn phim</option>
                                    {this.renderListFilm()}
                                </select>
                            </div>
                        </div>
                        <div className="select-item">
                            <div className="select-tiltle">
                                <FontAwesomeIcon icon="home" />
                            </div>
                            <div className="select-group">
                                <select onChange={this.handleOnchangeCinema} className="form-control select-dat-ve">
                                    <option value="chon-rap" style={{ display: "none" }}>Chọn rạp</option>
                                    {this.validationChonRap()}
                                    {this.renderRap()}
                                </select>
                            </div>
                        </div>
                        <div className="select-item">
                            <div className="select-tiltle">
                                <FontAwesomeIcon icon="calendar-plus" />
                            </div>
                            <div className="select-group">
                                <select onChange={this.handleOnchangeDate} className="form-control select-dat-ve" name id>
                                    <option style={{ display: "none" }}>Chọn ngày</option>
                                    {this.validationChonNgay()}
                                    {this.renderNgay()}
                                </select>
                            </div>
                        </div>
                        <div className="select-item">
                            <div className="select-tiltle">
                                <FontAwesomeIcon icon="calendar-alt" />
                            </div>
                            <div className="select-group">
                                <select onChange={this.handleOnchangeSuat} className="form-control select-dat-ve">
                                    <option style={{ display: "none" }}>Chọn suất</option>
                                    {this.validationChonSuat()}
                                    {this.renderGio()}
                                </select>
                            </div>
                        </div>
                        <div className="center">
                            {this.renderSubmit()}
                        </div>
                    </form>
                </RorateDivRight>
                <NotificationContainer />
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListDetailFilm: data => {
            dispatch(callApi.actGetListDetailFilm(data))
        }
    }
}

const mapStateToProps = state => {
    return {
        listFilm: state.homeReducers.listHomeMovie,
        listDetailFilm: state.homeReducers.listDetailFilm,
        isValid: state.homeReducers.isValid
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketBooking)
