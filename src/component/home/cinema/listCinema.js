import React, { Component } from 'react'
import { connect } from "react-redux"

class ListCinema extends Component {

    handleOnclick = (maHeThongRap) => {
        this.props.img(maHeThongRap);
        this.props.editIsvalid();
        this.props.editMaCumRap();
        this.props.editIsvalidCinema()
    }
    render() {
        const { item } = this.props;
        return (
            <li>
                <a href>
                    <img alt="" src={item.logo} className={this.props.className,item.maHeThongRap} onClick={() => { this.handleOnclick(item.maHeThongRap) }} />
                </a>
            </li>
        )
    }
}

// Onlick trả về maHeThongRap cho index.js

const mapDispatchToProps = dispatch => {
    return {
        editIsvalid: () => {
            let action = {
                type: "EDIT-ISVALID",
                data: true
            }
            dispatch(action)
        },
        editMaCumRap: () => {
            let action = {
                type: "EDIT-ISVALID-MACUMRAP",
                data: ""
            }
            dispatch(action)
        },
        editIsvalidCinema: () => {
            let action = {
                type: "EDIT-ISVALID-CINEMA",
                data: true
            }
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(ListCinema)








