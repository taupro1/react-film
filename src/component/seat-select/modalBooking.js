import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "@material-ui/core/Button"
import variable from "../../scss/_variable.scss"
import { Link } from 'react-router-dom'
import { Typography, Box } from "@material-ui/core"

const Icon = styled(FontAwesomeIcon)`
    font-size:4rem
`
const ItemHeader = styled.div`
    margin-top:2%;
`
const ContentDetail = styled.div`
    background: white;
    position: fixed;
    top: 10%;
    width: 60%;
    color:black;
    right: ${props => props.right ? "-100%" : "25%"};
    transition:right .6s;
    z-index:4
`
const ModalHeader = styled.div`
    display: block;
    text-align: center;
`

class ModalBooking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            right: true
        }
    }
    renderHtml = () => {
        if (localStorage.getItem("login") || this.state.statusLogin) {
            if (this.props.seatSelect.length !== 0) {
                return (
                    <Fragment>
                        <ModalHeader className="modal-header">
                            <Icon icon="check-circle" ></Icon>
                            <ItemHeader>
                                <Typography variant="h4">
                                    <Box fontWeight="fontWeightBold">
                                        Đặt vé thành công
                                    </Box>
                                </Typography>
                            </ItemHeader>
                        </ModalHeader>
                        <div style={{ textAlign: 'center' }} className="modal-body">
                            <Typography variant="subtitle1">Chúc quý khách xem phim vui vẻ bên gấu (-_-)</Typography>
                            <Typography variant="subtitle1">Chúc các bạn FA sớm có gấu ! Fighting</Typography>
                        </div>
                        <div className="modal-footer">
                            <Button color="primary" data-dismiss="modal" variant="contained" onClick={() => this.setState({ right: false })}>
                                Xem chi tiết đặt vé
                            </Button>
                        </div>
                    </Fragment>
                )
            }
            else {
                return (
                    <Typography style={{ color: "black", textAlign: "center" }} variant="h5" className="modal-body">
                        <Box fontWeight="fontWeightBold">
                            Vui lòng đặt ghế xem phim
                        </Box>
                    </Typography>
                )
            }
        }
        else {
            return (
                <Typography style={{ color: "black", textAlign: "center" }} variant="h5" className="modal-body">
                    <Box fontWeight="fontWeightBold">Vui lòng đăng nhập</Box>
                </Typography>
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
    renderListDetail = () => {
        if (Object.keys(this.props.listDetailBooking).length !== 0) {
            const { listDetailBooking } = this.props
            let item = listDetailBooking.thongTinPhim
            return (
                <Fragment>
                    <div className="thong-tin-dat-ve">
                        <div className="thong-tin-div">
                            <Typography className="thong-tin-subtitle1" variant="subtitle1">Tên phim: </Typography>
                            <Typography variant="body2" className="chi-tiet">{item.tenPhim}</Typography>
                        </div>
                        <div className="thong-tin-div">
                            <Typography className="thong-tin-subtitle1" variant="subtitle1">Rạp: </Typography>
                            <Typography variant="body2" className="chi-tiet">{item.tenCumRap}</Typography>
                        </div>
                        <div className="thong-tin-div">
                            <Typography className="thong-tin-subtitle1" variant="subtitle1">Địa chỉ rạp: </Typography>
                            <Typography variant="body2" className="chi-tiet">{item.diaChi}</Typography>
                        </div>
                        <div className="thong-tin-div">
                            <Typography className="thong-tin-subtitle1" variant="subtitle1">Ngày chiếu: </Typography>
                            <Typography variant="body2" className="chi-tiet">{item.ngayChieu}</Typography>
                        </div>
                        <div className="thong-tin-div">
                            <Typography className="thong-tin-subtitle1" variant="subtitle1">Giờ chiếu: </Typography>
                            <Typography variant="body2" className="chi-tiet">{item.gioChieu}</Typography>
                        </div>
                        <div className="thong-tin-div">
                            <Typography className="thong-tin-subtitle1" variant="subtitle1">Ghế: </Typography>
                            <Typography variant="body2" className="ghe">{this.renderSearSelect()}</Typography>
                        </div>
                        <div className="thong-tin-div">
                            <Typography className="thong-tin-subtitle1" variant="subtitle1">Tổng tiền: </Typography>
                            <Typography variant="body2" className="chi-tiet">{this.props.tongTien}</Typography>
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
                        <div style={{ color: "black" }} className="modal-content">
                            {this.renderHtml()}
                        </div>
                    </div>
                </div>
                <ContentDetail right={this.state.right} className="detail-dat-ve">
                    <div>
                        <Typography variant="h5">
                            <Box fontWeight="fontWeightBold">
                                Thông tin đặt vé
                            </Box>
                        </Typography>
                        {this.renderListDetail()}
                        <div className="thong-tin-button">
                            <div>
                                <Button className="btn-close" color="secondary" onClick={() => this.setState({ right: true })} variant="contained">
                                    <Typography variant="button">
                                        Close
                                    </Typography>
                                </Button>
                            </div>
                            <div>
                                <Button variant="contained" color="primary">
                                    <Typography variant="button">
                                        <Link to="/">Quay về trang chủ</Link>
                                    </Typography>
                                </Button>
                            </div>
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
        seatSelect: state.seatBookingReducers.seatSelect,
        tongTien: state.seatBookingReducers.tongTien,
        statusLogin: state.homeReducers.statusLogin
    }
}
export default connect(mapStateToProps, null)(ModalBooking)

