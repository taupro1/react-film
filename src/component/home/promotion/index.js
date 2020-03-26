import React, { Component } from 'react'
import PromotionItem from './promotionItem'

export default class Promotion extends Component {
    render() {
        return (
            <section id="promotion">
                <div className="promotion-content">
                    <div className="tiltle">
                        Khuyến mãi
    </div>
                    <PromotionItem />
                </div>
            </section>

        )
    }
}
