import React, { Component } from 'react'
import { connect } from "react-redux"


class ListCinemaDetail extends Component {

    handleOnclick = (maHeThongRap) => {
        this.props.img(maHeThongRap);
        this.props.editIsvalidCinema()
        this.props.editMaHeThongRap(maHeThongRap);
        this.props.editIsvalidMaCumRapDetail(true)
        this.props.editMaCumRapDetail("");
    }
    render() {
        const { item } = this.props;
        return (
            <li>
                <a href>
                    <img src={item.logo} className={this.props.className} onClick={() => { this.handleOnclick(item.maHeThongRap) }} />
                </a>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editIsvalidCinema: () => {
            let action = {
                type: "EDIT-ISVALID-CINEMA-DETAIL",
                data: true
            }
            dispatch(action)
        },
        editMaHeThongRap: data => {
            let action = {
                type: "EDIT-MHT",
                data
            }
            dispatch(action)
        },
        editIsvalidMaCumRapDetail: (data) => {
            let action = {
                type: "EDIT-ISVALID-MACUMRAP-DETAIL",
                data,
            }
            dispatch(action)
        },
        editMaCumRapDetail: data => {
            let action = {
                type: "GET-MACUMRAP-DETAIL",
                data
            }
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(ListCinemaDetail)