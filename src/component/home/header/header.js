import React, { Component } from 'react'
import ModalHeader from './modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            display: "none",
            user: {
                taiKhoan: "",
                matKhau: ""
            },
            error: {
                taiKhoan: "",
                matKhau: ""
            },
            formValid: false,
            taiKhoanValid: false,
            matKhauValid: false
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.props.listUser) {
            this.props.listUser.map((item) => {
                if (item.taiKhoan === this.state.user.taiKhoan && item.matKhau === this.state.user.matKhau) {
                    NotificationManager.success("Đăng nhập thành công")
                }
                else {
                    NotificationManager.error("Tài khoản không tồn tại")
                }
            })
        }
        NotificationManager.error("Tài khoản không tồn tại")
        this.setState({
            user: {
                taiKhoan: "",
                matKhau: ""
            }
        })

    }

    handleError = event => {
        let { name, value } = event.target;
        let status = value === "" ? "Vui lòng điền vào trường này" : ""
        let { taiKhoanValid, matKhauValid } = this.state;
        switch (name) {
            case "taiKhoan":
                taiKhoanValid = status !== "" ? false : true;
                break;
            case "matKhau":
                matKhauValid = status !== "" ? false : true;
                break;
            default:
                break;
        }
        this.setState({
            error: { ...this.state.error, [name]: status },
            matKhauValid,
            taiKhoanValid
        }, () => {
            this.validationForm()
        })
    }
    validationForm = () => {
        let { taiKhoanValid, matKhauValid } = this.state;
        this.setState({
            formValid: taiKhoanValid && matKhauValid
        })
    }

    handleOnchage = event => {
        let { name, value } = event.target;
        this.setState({
            user: { ...this.state.user, [name]: value }
        })
    }

    handleClickLogin = () => {
        this.state.display === "none" ?
            this.setState({
                display: "block"
            })
            :
            this.setState({
                display: "none"
            })
    }
    render() {
        const { display, error, user } = this.state
        return (
            <header>
                <div className="header">
                    <div className="container-fluid">
                        <div className="row padding-header">
                            <div className="col-sm-4 header-left d-flex justify-content-center align-items-center">
                                <ul className="nav position-absolute">
                                    <li className="nav-item color-item">
                                        <a className="nav-link active" href="#home-movie">LỊCH CHIẾU</a>
                                    </li>
                                    <li className="nav-item color-item">
                                        <a className="nav-link" href="#cinema">CỤM RẠP</a>
                                    </li>
                                    <li className="nav-item color-item">
                                        <a className="nav-link" href="#news-review">ĐÁNH GIÁ PHIM</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-4 header-between d-flex justify-content-around">
                                <a className="d-flex align-items-center" target="_blank" href="https://www.facebook.com/profile.php?id=100004391253792">
                                    {/* <i className="fa fa-facebook i-facebook" aria-hidden="true" /> */}
                                    <FontAwesomeIcon icon={["fab", "facebook-square"]} className="i-facebook" />
                                </a>
                                <Link to="/" exact className="logo-header">
                                    <img src="./img/logo-header/logo.png"></img>
                                </Link>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon="phone-square" className="i-phone" />
                                    <span>:123456</span>
                                </div>
                            </div>
                            <div className="col-sm-4 ">
                                <div className="row header-right d-flex h-100 justify-content-center">
                                    <ul className="nav logo-login">
                                        <li className="nav-item color-item">
                                            <a className="nav-link active" onClick={this.handleClickLogin} href="#" id="login-logo">ĐĂNG NHẬP</a>
                                        </li>
                                        <li className="nav-item color-item">
                                            <a className="nav-link" data-toggle="modal" data-target="#myModal" href="#">ĐĂNG KÝ</a>
                                        </li>
                                    </ul>
                                    <div id="login" style={{ display: display }}>
                                        <form action className="form-login">
                                            <div className="form-input">
                                                <input type="text" name="taiKhoan" value={user.taiKhoan} onChange={this.handleOnchage} onBlur={this.handleError} onKeyUp={this.handleError} id="taikhoan" placeholder="Tài khoản" />
                                                {
                                                    error.taiKhoan !== "" ? (<div className="error">{error.taiKhoan}</div>) : ""
                                                }
                                            </div>
                                            <div className="form-input">
                                                <input type="password" name="matKhau" value={user.matKhau} onChange={this.handleOnchage} onBlur={this.handleError} onKeyUp={this.handleError} id="password" placeholder="Mật khẩu" />
                                                {
                                                    error.matKhau !== "" ? (<div className="error">{error.matKhau}</div>) : ""
                                                }
                                            </div>
                                            <div>
                                                <button type="submit" onClick={this.handleSubmit} id="logo-submit" disabled={!this.state.formValid}>
                                                    Đăng nhập
                  </button>
                                            </div>
                                            <NotificationContainer />
                                        </form>
                                    </div>
                                    <ModalHeader />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        )
    }
}


const mapStateToProps = state => {
    return {
        listUser: state.homeReducers.listUser
    }
}

export default connect(mapStateToProps, null)(Header);