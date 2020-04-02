import React, { Component } from 'react'
// import { callApiQuanLyNguoiDung, postUser } from "../../../redux/action/callAPI/index"
import { connect } from "react-redux";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import * as actionApi from "../../../redux/action/action-api/index"


class ModalHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "GP01",
                maLoaiNguoiDung: "KhachHang",
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
        this.props.postUser(this.state.user)
        NotificationManager.success("Đăng kí thành công");
        this.setState({
            user: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "GP01",
                maLoaiNguoiDung: "KhachHang",
                matKhauConfirm: ""
            },
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
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content content-modal-register">
                        <div className="modal-header">
                            <h4 className="modal-title">Đăng ký</h4>
                        </div>
                        <div className="modal-body register">
                            <form action className="form-login form-register">
                                <div className="form-input">
                                    <label htmlFor="tenDangNhap">Tên đăng nhập</label>
                                    <input type="text" name="taiKhoan" value={user.taiKhoan} onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} id="tenDangNhap" />
                                    {
                                        error.taiKhoan !== "" ? (<div className="error">{error.taiKhoan}</div>) : ""
                                    }
                                </div>
                                <div className="form-input">
                                    <label htmlFor="email-user">Email</label>
                                    <input type="email" name="email" value={user.email} onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} id="email-user" />
                                    {
                                        error.email !== "" ? (<div className="error">{error.email}</div>) : ""
                                    }
                                </div>
                                <div className="form-input">
                                    <label htmlFor="tenNguoiDung">Họ và tên</label>
                                    <input type="text" name="hoTen" value={user.hoTen} onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} id="tenNguoiDung" />
                                    {
                                        error.hoTen !== "" ? (<div className="error">{error.hoTen}</div>) : ""
                                    }
                                </div>
                                <div className="form-input">
                                    <label htmlFor="phone">Số điện thoại</label>
                                    <input type="phone" name="soDt" value={user.soDt} onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} id="phone" />
                                    {
                                        error.soDt !== "" ? (<div className="error">{error.soDt}</div>) : ""
                                    }
                                </div>
                                <div className="form-input">
                                    <label htmlFor="password-user">Mật khẩu</label>
                                    <input type="password" name="matKhau" value={user.matKhau} onChange={this.handleOnchange} onBlur={this.handleError} onKeyUp={this.handleError} id="password-user" />
                                    {
                                        error.matKhau !== "" ? (<div className="error">{error.matKhau}</div>) : ""
                                    }
                                </div>
                                <div className="form-input">
                                    <label htmlFor="password-confirm">Nhập lại mật khẩu</label>
                                    <input type="password" value={user.matKhauConfirm} onChange={this.handleOnchange} name="matKhauConfirm" onBlur={this.handleError} onKeyUp={this.handleError} id="password-confirm" />
                                    {
                                        error.matKhauConfirm !== "" ? (<div className="error">{error.matKhauConfirm}</div>) : ""
                                    }
                                </div>
                                <div>
                                    <button type="submit" onClick={this.handleSubmit} id="logo-submit" disabled={!this.state.formValid}>
                                        Đăng kí
                        </button>
                                </div>
                            </form>
                            <NotificationContainer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postUser: (data) => {
            dispatch(actionApi.actPostUserRegisterApi(data))
        },
        getUser: () => {
            dispatch(actionApi.actGetUserApi())
        }
    }
}

const mapStateToProps = state => {
    return {
        listUser: state.homeReducers.listUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalHeader);
