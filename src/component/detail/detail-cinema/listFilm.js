import React, { PureComponent } from 'react'
import DateCinema from "./dateCinema"
import ListFilmItem from './listFilmItem'
import AOS from "aos";
import "aos/dist/aos.css";


export default class ListFilmDetail extends PureComponent {
    render() {
        AOS.init();
        return (
            <div data-aos="fade-left" data-aos-duration="600" className="col-sm-7 list-film">
                <DateCinema />
                <ListFilmItem />
            </div>
        )
    }
}