import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from "react-notifications"

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


class ModalUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            loaiNguoiDung: [
                {
                    type: "Quản trị",
                    value: "QuanTri"
                },
                {
                    type: "Khách hàng",
                    value: "KhachHang"
                }
            ],
            user: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "GP01",
                maLoaiNguoiDung: "",
            },
            error: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maLoaiNguoiDung: "",
            },
            formValid: false,
            hoTenValid: false,
            taiKhoanValid: false,
            matKhauValid: false,
            emailValid: false,
            soDtValid: false,
        }
    }

    // Validation form
    handleOnchange = event => {
        let { name, value } = event.target
        this.setState({
            user: { ...this.state.user, [name]: value }
        })
    }
    handleError = event => {
        let { name, value } = event.target;
        let status = value === "" ? "Please enter this field" : "";
        let { hoTenValid, taiKhoanValid, matKhauValid, emailValid, soDtValid } = this.state;
        switch (name) {
            case "taiKhoan":
                taiKhoanValid = status !== "" ? false : true;
                break;
            case "email":
                emailValid = status !== "" ? false : true;
                if (value !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/)) {
                    emailValid = false;
                    status = "Email is not correct"
                }
                break;
            case "hoTen":
                hoTenValid = status !== "" ? false : true;
                if (value !== "" && value.length < 4) {
                    hoTenValid = false;
                    status = "The name is too shot"
                }
                break;
            case "soDt":
                soDtValid = status !== "" ? false : true;
                if (value !== "" && !value.match(/((09|03|07|08|05)+([0-9]{8})\b)/g)) {
                    soDtValid = false;
                    status = "Phone number is not correct"
                }
                break;
            case "matKhau":
                matKhauValid = status !== "" ? false : true;
                if (value !== "" && !value.match(/^[A-Za-z]\w{7,14}$/)) {
                    matKhauValid = false;
                    status = "Password must have numbers, uppercase letters, be longer than 7 characters, and shorter than 14 characters"
                }
                break;
            default: break;
        }
        this.setState({
            error: { ...this.state.error, [name]: status },
            taiKhoanValid,
            hoTenValid,
            matKhauValid,
            emailValid,
            soDtValid,
        }, () => {
            this.validationForm()
        })
    }
    handleSubmit = () => {
        let user = { ...this.state.user, maNhom: "GP01" }
        this.setState({
            user
        }, () => { this.checkHandleSubmit() })
    }
    checkHandleSubmit = () => {
        if (this.props.userEdit) {
            this.props.editIsValidUser(true)
            this.props.editUserAdmin(this.state.user)
        }
        else {
            this.props.editIsValidUser(true)
            this.props.addUserAdmin(this.state.user)
        }
    }
    validationForm = () => {
        const { hoTenValid, taiKhoanValid, matKhauValid, emailValid, soDtValid } = this.state;
        this.setState({
            formValid: hoTenValid && taiKhoanValid && matKhauValid && emailValid && soDtValid
        })
    }
    handleOnclickClose = () => {
        this.setState({
            user: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "",
                maLoaiNguoiDung: "",
            },
            error: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "",
                maLoaiNguoiDung: "",
            },
            formValid: false,
            hoTenValid: false,
            taiKhoanValid: false,
            matKhauValid: false,
            emailValid: false,
            soDtValid: false,
            maNhom: false,
        })
    }
    handleDisabled = () => {
        if (this.props.userEdit) {
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
        if (nextProps && nextProps.userEdit) {
            const { userEdit } = nextProps;
            this.setState({
                user: userEdit
            })
        }
        if (nextProps && !nextProps.userEdit) {
            this.setState({
                user:
                {
                    hoTen: "",
                    taiKhoan: "",
                    matKhau: "",
                    email: "",
                    soDt: "",
                    maNhom: "GP01",
                    maLoaiNguoiDung: "",
                },

            })
        }

    }
    render() {
        const { error, user, formValid } = this.state;
        return (
            <div id="myModalUser" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.userEdit ? "Edit user" : "Add user"}</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <TextFieldContent value={user.taiKhoan} name="taiKhoan" onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} error={error.taiKhoan !== "" ? true : false} helperText={error.taiKhoan !== "" ? error.taiKhoan : " "} id="filled-basic" label="Account" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent value={user.hoTen} name="hoTen" onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} error={error.hoTen !== "" ? true : false} helperText={error.hoTen !== "" ? error.hoTen : " "} id="filled-basic" label="Username" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent value={user.email} name="email" onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} error={error.email !== "" ? true : false} helperText={error.email !== "" ? error.email : " "} id="filled-basic" label="Email" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent value={user.soDt} name="soDt" onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} error={error.soDt !== "" ? true : false} helperText={error.soDt !== "" ? error.soDt : " "} id="filled-basic" label="Phone number" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent type="password" value={user.matKhau} name="matKhau" onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} error={error.matKhau !== "" ? true : false} helperText={error.matKhau !== "" ? error.matKhau : " "} id="filled-basic" label="Password" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent
                                    value={user.maLoaiNguoiDung}
                                    name="maLoaiNguoiDung"
                                    id="standard-select-currency-native"
                                    select
                                    label="Type user"
                                    onChange={this.handleOnchange}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    helperText="Please select your currency"
                                >
                                    {this.state.loaiNguoiDung.map((option, index) => (
                                        <option key={index} value={option.value}>
                                            {option.type}
                                        </option>
                                    ))}
                                </TextFieldContent>
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
                                {this.props.userEdit ? "Update" : "Add"}
                            </ContentButton>
                            <ContentButton
                                variant="contained"
                                color="secondary"
                                startIcon={<CloseIcon />}
                                data-dismiss="modal"
                                onClick={this.handleOnclickClose}
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
        editUserAdmin: data => {
            dispatch(callApi.actEditUser(data))
        },
        addUserAdmin: data => {
            dispatch(callApi.actAddUser(data))
        },
        editIsValidUser: data => {
            dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", data))
        }
    }
}

const mapStateToProps = state => {
    return {
        userEdit: state.usersReducers.userEdit,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalUsers);
