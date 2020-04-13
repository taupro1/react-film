import React, { Component } from 'react'
import { connect } from 'react-redux'


class ContentRight extends Component {
    renderHtml = () => {
        const { listCinema } = this.props
        if (listCinema) {
            return listCinema.map(item => {
                return (
                    <li>
                        <img src={item.logo} alt />
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
}

const mapStateToProps = state => {
    return {
        listCinema: state.cinemaReducers.listCinema,
    }
}
export default connect(mapStateToProps, null)(ContentRight)
