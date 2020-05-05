import React, { useState, useEffect } from 'react'
import { Typography } from "@material-ui/core"
import { Fragment } from 'react'

export default function CountTime() {
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0)
    setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        if (seconds === 0) {
            if (minutes === 0) {
                // clearInterval(countTime)
            }
            if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59)
            }
        }
    }, 1000)

    return (
        <Fragment>
            <Typography variant="body1">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Typography>
        </Fragment>
    )
}
