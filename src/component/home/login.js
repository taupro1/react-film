import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import Axios from 'axios';
import * as action from "../../redux/action/action-redux/index"
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

function Login(props) {
    const classes = useStyles();
    const [taiKhoan, setTaiKhoan] = useState("");
    const [matKhau, setMatKhau] = useState("");
    const handleOnchange = event => {
        let { name, value } = event.target;
        name === "taiKhoan" ? setTaiKhoan(value) : setMatKhau(value)
    }
    const handleOnsubmit = event => {
        event.preventDefault();
        Axios({
            method: "POST",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: { taiKhoan, matKhau }
        })
            .then(rs => {
                NotificationManager.success("Login success")
                localStorage.setItem("login", JSON.stringify(rs.data))
                props.editIsvalidLogin()
                props.history.goBack()
            })
            .catch(er => {
                NotificationManager.error(er.response.data)
            })
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Đăng nhập
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        className='taiKhoan'
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
                    />
                    <TextField
                        className='matKhau'
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
                    />
                    <Button
                        type="submit"
                        onClick={handleOnsubmit}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit,'submit'}
                    >
                        Đăng nhập
          </Button>
                </form>
            </div>
            <NotificationContainer />
        </Container>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        editIsvalidLogin: () => dispatch(action.actGetUser("EDIT-STATUS-LOGIN", true))
    }
}
export default connect(null, mapDispatchToProps)(Login)

