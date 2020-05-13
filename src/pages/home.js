import React, { Component } from 'react'
import Carousel from '../component/home/carousel'
import HomeMovie from '../component/home/home-movie'
import TicketBooking from '../component/home/ticket-booking'
import Cinema from '../component/home/cinema'
import NewsReview from '../component/home/news-review'
import Promotion from '../component/home/promotion'
import Footer from '../component/home/footer'


export default class HomePage extends Component {
    componentDidMount() {
        document.title = "Cybersoft"
    }
    render() {
        return (
            <div>
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
