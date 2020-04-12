import React, { Component } from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"
import * as action from "../../../redux/action/action-redux/index"
import { NotificationContainer, NotificationManager } from "react-notifications"

const ContentFirstStar = styled.div`
    position: absolute;
    color: yellow;
    font-size: 25px;
    width: 100%;
    text-align: center;
    cursor: pointer;
`
const Star = styled(FontAwesomeIcon)`
    margin-right:2%
`
const Textarea = styled.textarea`
    width: 100%;
    border: 2px solid;
    border-radius: 7px;
    padding-bottom: 12%;
    padding-left: 2%;
    padding-top: 2%;
    outline:none;
`
const ModalHeader = styled.div`
    margin-bottom: 2%;
    border-bottom:none;
`
const ModalFooter = styled.div`
    border-top:none;
`


class ModalDanhGia extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listSelect: [],
            value: ""
        }
    }
    handleOnchange = (event) => {
        let value = event.target.value
        this.setState({
            value
        })
    }

    handleOnsubmit = event => {
        event.preventDefault()
        if (localStorage.getItem("login")) {
            if (this.state.value !== "") {
                let nameUser = (JSON.parse(localStorage.getItem("login")))
                let commentUser = {
                    nameUser,
                    listSelect: this.state.listSelect,
                    value: this.state.value
                }
                this.props.postComment(commentUser)
                this.setState({
                    listSelect: [],
                    value: "",
                })
            }
            else {
                NotificationManager.error("Thể hiện những cảm xúc của mình đi nào :))")
            }
        }
        else {
            NotificationManager.warning("Vui lòng đăng nhập")
        }
    }

    renderStar = () => {
        return this.props.listStar.map((item, index) => {
            return (
                <Star icon="star" key={item.id} style={{ opacity: this.renderOpacity(item.id, index) }} onClick={() => this.handOnclick(item.id)}></Star>
            )
        })
    }
    renderOpacity = (index, status) => {
        if (status === 0) {
            return "1"
        }
        if (this.state.listSelect.length !== 0) {
            let opacity = ""
            this.state.listSelect.map(item => {
                if (item === index) {
                    opacity = "1"
                }
            })
            if (opacity !== "") return opacity
        }
        return "0.3"
    }
    timKiemId = (listSelect, id) => {
        let b = ""
        listSelect.map((item, index) => {
            if (item === id) {
                b = index
            }
        })
        if (b !== "") return b
        return -1;
    }
    handOnclick = id => {
        if (this.state.listSelect.length === 0) {
            this.setState({
                listSelect: [...this.state.listSelect, id]
            })
        }
        if (this.state.listSelect.length !== 0) {
            let listSelect = [...this.state.listSelect]
            let a = this.timKiemId(listSelect, id)
            if (a === -1) {
                listSelect.push(id)
            }
            if (a !== -1) {
                listSelect.splice(a, 1)
            }
            this.setState({
                listSelect
            })
        }

    }
    render() {
        return (
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <ModalHeader className="modal-header">
                            <ContentFirstStar>
                                {this.renderStar()}
                            </ContentFirstStar>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </ModalHeader>
                        <div className="modal-body">
                            <Textarea value={this.state.value} onChange={this.handleOnchange} placeholder="Comment cảm xúc về phim đi nào :)"></Textarea>
                        </div>
                        <ModalFooter className="modal-footer">
                            <Button onClick={this.handleOnsubmit} variant="contained" color="primary" style={{ outline: "none" }} type="submit">Đăng</Button>
                        </ModalFooter>
                    </div>
                </div>
                <NotificationContainer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listStar: state.detailReducers.listStar,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postComment: (commentUser) => {
            dispatch(action.actGetUser("EDIT-COMMENT", commentUser))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalDanhGia)
