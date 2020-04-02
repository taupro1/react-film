import React, { Component, PureComponent } from 'react'
import { connect } from "react-redux"
import classNames from "classnames"

class LocationCinemaDetail extends PureComponent {
    // 1. Nhận maCumRap từ hàm RenderHtml( khi onlick vào 1 content cụm rạp)
    // 2. Gửi maCumRap lên store (để đối chiếu vs listFilmItem)
    // 3. Khi click maCumRap sẽ được thay đổi và isValid=false(lúc này cụm rạp đầu tiên sẽ ko sáng) thay vào đó là cụm rạp khi được click
    handleOpacityCinema = (maCumRap) => {
        this.props.editIsvalidMaCumRapDetail(false)
        this.props.getMaCumRapDetail(maCumRap)
    }

    // 1. Nhận tham số từ renderHtml ( classname)
    // 2. Cụm rạp đầu tiên sẽ được active(sáng lên) (isValid=true)
    // 3. Cụm rạp sẽ được active(sáng lên) khi dc click
    renderOpacityCinema = (maCumRap, index) => {
        if (this.props.isValidCumRap && index === 0) {     // hiện sáng hệ thống rạp đầu tiền (index là vị trí hệ thống rạp đầu tiên của từng rạp)
            // this.props.getMaCumRapFirst(maCumRap)
            return "active"
        }
        if (this.props.maCumRapDetail === maCumRap) {
            return "active"
        }
    }

    // Duyệt ra các content cụm rạp với từng hệ thống rạp
    renderHtml = () => {
        if (this.props.listDetailFilm.heThongRapChieu) {
            return this.props.listDetailFilm.heThongRapChieu.map(item => {
                if (item.maHeThongRap === this.props.maHeThongRap) {
                    return item.cumRapChieu.map((list, index) => {
                        return (
                            <div className={classNames(this.renderOpacityCinema(list.maCumRap, index), "cinema")} onClick={() => this.handleOpacityCinema(list.maCumRap)}>
                                <img src={item.logo} alt />
                                <div className="info-cinema">
                                    <div className="info">
                                        <span className={this.props.maHeThongRap}> {list.tenCumRap}</span>
                                    </div>
                                    {/* <span>{list.diaChi}</span> */}
                                </div>
                            </div>
                        )
                    })
                }
            })
        }
    }

    render() {
        return (
            <div class="col-sm-5 location-cinema">
                {this.renderHtml()}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        listDetailFilm: state.detailReducers.listDetailFilm,
        maHeThongRap: state.detailReducers.maHeThongRap,
        isValidCumRap: state.detailReducers.isValidCumRap,
        maCumRapDetail: state.detailReducers.maCumRapDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editIsvalidMaCumRapDetail: (data) => {
            let action = {
                type: "EDIT-ISVALID-MACUMRAP-DETAIL",
                data,
            }
            dispatch(action)
        },
        getMaCumRapDetail: data => {
            let action = {
                type: "GET-MACUMRAP-DETAIL",
                data
            }
            dispatch(action)
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationCinemaDetail);