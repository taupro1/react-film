import React, { Component } from 'react'
import { connect } from "react-redux";
import ListCinema from './listCinema';
import LocationCinema from './locationCinema';
import ListFilm from './listFilm';
import * as callApi from "../../../redux/action/action-api";


class Cinema extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "BHDStar",
        }
    }

    // List Img Cinema
    handleGetImgName = (name) => {
        this.setState({
            name
        }, () => { this.props.getListDetailCinema(this.state.name) })
    }
    componentDidMount() {
        this.props.getListCinema();
        this.props.getListDetailCinema(this.state.name);
    }
    returnOpacityImg = (name) => {
        if (name === this.state.name) {
            return "active"
        }
    }
    renderListCinema = () => {
        return this.props.listCinema.map((item, index) => {
            return (
                <ListCinema className={this.returnOpacityImg(item.maHeThongRap)} img={this.handleGetImgName} key={index} item={item} />
            )
        })
    }

    //List Cinema

    render() {
        return (
            <section id="cinema">
                <div className="container-fuild">
                    <div className="title-cinema">
                        Cụm rạp
    </div>
                    <div className="list-cinema">
                        <ul>
                            {this.renderListCinema()}
                        </ul>
                    </div>
                    <div className="item-cinema">
                        <div className="item row">
                            <LocationCinema name={this.state.name} />
                            <ListFilm />
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

const mapStateToProps = state => {
    return {
        listCinema: state.cinemaReducers.listCinema,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getListCinema: () => {
            dispatch(callApi.actGetListCinemaApi())
        },
        getListDetailCinema: (maHeThongRap) => {
            dispatch(callApi.actGetListDetailCinemaApi(maHeThongRap))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinema);
