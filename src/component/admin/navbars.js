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


export default class Navbars extends Component {
    constructor(props) {
        super(props)
        this.signOut = createRef()
    }

    handleOnclickSignOut = () => {
        return <Redirect to="/admin" />
    }
    renderAccount = () => {
        if (localStorage.getItem("userAdmin")) {
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
                                <div>{this.renderAccount()}</div>
                            </Button>
                        </NavLink>

                    </li>
                    <li className="navbar-li">
                        <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/dashboard">
                            <Button className="btn-navbars">
                                <DashboardIcon className="icon" />
                                <div>Dashboard</div>
                            </Button>
                        </NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/user">
                            <Button className="btn-navbars">
                                <AccountCircleIcon className="icon" />
                                <div>User</div>
                            </Button>
                        </NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/movies">
                            <Button className="btn-navbars">
                                <MovieIcon className="icon" />
                                <div>Movie</div>
                            </Button>
                        </NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/cinema">
                            <Button className="btn-navbars">
                                <AccountBalanceIcon className="icon" />
                                <div>Cinema</div>
                            </Button>
                        </NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink activeClassName="activeAdmin" className="a-navbars" to="/admin/ticket">
                            <Button className="btn-navbars">
                                <HdIcon className="icon" />
                                <div>Ticket booking</div>
                            </Button>
                        </NavLink>
                    </li>
                    <li className="navbar-li">
                        <a className="a-navbars">
                            <Button onClick={this.handleOnclickSignOut} className="btn-navbars">
                                <ExitToAppIcon className="icon" />
                                <div>Sign out</div>
                            </Button>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
