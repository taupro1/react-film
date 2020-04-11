import React, { Component } from 'react'
import styled from "styled-components"
import variable from "../../scss/_variable.scss"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { connect } from "react-redux"
import * as actionApi from "../../redux/action/action-api/index"


const Content = styled.div`
    background-color:${variable.colorTwo};
    color:white;
    padding-top:7%
`
const Tiltle = styled.h4`
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    margin-bottom: 3%;
    padding-top: 2%;
`
const FormInput = styled.div`
    padding-bottom: 2%;
    width: 50%;
    margin: 0 auto;
`
const Label = styled.label`
    display:block;
`
const Input = styled.input`
    width: 100%;
    padding: 2%;
    border: none;
    line-height: 21px;
    border-radius: 7px;
    outline: none;
`
const DivTiltle = styled.div`
    width: 50%;
    margin: 0 auto;
`
const Submit = styled.button`
    padding: 2%;
    font-size: 164%;
    width: 100%;
    border-radius: 13px;
    border: none;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    cursor: pointer;
    background:${props => props.disabled ? variable.colorThree : variable.colorOne}
`
const Error = styled.div`
    color:red
`

class Register extends Component {
    constructor(props) {
        super(props)
        this.matKhauConfirmReset = React.createRef()
        this.state = {
            user: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "GP01",
                maLoaiNguoiDung: "KhachHang",
            },
            reset: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                matKhauConfirm: ""
            },
            error: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "GP01",
                maLoaiNguoiDung: "KhachHang",
                matKhauConfirm: ""
            },
            formValid: false,
            hoTenValid: false,
            taiKhoanValid: false,
            matKhauValid: false,
            emailValid: false,
            soDtValid: false,
            matKhauConfirmValid: false,
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.postUser(this.state.user, this.props.history)
        this.matKhauConfirmReset.current.value = ""
        this.setState({
            user: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "GP01",
                maLoaiNguoiDung: "KhachHang",
            },
            error: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "GP01",
                maLoaiNguoiDung: "KhachHang",
                matKhauConfirm: ""
            },
            formValid: false,
            hoTenValid: false,
            taiKhoanValid: false,
            matKhauValid: false,
            emailValid: false,
            soDtValid: false,
            matKhauConfirmValid: false,
        })

    }

    handleOnchange = event => {
        let { name, value } = event.target
        this.setState({
            user: { ...this.state.user, [name]: value }
        })
    }

    handleError = event => {
        let { name, value } = event.target;
        let status = value === "" ? "Vui lòng điền vào trường này" : "";
        let { hoTenValid, taiKhoanValid, matKhauValid, emailValid, soDtValid, matKhauConfirmValid } = this.state;
        switch (name) {
            case "taiKhoan":
                taiKhoanValid = status !== "" ? false : true;
                break;
            case "email":
                emailValid = status !== "" ? false : true;
                if (value !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/)) {
                    emailValid = false;
                    status = "Email chưa đúng định dạng"
                }
                break;
            case "hoTen":
                hoTenValid = status !== "" ? false : true;
                if (value !== "" && value.length < 4) {
                    hoTenValid = false;
                    status = "Tên quá ngắn"
                }
                break;
            case "soDt":
                soDtValid = status !== "" ? false : true;
                if (value !== "" && !value.match(/((09|03|07|08|05)+([0-9]{8})\b)/g)) {
                    soDtValid = false;
                    status = "Số điện thoại chưa đúng"
                }
                break;
            case "matKhau":
                matKhauValid = status !== "" ? false : true;
                if (value !== "" && !value.match(/^[A-Za-z]\w{7,14}$/)) {
                    matKhauValid = false;
                    status = "Mật khẩu phải có số, chữ in hoa, dài hơn 7 kí tự và ngắn hơn 14 kí tự"
                }
                break;
            case "matKhauConfirm":
                matKhauConfirmValid = status !== "" ? false : true;
                if (value !== "" && value !== this.state.user.matKhau) {
                    matKhauConfirmValid = false;
                    status = "Mật khẩu không trùng khớp"
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
            matKhauConfirmValid
        }, () => {
            this.validationForm()
        })
    }
    validationForm = () => {
        const { hoTenValid, taiKhoanValid, matKhauValid, emailValid, soDtValid, matKhauConfirmValid } = this.state;
        this.setState({
            formValid: hoTenValid && taiKhoanValid && matKhauValid && emailValid && soDtValid && matKhauConfirmValid
        })
    }
    render() {
        const { error, user } = this.state;
        return (
            <Content className="content-modal-register">
                <div className="register-header">
                    <Tiltle className="register-title">Đăng ký</Tiltle>
                </div>
                <div className="register-body register">
                    <form action className="form-login form-register">
                        <FormInput className="form-input">
                            <Label htmlFor="tenDangNhap">Tên đăng nhập</Label>
                            <Input type="text" name="taiKhoan" value={user.taiKhoan} onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} id="tenDangNhap" />
                            {
                                error.taiKhoan !== "" ? (<Error>{error.taiKhoan}</Error>) : ""
                            }
                        </FormInput>
                        <FormInput className="form-input">
                            <Label htmlFor="email-user">Email</Label>
                            <Input type="email" name="email" value={user.email} onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} id="email-user" />
                            {
                                error.email !== "" ? (<Error>{error.email}</Error>) : ""
                            }
                        </FormInput>
                        <FormInput className="form-input">
                            <Label htmlFor="tenNguoiDung">Họ và tên</Label>
                            <Input type="text" name="hoTen" value={user.hoTen} onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} id="tenNguoiDung" />
                            {
                                error.hoTen !== "" ? (<Error>{error.hoTen}</Error>) : ""
                            }
                        </FormInput>
                        <FormInput className="form-input">
                            <Label htmlFor="phone">Số điện thoại</Label>
                            <Input type="phone" name="soDt" value={user.soDt} onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} id="phone" />
                            {
                                error.soDt !== "" ? (<Error>{error.soDt}</Error>) : ""
                            }
                        </FormInput>
                        <FormInput className="form-input">
                            <Label htmlFor="password-user">Mật khẩu</Label>
                            <Input type="password" name="matKhau" value={user.matKhau} onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} id="password-user" />
                            {
                                error.matKhau !== "" ? (<Error>{error.matKhau}</Error>) : ""
                            }
                        </FormInput>
                        <FormInput className="form-input">
                            <Label htmlFor="password-confirm">Nhập lại mật khẩu</Label>
                            <Input type="password" ref={this.matKhauConfirmReset} name="matKhauConfirm" onBlur={this.handleError} onKeyUp={this.handleError} id="password-confirm" />
                            {
                                error.matKhauConfirm !== "" ? (<Error>{error.matKhauConfirm}</Error>) : ""
                            }
                        </FormInput>
                        <DivTiltle>
                            <Submit type="submit" onClick={this.handleSubmit} disabled={!this.state.formValid}>
                                Đăng kí
                        </Submit>
                        </DivTiltle>
                    </form>
                    <NotificationContainer />
                </div>
            </Content>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postUser: (data, history) => {
            dispatch(actionApi.actPostUserRegisterApi(data, history))
        }
    }
}

export default connect(null, mapDispatchToProps)(Register);


