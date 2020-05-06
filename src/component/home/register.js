import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import { NotificationManager, NotificationContainer } from "react-notifications"

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Register(props) {
    const classes = useStyles();
    const [state, setState] = useState({ taiKhoan: "", matKhau: "", email: "", soDt: "", hoTen: "", maNhom: "GP01", maLoaiNguoiDung: "KhachHang" });
    const [error, setError] = useState({ taiKhoan: "", matKhau: "", email: "", soDt: "", hoTen: "" })
    const [valid, setValid] = useState({ taiKhoanValid: false, matKhauValid: false, emailValid: false, soDtValid: false, hoTenValid: false })
    const [formValid, setFormValid] = useState(false)
    const handleOnchange = event => {
        let { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }
    const handleOnsubmit = event => {
        event.preventDefault();
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: state
        })
            .then(rs => {
                NotificationManager.success("Login success")
                props.history.push("/")
            })
            .catch(er => {
                NotificationManager.error(er.response.data)

            })
    }
    const handleError = event => {
        let { name, value } = event.target;
        let status = value === "" ? "Vui lòng điền vào trường này" : "";
        let { taiKhoanValid, emailValid, hoTenValid, matKhauValid, soDtValid } = valid
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
                if (value !== "" && !value.match(/^[A-Za-z]\w{8,14}$/)) {
                    matKhauValid = false;
                    status = "Mật khẩu phải có số, chữ in hoa, dài hơn 8 kí tự và ngắn hơn 14 kí tự"
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
            matKhauValid,
            hoTenValid,
            soDtValid,
            emailValid
        })
        setFormValid(taiKhoanValid && matKhauValid && hoTenValid && soDtValid && emailValid)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Đăng kí
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Tài khoản"
                        name="taiKhoan"
                        autoComplete="email"
                        autoFocus
                        onChange={handleOnchange}
                        onKeyUp={handleError}
                        onBlur={handleError}
                        error={error.taiKhoan !== "" ? true : false} helperText={error.taiKhoan !== "" ? error.taiKhoan : " "}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="Email"
                        type="email"
                        id="email"
                        autoComplete="email"
                        onChange={handleOnchange}
                        onKeyUp={handleError}
                        onBlur={handleError}
                        error={error.email !== "" ? true : false} helperText={error.email !== "" ? error.email : " "}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="hoTen"
                        label="Họ và tên"
                        type="text"
                        id="hoTen"
                        autoComplete=""
                        onChange={handleOnchange}
                        onKeyUp={handleError}
                        onBlur={handleError}
                        error={error.hoTen !== "" ? true : false} helperText={error.hoTen !== "" ? error.hoTen : " "}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="soDt"
                        label="Số điện thoại"
                        type="text"
                        id="soDT"
                        autoComplete="current-password"
                        onChange={handleOnchange}
                        onKeyUp={handleError}
                        onBlur={handleError}
                        error={error.soDt !== "" ? true : false} helperText={error.soDt !== "" ? error.soDt : " "}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="matKhau"
                        label="Mật khẩu"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleOnchange}
                        onKeyUp={handleError}
                        onBlur={handleError}
                        error={error.matKhau !== "" ? true : false} helperText={error.matKhau !== "" ? error.matKhau : " "}
                    />
                    <Button
                        type="submit"
                        onClick={handleOnsubmit}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={!formValid}
                    >
                        Đăng kí
          </Button>
                </form>
            </div>
            <NotificationContainer />
        </Container>
    );
}
export default Register



