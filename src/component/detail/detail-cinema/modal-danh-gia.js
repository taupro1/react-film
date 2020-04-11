import React, { Component } from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContentFirstStar = styled.div`
    position: absolute;
    color: #ffff0040;
    font-size: 25px;
    width: 100%;
    text-align: center;
    cursor: pointer;
`
const Star = styled(FontAwesomeIcon)`
    margin-right:2%
`

export default class ModalDanhGia extends Component {
    render() {
        return (
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                        <div className="modal-header">
                            <ContentFirstStar>
                                <Star icon="star" />
                                <Star icon="star" />
                                <Star icon="star" />
                                <Star icon="star" />
                                <Star icon="star" />
                            </ContentFirstStar>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body">
                            <textarea placeholder="Comment cảm xúc về phim đi nào :)"></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
