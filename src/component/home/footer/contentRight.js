import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as callApi from "../../../redux/action/action-api/index"


class ContentRight extends Component {
    renderHtml = () => {
        const { listCinema } = this.props
        if (listCinema) {
            return listCinema.map(item => {
                return (
                    <li>
                        <img alt="" src={item.logo} />
                    </li>
                )
            })
        }
    }
    render() {
        return (
            <div className="col-md-4 col-sm-12 col-12 content-right">
                <div className="item-footer">
                    <h5 className="tiltle-footer">Đối tác</h5>
                    <ul>
                        {this.renderHtml()}
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getListCinema()
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getListCinema: () => {
            dispatch(callApi.actGetListCinemaApi())
        }
    }
}

const mapStateToProps = state => {
    return {
        listCinema: state.cinemaReducers.listCinema,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentRight)
