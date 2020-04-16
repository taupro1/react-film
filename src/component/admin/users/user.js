import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TextField from '@material-ui/core/TextField';
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import ModalUsers from "./modalUsers"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Toolbar, FormControl, InputAdornment, ButtonBase } from '@material-ui/core';

import * as callApi from "../../../redux/action/action-api/index"
import { connect } from 'react-redux';

class UserAdmin extends Component {
    renderHtml = () => {
        const { listUser } = this.props;
        if (listUser.length !== 0) {
            return listUser.map((item, index) => {
                return (
                    <div className="row" key={index}>
                        <div className="col-2">
                            {item.taiKhoan}
                        </div>
                        <div className="col-2">
                            {item.hoTen}
                        </div>
                        <div className="col-3">
                            {item.email}
                        </div>
                        <div className="col-2">
                            {item.soDt}
                        </div>
                        <div className="col-1">
                            {item.matKhau}
                        </div>
                        <div className="col-1">
                            {item.maLoaiNguoiDung}
                        </div>
                        <div className="col-1">
                            <Tooltip title="Delete">
                                <ButtonBase style={{ outline: "none" }}>
                                    <DeleteIcon />
                                </ButtonBase>
                            </Tooltip>
                            <Tooltip title="Edit">
                                <ButtonBase data-toggle="modal" data-target="#myModalUser" style={{ outline: "none" }}>
                                    <EditIcon />
                                </ButtonBase>
                            </Tooltip>
                        </div>

                    </div>
                )
            })
        }
    }
    render() {
        return (
            <div className="user-admin">
                <Paper>
                    <Toolbar className="toolbar">
                        <div>
                            <h6>
                                List user
                        </h6>
                        </div>
                        <div className="content-form">
                            <FormControl className="item-form">
                                <TextField placeholder="Search" InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <Tooltip title="Search">
                                            <SearchIcon />
                                        </Tooltip>
                                    </InputAdornment>,
                                }}>
                                </TextField>
                            </FormControl>
                            <div className="item-icon">
                                <Tooltip title="Add user">
                                    <ButtonBase data-toggle="modal" data-target="#myModalUser" style={{ outline: "none" }}>
                                        <AddBoxIcon />
                                    </ButtonBase>
                                </Tooltip>
                            </div>
                        </div>
                    </Toolbar>
                </Paper>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            Account
                        </div>
                        <div className="col-2">
                            Username
                        </div>
                        <div className="col-3">
                            Email
                        </div>
                        <div className="col-2">
                            Phone
                        </div>
                        <div className="col-1">
                            Password
                        </div>
                        <div className="col-1">
                            Type
                        </div>
                        <div className="col-1">
                            Action
                        </div>
                    </div>
                    {this.renderHtml()}
                </div>
                <ModalUsers />
            </div>
        )
    }
    componentDidMount() {
        this.props.getListUser()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListUser: () => {
            dispatch(callApi.actGetListUser())
        }
    }
}
const mapStateToProps = state => {
    return {
        listUser: state.usersReducers.listUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAdmin)



