import React, { PureComponent } from 'react';
import { connect } from "react-redux"
import * as action from "../../../redux/action/action-redux/index"
import classNames from "classnames"
import { Typography } from "@material-ui/core"

class DateCinema extends PureComponent {

    hanleOnclick = data => {
        this.props.getDateFilm(data)
        this.props.editIsvalidDate()
    }

    renderOpacity = (data, index) => {
        if (index === 0 && this.props.isValidDate) {
            this.props.getDateFilm(data)
            return "active"
        }
        if (this.props.dateFilm === data) {
            return "active"
        }
    }

    renderHtml = () => {
        if (this.props.listDetailFilm.heThongRapChieu) {
            return this.props.listDetailFilm.heThongRapChieu.map((item, index) => {
                if (item.maHeThongRap === this.props.maHeThongRap) {
                    return item.cumRapChieu.map((list, index) => {
                        if (list.maCumRap === this.props.maCumRap || index === 0) {
                            let date = "";
                            return list.lichChieuPhim.map((item, index) => {
                                if ((new Date(item.ngayChieuGioChieu).toLocaleDateString()) !== date) {
                                    date = new Date(item.ngayChieuGioChieu).toLocaleDateString()
                                    return (
                                        <div className={classNames(this.renderOpacity(new Date(item.ngayChieuGioChieu).toLocaleDateString(), index), "date-item")} key={index} onClick={() => this.hanleOnclick(new Date(item.ngayChieuGioChieu).toLocaleDateString())}>
                                            <Typography variant="body1">{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</Typography>
                                        </div>
                                    )
                                }
                            })
                        }
                    })
                }
            })
        }
    }
    render() {
        return (
            <div className="date-cinema">
                <div className="date">
                    {this.renderHtml()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listDetailFilm: state.detailReducers.listDetailFilm,
        lichChieuPhim: state.detailReducers.listLichChieuPhim,
        maCumRap: state.detailReducers.maCumRapDetail,
        maHeThongRap: state.detailReducers.maHeThongRap,
        isValidDate: state.detailReducers.isValidDate,
        dateFilm: state.detailReducers.dateFilm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDateFilm: data => {
            dispatch(action.actGetUser("GET-DATE-FILM", data))
        },
        editIsvalidDate: () => {
            dispatch(action.actGetUser("EDIT-ISVALID-DATE", false))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateCinema);

