import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class CarouselItem extends Component {

    // componentDidMount() {
    //     window.jQuery = window.$ = $;
    //     $(".venobox").venobox({
    //     })
    // }
    render() {
        const { item } = this.props;
        return (
            <div className="content-film">
                <img src={item.img} />
                <div className="content-play">
                    <a href={item.href} data-vbtype="video" className="venobox vbox-item play-video">
                        <FontAwesomeIcon icon="play" className="i-play" />
                    </a>
                </div>
            </div>
        )
    }
}
