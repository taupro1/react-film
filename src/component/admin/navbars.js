import React, { Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
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
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';

const NavbarDiv = styled.div`
    @media (max-width:1000px){
        background:black;
        left:${props => props.left ? "0%" : "-36%"};
        width:40%;
    }
`

const OverlayDiv = styled.div`
    display:${props => props.left ? "block" : "none"}
`
function Navbars(props) {
    const [left, setLeft] = React.useState(false)
    const handleOnclickSignOut = () => {
        localStorage.removeItem("userAdmin");
        props.history.push("/admin")
        props.getIslogin()
    }
    const renderAccount = () => {
        if (localStorage.getItem("userAdmin") || props.isLogin) {
            let account = JSON.parse(localStorage.getItem("userAdmin"))
            return account.hoTen
        }
        else {
            return "Account"
        }
    }
    return (
        <Fragment>
            <NavbarDiv left={left} className="navbars-admin">
                <ul className="navbar-ul">
                    <li className="navbar-li">
                        <div className="a-navbars">
                            <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/account">
                                <Button className="btn-navbars">
                                    <PersonIcon className="icon" />
                                    <Typography className="btn-subtitle1" variant="subtitle1">
                                        {renderAccount()}
                                    </Typography>
                                </Button>
                            </NavLink>
                        </div>
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
                            <Button onClick={handleOnclickSignOut} className="btn-navbars">
                                <ExitToAppIcon className="icon" />
                                <Typography className="btn-subtitle1" variant="subtitle1">
                                    Đăng xuất
                                </Typography>
                            </Button>
                        </a>
                    </li>
                </ul>
                <div className="navbar-responsive">
                    <ul className="navbar-ul-responsive">
                        <li className="navbar-li">
                            <div className="a-navbars">
                                <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/account">
                                    <Button className="btn-navbars">
                                        <Typography className="btn-subtitle1" variant="subtitle1">
                                            {renderAccount()}
                                        </Typography>
                                    </Button>
                                </NavLink>
                            </div>
                        </li>
                        <li className="navbar-li">
                            <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/dashboard">
                                <Button className="btn-navbars">
                                    <Typography className="btn-subtitle1" variant="subtitle1">
                                        Dashboard
                                </Typography>
                                </Button>
                            </NavLink>
                        </li>
                        <li className="navbar-li">
                            <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/user">
                                <Button className="btn-navbars">
                                    <Typography className="btn-subtitle1" variant="subtitle1">
                                        Người dùng
                                </Typography>
                                </Button>
                            </NavLink>
                        </li>
                        <li className="navbar-li">
                            <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/movies">
                                <Button className="btn-navbars">
                                    <Typography className="btn-subtitle1" variant="subtitle1">
                                        Phim
                                </Typography>
                                </Button>
                            </NavLink>
                        </li>
                        <li className="navbar-li">
                            <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/cinema">
                                <Button className="btn-navbars">
                                    <Typography className="btn-subtitle1" variant="subtitle1">
                                        Hệ thống rạp
                                </Typography>
                                </Button>
                            </NavLink>
                        </li>
                        <li className="navbar-li">
                            <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/ticket">
                                <Button className="btn-navbars">
                                    <Typography className="btn-subtitle1" variant="subtitle1">
                                        Lịch chiếu
                                </Typography>
                                </Button>
                            </NavLink>
                        </li>
                        <li className="navbar-li">
                            <a href className="a-navbars">
                                <Button onClick={handleOnclickSignOut} className="btn-navbars">
                                    <Typography className="btn-subtitle1" variant="subtitle1">
                                        Đăng xuất
                                </Typography>
                                </Button>
                            </a>
                        </li>
                    </ul>
                    <div>
                        <MenuIcon onClick={() => setLeft(!left)} className="menu-icon" />
                    </div>
                </div>
            </NavbarDiv>
            <OverlayDiv onClick={() => setLeft(!left)} left={left} className="overplay-navbars">
            </OverlayDiv>
        </Fragment>
    )
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbars))

