import React, { Component } from 'react'
import LottieAnimation from "../../../animation/index"
import { Fragment } from "react"
import * as callApi from "../../../redux/action/action-api/index"
import * as action from "../../../redux/action/action-redux/index"

import Table from "@material-ui/core/Table"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"

import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TextField from '@material-ui/core/TextField';
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button"
import ModalMovies from "./modalMovies"
import ModalUploadHinh from "./modalUploadHinh"

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


import Paper from '@material-ui/core/Paper';
import { Toolbar, FormControl, InputAdornment, ButtonBase, TableBody, TableCell } from '@material-ui/core';
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import { connect } from 'react-redux'

class MoviesAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: "",

        }
    }
    renderTable = item => {
        return (
            <Fragment>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        Mã phim
                </TableCell>
                    <TableCell className="chi-tiet-item" >
                        {item.maPhim}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        Bí danh
                 </TableCell>
                    <TableCell className="chi-tiet-item" >
                        {item.biDanh}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        Trailer
             </TableCell>
                    <TableCell className="chi-tiet-item" >
                        {item.trailer}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        Mô tả
          </TableCell>
                    <TableCell className="chi-tiet-item" >
                        {item.moTa}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        Mã nhóm
       </TableCell>
                    <TableCell className="chi-tiet-item" >
                        {item.maNhom}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        Ngày khởi chiếu
    </TableCell>
                    <TableCell className="chi-tiet-item" >
                        {item.ngayKhoiChieu}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        Đánh giá
 </TableCell>
                    <TableCell className="chi-tiet-item" >
                        {item.danhGia}
                    </TableCell>
                </TableRow>
            </Fragment>
        )
    }
    renderListUser = () => {
        let { listMovies } = this.props
        if (listMovies.length !== 0) {
            listMovies = listMovies.filter(item => {
                return item.tenPhim.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1
            })
            return listMovies.map((item, index) => {
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
                                        Chi tiết phim
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
                            {item.tenPhim}
                        </div>
                        <div className="col-sm-3 item item-img">
                            <img src={item.hinhAnh} />
                        </div>
                        <div className="col-sm-3 item">
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                className="btn-action"
                                onClick={() => {
                                    this.props.editIsValidUser(true)
                                    this.props.deleteMovies(item.maPhim)
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
                                data-target="#myModalMovies"
                                onClick={() => this.props.editMoviesEdit(item)}
                            >
                                Edit
                            </Button>
                            <Button style={{ fontSize: "11px", marginTop: "5%" }} onClick={() => this.props.editUploadHinh(item)} data-toggle="modal" data-target="#modalUpload" variant="contained" color="default" startIcon={<CloudUploadIcon />}>
                                Upload hình
        </Button>
                        </div>
                    </div >

                )
            })
        }
    }
    renderHtml = () => {
        return this.props.isValidUser ?
            <LottieAnimation />
            :
            <div className="movies-admin">
                <Paper className="content-search">
                    <Toolbar className="toolbar">
                        <div>
                            <h6>
                                List movies
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
                                <Tooltip title="Add movie">
                                    <ButtonBase onClick={() => this.props.editMoviesEdit(null)} data-toggle="modal" data-target="#myModalMovies" style={{ outline: "none" }}>
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
                                Tên phim
                        </div>
                            <div className="col-sm-3">
                                Hình ảnh
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
                <ModalMovies />
                <ModalUploadHinh />
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
        this.props.getListMovie()
    }
    componentWillUnmount() {
        this.props.editIsValidUser(true);
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListMovie: () => {
            dispatch(callApi.actGetListFilmApi())
        },
        editMoviesEdit: data => {
            dispatch(action.actGetListMovie("EDIT-MOVIES-EDIT", data))
        },
        editIsValidUser: data => {
            dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", data))
        },
        deleteMovies: data => {
            dispatch(callApi.actDeleteMoviesAdmin(data))
        },
        editUploadHinh: data => {
            dispatch(action.actGetListMovie("EDIT-UPLOAD-HINH", data))
        }
    }
}
const mapStateToProps = state => {
    return {
        listMovies: state.moviesReducers.listMovies,
        isValidUser: state.usersReducers.isValidUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviesAdmin)
