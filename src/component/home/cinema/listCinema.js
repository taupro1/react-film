import React, { Component } from 'react'

export default class ListCinema extends Component {
    render() {
        const { item } = this.props;
        return (
            <li>
                <a href>
                    <img src={item.img} alt />
                </a>
            </li>
        )
    }
}
