import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import InfoIcon from '@material-ui/icons/Info';
import TextField from '@material-ui/core/TextField';
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from '@material-ui/icons/Delete';
import ModalUsers from "./modalUsers"

import { Typography, Box } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { Toolbar, FormControl, InputAdornment, Button } from '@material-ui/core';
import Table from "@material-ui/core/Table"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"
import { TableCell, TableBody } from "@material-ui/core"

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import * as callApi from "../../../redux/action/action-api/index"
import * as action from "../../../redux/action/action-redux/index"
import { connect } from 'react-redux';
import LottieAnimation from "../../../animation/index"
import { Fragment } from "react"
import SnowStorm from 'react-snowstorm';


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
                                    <Button variant="contained" startIcon={<InfoIcon />}>
                                        <Typography variant="button">
                                            Chi tiết người dùng
                                        </Typography>
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
                            <Typography variant="subtitle1">
                                {item.hoTen}
                            </Typography>
                        </div>
                        <div className="col-sm-3 item item-tiltle">
                            <Typography variant="subtitle1">
                                {item.maLoaiNguoiDung}
                            </Typography>
                        </div>
                        <div className="col-sm-3 item">
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                onClick={() => {
                                    this.props.editIsValidUser(true)
                                    this.props.deleteUser(item.taiKhoan)
                                }}
                            >
                                <Typography variant="button">
                                    Delete
                                </Typography>
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<EditIcon />}
                                data-toggle="modal"
                                data-target="#myModalUser"
                                onClick={() => this.props.editUserEdit(item)}
                            >
                                <Typography variant="button">
                                    Edit
                               </Typography>
                            </Button>
                        </div>
                    </div>
                )
            })
        }
    }
    setTime = () => {

    }
    renderHtml = () => {
        return this.props.isValidUser ?
            <LottieAnimation />
            :
            <div className="user-admin">
                <SnowStorm />
                <div className="overplay"></div>
                <div className="content-user-bg">
                    <Paper id="user-search">
                        <Toolbar className="toolbar">
                            <div>
                                <Typography style={{ color: "white" }} variant="h5">
                                    <Box fontWeight="fontWeightBold">
                                        Danh sách người dùng
                                </Box>
                                </Typography>
                            </div>
                            <div className="content-form">
                                <FormControl className="item-form">
                                    <TextField onChange={e => this.setState({ keyword: e.target.value })} placeholder="Search" InputProps={{
                                        startAdornment: <InputAdornment style={{ color: "white" }} position="start">
                                            <Tooltip title="Search">
                                                <SearchIcon style={{ color: "white" }} />
                                            </Tooltip>
                                        </InputAdornment>,
                                    }}>
                                    </TextField>
                                </FormControl>
                                <div className="item-icon">
                                    <Tooltip title="Add user">
                                        <Button variant="contained" startIcon={<AddBoxIcon />} onClick={() => this.handleOnclickEdit(null)} data-toggle="modal" data-target="#myModalUser" style={{ outline: "none" }}>
                                            <Typography variant="button">
                                                Thêm người dùng
                                        </Typography>
                                        </Button>
                                    </Tooltip>
                                </div>
                            </div>
                        </Toolbar>
                        <div>
                            <div className="row tiltle-user">
                                <div className="col-sm-3">
                                    <Typography variant="subtitle1">
                                        <Box fontWeight="fontWeightBold">
                                            Chi tiết
                                    </Box>
                                    </Typography>
                                </div>
                                <div className="col-sm-3">
                                    <Typography variant="subtitle1">
                                        <Box fontWeight="fontWeightBold">
                                            Họ tên
                                    </Box>
                                    </Typography>
                                </div>
                                <div className="col-sm-3">
                                    <Typography variant="subtitle1">
                                        <Box fontWeight="fontWeightBold">
                                            Loại người dùng
                                    </Box>
                                    </Typography>
                                </div>
                                <div className="col-sm-3">
                                    <Typography variant="subtitle1">
                                        <Box fontWeight="fontWeightBold">
                                            Action
                                    </Box>
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Paper>
                    <div className="content-user">
                        {this.renderListUser()}
                    </div>
                    {/* <ModalUsers /> */}
                </div>
            </div>
    }
    render() {
        return (
            <Fragment>
                {this.renderHtml()}
            </Fragment>
        )
    }
    scrollHeaderUser = event => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("user-search").classList.add("header-user-animation")
        }
        else {
            document.getElementById("user-search").classList.remove("header-user-animation")
        }
    }
    componentDidMount() {
        this.props.getListUser()
    }
    componentWillUnmount() {
        // window.removeEventListener('scroll', this.scrollHeaderUser)
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



