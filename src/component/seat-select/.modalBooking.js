import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "@material-ui/core/Button"
import variable from "../../scss/_variable.scss"
import { Link } from 'react-router-dom'

const ModalBody = styled.div`
    color: black;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
`
const ModalHeader = styled(ModalBody)`
    display:block;
    font-size:2rem
`
const Icon = styled(FontAwesomeIcon)`
    font-size:4rem
`
const ItemHeader = styled.div`
    margin-top:2%;
`
const ButtonChiTiet = styled(Button)`
    font-weight: 600 !important;
    color: white !important;
    background: ${variable.colorThree} !important;
    outline:none !important;
`
const ContentDetail = styled.div`
    background: ${variable.colorTwo};
    position: fixed;
    top: 10%;
    width: 60%;
    right: ${props => props.right ? "-100%" : "25%"};
    transition:right .6s;
`
const ButtonClose = styled(ButtonChiTiet)`
    float: right !important;
    margin: 2% !important;
`

class ModalBooking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            right: true
        }
    }
    renderHtml = () => {
        if (this.props.seatSelect.length !== 0) {
            return (
                <Fragment>
                    <ModalHeader className="modal-header">
                        <Icon icon="check-circle" ></Icon>
                        <ItemHeader>Đặt vé thành công</ItemHeader>
                    </ModalHeader>
                    <ModalBody className="modal-body">
                        <p>Chúc quý khách xem phim vui vẻ bên gấu (-_-)</p>
                        <p>Chúc các bạn FA sớm có gấu ! Fighting</p>
                    </ModalBody>
                    <div className="modal-footer">
                        <ButtonChiTiet data-dismiss="modal" variant="contained" onClick={() => this.setState({ right: false })}>
                            Xem chi tiết đặt vé
                        </ButtonChiTiet>
                    </div>
                </Fragment>
            )
        }
        else {
            return (
                <ModalBody className="modal-body">
                    <p>Vui lòng đặt ghế xem phim</p>
                </ModalBody>
            )
        }
    }
    renderSearSelect = () => {
        if (this.props.seatSelect.length !== 0) {
            return this.props.seatSelect.map((item, index) => {
                return (
                    <span className="ghe" key={index}>{item.tenGhe}</span>
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
    renderListDetail = () => {
        if (Object.keys(this.props.listDetailBooking).length !== 0) {
            const { listDetailBooking } = this.props
            let item = listDetailBooking.thongTinPhim
            return (
                <Fragment>
                    <div className="thong-tin-dat-ve">
                        <div>
                            <span>Tên phim: </span><span className="chi-tiet">{item.tenPhim}</span>
                        </div>
                        <div>
                            <span>Rạp: </span><span className="chi-tiet">{item.tenCumRap}</span>
                        </div>
                        <div>
                            <span>Địa chỉ rạp: </span><span className="chi-tiet">{item.diaChi}</span>
                        </div>
                        <div>
                            <span>Ngày chiếu: </span><span className="chi-tiet">{item.ngayChieu}</span>
                        </div>
                        <div>
                            <span>Giờ chiếu: </span><span className="chi-tiet">{item.gioChieu}</span>
                        </div>
                        <div>
                            <span>Ghế: </span>{this.renderSearSelect()}
                        </div>
                        <div>
                            <span>Tổng tiền: </span><span className="chi-tiet">{this.renderTienGhe()}</span>
                        </div>
                    </div>
                </Fragment>
            )
        }
    }
    render() {
        return (
            <Fragment>
                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {this.renderHtml()}
                        </div>
                    </div>
                </div>
                <ContentDetail right={this.state.right} className="detail-dat-ve">
                    <div>
                        <h3>Thông tin đặt vé</h3>
                        {this.renderListDetail()}
                        <div>
                            <ButtonClose onClick={() => this.setState({ right: true })} variant="contained">Close</ButtonClose>
                        </div>
                        <div>
                            <ButtonClose variant="contained">
                                <Link to="/">Quay về trang chủ</Link>
                            </ButtonClose>
                        </div>
                    </div>
                </ContentDetail>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        listDetailBooking: state.seatBookingReducers.listDetailBooking,
        seatSelect: state.seatBookingReducers.seatSelect
    }
}
export default connect(mapStateToProps, null)(ModalBooking)

