import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styled from "styled-components"
import variable from "../../scss/_variable.scss";

const ButtonAccount = styled.button`
    background:${variable.colorThree};
    border: none;
    display: flex;
    color: white;
    align-items: center;
    outline: none !important;
`

export default function Account(props) {
    const { user } = props
    return (
        <li className="nav-item dropdown">
            <ButtonAccount class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <AccountCircleIcon fontSize="large" />
                <a className="nav-link active">{user.hoTen}</a>
            </ButtonAccount>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" onClick={props.remove}>Đăng xuất</a>
            </div>
        </li>
    )
}
