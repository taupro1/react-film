import React, { Component } from 'react';
import { Fragment } from 'react';
import LottieAnimation from "../../../animation/index"
import * as callApi from "../../../redux/action/action-api/index"
import * as action from "../../../redux/action/action-redux/index"

import Table from "@material-ui/core/Table"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"
import { Typography, Box } from "@material-ui/core"
import InfoIcon from "@material-ui/icons/Info"

import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button"

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import SnowStorm from 'react-snowstorm';


import Paper from '@material-ui/core/Paper';
import { Toolbar, FormControl, InputAdornment, TableBody, TableCell } from '@material-ui/core';
import { connect } from 'react-redux'

class CinemaAdmin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: ""
        }
    }
    handleOnchange = event => {
        this.setState({
            user: event.target.value
        })
    }
    renderTable = () => {
        if (this.props.listCumRap.length !== 0) {
            return this.props.listCumRap.map((item, index) => {
                return (
                    <Fragment key={index}>
                        <TableRow>
                            <TableCell className="chi-tiet" >
                                Cụm rạp
                    </TableCell>
                            <TableCell className="chi-tiet-item" >
                                {item.tenCumRap}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="chi-tiet" >
                                Địa chỉ
                    </TableCell>
                            <TableCell className="chi-tiet-item" >
                                {item.diaChi}
                            </TableCell>
                        </TableRow>
                    </Fragment>
                )
            })
        }
    }
    renderListCinema = () => {
        let { listCinema } = this.props
        if (listCinema.length !== 0) {
            return listCinema.map((item, index) => {
                return (
                    <div className="item-user row" key={index}>
                        <div className="col-sm-4 item item-chi-tiet">
                            <ExpansionPanel className="content-chi-tiet">
                                <ExpansionPanelSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className="btn-chi-tiet"
                                >
                                    <Button startIcon={<InfoIcon />} onClick={() => { this.props.getListCumRap(item.maHeThongRap) }} variant="contained" color="primary">
                                        Chi tiết rạp
                                    </Button>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className="list-chi-tiet">
                                    <TableContainer>
                                        <Table>
                                            <TableBody>
                                                {this.renderTable()}

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                        <div className="col-sm-4 item item-tiltle">
                            <Typography variant="subtitle1">
                                {item.tenHeThongRap}
                            </Typography>
                        </div>
                        <div className="col-sm-4 item item-img">
                            <img alt="Lỗi hình" src={item.logo} />
                        </div>
                    </div>
                )
            })
        }

    }
    renderHtml = () => {
        return this.props.isValidUser ?
            <LottieAnimation />
            :
            <div className="cinema-admin">
                <SnowStorm />
                <div className="overplay">
                </div>
                <div className="content-cinema">
                    <Paper id="cinema-search">
                        <Toolbar className="toolbar">
                            <div>
                                <Typography variant="h5">
                                    <Box fontWeight="fontWeightBold">
                                        Danh sách rạp
                                </Box>
                                </Typography>
                            </div>
                            <div className="content-form">
                                <FormControl className="item-form">
                                    <TextField onChange={e => this.setState({ keyword: e.target.value })} placeholder="Search" InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <Tooltip title="Search">
                                                <SearchIcon />
                                            </Tooltip>
                                        </InputAdornment>,
                                    }}>
                                    </TextField>
                                </FormControl>
                            </div>
                        </Toolbar>
                        <div>
                            <div className="row tiltle-user">
                                <div className="col-sm-4">
                                    <Typography variant="subtitle1">
                                        <Box fontWeight="fontWeightBold">
                                            Chi tiết
                                    </Box>
                                    </Typography>
                                </div>
                                <div className="col-sm-4">
                                    <Typography variant="subtitle1">
                                        <Box fontWeight="fontWeightBold">
                                            Tên rạp
                                    </Box>
                                    </Typography>
                                </div>
                                <div className="col-sm-4">
                                    <Typography variant="subtitle1">
                                        <Box fontWeight="fontWeightBold">
                                            Logo
                                    </Box>
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Paper>
                    <div className="content-user">
                        {this.renderListCinema()}
                    </div>
                </div>
            </div>
    }
    scrollHeaderCinema = event => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("cinema-search").classList.add("header-cinema-animation")
        }
        else {
            document.getElementById("cinema-search").classList.remove("header-cinema-animation")
        }
    }

    render() {
        return (
            <Fragment>
                {this.renderHtml()}
            </Fragment>
        );
    }
    componentDidMount() {
        // window.addEventListener('scroll', this.scrollHeaderCinema)
        this.props.getListCinema()
    }
    componentWillUnmount() {
        // window.removeEventListener('scroll', this.scrollHeaderCinema)
        this.props.editIsValidUser(true)
    }
}


const mapStateToProps = state => {
    return {
        listCinema: state.cinemaAdminReducers.listCinema,
        isValidUser: state.usersReducers.isValidUser,
        listCumRap: state.cinemaAdminReducers.listCumRap
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getListCinema: () => {
            dispatch(callApi.actGetListCinemaAdmin())
        },
        editIsValidUser: data => {
            dispatch(action.actGetUser("GET-ISVALID-USER-ADMIN", data))
        },
        getListCumRap: data => {
            dispatch(callApi.actGetListCumRapDetailAdmin(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CinemaAdmin);