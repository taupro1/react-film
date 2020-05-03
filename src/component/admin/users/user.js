import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TextField from '@material-ui/core/TextField';
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from '@material-ui/icons/Delete';
import ModalUsers from "./modalUsers"

import Paper from '@material-ui/core/Paper';
import { Toolbar, FormControl, InputAdornment, ButtonBase } from '@material-ui/core';
import Table from "@material-ui/core/Table"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"
import { TableCell, Button, TableBody } from "@material-ui/core"

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import * as callApi from "../../../redux/action/action-api/index"
import * as action from "../../../redux/action/action-redux/index"
import { connect } from 'react-redux';
import LottieAnimation from "../../../animation/index"
import { Fragment } from "react"

class UserAdmin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: ""
        }
    }

    handleOnclickEdit = data => {
        this.props.editUserEdit(data)
    }
    renderTable = item => {
        return (
            <Fragment>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        Tài khoản
                </TableCell>
                    <TableCell className="chi-tiet-item" >
                        {item.taiKhoan}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        Email
                 </TableCell>
                    <TableCell className="chi-tiet-item" >
                        {item.email}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        Số điện thoại
             </TableCell>
                    <TableCell className="chi-tiet-item" >
                        {item.soDt}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        Mật khẩu
          </TableCell>
                    <TableCell className="chi-tiet-item" >
                        {item.matKhau}
                    </TableCell>
                </TableRow>
            </Fragment>
        )
    }
    renderListUser = () => {
        let { listUser } = this.props;
        if (listUser.length !== 0) {
            listUser = listUser.filter(item => {
                return item.taiKhoan.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1
            })
            return listUser.map((item, index) => {
                return (
                    <div className="row item-user" key={index}>
                        <div className="col-sm-3 item item-chi-tiet">
                            <ExpansionPanel className="content-chi-tiet">
                                <ExpansionPanelSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className="btn-chi-tiet"
                                >
                                    <Button variant="contained" color="primary">
                                        Chi tiết người dùng
                                    </Button>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className="list-chi-tiet">
                                    <TableContainer>
                                        <Table>
                                            <TableBody>
                                                {this.renderTable(item)}

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                        <div className="col-sm-3 item item-tiltle">
                            {item.hoTen}
                        </div>
                        <div className="col-sm-3 item item-tiltle">
                            {item.maLoaiNguoiDung}
                        </div>
                        <div className="col-sm-3 item">
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                className="btn-action"
                                onClick={() => {
                                    this.props.editIsValidUser(true)
                                    this.props.deleteUser(item.taiKhoan)
                                }}
                            >
                                Delete
              </Button>
                            <Button
                                className="btn-action"
                                variant="contained"
                                color="primary"
                                endIcon={<EditIcon />}
                                data-toggle="modal"
                                data-target="#myModalUser"
                                onClick={() => this.props.editUserEdit(item)}
                            >
                                Edit
              </Button>
                        </div>
                    </div>
                )
            })
        }
    }
    renderHtml = () => {
        return this.props.isValidUser ?
            <LottieAnimation />
            :
            <div className="user-admin">
                <Paper className="content-search">
                    <Toolbar className="toolbar">
                        <div>
                            <h6>
                                List user
                        </h6>
                        </div>
                        <div className="content-form">
                            <FormControl className="item-form">
                                <TextField onChange={e => this.setState({ keyword: e.target.value })} placeholder="Search" InputProps={{
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
                                    <ButtonBase onClick={() => this.handleOnclickEdit(null)} data-toggle="modal" data-target="#myModalUser" style={{ outline: "none" }}>
                                        <AddBoxIcon />
                                    </ButtonBase>
                                </Tooltip>
                            </div>
                        </div>
                    </Toolbar>
                    <div>
                        <div className="row tiltle-user">
                            <div className="col-sm-3">
                                Chi tiết
                        </div>
                            <div className="col-sm-3">
                                Họ tên
                        </div>
                            <div className="col-sm-3">
                                Loại người dùng
                        </div>
                            <div className="col-sm-3">
                                Action
                        </div>
                        </div>
                    </div>
                </Paper>
                <div className="content-user">
                    {this.renderListUser()}
                </div>
                <ModalUsers />
            </div>
    }
    render() {
        return (
            <Fragment>
                {this.renderHtml()}
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getListUser()
    }
    componentWillUnmount() {
        this.props.editIsValidUser(true)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListUser: () => {
            dispatch(callApi.actGetListUser())
        },
        editUserEdit: data => {
            dispatch(action.actGetUser("EDIT-USER-EDIT", data))
        },
        deleteUser: data => {
            dispatch(callApi.actDeleteUser(data))
        },
        editIsValidUser: data => {
            dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", data))
        }
    }
}
const mapStateToProps = state => {
    return {
        listUser: state.usersReducers.listUser,
        isValidUser: state.usersReducers.isValidUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAdmin)


