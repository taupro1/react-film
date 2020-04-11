import React, { Component } from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ModalDanhGia from "./modal-danh-gia"

const FirstInput = styled.input`
    width: 100%;
    padding: 2%;
    &::placeholder{
        font-size:17px;
        color:black;
    };
    cursor: pointer;
    outline:none;
`
const ContentFirstInput = styled.div`
    width: 60%;
    position: relative;
    display: flex;
    align-items: center;
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
    margin-right:2%
`

export default class DanhGiaPhim extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <ContentFirstInput>
                        <FirstInput data-toggle="modal" data-target="#myModal" type="text" placeholder="Bạn đánh giá phim này như thế nào" readOnly>
                        </FirstInput>
                        <ContentFirstStar>
                            <Star icon="star" />
                            <Star icon="star" />
                            <Star icon="star" />
                            <Star icon="star" />
                            <Star icon="star" />
                        </ContentFirstStar>
                    </ContentFirstInput>
                </div>
                <ModalDanhGia />
            </div>
        )
    }
}
