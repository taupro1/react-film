import React from 'react'
import { Typography, Box, Tooltip, Fab, TextField, Button } from "@material-ui/core"
import Particles from "react-particles-js"
import { Link, animateScroll as scroll } from "react-scroll";
import EditIcon from '@material-ui/icons/Edit';
import { Fragment } from 'react';
import styled from "styled-components"
import { useState, useEffect } from 'react';
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import CloseIcon from '@material-ui/icons/Close';

const TextFieldContent = styled(TextField)`
    width:100%;
    margin-bottom:5%
`
const ContentButton = styled(Button)`
    outline: none;
    margin-right: 2%;
`

export default function AccountPage(props) {
    const user = JSON.parse(localStorage.getItem("login"));
    const loaiNguoiDung = [{
        type: "Quản trị",
        value: "QuanTri"
    },
    {
        type: "Khách hàng",
        value: "KhachHang"
    }]
    const [userEdit, setUserEdit] = useState({
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "",
    })
    const [error, setError] = useState({
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maLoaiNguoiDung: "",
    })
    const [valid, setValid] = useState({
        formValid: false,
        hoTenValid: false,
        taiKhoanValid: false,
        matKhauValid: false,
        emailValid: false,
        soDtValid: false,
    })
    const handleOnchange = event => {
        let { name, value } = event.target
        setUserEdit({
            ...userEdit,
            [name]: value
        })
    }
    const handleError = event => {
        let { name, value } = event.target;
        let status = value === "" ? "Vui lòng điền trường này" : "";
        let { hoTenValid, taiKhoanValid, matKhauValid, emailValid, soDtValid } = valid;
        switch (name) {
            case "taiKhoan":
                taiKhoanValid = status !== "" ? false : true;
                break;
            case "email":
                emailValid = status !== "" ? false : true;
                if (value !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/)) {
                    emailValid = false;
                    status = "Email không phù hợp"
                }
                break;
            case "hoTen":
                hoTenValid = status !== "" ? false : true;
                if (value !== "" && value.length < 4) {
                    hoTenValid = false;
                    status = "Tên chưa đủ dài"
                }
                break;
            case "soDt":
                soDtValid = status !== "" ? false : true;
                if (value !== "" && !value.match(/((09|03|07|08|05)+([0-9]{8})\b)/g)) {
                    soDtValid = false;
                    status = "Số điện thoại không phù hợp"
                }
                break;
            case "matKhau":
                matKhauValid = status !== "" ? false : true;
                if (value !== "" && !value.match(/^[A-Za-z]\w{7,14}$/)) {
                    matKhauValid = false;
                    status = "Mật khẩu có độ dài từ 7 đến 14 kí tự"
                }
                break;
            default: break;
        }
        setError({
            ...error,
            [name]: status
        })
        setValid({
            taiKhoanValid,
            hoTenValid,
            matKhauValid,
            emailValid,
            soDtValid,
        })
    }
    const handleSubmit = () => {
        console.log(userEdit);

        // let user = { ...this.state.user, maNhom: "GP01" }
        // this.setState({
        //     user
        // }, () => { this.checkHandleSubmit() })
    }
    const handleOnclickClose = () => {
        setUserEdit({
            hoTen: "",
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung: "",
        })
        setError({
            hoTen: "",
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung: "",
        })
        setValid({
            formValid: false,
            hoTenValid: false,
            taiKhoanValid: false,
            matKhauValid: false,
            emailValid: false,
            soDtValid: false,
            maNhom: false,
        })
    }
    useEffect(() => {
        setUserEdit(userEdit => ({
            ...userEdit,
            hoTen: user.hoTen,
            taiKhoan: user.taiKhoan,
            maLoaiNguoiDung: user.maLoaiNguoiDung,
            soDt: user.soDT,
            email: user.email
        }))
    }, [])
    return (
        <Fragment>
            <div id="account-page">
                <div className="bg-top-account">
                    <Particles className="bg-top-particles">
                        <div className="overplay">
                        </div>
                    </Particles>
                    <div className="scroll-down">
                        <Link
                            activeClass="active"
                            to="content-account"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                        >
                            <i className="scroll-down-i"></i>
                        </Link>
                    </div>
                </div>
                <div className="row content-account">
                    <div className="col-lg-7">
                        <div className="title-page">
                            <Typography variant="h4">
                                <Box fontWeight="fontWeightBold">
                                    Thông tin tài khoản
                        </Box>
                            </Typography>
                        </div>
                        <div class="content-detail-account">
                            <div className="detail-account-div">
                                <Typography variant="h5">
                                    <Box fontWeight="fontWeightBold">
                                        Tài khoản:
                            </Box>
                                </Typography>
                                <Typography variant="h5">
                                    {user.taiKhoan}
                                </Typography>
                            </div>
                            <div className="detail-account-div">
                                <Typography variant="h5">
                                    <Box fontWeight="fontWeightBold">
                                        Họ tên:
                            </Box>
                                </Typography>
                                <Typography variant="h5">
                                    {user.hoTen}
                                </Typography>
                            </div>
                            <div className="detail-account-div">
                                <Typography variant="h5">
                                    <Box fontWeight="fontWeightBold">
                                        Email:
                            </Box>
                                </Typography>
                                <Typography variant="h5">
                                    {user.email}
                                </Typography>
                            </div>
                            <div className="detail-account-div">
                                <Typography variant="h5">
                                    <Box fontWeight="fontWeightBold">
                                        Số điện thoại:
                            </Box>
                                </Typography>
                                <Typography variant="h5">
                                    {user.soDT}
                                </Typography>
                            </div>
                            <div className="detail-account-div">
                                <Typography variant="h5">
                                    <Box fontWeight="fontWeightBold">
                                        Nhóm:
                            </Box>
                                </Typography>
                                <Typography variant="h5">
                                    {user.maNhom}
                                </Typography>
                            </div>
                            <div className="detail-account-div">
                                <Typography variant="h5">
                                    <Box fontWeight="fontWeightBold">
                                        Loại người dùng:
                            </Box>
                                </Typography>
                                <Typography variant="h5">
                                    {user.maLoaiNguoiDung}
                                </Typography>
                            </div>
                        </div>
                        <div className="btn-edit-account">
                            <Tooltip title="Thay đổi thông tin" aria-label="add">
                                <Fab data-toggle="modal" data-target="#myModalAccount" className="btn-edit" color="primary">
                                    <EditIcon />
                                </Fab>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="col-lg-5 account-page-bg">
                        <img src="https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                </div>
            </ div>
            <div id="myModalAccount" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Thay đổi thông tin</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <TextFieldContent value={userEdit.taiKhoan} name="taiKhoan" onChange={handleOnchange} onBlur={handleError} onKeyUp={handleError} error={error.taiKhoan !== "" ? true : false} helperText={error.taiKhoan !== "" ? error.taiKhoan : " "} id="filled-basic" label="Tài khoản" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent value={userEdit.hoTen} name="hoTen" onChange={handleOnchange} onBlur={handleError} onKeyUp={handleError} error={error.hoTen !== "" ? true : false} helperText={error.hoTen !== "" ? error.hoTen : " "} id="filled-basic" label="Họ tên" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent value={userEdit.email} name="email" onChange={handleOnchange} onBlur={handleError} onKeyUp={handleError} error={error.email !== "" ? true : false} helperText={error.email !== "" ? error.email : " "} id="filled-basic" label="Email" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent value={userEdit.soDT} name="soDt" onChange={handleOnchange} onBlur={handleError} onKeyUp={handleError} error={error.soDt !== "" ? true : false} helperText={error.soDt !== "" ? error.soDt : " "} id="filled-basic" label="Số điện thoại" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent value={userEdit.matKhau} type="password" name="matKhau" onChange={handleOnchange} onBlur={handleError} onKeyUp={handleError} error={error.matKhau !== "" ? true : false} helperText={error.matKhau !== "" ? error.matKhau : " "} id="filled-basic" label="Mật khẩu" variant="filled" />
                            </div>
                            <div>
                                <TextFieldContent
                                    value={userEdit.maLoaiNguoiDung}
                                    name="maLoaiNguoiDung"
                                    id="standard-select-currency-native"
                                    select
                                    label="Loại người dùng"
                                    onChange={handleOnchange}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    helperText="Please select your currency"
                                >
                                    {loaiNguoiDung.map((option, index) => (
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
                                onClick={handleSubmit}
                                data-dismiss="modal"
                            >
                                Update
                            </ContentButton>
                            <ContentButton
                                variant="contained"
                                color="secondary"
                                startIcon={<CloseIcon />}
                                data-dismiss="modal"
                                onClick={handleOnclickClose}
                            >
                                Close
      </ContentButton>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
