import React, { Component } from 'react';
import { Fragment } from 'react';
import LottieAnimation from "../../../animation/index"
import * as callApi from "../../../redux/action/action-api/index"
import * as action from "../../../redux/action/action-redux/index"

import Table from "@material-ui/core/Table"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"

import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TextField from '@material-ui/core/TextField';
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button"

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


import Paper from '@material-ui/core/Paper';
import { Toolbar, FormControl, InputAdornment, ButtonBase, TableBody, TableCell } from '@material-ui/core';
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
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
                                    <Button onClick={() => { this.props.getListCumRap(item.maHeThongRap) }} variant="contained" color="primary">
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
                            {item.tenHeThongRap}
                        </div>
                        <div className="col-sm-4 item item-img">
                            <img src={item.logo} />
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
                <Paper className="content-search">
                    <Toolbar className="toolbar">
                        <div>
                            <h6>
                                List cinema
                        </h6>
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
                            <div className="item-icon">
                                <Tooltip title="Add movie">
                                    <ButtonBase onClick={() => this.props.editMoviesEdit(null)} style={{ outline: "none" }}>
                                        <AddBoxIcon />
                                    </ButtonBase>
                                </Tooltip>
                            </div>
                        </div>
                    </Toolbar>
                    <div>
                        <div className="row tiltle-user">
                            <div className="col-sm-4">
                                Chi tiết
                        </div>
                            <div className="col-sm-4">
                                Tên rạp
                        </div>
                            <div className="col-sm-4">
                                Hình ảnh
                        </div>
                        </div>
                    </div>
                </Paper>
                <div className="content-user">
                    {this.renderListCinema()}
                </div>
            </div>
    }

    render() {
        return (
            <Fragment>
                {this.renderHtml()}
            </Fragment>
        );
    }
    componentDidMount() {
        this.props.getListCinema()
    }
    componentWillUnmount() {
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