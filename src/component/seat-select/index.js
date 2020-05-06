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
import CountTime from './count-time'

class SeatBooking extends Component {
    renderHtml = () => {
        if (this.props.isValid) {
            return <LottieAnimation />
        }
        if (!this.props.isValid) {
            return (
                <section id="dat-ve-film">
                    <div className="content-left">
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
                    <div className="content-right">
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
        isValid: state.seatBookingReducers.isValid
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeatBooking)
