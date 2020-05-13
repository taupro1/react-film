import React, { Component } from 'react'
import LottieAnimation from "../../../animation/index"
import { Fragment } from "react"
import * as callApi from "../../../redux/action/action-api/index"
import * as action from "../../../redux/action/action-redux/index"
import SnowStorm from 'react-snowstorm';

import Table from "@material-ui/core/Table"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TextField from '@material-ui/core/TextField';
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button"
import ModalMovies from "./modalMovies"
import ModalUploadHinh from "./modalUploadHinh"
import { Typography, Box } from "@material-ui/core";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


import Paper from '@material-ui/core/Paper';
import { Toolbar, FormControl, InputAdornment, TableBody, TableCell } from '@material-ui/core';
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
                        <Typography variant="subtitle1">
                            Mã phim
                        </Typography>
                    </TableCell>
                    <TableCell className="chi-tiet-item" >
                        <Typography variant="body2">
                            {item.maPhim}
                        </Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        <Typography variant="subtitle1">
                            Bí danh
                        </Typography>
                    </TableCell>
                    <TableCell className="chi-tiet-item" >
                        <Typography variant="body2">
                            {item.biDanh}
                        </Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        <Typography variant="subtitle1">
                            Trailer
                        </Typography>
                    </TableCell>
                    <TableCell className="chi-tiet-item" >
                        <Typography variant="body2">
                            {item.trailer}
                        </Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        <Typography variant="subtitle1">
                            Mô tả
                        </Typography>
                    </TableCell>
                    <TableCell className="chi-tiet-item" >
                        <Typography variant="body2">
                            {item.moTa}
                        </Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        <Typography variant="subtitle1">
                            Mã nhóm
                        </Typography>
                    </TableCell>
                    <TableCell className="chi-tiet-item" >
                        <Typography variant="body2">
                            {item.maNhom}
                        </Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        <Typography variant="subtitle1">
                            Ngày khởi chiếu
                        </Typography>
                    </TableCell>
                    <TableCell className="chi-tiet-item" >
                        <Typography variant="body2">
                            {item.ngayKhoiChieu}
                        </Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="chi-tiet" >
                        <Typography variant="subtitle1">
                            Đánh giá
                        </Typography>
                    </TableCell>
                    <TableCell className="chi-tiet-item" >
                        <Typography variant="body2">
                            {item.danhGia}
                        </Typography>
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
                                    <Button variant="contained" startIcon={<InfoIcon />}>
                                        <Typography variant="button">
                                            Chi tiết phim
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
                                {item.tenPhim}
                            </Typography>
                        </div>
                        <div className="col-sm-3 item item-img">
                            <img alt="Lỗi hình" src={item.hinhAnh} />
                        </div>
                        <div className="col-sm-3 item">
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                onClick={() => {
                                    this.props.editIsValidUser(true)
                                    this.props.deleteMovies(item.maPhim)
                                }}
                            >
                                Delete
              </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<EditIcon />}
                                data-toggle="modal"
                                data-target="#myModalMovies"
                                onClick={() => this.props.editMoviesEdit(item)}
                            >
                                Edit
                            </Button>
                            <Button onClick={() => this.props.editUploadHinh(item)} data-toggle="modal" data-target="#modalUpload" variant="contained" color="default" startIcon={<CloudUploadIcon />}>
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
                <SnowStorm />
                <div className="overplay"></div>
                <div className="content-movie">
                    <Paper id="movie-search">
                        <Toolbar className="toolbar">
                            <div>
                                <Typography variant="h5">
                                    <Box fontWeight="fontWeightBold">
                                        Danh sách phim
                                </Box>
                                </Typography>
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
                                        <Button variant="contained" startIcon={<AddBoxIcon />} onClick={() => this.props.editMoviesEdit(null)} data-toggle="modal" data-target="#myModalMovies" style={{ outline: "none" }}>
                                            <Typography variant="button">
                                                Thêm phim
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
                                            Tên phim
                                    </Box>
                                    </Typography>
                                </div>
                                <div className="col-sm-3">
                                    <Typography variant="subtitle1">
                                        <Box fontWeight="fontWeightBold">
                                            Hình ảnh
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
                    <ModalMovies />
                    <ModalUploadHinh />
                </div>
            </div>
    }
    scrollHeaderMovie = event => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("movie-search").classList.add("header-movie-animation")
        }
        else {
            document.getElementById("movie-search").classList.remove("header-movie-animation")
        }
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
        window.removeEventListener('scroll', this.scrollHeaderMovie)
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
