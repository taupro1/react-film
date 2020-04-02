import React, { Component, PureComponent } from 'react'
import DateCinema from "./dateCinema"
import ListFilmItem from './listFilmItem'

export default class ListFilmDetail extends PureComponent {
    render() {
        return (
            <div className="col-sm-7 list-film">
                <DateCinema />
                <ListFilmItem />
            </div>
        )
    }
}