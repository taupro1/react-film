import React, { Component } from 'react'
import { connect } from "react-redux"
import classNames from "classnames"

class LocationCinema extends Component {
    constructor(props) {
        super(props)
        this.state = {
            maCumRap: "",
            isValid: true
        }
    }


    handleOpacityCinema = (maCumRap) => {
        this.props.getMaCumRap(maCumRap)
        this.setState({
            maCumRap,
            isValid: false
        })
    }

    componentWillReceiveProps() {
        this.setState({
            isValid: true,
        })
    }

    renderOpacityCinema = (maCumRap, index) => {
        if (this.state.isValid && index === 0) {
            return "active"
        }
        if (this.state.maCumRap === maCumRap) {
            return "active"
        }
    }
    renderHtml = () => {
        let cinema = this.props.listDetailCinema[0];
        let content = [];
        for (let item in cinema) {
            if (item === "lstCumRap") {
                let listContent = [];
                cinema[item].map((list, index) => {
                    listContent.push(
                        <div className={classNames(this.renderOpacityCinema(list.maCumRap, index), "cinema")} onClick={() => this.handleOpacityCinema(list.maCumRap)}>
                            <img src="./img/cinema/img-item-cinema/bhd/bhd-star-vincom-thao-dien-15379553942188.jpg" alt />
                            <div className="info-cinema">
                                <div className="info">
                                    <span className={this.props.name}> {list.tenCumRap}</span>
                                </div>
                                <span>{list.diaChi}</span>
                            </div>
                        </div>
                    )
                })
                content.push(listContent)
            }
        }
        return content;
    }

    render() {
        return (
            <div class="col-sm-5 location-cinema">
                {this.renderHtml()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listDetailCinema: state.cinemaReducers.listDetailCinema,
        isValid: state.cinemaReducers.isValid,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMaCumRap: data => {
            let action = {
                type: "GET-MA-CUM-RAP",
                data
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationCinema);


