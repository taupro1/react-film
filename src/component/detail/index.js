import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import * as callApi from "../../redux/action/action-api/index"
import DetailFilm from './detail-film';
import LottieAnimation from "../../animation/index"
import * as action from "../../redux/action/action-redux/index"
import DetailCinema from "./detail-cinema/detail-cinema"
import Footer from '../home/footer';

class DetailMovie extends Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getDetailFilm(id)
    }

    renderHtmml = () => {
        const { detailFilm } = this.props
        if (this.props.isValid) {
            return <LottieAnimation />
        }
        if (!this.props.isValid) {
            return (
                <Fragment>
                    <DetailFilm detailFilm={detailFilm} />
                    <DetailCinema />
                </Fragment>
            )
        }
    }
    render() {
        return (
            <Fragment>
                {this.renderHtmml()}
            </Fragment>
        )
    }

    componentWillUnmount() {
        this.props.reset()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDetailFilm: (id) => {
            dispatch(callApi.actGetDetailFilm(id))
        },
        reset: () => {
            dispatch(action.actGetUser("GET-DATE-FILM", ""))
            dispatch(action.actGetUser("EDIT-ISVALID-MACUMRAP-DETAIL", true))
            dispatch(action.actGetUser("GET-MACUMRAP-DETAIL", ""))
            dispatch(action.actGetUser("EDIT-ISVALID-DATE", true))
        }
    }
}

const mapStateToProps = state => {
    return {
        detailFilm: state.detailReducers.listDetailFilm,
        isValid: state.detailReducers.isValidAnimaton
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);