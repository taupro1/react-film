import React, { Component, PureComponent } from 'react'
import DateCinema from './dateCinema'
import ListFilmItem from './listFilmItem'
import AOS from "aos"
import "aos/dist/aos.css"

export default class ListFilm extends PureComponent {
    render() {
        AOS.init()
        return (
            <div data-aos="fade-left" data-aos-duration="1000" className="col-sm-12 col-12 col-lg-6 list-film">
                {/* <DateCinema /> */}
                <ListFilmItem />
            </div>
        )
    }
}
