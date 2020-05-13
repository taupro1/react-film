import React, { Component } from 'react'
import TypeSeat from './typeSeat'
import SelectSeat from './selectSeat'
import DetailBooking from './detailBooking'
import { connect } from "react-redux"
import * as callApi from "../../redux/action/action-api/index"
import LottieAnimation from "../../animation/index"
import * as action from "../../redux/action/action-redux/index"
import * as actionType from "../../redux/actionType/index"
import { Typography } from "@material-ui/core"
import CountTime from './count-time';
import styled from "styled-components"

const DivOverlay = styled.div`
    display:${ props => props.display ? "block" : "none"}
`

class SeatBooking extends Component {
    hanleOnclickOverplay = () => {
        this.props.editIsvalidClose(false)
        this.props.editIsvalidOverplay(false)
    }
    renderHtml = () => {
        if (this.props.isValid) {
            return <LottieAnimation />
        }
        if (!this.props.isValid) {
            return (
                <section className="row" id="dat-ve-film">
                    <DivOverlay display={this.props.isValidOverplay} className="overplay" onClick={this.hanleOnclickOverplay}></DivOverlay>
                    <div className="col-12 col-sm-12 col-lg-8 content-left">
                        <div className="tiltle">
                            <Typography variant="h5">
                                Chọn ghế
                            </Typography>
                            <div className="count-time">
                                <div>
                                    <Typography variant="subtitle1">
                                        Thời gian còn lại
                                    </Typography>
                                    <div className="count">
                                        <CountTime />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container chon-ghe">
                            <div className="row">
                                <TypeSeat />
                                <SelectSeat />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4 content-right">
                        <DetailBooking />
                    </div>
                </section>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderHtml()}
            </div>
        )
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getListDetailBooking(id)
    }
    componentWillUnmount() {
        this.props.deleteListDetailBooking();
        this.props.editIsvalid(true);
        this.props.deleteTongTien("");
    }
}

const mapStateToProps = state => {
    return {
        isValid: state.seatBookingReducers.isValid,
        isValidOverplay: state.seatBookingReducers.isValidOverplay
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListDetailBooking: data => {
            dispatch(callApi.actGetListDetailBooking(data))
        },
        deleteListDetailBooking: () => {
            dispatch(action.actGetListDetailBooking([], actionType.actGetListDetailBooking))
        },
        editIsvalid: data => {
            dispatch(action.actGetListDetailBooking(data, "GET-SEAT-ISVALID"))
        },
        deleteTongTien: data => {
            dispatch(action.actGetListDetailBooking(data, "GET-TONG-TIEN"))
        },
        editIsvalidClose: data => {
            dispatch(action.actGetListDetailBooking(data, "EDIT-ISVALID-CLOSE-DETAIL"))
        },
        editIsvalidOverplay: data => {
            dispatch(action.actGetListDetailBooking(data, "EDIT-ISVALID-OVERLAY"))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeatBooking)
