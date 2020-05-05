import React, { Component, createRef } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import MovieIcon from '@material-ui/icons/Movie';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PersonIcon from '@material-ui/icons/Person';
import HdIcon from '@material-ui/icons/Hd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import { connect } from 'react-redux';
import * as action from "../../redux/action/action-redux/index"


class Navbars extends Component {

    handleOnclickSignOut = () => {
        localStorage.removeItem("userAdmin");
        this.props.getIslogin()
    }
    renderAccount = () => {
        if (localStorage.getItem("userAdmin") || this.props.isLogin) {
            let account = JSON.parse(localStorage.getItem("userAdmin"))
            return account.hoTen
        }
        else {
            return "Account"
        }
    }
    render() {
        return (
            <div className="navbars-admin">
                <ul className="navbar-ul">
                    <li className="navbar-li">
                        <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/account">
                            <Button className="btn-navbars">
                                <PersonIcon className="icon" />
                                <Typography className="btn-subtitle1" variant="subtitle1">
                                    {this.renderAccount()}
                                </Typography>
                            </Button>
                        </NavLink>

                    </li>
                    <li className="navbar-li">
                        <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/dashboard">
                            <Button className="btn-navbars">
                                <DashboardIcon className="icon" />
                                <Typography className="btn-subtitle1" variant="subtitle1">
                                    Dashboard
                                </Typography>
                            </Button>
                        </NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/user">
                            <Button className="btn-navbars">
                                <AccountCircleIcon className="icon" />
                                <Typography className="btn-subtitle1" variant="subtitle1">
                                    Người dùng
                                </Typography>
                            </Button>
                        </NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/movies">
                            <Button className="btn-navbars">
                                <MovieIcon className="icon" />
                                <Typography className="btn-subtitle1" variant="subtitle1">
                                    Phim
                                </Typography>
                            </Button>
                        </NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/cinema">
                            <Button className="btn-navbars">
                                <AccountBalanceIcon className="icon" />
                                <Typography className="btn-subtitle1" variant="subtitle1">
                                    Hệ thống rạp
                                </Typography>
                            </Button>
                        </NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/ticket">
                            <Button className="btn-navbars">
                                <HdIcon className="icon" />
                                <Typography className="btn-subtitle1" variant="subtitle1">
                                    Lịch chiếu
                                </Typography>
                            </Button>
                        </NavLink>
                    </li>
                    <li className="navbar-li">
                        <a href className="a-navbars">
                            <Button onClick={this.handleOnclickSignOut} className="btn-navbars">
                                <ExitToAppIcon className="icon" />
                                <Typography className="btn-subtitle1" variant="subtitle1">
                                    Đăng xuất
                                </Typography>
                            </Button>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getIslogin: () => {
            dispatch(action.actGetUser("GET-ISVALID-LOGIN-ADMIN", false))
        }
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.loginReducers.isLogin
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbars)

