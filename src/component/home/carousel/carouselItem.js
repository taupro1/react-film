import React, { Component } from 'react'

export default class CarouselItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <figure className="shadow">
                <img src={item.img} />
            </figure>
        )
    }
}
