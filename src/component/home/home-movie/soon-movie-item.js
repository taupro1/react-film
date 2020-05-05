import React, { Component } from 'react'
import { Typography, Box } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class SoonMovieItem extends Component {
    render() {
        const { item } = this.props
        return (
            <div className="movie">
                <div className="film-item">
                    <a href>
                        <img src={item.hinhAnh} alt="film" />
                    </a>
                    <a href className="name-movie">
                        <Typography variant="subtitle1">
                            <Box fontWeight="fontWeightBold">
                                {item.tenPhim}
                            </Box>
                        </Typography>
                    </a>
                </div>
                <div className="overplay-movies">
                    <div className="icon-overplay">
                        <FontAwesomeIcon className="icon" icon={['fab', 'youtube']} />
                    </div>
                </div>
            </div>
        )
    }
}
