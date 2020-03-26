import React, { Component } from 'react'

export default class ContentLeft extends Component {
    render() {
        return (
            <div className="col-sm-4 content-left">
                <div className="item-footer">
                    <h5 className="tiltle-footer">Về chúng tôi</h5>
                    <ul>
                        <li>
                            <a href>
                                Giới thiệu
                </a>
                        </li>
                        <li>
                            <a href>
                                Lịch chiếu
                </a>
                        </li>
                        <li>
                            <a href>
                                Cụm rạp
                </a>
                        </li>
                        <li>
                            <a href>
                                Tin tức - Đánh giá phim
                </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
