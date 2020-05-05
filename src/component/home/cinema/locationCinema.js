import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import classNames from "classnames"
import AOS from "aos"
import "aos/dist/aos.css"
import { Typography, Box } from "@material-ui/core"

class LocationCinema extends PureComponent {
    // 1. Nhận maCumRap từ hàm RenderHtml( khi onlick vào 1 content cụm rạp)
    // 2. Gửi maCumRap lên store (để đối chiếu vs listFilmItem)
    // 3. Khi click maCumRap sẽ được thay đổi và isValid=false(lúc này cụm rạp đầu tiên sẽ ko sáng) thay vào đó là cụm rạp khi được click
    handleOpacityCinema = (maCumRap) => {
        this.props.getMaCumRap(maCumRap)
        this.props.editIsvalid();
    }

    // 1. Nhận tham số từ renderHtml ( classname)
    // 2. Cụm rạp đầu tiên sẽ được active(sáng lên) (isValid=true)
    // 3. Cụm rạp sẽ được active(sáng lên) khi dc click
    renderOpacityCinema = (maCumRap, index) => {
        if (this.props.isValid && index === 0) {     // hiện sáng hệ thống rạp đầu tiền (index là vị trí hệ thống rạp đầu tiên của từng rạp)
            this.props.getMaCumRapFirst(maCumRap)
            return "active"
        }
        if (this.props.maCumRap === maCumRap) {
            return "active"
        }
    }

    // Duyệt ra các content cụm rạp với từng hệ thống rạp
    renderHtml = () => {
        let cinema = this.props.listDetailCinema[0];
        let content = [];
        for (let item in cinema) {
            if (item === "lstCumRap") {
                let listContent = [];
                cinema[item].map((list, index) => {
                    listContent.push(
                        <div className={classNames(this.renderOpacityCinema(list.maCumRap, index), "cinema")} onClick={() => this.handleOpacityCinema(list.maCumRap)}>
                            <img alt="" src="./img/cinema/img-item-cinema/bhd/bhd-star-vincom-thao-dien-15379553942188.jpg" />
                            <div className="info-cinema">
                                <div className="info">
                                    <Typography variant="subtitle1" className={this.props.name}>
                                        <Box fontWeight="fontWeightBold">
                                            {list.tenCumRap}
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2">{list.diaChi}</Typography>
                                </div>
                            </div>
                        </div>
                    )
                })
                content.push(listContent)
            }
        }
        return content;
    }

    render() {
        AOS.init();
        return (
            <div data-aos="fade-right" data-aos-duration="1000" class="col-sm-12 col-lg-6 col-12 location-cinema">
                {this.renderHtml()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listDetailCinema: state.cinemaReducers.listDetailCinema,
        isValid: state.cinemaReducers.isValid,
        maCumRap: state.cinemaReducers.maCumRap  // Nhận danh sách các cụm rạp từ store
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMaCumRap: data => {              // Gửi maCumRap lên store để đối chiếu bên listFilmItem
            let action = {
                type: "GET-MA-CUM-RAP",
                data
            }
            dispatch(action)
        },
        getMaCumRapFirst: maCumRap => {    // Gửi maCumRap đầu tiên lên store để đối chiếu bên listFilmItem
            let action = {
                type: "GET-MA-CUM-RAP-FIRST",
                data: maCumRap
            }
            dispatch(action)
        },
        editIsvalid: () => {
            let action = {
                type: "EDIT-ISVALID",
                data: false
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationCinema);


