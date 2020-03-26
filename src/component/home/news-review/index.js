import React, { Component } from 'react'
import News from './news'
import Review from './review'

export default class NewsReview extends Component {
    render() {
        return (
            <section id="news-review">
                <div className="container">
                    <div className="row review-news">
                        <News />
                        <Review />
                    </div>
                </div>
            </section>
        )
    }
}
