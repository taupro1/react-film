import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Footer from '../component/home/footer'
import Header from "../component/header/header"

const HomeComponent = props => {
    return (
        <Fragment>
            <Header />
            {props.children}
            {/* <Footer /> */}
        </Fragment>
    )
}

export default function HomeTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={propsCompnent => (
                <HomeComponent>
                    <Component {...propsCompnent} />
                </HomeComponent>
            )}
        />
    )
}
