import React, { Component } from 'react'
import { connect } from "react-redux"
import styled from "styled-components"
import variable from "../../scss/_variable.scss"
import { Typography } from "@material-ui/core"

const ContentSeatDiv = styled.div`
    width:100%;
    margin-left:0;
    justify-content: center;
`

const SeatDiv = styled.div`
    height: 30px;
    width: 7%;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    margin-right: 1%;
    cursor: pointer;
    margin-bottom:2%;
    margin-left: 1%;
    padding:0 !important;
`

class SelectSeat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seatSelect: [],
        }
    }
    handleBackgroundSeat = (item) => {
        if (item.daDat) {
            return variable.colorThree
        }
        else if (!item.daDat) {
            if (item.loaiGhe === "Thuong") {
                return "white"
            }
            if (item.loaiGhe === "Vip") {
                return "#e9b7a0d1"
            }
        }

    }

    handleBackgroundSeatSelect = (item) => {
        let status = false;
        if (this.state.seatSelect.length !== 0) {
            this.state.seatSelect.map(seat => {
                if (seat.stt === item.stt) {
                    status = true
                }
            })
            return status
        }
        return status
    }

    handleOnclick = (item) => {
        let status = true
        if (this.state.seatSelect.length !== 0) {
            let array = [...this.state.seatSelect]
            array.map((seat, index) => {
                if (seat.stt === item.stt) {
                    array.splice(index, 1)
                    this.setState({
                        seatSelect: array
                    }, () => this.props.getSeatSelect(this.state.seatSelect))
                    status = false
                }
            })
        }
        if (!item.daDat && status) {
            this.setState({
                seatSelect: [...this.state.seatSelect, item]
            }, () => this.props.getSeatSelect(this.state.seatSelect))
        }
    }
    renderHtml = () => {
        if (Object.keys(this.props.listDetailBooking).length !== 0) {
            const { listDetailBooking } = this.props
            return listDetailBooking.danhSachGhe.map((item, index) => {
                if (this.handleBackgroundSeatSelect(item)) {
                    return (
                        <SeatDiv key={index} style={{ backgroundColor: variable.colorOne }} onClick={() => this.handleOnclick(item)} className="col-lg-1 col-sm-2 col-3">
                            <span className={item.stt}>{item.stt}</span>
                        </SeatDiv>
                    )
                }
                else {
                    return (
                        <SeatDiv key={index} style={{ backgroundColor: this.handleBackgroundSeat(item) }} onClick={() => this.handleOnclick(item)} className="ghe col-lg-1 col-sm-2 col-3">
                            <span>{item.stt}</span>
                        </SeatDiv>
                    )
                }

            })
        }

    }
    render() {
        return (
            <div className="col-sm-12 col-12 col-lg-9 select-seat">
                <div className="man-hinh" />
                <div className="ghe-ngoi">
                    <Typography className="man-hinh-h5" variant="h5">
                        Màn hình
                    </Typography>
                    <ContentSeatDiv className="vi-tri-ghe row">
                        {this.renderHtml()}
                    </ContentSeatDiv>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        listDetailBooking: state.seatBookingReducers.listDetailBooking
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
export default connect(mapStateToProps, mapDispatchToProps)(SelectSeat);
