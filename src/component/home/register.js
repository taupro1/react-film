import React, { useState } from 'react'
import styled from "styled-components"
import variable from "../../scss/_variable.scss"


const Content = styled.div`
    background-color:${variable.colorTwo};
    color:white
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
    background: ${variable.colorThree};
    border: none;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    cursor: pointer;
    &:hover {
    background: ${variable.colorOne};
    transition: ease-in-out 0.2s;
    }
`


export default function Register() {
    const [user, setUser] = useState({
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        matKhauConfirm: ""
    })
    const [error, setError] = useState({
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        matKhauConfirm: ""
    })
    const [valid, setValid] = useState({
        formValid: false,
        hoTenValid: false,
        taiKhoanValid: false,
        matKhauValid: false,
        emailValid: false,
        soDtValid: false,
        matKhauConfirmValid: false,
    })

    const handleOnchange = event => {
        let { name, value } = event.target;
        setUser({
            [name]: value
        })
    }
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     this.props.postUser(this.state.user)
    //     NotificationManager.success("Đăng kí thành công");
    //     this.setState({
    //         user: {
    //             hoTen: "",
    //             taiKhoan: "",
    //             matKhau: "",
    //             email: "",
    //             soDt: "",
    //             maNhom: "GP01",
    //             maLoaiNguoiDung: "KhachHang",
    //             matKhauConfirm: ""
    //         },
    //     })
    // }

    const handleError = event => {
        let { name, value } = event.target;
        let status = value === "" ? "Vui lòng điền vào trường này" : "";
        let { hoTenValid, taiKhoanValid, matKhauValid, emailValid, soDtValid, matKhauConfirmValid } = valid;
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
                if (value !== "" && value !== user.matKhau) {
                    matKhauConfirmValid = false;
                    status = "Mật khẩu không trùng khớp"
                }
                break;
            default: break;
        }
        setError({
            [name]: status
        })
        setValid({
            taiKhoanValid,
            hoTenValid,
            matKhauValid,
            emailValid,
            soDtValid,
            matKhauConfirmValid
        }, () => { validationForm() })
    }
    const validationForm = () => {
        const { hoTenValid, taiKhoanValid, matKhauValid, emailValid, soDtValid, matKhauConfirmValid } = valid;
        setValid({
            formValid: hoTenValid && taiKhoanValid && matKhauValid && emailValid && soDtValid && matKhauConfirmValid
        })
    }
    return (
        <Content className="content-modal-register">
            <div className="register-header">
                <Tiltle className="register-title">Đăng ký</Tiltle>
            </div>
            <div className="register-body register">
                <form action className="form-login form-register">
                    <FormInput className="form-input">
                        <Label htmlFor="tenDangNhap">Tên đăng nhập</Label>
                        <Input type="text" name="taiKhoan" value={user.taiKhoan} onChange={handleOnchange} onBlur={handleError} onKeyUp={handleError} id="tenDangNhap" />
                        {
                            error.taiKhoan !== "" ? (<div className="error">{error.taiKhoan}</div>) : ""
                        }
                    </FormInput>
                    <FormInput className="form-input">
                        <Label htmlFor="email-user">Email</Label>
                        <Input type="email" name="email" value={user.email} onChange={handleOnchange} onBlur={handleError} onKeyUp={handleError} id="email-user" />
                        {
                            error.email !== "" ? (<div className="error">{error.email}</div>) : ""
                        }
                    </FormInput>
                    <FormInput className="form-input">
                        <Label htmlFor="tenNguoiDung">Họ và tên</Label>
                        <Input type="text" name="hoTen" value={user.hoTen} onChange={handleOnchange} onBlur={handleError} onKeyUp={handleError} id="tenNguoiDung" />
                        {
                            error.hoTen !== "" ? (<div className="error">{error.hoTen}</div>) : ""
                        }
                    </FormInput>
                    <FormInput className="form-input">
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input type="phone" name="soDt" value={user.soDt} onChange={handleOnchange} onBlur={handleError} onKeyUp={handleError} id="phone" />
                        {
                            error.soDt !== "" ? (<div className="error">{error.soDt}</div>) : ""
                        }
                    </FormInput>
                    <FormInput className="form-input">
                        <Label htmlFor="password-user">Mật khẩu</Label>
                        <Input type="password" name="matKhau" value={user.matKhau} onChange={handleOnchange} onBlur={handleError} onKeyUp={handleError} id="password-user" />
                        {
                            error.matKhau !== "" ? (<div className="error">{error.matKhau}</div>) : ""
                        }
                    </FormInput>
                    <FormInput className="form-input">
                        <Label htmlFor="password-confirm">Nhập lại mật khẩu</Label>
                        <Input type="password" value={user.matKhauConfirm} onChange={handleOnchange} name="matKhauConfirm" onBlur={handleError} onKeyUp={handleError} id="password-confirm" />
                        {
                            error.matKhauConfirm !== "" ? (<div className="error">{error.matKhauConfirm}</div>) : ""
                        }
                    </FormInput>
                    <DivTiltle>
                        <Submit type="submit" id="logo-submit" disabled={!valid.formValid}>
                            Đăng kí
                        </Submit>
                    </DivTiltle>
                </form>
                {/* <NotificationContainer /> */}
            </div>
        </Content>
    )
}
