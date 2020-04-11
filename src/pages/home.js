import React, { Component } from 'react'
import Carousel from '../component/home/carousel'
import HomeMovie from '../component/home/home-movie'
import TicketBooking from '../component/home/ticket-booking'
import Cinema from '../component/home/cinema'
import NewsReview from '../component/home/news-review'
import Promotion from '../component/home/promotion'
import Header from "../component/header/header"
import Footer from '../component/home/footer'



export default class HomePage extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                <Carousel />
                <TicketBooking />
                <HomeMovie />
                <Cinema />
                <NewsReview />
                <Promotion />
                <Footer />
            </div>
        )
    }
}
