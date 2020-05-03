import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import CloseIcon from '@material-ui/icons/Close';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from "react-notifications"
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import * as callApi from "../../../redux/action/action-api/index"
import * as action from "../../../redux/action/action-redux/index"

const TextFieldContent = styled(TextField)`
    width:100%;
    margin-bottom:5%
`
const ContentButton = styled(Button)`
    outline: none;
    margin-right: 2%;
`
const DateDiv = styled.div`
    margin-bottom:10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`


class ModalMovies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: {
                maPhim: 0,
                tenPhim: "",
                biDanh: "",
                trailer: "",
                hinhAnh: "",
                moTa: "",
                ngayKhoiChieu: new Date("2019-08-18T19:00:00"),
                danhGia: 0,
                maNhom: "GP01",
            },
            error: {
                maPhim: "",
                tenPhim: "",
                biDanh: "",
                trailer: "",
                moTa: "",
                danhGia: "",
            },
            formValid: false,
            maPhimValid: false,
            tenPhimValid: false,
            biDanhValid: false,
            trailerValid: false,
            moTaValid: false,
            danhGiaValid: false
        }
    }

    // Validation form
    handleOnchangeDate = date => {
        this.setState({
            movies: {
                ...this.state.movies, ngayKhoiChieu: date
            }
        })

    }
    handleOnchange = event => {
        let { name, value } = event.target
        this.setState({
            movies: { ...this.state.movies, [name]: value }
        })
    }
    handleError = event => {
        let { name, value } = event.target;
        let status = value === "" ? "Vui lòng điền vào chỗ trống" : "";
        let { maPhimValid, tenPhimValid, biDanhValid, trailerValid, moTaValid, danhGiaValid } = this.state;
        switch (name) {
            case "maPhim":
                maPhimValid = status !== "" ? false : true;
                if (value !== "" && isNaN(value)) {
                    maPhimValid = false;
                    status = "Mã phim phải là số"
                }
                break;
            case "tenPhim":
                tenPhimValid = status !== "" ? false : true;
                if (value !== "" && !isNaN(value)) {
                    tenPhimValid = false;
                    status = "Tên phim phải là chữ"
                }
                break;
            case "biDanh":
                biDanhValid = status !== "" ? false : true;
                if (value !== "" && !isNaN(value)) {
                    biDanhValid = false;
                    status = "Tên phim phải là chữ"
                }
                break;
            case "trailer":
                trailerValid = status !== "" ? false : true;
                if (value !== "" && !value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {
                    trailerValid = false;
                    status = "Đường link không tồn tại"
                }
                break;
            case "moTa":
                moTaValid = status !== "" ? false : true;
                break;
            case "danhGia":
                danhGiaValid = status !== "" ? false : true;
                if (value !== "" && isNaN(value)) {
                    danhGiaValid = false;
                    status = "Đánh giá phải là số"
                }
                break;
            default: break;
        }
        this.setState({
            error: { ...this.state.error, [name]: status },
            tenPhimValid,
            maPhimValid,
            biDanhValid,
            trailerValid,
            moTaValid,
            danhGiaValid
        }, () => {
            this.validationForm()
        })
    }
    handleSubmit = () => {
        let movies = { ...this.state.movies, maPhim: Number(this.state.movies.maPhim), danhGia: Number(this.state.movies.danhGia) };
        this.setState({
            movies
        }, this.checkHandleSubmit)
    }
    checkZero = data => {
        if (data.length === 1) {
            data = "0" + data
        }
        return data
    }
    checkHandleSubmit = () => {
        const { movies } = this.state
        let day = movies.ngayKhoiChieu.getDate() + "";
        let month = (movies.ngayKhoiChieu.getMonth() + 1) + "";
        let year = movies.ngayKhoiChieu.getFullYear() + "";
        day = this.checkZero(day);
        month = this.checkZero(month);
        year = this.checkZero(year);
        let ngayKhoiChieu = day + "-" + month + "-" + year
        let listMovies = { ...movies, ngayKhoiChieu: ngayKhoiChieu }
        if (this.props.moviesEdit) {
            this.props.editIsValidUser(true)
            this.props.editMoviesAdmin(listMovies)
        }
        if (!this.props.moviesEdit) {
            this.props.editIsValidUser(true)
            this.props.addMoviesAdmin(listMovies)
        }
    }
    validationForm = () => {
        const { maPhimValid, tenPhimValid, biDanhValid, trailerValid, moTaValid, danhGiaValid } = this.state;
        this.setState({
            formValid: maPhimValid && tenPhimValid && biDanhValid && trailerValid && moTaValid && danhGiaValid
        })
    }
    handleDisabled = () => {
        if (this.props.moviesEdit) {
            return false
        }
        else {
            if (!this.state.formValid) {
                return true
            }
            return false
        }
    }

    //Edit form
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.moviesEdit) {
            const { moviesEdit } = nextProps;
            let ngayKhoiChieu = new Date(moviesEdit.ngayKhoiChieu)
            this.setState({
                movies: { ...moviesEdit, ngayKhoiChieu }
            })
        }
        if (nextProps && !nextProps.moviesEdit) {
            this.setState({
                movies: {
                    maPhim: 0,
                    tenPhim: "",
                    biDanh: "",
                    trailer: "",
                    hinhAnh: "",
                    ngayKhoiChieu: new Date("2019-08-18T19:00:00"),
                    danhGia: 0,
                    maNhom: "GP01",
                    moTa: ""
                },
            })
        }

    }
    render() {
        const { error, movies } = this.state;
        return (
            <div id="myModalMovies" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.moviesEdit ? "Edit movie" : "Add movie"}</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <TextFieldContent value={movies.maPhim} name="maPhim" onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} error={error.maPhim !== "" ? true : false} helperText={error.maPhim !== "" ? error.maPhim : " "} id="filled-basic" label="Mã phim" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent value={movies.tenPhim} name="tenPhim" onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} error={error.tenPhim !== "" ? true : false} helperText={error.tenPhim !== "" ? error.tenPhim : " "} id="filled-basic" label="Tên phim" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent value={movies.biDanh} name="biDanh" onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} error={error.biDanh !== "" ? true : false} helperText={error.biDanh !== "" ? error.biDanh : " "} id="filled-basic" label="Bí danh" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent value={movies.trailer} name="trailer" onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} error={error.trailer !== "" ? true : false} helperText={error.trailer !== "" ? error.trailer : " "} id="filled-basic" label="Trailer" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent value={movies.moTa} name="moTa" onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} error={error.moTa !== "" ? true : false} helperText={error.moTa !== "" ? error.moTa : " "} id="filled-basic" label="Mô tả" variant="filled" />
                            </div>
                            <DateDiv>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container className="w-50" justify="space-around">
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="dd/MM/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Ngày chiếu"
                                            value={movies.ngayKhoiChieu}
                                            onChange={this.handleOnchangeDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                                <div>
                                    <input
                                        name="hinhAnh"
                                        accept="image/*"
                                        id="contained-button-file"
                                        multiple
                                        style={{ display: "none" }}
                                        type="file"
                                        value={this.state.hinhAnh}
                                        onChange={this.handleOnchange}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button style={{ fontSize: "11px" }} color="default" component="span" startIcon={<CloudUploadIcon />}>
                                            Upload hình
        </Button>
                                    </label>
                                </div>
                            </DateDiv>
                            <div>
                                <TextFieldContent value={movies.danhGia} name="danhGia" onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} error={error.danhGia !== "" ? true : false} helperText={error.danhGia !== "" ? error.danhGia : " "} id="filled-basic" label="Đánh giá" variant="filled" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <ContentButton
                                variant="contained"
                                color="primary"
                                startIcon={<SystemUpdateIcon />}
                                disabled={this.handleDisabled()}
                                onClick={this.handleSubmit}
                                data-dismiss="modal"
                            >
                                {this.props.moviesEdit ? "Update" : "Add"}
                            </ContentButton>
                            <ContentButton
                                variant="contained"
                                color="secondary"
                                startIcon={<CloseIcon />}
                                data-dismiss="modal"
                            >
                                Close
      </ContentButton>
                        </div>
                    </div>
                </div>
                <NotificationContainer />
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        editMoviesAdmin: data => {
            dispatch(callApi.actEditMovieAdmin(data))
        },
        addMoviesAdmin: data => {
            dispatch(callApi.actAddMovieAdmin(data))
        },
        editIsValidUser: data => {
            dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", data))
        },
    }
}

const mapStateToProps = state => {
    return {
        moviesEdit: state.moviesReducers.moviesEdit,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalMovies);