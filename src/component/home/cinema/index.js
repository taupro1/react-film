import React, { Component } from 'react'
import { connect } from "react-redux";
import ListCinema from './listCinema';
import LocationCinema from './locationCinema';
import ListFilm from './listFilm';
import * as callApi from "../../../redux/action/action-api";
import { rubberBand, tada } from "react-animations"
import styled, { keyframes } from "styled-components"
import * as action from "../../../redux/action/action-redux/index"

const hingeAnimation = keyframes`${rubberBand}`;
const HingeDiv = styled.div`
    animation:10s ${hingeAnimation};
`

class Cinema extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "BHDStar",
        }
    }
    // Chức năng: 
    // 1. Nhận maHeThongRap từ onlick trong listCinema và chỉ định tên hệ thống rạp 
    // 2. Thay đổi lại name(tên hệ thống rạp) khi hệ thống rạp đó dc chỉ định sáng lên
    // 3. Gọi api lấy danh sách cụm rạp của từng hệ thống rạp
    handleGetImgName = (name) => {
        this.setState({
            name
        }, () => { this.props.getListDetailCinema(this.state.name) })
    }

    // Hiện sáng img hệ thống rạp mỗi khi onlick
    // Cụ thể :
    // Khi duyệt mảng (trong className hàm renderListCinema()) nếu tên hệ thống rạp đã dc chỉ định giống phần từ nào trong mảng thì sẽ được active(sáng lên)
    returnOpacityImg = (name, index) => {
        if (index === 0 && !this.props.isValidCinema) {
            return "active"
        }
        if (name === this.state.name) {
            return "active"
        }
    }

    // Duyệt mảng show ra các ảnh hệ thống rạp
    renderListCinema = () => {
        return this.props.listCinema.map((item, index) => {
            return (
                <ListCinema className={this.returnOpacityImg(item.maHeThongRap, index)} img={this.handleGetImgName} key={index} item={item} />
            )
        })
    }

    render() {
        return (
            <section id="cinema">
                <div className="container-fuild">
                    <HingeDiv className="title-cinema">
                        Cụm rạp
    </HingeDiv>
                    <div className="list-cinema">
                        <ul>
                            {this.renderListCinema()}
                        </ul>
                    </div>
                    <div className="item-cinema">
                        <div className="item row">
                            <LocationCinema name={this.state.name} />
                            <ListFilm />
                        </div>
                    </div>
                </div>
            </section>

        )
    }

    componentDidMount() {
        this.props.getListCinema();  // Gọi hàm lấy danh sách hệ thống rạp qua api như BHD, CGV....
        this.props.getListDetailCinema(this.state.name); // Gọi hàm lấy danh sách cụm rạp của từng hệ thống rạp từ api với (maHeThongRap)
    }
    componentWillUnmount() {
        this.props.reset()
    }
}

// Gọi api, store, redux
const mapStateToProps = state => {
    return {
        listCinema: state.cinemaReducers.listCinema,
        isValidCinema: state.cinemaReducers.isValidCinema   // Lấy danh sách hệ thống rạp từ store
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getListCinema: () => {                     // Gọi api lấy danh sách hệ thông rạp (được gọi trong ComponentDidMount)
            dispatch(callApi.actGetListCinemaApi())
        },
        getListDetailCinema: (maHeThongRap) => {  // Gọi api lấy danh sách cụm rạp với tham số maHeThongRap (được gọi trong handleGetImgName() và được thực thi khi onclick vào 1 hệ thống rạp bên listCinema)
            dispatch(callApi.actGetListDetailCinemaApi(maHeThongRap))
        },
        reset: () => {
            dispatch(action.actGetUser("GET-MA-CUM-RAP", ""))
            dispatch(action.actGetUser("GET-MA-CUM-RAP-FIRST", ""))
            dispatch(action.actGetUser("EDIT-ISVALID", true))
            dispatch(action.actGetUser("EDIT-ISVALID-CINEMA", false))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinema);
