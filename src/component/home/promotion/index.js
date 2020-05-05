import React, { Component } from 'react'
import PromotionItem from './promotionItem'
import { Typography } from "@material-ui/core"

export default class Promotion extends Component {
    render() {
        return (
            <section id="promotion">
                <div className="promotion-content">
                    <div className="tiltle">
                        <Typography variant="h4">
                            Khuyến mãi
                        </Typography>
                    </div>
                    <PromotionItem />
                </div>
            </section>

        )
    }
}
