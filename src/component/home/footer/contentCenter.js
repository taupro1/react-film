import React, { Component } from 'react'

export default class ContentCenter extends Component {
    render() {
        return (
            <div className="col-sm-4 content-center">
                <div className="item-footer">
                    <h5 className="tiltle-footer">Hỗ trợ khách hàng</h5>
                    <ul>
                        <li>
                            <a href>
                                Trung tâm hỗ trợ
</a>
                        </li>
                        <li>
                            <a href>
                                Chính sách bảo mật
</a>
                        </li>
                        <li>
                            <a href>
                                Chính sách thanh toán
</a>
                        </li>
                        <li>
                            <a href>
                                Câu hỏi thường gặp
</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
