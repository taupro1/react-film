import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField"
import styled from "styled-components"
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import CloseIcon from '@material-ui/icons/Close';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from "@material-ui/core/Button"
import { connect } from 'react-redux';
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


class ModalUploadHinh extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: {
                tenPhim: "",
                biDanh: "",
                trailer: "",
                hinhAnh: {},
                maNhom: "GP01",
            },
        }
    }
    handleSubmit = () => {
        console.log(this.state.movies);

        // this.props.editIsValidUser(true)
        this.props.uploadHinh(this.state.movies.hinhAnh)
    }
    handleOnchange = event => {
        console.log(event.target.files);

        // this.setState({
        //     movies: { ...this.state.movies, hinhAnh: event.target.files[0] }
        // })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.hinhUpload) {
            let { hinhUpload } = nextProps
            this.setState({
                movies: {
                    tenPhim: hinhUpload.tenPhim,
                    biDanh: hinhUpload.biDanh,
                    trailer: hinhUpload.trailer,
                    hinhAnh: {},
                    maNhom: "GP01",
                }
            })
        }
    }
    render() {
        const { movies } = this.state
        return (
            <div className="modal fade" id="modalUpload" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Upload hình</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <TextFieldContent onChange={this.handleOnchange} name="tenPhim" id="filled-basic" label="Tên phim" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent value={movies.biDanh} name="biDanh" id="filled-basic" label="Bí danh" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent value={movies.trailer} name="trailer" id="filled-basic" label="Trailer" variant="filled" />
                            </div>
                            <div>
                                <input
                                    name="hinhAnh"
                                    accept="image/*"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={this.handleOnchange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <ContentButton
                                variant="contained"
                                color="primary"
                                startIcon={<SystemUpdateIcon />}
                                onClick={this.handleSubmit}
                                data-dismiss="modal"
                            >
                                Upload
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        hinhUpload: state.moviesReducers.hinhUpload,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        uploadHinh: data => {
            dispatch(callApi.actUploadHinh(data))
        },
        editIsValidUser: data => {
            dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", data))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalUploadHinh)
