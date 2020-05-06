import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styled from "styled-components"
import { Typography } from "@material-ui/core"
import { Fragment } from 'react';
import { Link } from 'react-router-dom'

const ButtonAccount = styled.button`
    display: flex;
    color: white;
    align-items: center;
    outline: none !important;
    border:2px solid;
    border-radius:16px;
    background:none
`

export default function Account(props) {
    const { user } = props
    const renderHtml = () => {
        if (user.maLoaiNguoiDung === "QuanTri") {
            return (
                <Fragment>
                    <Typography variant="subtitle2" style={{ color: "black", cursor: "pointer" }}>
                        <Link to={"/admin/dashboard"} class="dropdown-item" href>Dashboard</Link>
                    </Typography>
                    <Typography variant="subtitle2" style={{ color: "black", cursor: "pointer" }}>
                        <Link to={"/account"} class="dropdown-item" href>Thông tin tài khoản</Link>
                    </Typography>
                    <Typography variant="subtitle2" style={{ color: "black", cursor: "pointer" }}>
                        <a class="dropdown-item" href onClick={props.remove}>Đăng xuất</a>
                    </Typography>
                </Fragment>
            )
        }
        else {
            return (
                <Fragment>
                    <Typography variant="subtitle2" style={{ color: "black", cursor: "pointer" }}>
                        <Link to={"/account"} class="dropdown-item" href>Thông tin tài khoản</Link>
                    </Typography>
                    <Typography variant="subtitle2" style={{ color: "black", cursor: "pointer" }}>
                        <a class="dropdown-item" href onClick={props.remove}>Đăng xuất</a>
                    </Typography>
                </Fragment>
            )
        }
    }
    return (
        <li className="nav-item dropdown">
            <ButtonAccount class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <AccountCircleIcon fontSize="large" />
                <Typography variant="overline">
                    <a href className="nav-link active">{user.hoTen}</a>
                </Typography>
            </ButtonAccount>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {renderHtml()}
            </div>
        </li>
    )
}
