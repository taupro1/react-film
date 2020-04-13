import React, { Component } from 'react'
import variable from "../../scss/_variable.scss"
import styled from "styled-components"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Link } from "react-router-dom"
import * as callApi from "../../redux/action/callAPI/index"
import { connect } from "react-redux";

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
    padding-bottom:2%;
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
`
const SubmitLogin = styled(Submit)`
    background:${props => props.disabled ? variable.colorThree : variable.colorOne}
`
const SubmitRegister = styled(Submit)`
    background:${variable.colorThree};
    &:hover{
        background:${variable.colorOne};
        transition:all .3s;
    }
`
const RegisterLink = styled(Link)`
    color:white;
    &:hover{
        text-decoration:none;
        color:white;
    }
`

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "none",
            isValid: true,
            user: {
                taiKhoan: "",
                matKhau: ""
            },
        }
    }
    handleOnchage = event => {
        let { name, value } = event.target;
        this.setState({
            user: { ...this.state.user, [name]: value }
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        callApi.callApiQuanLyNguoiDung("POST", `DangNhap`, this.state.user)
            .then((rs) => {
                NotificationManager.success("Login success")
                localStorage.setItem("login", JSON.stringify(rs.data));
                this.props.editStatusLogin(true);
                this.setState({
                    display: "none"
                })
            })
            .catch((er) => {
                NotificationManager.error(er.response.data)
            })
        this.setState({
            user: {
                taiKhoan: "",
                matKhau: ""
            }
        })

    }
    render() {
        const { display, user } = this.state
        return (
            <Content className="content-modal-register">
                <div className="register-header">
                    <Tiltle className="register-title">Đăng nhập</Tiltle>
                </div>
                <div className="register-body register">
                    <form action className="form-login form-register">
                        <FormInput className="form-input">
                            <Label htmlFor="tenDangNhap">Tài khoản</Label>
                            <Input type="text" value={user.taiKhoan} name="taiKhoan" onChange={this.handleOnchange} id="tenDangNhap" />
                        </FormInput>
                        <FormInput className="form-input">
                            <Label htmlFor="email-user">Mật khẩu</Label>
                            <Input type="email" value={user.matKhau} name="email" onChange={this.handleOnchange} id="email-user" />
                        </FormInput>
                        <DivTiltle>
                            <SubmitLogin type="submit" onClick={this.handleSubmit} disabled={!this.state.formValid}>
                                Đăng nhập
                    </SubmitLogin>
                        </DivTiltle>
                        <DivTiltle>
                            <SubmitRegister>
                                <RegisterLink to="/register">
                                    Đăng ký
                                </RegisterLink>
                            </SubmitRegister>
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
        editStatusLogin: data => {
            let action = {
                type: "EDIT-STATUS-LOGIN",
                data
            }
            dispatch(action)
        },
    }
}
export default connect(null, mapDispatchToProps)(Login)
