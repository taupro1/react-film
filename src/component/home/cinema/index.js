import React, { Component } from 'react'
import { connect } from "react-redux";
import ListCinema from './listCinema';
import LocationCinema from './locationCinema';
import ListFilm from './listFilm';


class Cinema extends Component {

    renderListCinema = () => {
        return this.props.listCinema.map((item, index) => {
            return (
                <ListCinema key={index} item={item} />
            )
        })
    }
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
                            <LocationCinema />
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
        listCinema: state.homeReducers.listCinema
    }
}

export default connect(mapStateToProps, null)(Cinema);
