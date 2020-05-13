import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, Box, Button } from "@material-ui/core"
import ModalTrailer from '../../shared/Modal/modalTrailer';
import { connect } from 'react-redux';
import * as action from "../../redux/action/action-redux/index"


class DetailFilm extends Component {
    renderStar = () => {
        if (this.props.detailFilm) {
            let content = [];
            for (let i = 0; i < this.props.detailFilm.danhGia; i++) {
                content.push(
                    <FontAwesomeIcon key={i} className="i-star" icon="star" />
                )
            }
            return content
        }
    }
    render() {
        let { detailFilm } = this.props
        return (
            <section id="film">
                <div className="bg-film">
                    <img src="http://demo.amytheme.com/movie/demo/book-ticket/wp-content/uploads/2016/12/img_21.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row content-film">
                        <div className="col-12 col-sm-12 col-md-4 content-left">
                            <div>
                                <img alt="" src={detailFilm.hinhAnh} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 content-right">
                            <div className="content-right-padding">
                                <Typography style={{ marginBottom: "2%" }} variant="h4">
                                    <Box fontWeight="fontWeightBold">
                                        {detailFilm.tenPhim}
                                    </Box>
                                </Typography>
                                <div className="chi-tiet">
                                    <div className="chi-tiet-div">
                                        <Typography className="chi-tiet-subtitle1" variant="subtitle1">
                                            <Box fontWeight="fontWeightBold">
                                                Thời lượng:
                                            </Box>
                                        </Typography>
                                        <Typography variant="body1" className="chi-tiet-body1">
                                            120 phút
                                        </Typography>
                                    </div>
                                    <div className="chi-tiet-div">
                                        <Typography className="chi-tiet-subtitle1" variant="subtitle1">
                                            <Box fontWeight="fontWeightBold">
                                                Thể loại:
                                            </Box>
                                        </Typography>
                                        <Typography variant="body1" className="chi-tiet-body1">
                                            Hài hước, tấu hài
                                        </Typography>
                                    </div>
                                    <div className="chi-tiet-div">
                                        <Typography className="chi-tiet-subtitle1" variant="subtitle1">
                                            <Box fontWeight="fontWeightBold">
                                                Độ tuổi:
                                            </Box>
                                        </Typography>
                                        <Typography variant="body1" className="chi-tiet-body1">
                                            Ai cũng xem được
                                        </Typography>
                                    </div>
                                    <div className="chi-tiet-div">
                                        <Typography className="chi-tiet-subtitle1" variant="subtitle1">
                                            <Box fontWeight="fontWeightBold">
                                                Ra mắt:
                                            </Box>
                                        </Typography>
                                        <Typography variant="body1" className="chi-tiet-body1">
                                            Không biết
                                        </Typography>
                                    </div>
                                    <div className="chi-tiet-div">
                                        <Typography className="chi-tiet-subtitle1" variant="subtitle1">
                                            <Box fontWeight="fontWeightBold">
                                                Đánh giá:
                                            </Box>
                                        </Typography>
                                        <Typography variant="body1" className="chi-tiet-body1">
                                            {this.renderStar()}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="btn-trailer">
                                    <Button onClick={() => this.props.getTrailer(detailFilm.trailer)} data-toggle="modal" data-target="#modalTrailer" style={{ outline: "none" }} variant="contained" color="default">
                                        <Typography style={{ color: "black" }} variant="button">
                                            Xem Trailer
                                        </Typography>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row content-synopsis">
                        <div className="col-12 col-sm-12 col-md-4">

                        </div>
                        <div className="col-12 col-sm-12 col-md-8" style={{ padding: "0" }}>
                            <div>
                                <Typography variant="subtitle1">
                                    <Box className="synopsis-subtitle1" fontWeight="fontWeightBold">
                                        Nội dung:
                                    </Box>
                                </Typography>
                                <Typography className="synopsis-body2" variant="body2">
                                    {detailFilm.moTa}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalTrailer />
            </section >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTrailer: data => dispatch(action.actGetUser("GET-LINK-TRAILER", data))
    }
}
export default connect(null, mapDispatchToProps)(DetailFilm)

