import React, { Component } from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ModalDanhGia from "./modal-danh-gia"
import { connect } from "react-redux"

const FirstInput = styled.input`
    width: 100%;
    padding: 2%;
    &::placeholder{
        font-size:17px;
        color:#00000075;
    };
    cursor: pointer;
    outline:none;
`
const ContentFirstInput = styled.div`
    width: 60%;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const ContentFirstStar = styled.div`
    position: absolute;
    right: 0;
    color: #ffff0040;
    font-size: 25px;
    width: 30%;
    text-align: center;
`
const Star = styled(FontAwesomeIcon)`
    margin-right:2%;
`
const ContentComment = styled.div`
    color: white;
    display: block;
    margin-top: 3%;
    width: 60%;
    margin-bottom:2%
`
const ContentUserStar = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Comment = styled.div`
    background: white;
    color: black;
    border-radius: 5px;
    height: 100%;
    margin-top: 2%;
    padding-left: 1%;
    padding-top: 1%;
`
const ContentStar = styled.div`
    width: 30%;
    display: flex;
    justify-content: flex-end;
`

class DanhGiaPhim extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    renderStar = (listStarSelect) => {
        let content = []
        for (let i = 0; i <= listStarSelect.length; i++) {
            content.push(
                <Star color="yellow" icon="star"></Star>
            )
        }
        return content
    }
    renderHtml = () => {
        let { danhGia } = this.props
        if (danhGia.length !== 0) {
            let content = []
            for (let i = danhGia.length - 1; i >= 0; i--) {
                content.push(<div className="row justify-content-center" style={{ position: "relative" }}>
                    <ContentComment>
                        <ContentUserStar>
                            <span>{danhGia[i].nameUser.hoTen}</span>
                            <ContentStar>
                                {this.renderStar(danhGia[i].listSelect)}
                            </ContentStar>
                        </ContentUserStar>
                        <Comment>
                            <span>{danhGia[i].value}</span>
                        </Comment>
                    </ContentComment>
                </div>)
            }
            return content
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <ContentFirstInput data-toggle="modal" data-target="#myModal">
                        <FirstInput type="text" placeholder="Bạn đánh giá phim này như thế nào" readOnly>
                        </FirstInput>
                        <ContentFirstStar>
                            <Star icon="star" />
                            <Star icon="star" />
                            <Star icon="star" />
                            <Star icon="star" />
                            <Star icon="star" />
                        </ContentFirstStar>
                    </ContentFirstInput>
                    <ModalDanhGia />
                </div>
                {this.renderHtml()}
                <div className="row justify-content-center" style={{ position: "relative" }}>
                    <ContentComment>
                        <ContentUserStar>
                            <span>Dr.Stone</span>
                            <ContentStar>
                                <Star color="yellow" icon="star"></Star>
                                <Star color="yellow" icon="star"></Star>
                                <Star color="yellow" icon="star"></Star>
                            </ContentStar>
                        </ContentUserStar>
                        <Comment>
                            <span>Phim tuyệt thật, mong sẽ có phần 2</span>
                        </Comment>
                    </ContentComment>
                </div>
                <div className="row justify-content-center" style={{ position: "relative" }}>
                    <ContentComment>
                        <ContentUserStar>
                            <span>Iron Man</span>
                            <ContentStar>
                                <Star color="yellow" icon="star"></Star>
                                <Star color="yellow" icon="star"></Star>
                                <Star color="yellow" icon="star"></Star>
                                <Star color="yellow" icon="star"></Star>
                            </ContentStar>
                        </ContentUserStar>
                        <Comment>
                            <span>Exellent Film</span>
                        </Comment>
                    </ContentComment>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhGia: state.detailReducers.danhGia
    }
}

export default connect(mapStateToProps, null)(DanhGiaPhim)