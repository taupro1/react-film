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
                    <Footer />
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
        this.props.editIsvalid()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDetailFilm: (id) => {
            dispatch(callApi.actGetDetailFilm(id))
        },
        editIsvalid: () => {
            dispatch(action.actEditIsvalid(true))
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