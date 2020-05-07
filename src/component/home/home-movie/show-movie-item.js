import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Typography, Box } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import $ from "jquery"

export default class ShowMovieItem extends Component {
    render() {
        const { item } = this.props;
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
                        <a class="venobox" data-vbtype="video" href="https://www.youtube.com/watch?v=AMMetkCvztg">YouYbe</a>
                        <Link to={`/detail/${item.maPhim}`}>
                            <FontAwesomeIcon className="icon" icon="info-circle" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
