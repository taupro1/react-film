import React from 'react'
import Lottie from "react-lottie"
import data from "./data.json";

export default function LottieAnimation(props) {
    const option = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <Lottie
            options={option}
            width={400}
            height={400}
        />
    )
}
