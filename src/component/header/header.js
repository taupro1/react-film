import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import * as actionApi from "../../redux/action/action-api/index"
import * as callApi from "../../redux/action/callAPI/index"
import * as action from "../../redux/action/action-redux/index"
import Account from './account';
import { Link, animateScroll as scroll } from "react-scroll";

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            display: "none",
            isValid: true,
            user: {
                taiKhoan: "",
                matKhau: ""
            },
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        callApi.callApiQuanLyNguoiDung("POST", `DangNhap`, this.state.user)
            .then((rs) => {
                NotificationManager.success("Login success")
                localStorage.setItem("login", JSON.stringify(rs.data));
                this.props.editStatusLogin(true);
                this.props.editIsvalidLogin()
                this.setState({
                    display: "none"
                })
            })
            .catch((er) => {
                NotificationManager.error(er.response.data)
            })
        this.setState({
            user: {
                taiKhoan: "",
                matKhau: ""
            }
        })

    }

    handleOnchage = event => {
        let { name, value } = event.target;
        this.setState({
            user: { ...this.state.user, [name]: value }
        })
    }

    handleRemoveLocal = () => {
        localStorage.removeItem("login");
        this.props.editStatusLogin(false)
        this.setState({
            isValid: false
        })
    }
    renderLogin = () => {
        if (localStorage.getItem("login")) {
            const user = JSON.parse(localStorage.getItem("login"))
            return (
                <Account user={user} remove={this.handleRemoveLocal} />
            )
        }
        if (!localStorage.getItem("login")) {
            return (
                <li className="nav-item color-item">
                    <a className="nav-link active" onClick={this.handleClickLogin} id="login-logo">ĐĂNG NHẬP</a>
                </li>
            )
        }
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

    scrollToTop = () => {
        scroll.scrollToTop();
    }
    render() {
        const { display, user } = this.state
        return (
            <header>
                <div className="header">
                    <div className="container-fluid">
                        <div className="row padding-header">
                            <div className="col-sm-4 header-left d-flex justify-content-center align-items-center">
                                <ul className="nav position-absolute">
                                    <li className="nav-item color-item">
                                        <Link
                                            className="nav-link"
                                            activeClass="active"
                                            to="home-movie"
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={500}
                                        >
                                            Lịch chiếu
                                        </Link>
                                    </li>
                                    <li className="nav-item color-item">
                                        <Link
                                            className="nav-link"
                                            activeClass="active"
                                            to="cinema"
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={500}
                                        >
                                            Cụm rạp
                                        </Link>
                                    </li>
                                    <li className="nav-item color-item">
                                        <Link
                                            className="nav-link"
                                            activeClass="active"
                                            to="news-review"
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={500}
                                        >
                                            Đánh giá
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-4 header-between d-flex justify-content-around">
                                <a className="d-flex align-items-center" target="_blank" href="https://www.facebook.com/profile.php?id=100004391253792">
                                    <FontAwesomeIcon icon={["fab", "facebook-square"]} className="i-facebook" />
                                </a>
                                <NavLink to="/" className="logo-header">
                                    <img src="./img/logo-header/logo.png"></img>
                                </NavLink>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon="phone-square" className="i-phone" />
                                    <span>:123456</span>
                                </div>
                            </div>
                            <div className="col-sm-4 ">
                                <div className="row header-right d-flex h-100 justify-content-center">
                                    <ul className="nav logo-login">
                                        {this.renderLogin()}
                                    </ul>
                                    <div id="login" style={{ display: display }}>
                                        <form action className="form-login">
                                            <div className="form-input">
                                                <input type="text" name="taiKhoan" autoFocus value={user.taiKhoan} onChange={this.handleOnchage} id="taikhoan" placeholder="Tài khoản" />
                                            </div>
                                            <div className="form-input">
                                                <input type="password" name="matKhau" value={user.matKhau} onChange={this.handleOnchage} id="password" placeholder="Mật khẩu" />
                                            </div>
                                            <div>
                                                <button type="submit" onClick={this.handleSubmit} id="logo-submit">
                                                    Đăng nhập
                  </button>
                                            </div>
                                            <div>
                                                <button id="register">
                                                    <NavLink to={"/register"}>Đăng ký</NavLink>
                                                </button>
                                            </div>
                                            <NotificationContainer />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postUser: data => {
            dispatch(actionApi.actPostUserLoginApi(data))
        },
        editStatusLogin: data => {
            let action = {
                type: "EDIT-STATUS-LOGIN",
                data
            }
            dispatch(action)
        },
        editIsvalidLogin: () => {
            dispatch(action.actGetUser("EDIT-ISVALID-LOGIN-TICKET", true))
        }
    }
}


const mapStateToProps = state => {
    return {
        listUser: state.homeReducers.listUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);