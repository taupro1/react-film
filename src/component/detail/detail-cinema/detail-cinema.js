import React, { Component, Fragment } from 'react'
import ListCinemaDetail from "./listCinema"
import LocationCinemaDetail from "./locationCinema"
import { connect } from "react-redux";
import ListFilmDetail from './listFilm';
import variable from "../../../scss/_variable.scss"
import DanhGiaPhim from './danh-gia';
import AOS from "aos"
import "aos/dist/aos.css"
import { Typography } from "@material-ui/core"

class DetailCinema extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            isValid: true
        }
    }

    handleGetImgName = (name) => {
        this.setState({
            name
        })
    }

    returnOpacityImg = (name, index) => {
        if (index === 0 && !this.props.isValidCinema) {
            this.props.editMaHeThongRap(name)
            return "active"
        }
        if (name === this.state.name) {
            return "active"
        }
    }
    // Duyệt mảng show ra các ảnh hệ thống rạp
    renderListCinema = () => {
        if (this.props.listDetailFilm.heThongRapChieu) {
            return this.props.listDetailFilm.heThongRapChieu.map((item, index) => {
                return (
                    <ListCinemaDetail className={this.returnOpacityImg(item.maHeThongRap, index)} img={this.handleGetImgName} key={index} item={item} />
                )
            })
        }
    }

    // Hai button Lịch chiếu Và Đánh giá
    renderTiltleShowMovie = () => {
        return this.state.isValid ? `${variable.colorOne}` : "white"
    }
    renderTiletleSoonMovie = () => {
        return this.state.isValid ? "white" : `${variable.colorOne}`
    }
    renderDisplayLichChieu = () => {
        return this.state.isValid ? "block" : "none"
    }
    renderDisplayDanhGia = () => {
        return this.state.isValid ? "none" : "block"
    }

    render() {
        AOS.init()
        return (
            <section id="cinema">
                <div className="container-fuild">
                    <ul className="title">
                        <li data-aos="fade-right" data-aos-duration="600" className="movie-play" style={{ color: this.renderTiltleShowMovie() }} onClick={() => { this.setState({ isValid: true }) }}>
                            <Typography variant="h4">
                                Lịch chiếu
                            </Typography>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="600" className="movie-soon" style={{ color: this.renderTiletleSoonMovie() }} onClick={() => { this.setState({ isValid: false }) }}>
                            <Typography variant="h4">
                                Đánh giá
                            </Typography>
                        </li>
                    </ul>
                    <div style={{ display: this.renderDisplayLichChieu() }}>
                        <div className="list-cinema">
                            <ul data-aos="zoom-in" data-aos-duration="700">
                                {this.renderListCinema()}
                            </ul>
                        </div>
                        <div className="item-cinema" >
                            <div className="item row">
                                <LocationCinemaDetail />
                                <ListFilmDetail />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: this.renderDisplayDanhGia() }}>
                        <DanhGiaPhim />
                    </div>
                </div>
            </section>
        )
    }
    componentWillUnmount() {
        this.props.editIsvalidCinema()
    }


}

const mapStateToProps = state => {
    return {
        listDetailFilm: state.detailReducers.listDetailFilm,
        isValidCinema: state.detailReducers.isValidCinema,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editMaHeThongRap: data => {
            let action = {
                type: "EDIT-MHT",
                data
            }
            dispatch(action)
        },
        editIsvalidCinema: () => {
            let action = {
                type: "EDIT-ISVALID-CINEMA-DETAIL",
                data: false
            }
            dispatch(action)
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailCinema);
