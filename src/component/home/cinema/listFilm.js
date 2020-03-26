import React, { Component } from 'react'
import DateCinema from './dateCinema'
import ListFilmItem from './listFilmItem'

export default class ListFilm extends Component {
    render() {
        return (
            <div className="col-sm-7 list-film">
                <DateCinema />
                <ListFilmItem />
            </div>
        )
    }
}
