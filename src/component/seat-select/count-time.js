import React, { useState, useEffect } from 'react'
import { Typography } from "@material-ui/core"
import { Fragment } from 'react'
import { Redirect, useHistory, Route, withRouter } from 'react-router-dom'

function CountTime(props) {
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        // let countTime = setTimeout(() => {
        //     if (seconds > 0) {
        //         setSeconds(seconds - 1);
        //     }
        //     if (seconds === 0) {
        //         if (minutes === 0) {
        //             clearTimeout(countTime)
        //         }
        //         else {
        //             setSeconds(59)
        //             setMinutes(minutes - 1);
        //         }
        //     }
        // }, 1000)
        let countTime = setTimeout(() => {
            if (minutes > 0) {
                setMinutes(minutes - 1)
                // clearTimeout(countTime)
                // return <Redirect to="/admin" />
                console.log("2");

            }
            else {
                // clearTimeout(countTime)
                // return <Redirect to="/admin" />
                // history.push("/")
                console.log("3");
                props.history.push("/admin")

            }

        }, 1000)
        // return () => {
        //     clearTimeout(countTime)
        // }
    }, [minutes, seconds])


    return (
        <Fragment>
            <Typography variant="body1">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Typography>
        </Fragment>
    )
}
export default withRouter(CountTime)