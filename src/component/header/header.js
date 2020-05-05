import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import 'react-notifications/lib/notifications.css';
import Account from './account';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components"
import variable from "../../scss/_variable.scss"
import { Typography, Box } from '@material-ui/core';

const ContentMenu = styled.div`
    z-index:3;
    display:none;
    position: absolute;
    background-color: black;
    width: 100%;
    right: ${props => props.marginLeft ? "-100%" : "0"};
    transition:right .5s;
    @media (max-width: 1152px){
        display:block
    }
`
const ContentMenuUl = styled.ul`
    list-style: none;
    color: white;
`
const ContentMenuLi = styled.li`
    cursor: pointer;
    &:hover{
        color:${variable.colorOne};
        transition:all .3s
    }
`
const ContentMenuNavLink = styled(NavLink)`
    color:white;
    &:hover{
        color:${variable.colorOne};
        transition:all .3s
    }
`

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transform: "-300px",
            isValid: true,
            marginLeft: true
        }
    }
    handleRemoveLocal = () => {
        localStorage.removeItem("login");
        this.props.editStatusLogin(false)
        this.setState({
            isValid: false
        })
    }
    renderLogin = () => {
        if (localStorage.getItem("login") || this.props.statusLogin) {
            const user = JSON.parse(localStorage.getItem("login"))
            return (
                <Account user={user} remove={this.handleRemoveLocal} />
            )
        }
        if (!localStorage.getItem("login")) {
            return (
                <li className="nav-item color-item">
                    <Typography variant="overline">
                        <NavLink to={"/login"} className="nav-link" id="login-logo">Đăng nhập</NavLink>
                    </Typography>
                </li>
            )
        }
    }


    handleOnclickContentMenu = () => {
        console.log("1");

        this.state.marginLeft ?
            this.setState({
                marginLeft: false
            })
            :
            this.setState({
                marginLeft: true
            })
    }
    render() {
        return (
            <header>
                <div className="header">
                    <div className="container-fluid header-container">
                        <div className="row padding-header">
                            <div className="col-xl-4 col-sm-4 header-left">
                                <Typography variant="h3">
                                    <Box fontFamily="Monospace" fontStyle="oblique" fontWeight="fontWeightBold" m={1}>
                                        <NavLink className="logo" to="/">
                                            Cybersoft
                                        </NavLink>
                                    </Box>
                                </Typography>
                            </div>
                            <div className="col-xl-8 col-sm-8 header-right">
                                <ul className="nav left-ul">
                                    <li className="nav-item color-item">
                                        <Typography variant="overline">
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
                                        </Typography>
                                    </li>
                                    <li className="nav-item color-item">
                                        <Typography variant="overline">
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
                                        </Typography>
                                    </li>
                                    <li className="nav-item color-item">
                                        <Typography variant="overline">
                                            <Link
                                                className="nav-link"
                                                activeClass="active"
                                                to="news-review"
                                                spy={true}
                                                smooth={true}
                                                offset={-50}
                                                duration={500}
                                            >
                                                Tin tức
                                        </Link>
                                        </Typography>
                                    </li>
                                    <li className="menu" onClick={this.handleOnclickContentMenu}>
                                        <div>
                                            <FontAwesomeIcon className="icon-menu" icon="bars" />
                                        </div>
                                    </li>
                                    <li className="nav-item color-item">
                                        <Typography variant="overline">
                                            <NavLink className="nav-link" to={"/register"}>Đăng ký</NavLink>
                                        </Typography>
                                    </li>
                                    <li>
                                        <ul className="nav">
                                            {this.renderLogin()}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ContentMenu className="content-menu" marginLeft={this.state.marginLeft}>
                        <ContentMenuUl>
                            <ContentMenuLi>
                                <ContentMenuNavLink
                                    className="nav-link"
                                    to="/"
                                >
                                    Trang chủ
                                        </ContentMenuNavLink>
                            </ContentMenuLi>
                            <ContentMenuLi>
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
                            </ContentMenuLi>
                            <ContentMenuLi>
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
                            </ContentMenuLi>
                            <ContentMenuLi>
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="news-review"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    Tin tức
                                        </Link>
                            </ContentMenuLi>
                        </ContentMenuUl>
                    </ContentMenu>
                </div>
            </header >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editStatusLogin: data => {
            let action = {
                type: "EDIT-STATUS-LOGIN",
                data
            }
            dispatch(action)
        },
    }
}


const mapStateToProps = state => {
    return {
        listUser: state.homeReducers.listUser,
        statusLogin: state.homeReducers.statusLogin,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);