import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TicketBooking extends Component {
    render() {
        return (
            <section id="dat-ve">
                <div className="content-left">
                    <h2>
                        <img src="./img/dat-ve/icon-ticket.png" alt />
                        <span>Đặt vé</span>
                    </h2>
                </div>
                <div className="content-right">
                    <form action>
                        <div className="select-item">
                            <div className="select-tiltle">
                                <FontAwesomeIcon icon="film" />
                            </div>
                            <div className="select-group">
                                <select className="form-control select-dat-ve">
                                    <option value>Chọn phim</option>
                                    <option value>Chọn phim</option>
                                    <option value>Chọn phim</option>
                                    <option value>Chọn phim</option>
                                    <option value>Chọn phim</option>
                                    <option value>Chọn phim</option>
                                </select>
                            </div>
                        </div>
                        <div className="select-item">
                            <div className="select-tiltle">
                                <FontAwesomeIcon icon="home" />
                            </div>
                            <div className="select-group">
                                <select className="form-control select-dat-ve">
                                    <option value>Chọn rạp</option>
                                </select>
                            </div>
                        </div>
                        <div className="select-item">
                            <div className="select-tiltle">
                                <FontAwesomeIcon icon="calendar-plus" />
                            </div>
                            <div className="select-group">
                                <select className="form-control select-dat-ve" name id>
                                    <option value>Chọn ngày</option>
                                </select>
                            </div>
                        </div>
                        <div className="select-item">
                            <div className="select-tiltle">
                                <FontAwesomeIcon icon="calendar-alt" />
                            </div>
                            <div className="select-group">
                                <select name id className="form-control select-dat-ve">
                                    <option value>Chọn suất</option>
                                </select>
                            </div>
                        </div>
                        <div className="center">
                            <button type="button" className="btn-dat-ve">Mua vé</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
