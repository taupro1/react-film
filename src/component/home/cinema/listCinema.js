import React, { Component } from 'react'
import { connect } from "react-redux"

export default class ListCinema extends Component {
    render() {
        const { item } = this.props;
        return (
            <li>
                <a href>
                    <img src={item.logo} className={this.props.className} onClick={() => { this.props.img(item.maHeThongRap); }} />
                </a>
            </li>
        )
    }
}









