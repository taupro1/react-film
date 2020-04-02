import React, { Component } from 'react'
import DetailMovie from "../component/detail/index"

export default class Detail extends Component {
    render() {
        return (
            <div>
                <DetailMovie {...this.props} />
            </div>
        )
    }
}
